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
  about: "About View",
  work: "Work View",
  project: "Project View",
  contact: "Contact View",
};

export const HomeShowcase = () => {
  const [activeView, setActiveView] = useState<ShowcaseView | null>(null);

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

  return (
    <div className="flex min-h-screen justify-center px-4 py-6 md:px-6">
      <div className="w-full max-w-[1200px]">
        <div className={`mx-auto w-full lg:w-[70%] ${activeView ? "mt-2" : "mt-8"}`}>
          <Title text={profileData.tagline} />

          <section className="mt-4 bg-amber-800 px-4 py-6 md:px-6 md:py-8">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-6">
              {mainNavItems.map((item) => (
                <MainButton
                  key={item.id}
                  label={item.label}
                  iconName={activeView === item.id ? item.activeIcon : item.inactiveIcon}
                  isActive={activeView === item.id}
                  onClick={() => setActiveView(item.id)}
                />
              ))}
            </div>
          </section>
        </div>

        {activeView ? (
          <section className="mx-auto mt-4 h-[80vh] w-full overflow-y-auto rounded-lg border border-amber-300 bg-stone-100 p-4 md:p-6 lg:w-[70%]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-amber-900">
                {panelTitleMap[activeView]}
              </h2>
              <CloseButton onClick={() => setActiveView(null)} />
            </div>
            {activePanel}
          </section>
        ) : (
          <section className="mx-auto mt-4 w-full rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 lg:w-[70%]">
            Select a main button to open the active content container.
          </section>
        )}
      </div>
    </div>
  );
};
