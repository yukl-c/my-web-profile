"use client";

import { useMemo, useState } from "react";
import { AboutPanel } from "@/components/sections/AboutPanel";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { ProjectPanel } from "@/components/sections/ProjectPanel";
import { WorkPanel } from "@/components/sections/WorkPanel";
import { Icon } from "@/components/ui/Icon";
import { MainButton } from "@/components/ui/MainButton";
import { Title } from "@/components/ui/Title";
import {
  type ProfileData,
  type ShowcaseView,
  mainNavItems,
} from "@/lib/data/profile";

const panelTitleMap: Record<ShowcaseView, string> = {
  about: "About",
  work: "Work",
  project: "Project",
  contact: "Contact",
};

const FALLBACK_TAGLINE = "Welcome to My Digital Portfolio!";

interface HomeShowcaseProps {
  profile: ProfileData | null;
}

export const HomeShowcase = ({ profile }: HomeShowcaseProps) => {
  const [activeView, setActiveView] = useState<ShowcaseView | null>("about");
  const hasProfileError = profile === null;
  const tagline = profile?.tagline ?? FALLBACK_TAGLINE;

  const profileErrorContent = (
    <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
      <Icon iconName="error" alt="Failed to fetch profile data" className="h-16 w-16" />
      <p className="text-base font-semibold text-white">Failed to fetch my data</p>
    </div>
  );

  const activePanel = useMemo(() => {
    if (hasProfileError) {
      return null;
    }

    switch (activeView) {
      case "about":
        return <AboutPanel profile={profile} />;
      case "work":
        return <WorkPanel profile={profile} />;
      case "project":
        return <ProjectPanel profile={profile} />;
      case "contact":
        return <ContactPanel profile={profile} />;
      default:
        return null;
    }
  }, [activeView, hasProfileError, profile]);

  const buttonRow = (
    <>
      {mainNavItems.map((item) => (
        <MainButton
          key={item.id}
          label={item.label}
          iconName={activeView === item.id ? item.activeIcon : item.inactiveIcon}
          isActive={activeView === item.id}
          onClick={() => setActiveView(item.id)}
        />
      ))}
    </>
  );
  

  if (!activeView) {
    return (
      <div className="flex h-dvh max-h-dvh w-full flex-col overflow-hidden bg-amber-200">
        <div className="w-full">
          <Title text={tagline} />
        </div>

        <div className="hidden flex-1 lg:block" />

        <section className="flex flex-1 items-center justify-center bg-amber-800 lg:h-[30vh] lg:flex-none">
          <div className="mx-auto flex w-[70%] flex-col items-center justify-center gap-6">
            <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-center lg:gap-6">
              {buttonRow}
            </div>
            {hasProfileError ? profileErrorContent : null}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-amber-200">
      <div className="w-full">
        <Title text={tagline} />
      </div>

      <section className="mt-4 w-full bg-amber-800 py-5 md:py-6 flex-1 flex flex-col">
 
        <div className="mx-auto w-[70%]">
          <div className="flex items-center justify-between">
            {buttonRow}
          </div>

          <section className="mt-4">
            {hasProfileError ? (
              profileErrorContent
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">
                    {panelTitleMap[activeView]}
                  </h2>
                </div>
                {activePanel}
              </>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};
