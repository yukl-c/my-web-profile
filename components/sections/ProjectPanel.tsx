import { Timeline } from "@/components/ui/Timeline";
import type { ProfileData } from "@/lib/data/profile";

interface ProjectPanelProps {
  profile: ProfileData;
}

export const ProjectPanel = ({ profile }: ProjectPanelProps) => {
  return (
    <section className="panel-shell">
      <h3 className="section-title">Project Timeline</h3>
      <p className="mt-2 text-sm text-stone-700">
        Project milestones presented with the same timeline architecture as Work.
      </p>
      <div className="mt-4">
        <Timeline entries={profile.projects} />
      </div>
    </section>
  );
};
