import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About route placeholder for the profile website.",
};

export default function AboutPage() {
  return (
    <section className="panel-shell">
      <h1 className="text-2xl font-semibold text-amber-900">About Page (Phase 1 Stub)</h1>
      <p className="mt-2 text-sm text-stone-700">
        Full route-specific layout is scheduled for a later phase. The complete interactive
        component system is currently showcased on the home route.
      </p>
      <Link href="/" className="mt-4 inline-block text-sm font-medium text-amber-800 underline">
        Return to core showcase
      </Link>
    </section>
  );
}
