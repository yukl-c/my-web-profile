import { HomeShowcase } from "@/components/sections/HomeShowcase";
import type { ProfileData } from "@/lib/data/profile";
import { getProfile, PROFILE_ID } from "@/lib/db/profile/getProfile";

export const dynamic = "force-dynamic";

export default async function Home() {
  let profile: ProfileData | null = null;

  try {
    profile = await getProfile(PROFILE_ID);
  } catch {
    profile = null;
  }

  return <HomeShowcase profile={profile} />;
}
