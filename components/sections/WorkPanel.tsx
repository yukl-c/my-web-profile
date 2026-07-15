import { Timeline } from "@/components/ui/Timeline";
import type { ProfileData } from "@/lib/data/profile";

interface WorkPanelProps {
  profile: ProfileData;
}

export const WorkPanel = ({ profile }: WorkPanelProps) => {
  return (
    <section className="panel-shell">
      <h3 className="section-title">Work Experience Timeline</h3>
      <p className="mt-2 text-sm text-stone-700">
        Chronological milestones connected by the central timeline track.
      </p>
      <div className="mt-4">
        <Timeline entries={profile.work} />
      </div>
    </section>
  );
};
