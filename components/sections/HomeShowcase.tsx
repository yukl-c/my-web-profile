"use client";

import { useMemo, useState } from "react";
import { AboutPanel } from "@/components/sections/AboutPanel";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { ProjectPanel } from "@/components/sections/ProjectPanel";
import { WorkPanel } from "@/components/sections/WorkPanel";
import { CloseButton } from "@/components/ui/CloseButton";
import { MainButton } from "@/components/ui/MainButton";
import { Title } from "@/components/ui/Title";
import {
  type ShowcaseView,
  mainNavItems,
  profileData,
} from "@/lib/data/profile";

const panelTitleMap: Record<ShowcaseView, string> = {
  about: "About",
  work: "Work",
  project: "Project",
  contact: "Contact",
};

export const HomeShowcase = () => {
  const [activeView, setActiveView] = useState<ShowcaseView | null>("about");

  const activePanel = useMemo(() => {
    if (!activeView) return null;

    switch (activeView) {
      case "about":
        return <AboutPanel />;
      case "work":
        return <WorkPanel />;
      case "project":
        return <ProjectPanel />;
      case "contact":
        return <ContactPanel />;
      default:
        return null;
    }
  }, [activeView]);

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
          <Title text={profileData.tagline} />
        </div>

        <div className="hidden flex-1 lg:block" />

        <section className="flex flex-1 items-center justify-center bg-amber-800 lg:h-[30vh] lg:flex-none">
          <div className="mx-auto flex w-[70%] flex-col items-center justify-center gap-4 lg:flex-row lg:justify-center lg:gap-6">
            {buttonRow}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-amber-200">
      <div className="w-full">
        <Title text={profileData.tagline} />
      </div>

      <section className="mt-4 w-full bg-amber-800 py-5 md:py-6 flex-1 flex flex-col">
 
        <div className="mx-auto w-[70%]">
          <div className="flex items-center justify-between">
            {buttonRow}
          </div>

          <section className="mt-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {panelTitleMap[activeView]}
              </h2>
              <CloseButton onClick={() => setActiveView(null)} />
            </div>
            {activePanel}
          </section>
        </div>
      </section>
    </div>
  );
};
