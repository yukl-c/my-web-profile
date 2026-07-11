import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects route placeholder for the profile website.",
};

export default function ProjectsPage() {
  return (
    <section className="panel-shell">
      <h1 className="text-2xl font-semibold text-amber-900">Projects Page (Phase 1 Stub)</h1>
      <p className="mt-2 text-sm text-stone-700">
        Project timeline and expandable cards are available in the home showcase until full route
        rollout.
      </p>
      <Link href="/" className="mt-4 inline-block text-sm font-medium text-amber-800 underline">
        Return to core showcase
      </Link>
    </section>
  );
}
