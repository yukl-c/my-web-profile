import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Work route placeholder for the profile website.",
};

export default function WorkPage() {
  return (
    <section className="panel-shell">
      <h1 className="text-2xl font-semibold text-amber-900">Work Page (Phase 1 Stub)</h1>
      <p className="mt-2 text-sm text-stone-700">
        Work timeline core components are currently rendered in the home showcase while route
        structure is finalized.
      </p>
      <Link href="/" className="mt-4 inline-block text-sm font-medium text-amber-800 underline">
        Return to core showcase
      </Link>
    </section>
  );
}
