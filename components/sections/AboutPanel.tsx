import { ProfilePicture } from "@/components/ui/ProfilePicture";
import { Tag } from "@/components/ui/Tag";
import { Timeline } from "@/components/ui/Timeline";
import { profileData } from "@/lib/data/profile";

export const AboutPanel = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[70%_30%]">
        <div className="panel-shell">
          {/* Show profile image above Name & Summary on mobile/tablet (below lg) */}
          <div className="block lg:hidden mb-4 flex justify-center">
            <ProfilePicture alt={`${profileData.name} profile picture`} />
          </div>
          <h3 className="section-title">Name & Summary</h3>
          <p className="mt-2 text-xl font-semibold text-amber-900">{profileData.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-800">
            {profileData.summary}
          </p>
     
        </div>
        <div className="panel-shell flex items-center justify-center">
          <ProfilePicture alt={`${profileData.name} profile picture`} />
        </div>
      </div>

      <div className="panel-shell">
        <h3 className="section-title">Tech Stack</h3>
        <div className="mt-3 space-y-3">
          {profileData.techStackGroups.map((group) => (
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
          <Timeline entries={profileData.education} />
        </div>
      </div>

      <div className="panel-shell">
        <h3 className="section-title">Certification</h3>
        <div className="mt-3">
          <Timeline entries={profileData.certifications} />
        </div>
      </div>
    </section>
  );
};
