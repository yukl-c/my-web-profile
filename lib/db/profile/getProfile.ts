import "server-only";

import type { ProfileData, SocialLink, TimelineEntry } from "@/lib/data/profile.types";
import { getSupabase } from "@/lib/db/supabase";

export const PROFILE_ID =
  process.env.PROFILE_ID ?? "11111111-1111-1111-1111-111111111111";

const SAFE_PROFILE_ERROR_MESSAGE = "Unable to load profile.";

interface ProfileRow {
  id: string;
  name: string;
  tagline: string | null;
  summary: string | null;
  phone: string | null;
  email: string | null;
  avatar: string | null;
}

interface SocialLinkRow {
  id: string;
  label: string;
  href: string;
}

interface TechStackRow {
  label: string;
  tags: string[] | null;
}

interface TimelineBaseRow {
  id: string;
  title: string;
  subtitle: string | null;
  start_month: number;
  start_year: number;
  end_month: number | null;
  end_year: number | null;
  tags: string[] | null;
}

interface CertificationRow extends Omit<TimelineBaseRow, "subtitle"> {
  subtitle?: string | null;
  url: string | null;
}

interface TimelineWithBulletsRow extends TimelineBaseRow {
  bullets: string[] | null;
  url?: string | null;
}

interface ProfileQueryRows {
  profile: ProfileRow;
  socialLinks: SocialLinkRow[];
  techStacks: TechStackRow[];
  education: TimelineBaseRow[];
  certifications: CertificationRow[];
  work: TimelineWithBulletsRow[];
  projects: TimelineWithBulletsRow[];
}

const isSupportedSocialLinkId = (id: string): id is SocialLink["id"] =>
  id === "github" || id === "linkedin";

const toTimelineSortKey = (year: number, month: number) => year * 12 + month;

interface TimelineSortableRow {
  start_month: number;
  start_year: number;
  end_month: number | null;
  end_year: number | null;
}

const compareTimelineRowsDesc = (
  left: TimelineSortableRow,
  right: TimelineSortableRow,
) => {
  const leftStart = toTimelineSortKey(left.start_year, left.start_month);
  const rightStart = toTimelineSortKey(right.start_year, right.start_month);

  if (leftStart !== rightStart) {
    return rightStart - leftStart;
  }

  const leftEnd =
    left.end_year !== null && left.end_month !== null
      ? toTimelineSortKey(left.end_year, left.end_month)
      : Number.POSITIVE_INFINITY;
  const rightEnd =
    right.end_year !== null && right.end_month !== null
      ? toTimelineSortKey(right.end_year, right.end_month)
      : Number.POSITIVE_INFINITY;

  return rightEnd - leftEnd;
};

const sortTimelineRowsDesc = <TRow extends TimelineSortableRow>(rows: TRow[]) =>
  [...rows].sort(compareTimelineRowsDesc);

const mapTimelineEntry = (
  row: TimelineBaseRow | CertificationRow | TimelineWithBulletsRow,
): TimelineEntry => {
  const range: TimelineEntry["range"] = {
    startMonth: row.start_month,
    startYear: row.start_year,
  };

  if (row.end_month !== null && row.end_year !== null) {
    range.endMonth = row.end_month;
    range.endYear = row.end_year;
  }

  const timelineEntry: TimelineEntry = {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    tags: row.tags ?? [],
    range,
  };

  if ("bullets" in row) {
    timelineEntry.bullets = row.bullets ?? [];
  }

  if ("url" in row) {
    timelineEntry.url = row.url ?? undefined;
  }

  return timelineEntry;
};

export const mapRowsToProfileData = (rows: ProfileQueryRows): ProfileData => {
  const socialLinks: SocialLink[] = rows.socialLinks.flatMap((socialLink) => {
    if (!isSupportedSocialLinkId(socialLink.id)) {
      return [];
    }

    return [
      {
        id: socialLink.id,
        label: socialLink.label,
        href: socialLink.href,
      },
    ];
  });

  return {
    name: rows.profile.name,
    tagline: rows.profile.tagline ?? "",
    summary: rows.profile.summary ?? "",
    avatar: rows.profile.avatar ?? undefined,
    techStackGroups: rows.techStacks.map((stack) => ({
      label: stack.label,
      tags: stack.tags ?? [],
    })),
    education: sortTimelineRowsDesc(rows.education).map(mapTimelineEntry),
    certifications: sortTimelineRowsDesc(rows.certifications).map(mapTimelineEntry),
    work: sortTimelineRowsDesc(rows.work).map(mapTimelineEntry),
    projects: sortTimelineRowsDesc(rows.projects).map(mapTimelineEntry),
    contact: {
      phone: rows.profile.phone ?? "",
      email: rows.profile.email ?? "",
      socialLinks,
    },
  };
};

export const getProfile = async (profileId: string = PROFILE_ID): Promise<ProfileData> => {
  const supabase = getSupabase();

  const profileResponse = await supabase
    .from("profiles")
    .select("id, name, tagline, summary, phone, email, avatar")
    .eq("id", profileId)
    .maybeSingle();

  if (profileResponse.error || !profileResponse.data) {
    throw new Error(SAFE_PROFILE_ERROR_MESSAGE);
  }

  const [
    socialLinksResponse,
    techStacksResponse,
    educationResponse,
    certificationsResponse,
    workResponse,
    projectsResponse,
  ] = await Promise.all([
    supabase
      .from("social_links")
      .select("id, label, href")
      .eq("profile_id", profileId)
      .order("id", { ascending: true }),
    supabase
      .from("tech_stacks")
      .select("label, tags")
      .eq("profile_id", profileId)
      .order("id", { ascending: true }),
    supabase
      .from("educations")
      .select("id, title, subtitle, start_month, start_year, end_month, end_year, tags")
      .eq("profile_id", profileId)
      .order("id", { ascending: true }),
    supabase
      .from("certifications")
      .select("id, title, url, start_month, start_year, end_month, end_year, tags")
      .eq("profile_id", profileId)
      .order("id", { ascending: true }),
    supabase
      .from("work_experiences")
      .select(
        "id, title, subtitle, start_month, start_year, end_month, end_year, tags, bullets",
      )
      .eq("profile_id", profileId)
      .order("id", { ascending: true }),
    supabase
      .from("projects")
      .select(
        "id, title, subtitle, url, start_month, start_year, end_month, end_year, tags, bullets",
      )
      .eq("profile_id", profileId)
      .order("id", { ascending: true }),
  ]);

  if (
    socialLinksResponse.error ||
    techStacksResponse.error ||
    educationResponse.error ||
    certificationsResponse.error ||
    workResponse.error ||
    projectsResponse.error
  ) {
    throw new Error(SAFE_PROFILE_ERROR_MESSAGE);
  }

  return mapRowsToProfileData({
    profile: profileResponse.data as ProfileRow,
    socialLinks: (socialLinksResponse.data ?? []) as SocialLinkRow[],
    techStacks: (techStacksResponse.data ?? []) as TechStackRow[],
    education: (educationResponse.data ?? []) as TimelineBaseRow[],
    certifications: (certificationsResponse.data ?? []) as CertificationRow[],
    work: (workResponse.data ?? []) as TimelineWithBulletsRow[],
    projects: (projectsResponse.data ?? []) as TimelineWithBulletsRow[],
  });
};
