"use client";

import { useCallback, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import {
  CommentSection,
  type CommentSubmitStatus,
} from "@/components/ui/CommentSection";
import { Icon } from "@/components/ui/Icon";
import { Toast } from "@/components/ui/Toast";
import type { ProfileData } from "@/lib/data/profile";

const socialIconMap = {
  github: "github",
  linkedin: "linkedin",
} as const;

interface ContactPanelProps {
  profile: ProfileData;
}

export const ContactPanel = ({ profile }: ContactPanelProps) => {
  const [toast, setToast] = useState<CommentSubmitStatus | null>(null);

  const handleCommentStatus = useCallback((status: CommentSubmitStatus) => {
    setToast(status);
  }, []);

  const handleToastClose = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <section className="grid gap-3">
      <div className="panel-shell h-fit">
        <h3 className="section-title">Contact Info</h3>

        <div className="mt-4 space-y-3">
          <p className="flex items-center gap-2 text-sm text-stone-800">
            <Icon iconName="telephone" alt="Telephone icon" />
            <span>{profile.contact.phone}</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-stone-800">
            <Icon iconName="email" alt="Email icon" />
            <span>{profile.contact.email}</span>
          </p>
        </div>

        <div className="mt-5 flex items-center gap-5">
          {profile.contact.socialLinks.map((link) => (
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
          Please feel free to share your inquiries or feedback. I review all
          submissions and will respond promptly.
        </p>
        <div className="mt-4">
          <CommentSection onStatus={handleCommentStatus} />
        </div>
      </div>

      <Toast
        open={toast !== null}
        message={toast?.message ?? ""}
        variant={toast?.variant}
        onClose={handleToastClose}
      />
    </section>
  );
};
