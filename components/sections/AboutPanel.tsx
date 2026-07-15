import { ProfilePicture } from "@/components/ui/ProfilePicture";
import { Tag } from "@/components/ui/Tag";
import { Timeline } from "@/components/ui/Timeline";
import type { ProfileData } from "@/lib/data/profile";

interface AboutPanelProps {
  profile: ProfileData;
}

export const AboutPanel = ({ profile }: AboutPanelProps) => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[70%_30%]">
        <div className="panel-shell">
          {/* Show profile image above Name & Summary on mobile/tablet (below lg) */}
          <div className="block lg:hidden mb-4 flex justify-center">
            <ProfilePicture src={profile.avatar} alt={`${profile.name} profile picture`} />
          </div>
          <h3 className="section-title">Name & Summary</h3>
          <p className="mt-2 text-xl font-semibold text-amber-900">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-800">
            {profile.summary}
          </p>
     
        </div>
        <div className="panel-shell hidden lg:flex items-center justify-center">
          <ProfilePicture src={profile.avatar} alt={`${profile.name} profile picture`} />
        </div>
      </div>

      <div className="panel-shell">
        <h3 className="section-title">Tech Stack</h3>
        <div className="mt-3 space-y-3">
          {profile.techStackGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold text-amber-900">{group.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-shell">
        <h3 className="section-title">Education</h3>
        <div className="mt-3">
          <Timeline entries={profile.education} />
        </div>
      </div>

      <div className="panel-shell">
        <h3 className="section-title">Certification</h3>
        <div className="mt-3">
          <Timeline entries={profile.certifications} />
        </div>
      </div>
    </section>
  );
};
