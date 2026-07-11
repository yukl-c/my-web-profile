import { Timeline } from "@/components/ui/Timeline";
import { profileData } from "@/lib/data/profile";

export const WorkPanel = () => {
  return (
    <section className="panel-shell">
      <h3 className="section-title">Work Experience Timeline</h3>
      <p className="mt-2 text-sm text-stone-700">
        Chronological milestones connected by the central timeline track.
      </p>
      <div className="mt-4">
        <Timeline entries={profileData.work} />
      </div>
    </section>
  );
};
