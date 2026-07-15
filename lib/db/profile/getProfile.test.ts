import { beforeEach, describe, expect, it, vi } from "vitest";
import { getProfile, mapRowsToProfileData } from "@/lib/db/profile/getProfile";
import { getSupabase } from "@/lib/db/supabase";

vi.mock("@/lib/db/supabase", () => ({
  getSupabase: vi.fn(),
}));

describe("mapRowsToProfileData", () => {
  it("maps db rows and omits unsupported social links", () => {
    const profile = mapRowsToProfileData({
      profile: {
        id: "profile-1",
        name: "Maisy",
        tagline: "Full-stack engineer",
        summary: "Building practical products.",
        phone: "123",
        email: "maisy@example.com",
        avatar: null,
      },
      socialLinks: [
        { id: "github", label: "GitHub", href: "https://github.com/maisy" },
        { id: "website", label: "Website", href: "https://example.com" },
      ],
      techStacks: [{ label: "Frontend", tags: null }],
      education: [
        {
          id: "edu-1",
          title: "BSc Data Science",
          subtitle: "Lingnan University",
          start_month: 9,
          start_year: 2019,
          end_month: null,
          end_year: null,
          tags: null,
        },
      ],
      certifications: [
        {
          id: "cert-1",
          title: "Cursor Mastering",
          url: null,
          start_month: 5,
          start_year: 2026,
          end_month: 5,
          end_year: 2026,
          tags: ["Cursor"],
        },
      ],
      work: [
        {
          id: "work-1",
          title: "Engineer",
          subtitle: "Company",
          start_month: 12,
          start_year: 2023,
          end_month: null,
          end_year: null,
          tags: null,
          bullets: null,
        },
      ],
      projects: [
        {
          id: "project-1",
          title: "Portfolio",
          subtitle: "Personal site",
          url: "https://example.com/project",
          start_month: 1,
          start_year: 2024,
          end_month: 2,
          end_year: 2024,
          tags: ["Next.js"],
          bullets: ["Built with Supabase"],
        },
      ],
    });

    expect(profile.contact.socialLinks).toEqual([
      { id: "github", label: "GitHub", href: "https://github.com/maisy" },
    ]);
    expect(profile.techStackGroups).toEqual([{ label: "Frontend", tags: [] }]);
    expect(profile.education[0]?.range).toEqual({ startMonth: 9, startYear: 2019 });
    expect(profile.work[0]?.bullets).toEqual([]);
    expect(profile.avatar).toBeUndefined();
  });

  it("sorts timeline rows by start date desc, then end date desc", () => {
    const profile = mapRowsToProfileData({
      profile: {
        id: "profile-1",
        name: "Maisy",
        tagline: "Engineer",
        summary: "Summary",
        phone: "123",
        email: "maisy@example.com",
        avatar: null,
      },
      socialLinks: [],
      techStacks: [],
      education: [
        {
          id: "edu-old",
          title: "Older start",
          subtitle: "School A",
          start_month: 1,
          start_year: 2018,
          end_month: 6,
          end_year: 2022,
          tags: null,
        },
        {
          id: "edu-new",
          title: "Newer start",
          subtitle: "School B",
          start_month: 9,
          start_year: 2019,
          end_month: 8,
          end_year: 2023,
          tags: null,
        },
      ],
      certifications: [
        {
          id: "cert-same-start-earlier-end",
          title: "Earlier end",
          url: null,
          start_month: 5,
          start_year: 2026,
          end_month: 5,
          end_year: 2026,
          tags: null,
        },
        {
          id: "cert-same-start-later-end",
          title: "Later end",
          url: null,
          start_month: 5,
          start_year: 2026,
          end_month: 10,
          end_year: 2026,
          tags: null,
        },
      ],
      work: [
        {
          id: "work-ongoing",
          title: "Current role",
          subtitle: "Company",
          start_month: 6,
          start_year: 2024,
          end_month: null,
          end_year: null,
          tags: null,
          bullets: null,
        },
        {
          id: "work-ended",
          title: "Past role",
          subtitle: "Company",
          start_month: 6,
          start_year: 2024,
          end_month: 12,
          end_year: 2024,
          tags: null,
          bullets: null,
        },
      ],
      projects: [
        {
          id: "project-2023",
          title: "Older project",
          subtitle: "Side project",
          url: null,
          start_month: 3,
          start_year: 2023,
          end_month: 4,
          end_year: 2023,
          tags: null,
          bullets: null,
        },
        {
          id: "project-2025",
          title: "Newer project",
          subtitle: "Side project",
          url: null,
          start_month: 1,
          start_year: 2025,
          end_month: 2,
          end_year: 2025,
          tags: null,
          bullets: null,
        },
      ],
    });

    expect(profile.education.map((entry) => entry.id)).toEqual(["edu-new", "edu-old"]);
    expect(profile.certifications.map((entry) => entry.id)).toEqual([
      "cert-same-start-later-end",
      "cert-same-start-earlier-end",
    ]);
    expect(profile.work.map((entry) => entry.id)).toEqual(["work-ongoing", "work-ended"]);
    expect(profile.projects.map((entry) => entry.id)).toEqual([
      "project-2025",
      "project-2023",
    ]);
  });
});

