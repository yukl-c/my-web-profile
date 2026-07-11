import { IconButton } from "@/components/ui/IconButton";
import { CommentSection } from "@/components/ui/CommentSection";
import { Icon } from "@/components/ui/Icon";
import { profileData } from "@/lib/data/profile";

const socialIconMap = {
  github: "github",
  linkedin: "linkedin",
} as const;

export const ContactPanel = () => {
  return (
    <section className="grid gap-4 md:grid-rows-2">
      <div className="panel-shell">
        <h3 className="section-title">Contact Info</h3>

        <div className="mt-4 space-y-3">
          <p className="flex items-center gap-2 text-sm text-stone-800">
            <Icon iconName="telephone" alt="Telephone icon" />
            <span>{profileData.contact.phone}</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-stone-800">
            <Icon iconName="email" alt="Email icon" />
            <span>{profileData.contact.email}</span>
          </p>
        </div>

        <div className="mt-5 flex items-center gap-5">
          {profileData.contact.socialLinks.map((link) => (
            <IconButton
              key={link.id}
              label={link.label}
              href={link.href}
              iconName={socialIconMap[link.id]}
            />
          ))}
        </div>
      </div>

      <div className="panel-shell">
        <h3 className="section-title">Comment</h3>
        <p className="mt-2 text-sm text-stone-700">
          UI preview only. Backend submit is scheduled for Phase 3.
        </p>
        <div className="mt-4">
          <CommentSection />
        </div>
      </div>
    </section>
  );
};
