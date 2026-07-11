import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact route placeholder for the profile website.",
};

export default function ContactPage() {
  return (
    <section className="panel-shell">
      <h1 className="text-2xl font-semibold text-amber-900">Contact Page (Phase 1 Stub)</h1>
      <p className="mt-2 text-sm text-stone-700">
        Contact information and comment form UI are active in the home showcase. API submission is
        planned for Phase 3.
      </p>
      <Link href="/" className="mt-4 inline-block text-sm font-medium text-amber-800 underline">
        Return to core showcase
      </Link>
    </section>
  );
}