describe("getProfile", () => {
  const getSupabaseMock = vi.mocked(getSupabase);
  const fromMock = vi.fn();
  const selectMock = vi.fn();
  const eqMock = vi.fn();
  const maybeSingleMock = vi.fn();
  const orderMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    maybeSingleMock.mockReset();
    orderMock.mockReset();
    eqMock.mockReset();
    selectMock.mockReset();
    fromMock.mockReset();

    eqMock.mockImplementation((column: string) => {
      if (column === "id") {
        return { maybeSingle: maybeSingleMock };
      }

      return { order: orderMock };
    });

    selectMock.mockReturnValue({ eq: eqMock });
    fromMock.mockReturnValue({ select: selectMock });
    getSupabaseMock.mockReturnValue({ from: fromMock } as never);
  });

  it("fetches all profile tables and returns mapped profile data", async () => {
    const profileId = "11111111-1111-1111-1111-111111111111";

    maybeSingleMock.mockResolvedValue({
      data: {
        id: profileId,
        name: "Maisy",
        tagline: "Welcome!",
        summary: "Engineer profile",
        phone: "852-0000",
        email: "maisy@example.com",
        avatar: "https://cdn.example.com/avatar.png",
      },
      error: null,
    });

    orderMock
      .mockResolvedValueOnce({
        data: [{ id: "github", label: "GitHub", href: "https://github.com/maisy" }],
        error: null,
      })
      .mockResolvedValueOnce({
        data: [{ label: "Backend", tags: ["Node.js"] }],
        error: null,
      })
      .mockResolvedValueOnce({
        data: [
          {
            id: "edu-1",
            title: "BSc Data Science",
            subtitle: "Lingnan University",
            start_month: 9,
            start_year: 2019,
            end_month: 8,
            end_year: 2023,
            tags: ["AI"],
          },
        ],
        error: null,
      })
      .mockResolvedValueOnce({
        data: [
          {
            id: "cert-1",
            title: "Cert",
            url: "https://coursera.example/cert",
            start_month: 5,
            start_year: 2026,
            end_month: 5,
            end_year: 2026,
            tags: ["Cursor"],
          },
        ],
        error: null,
      })
      .mockResolvedValueOnce({
        data: [
          {
            id: "work-1",
            title: "Engineer",
            subtitle: "Company",
            start_month: 12,
            start_year: 2023,
            end_month: null,
            end_year: null,
            tags: ["Flutter"],
            bullets: ["Shipped app"],
          },
        ],
        error: null,
      })
      .mockResolvedValueOnce({
        data: [
          {
            id: "project-1",
            title: "Portfolio",
            subtitle: "Personal",
            url: "https://portfolio.example",
            start_month: 1,
            start_year: 2024,
            end_month: null,
            end_year: null,
            tags: ["Next.js"],
            bullets: ["Built timeline"],
          },
        ],
        error: null,
      });

    const result = await getProfile(profileId);

    expect(getSupabaseMock).toHaveBeenCalled();
    expect(fromMock).toHaveBeenNthCalledWith(1, "profiles");
    expect(fromMock).toHaveBeenNthCalledWith(2, "social_links");
    expect(fromMock).toHaveBeenNthCalledWith(3, "tech_stacks");
    expect(fromMock).toHaveBeenNthCalledWith(4, "educations");
    expect(fromMock).toHaveBeenNthCalledWith(5, "certifications");
    expect(fromMock).toHaveBeenNthCalledWith(6, "work_experiences");
    expect(fromMock).toHaveBeenNthCalledWith(7, "projects");
    expect(eqMock).toHaveBeenCalledWith("id", profileId);
    expect(orderMock).toHaveBeenCalledTimes(6);
    expect(result.name).toBe("Maisy");
    expect(result.avatar).toBe("https://cdn.example.com/avatar.png");
    expect(result.contact.socialLinks).toEqual([
      { id: "github", label: "GitHub", href: "https://github.com/maisy" },
    ]);
    expect(result.work[0]?.range).toEqual({ startMonth: 12, startYear: 2023 });
    expect(result.projects[0]?.range).toEqual({ startMonth: 1, startYear: 2024 });
  });

  it("throws a safe error when profile is missing", async () => {
    maybeSingleMock.mockResolvedValue({
      data: null,
      error: null,
    });

    await expect(getProfile("missing-profile")).rejects.toThrow("Unable to load profile.");
    expect(orderMock).not.toHaveBeenCalled();
  });

  it("throws a safe error when any child query fails", async () => {
    maybeSingleMock.mockResolvedValue({
      data: {
        id: "profile-1",
        name: "Maisy",
        tagline: "Welcome",
        summary: "Summary",
        phone: "123",
        email: "mail@example.com",
        avatar: null,
      },
      error: null,
    });

    orderMock
      .mockResolvedValueOnce({ data: null, error: { message: "social links failed" } })
      .mockResolvedValue({ data: [], error: null });

    await expect(getProfile("profile-1")).rejects.toThrow("Unable to load profile.");
  });
});
