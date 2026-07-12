import type { DateRange, TimelineEntry } from "@/lib/data/profile";
import { DetailBox } from "@/components/ui/DetailBox";
import { HeaderBox } from "@/components/ui/HeaderBox";

interface TimelineProps {
  entries: TimelineEntry[];
}

const formatMonth = (month: number) => String(month).padStart(2, "0");

const formatDuration = (range: DateRange) => {
  const start = `${formatMonth(range.startMonth)}/${range.startYear}`;
  const end = range.endMonth && range.endYear ? `${formatMonth(range.endMonth)}/${range.endYear}` : 'Present';

  if (range.startMonth === range.endMonth && range.startYear === range.endYear) {
    return start;
  }

  return `${start} - ${end}`;
};

export const Timeline = ({ entries }: TimelineProps) => {
  const isSingleEntry = entries.length === 1;

  return (
    <div className="relative">
      <ul className="space-y-5 lg:space-y-8">
        {entries.map((entry, index) => {
          const isLeftSide = index % 2 === 0;
          const boxProps = {
            title: entry.title,
            duration: formatDuration(entry.range),
            subtitle: entry.subtitle,
            url: entry.url,
            tags: entry.tags,
            bullets: entry.bullets,
          };

          return (
            <li key={entry.id} className="relative">
              {/* Mobile + tablet: left rail + HeaderBox with connector */}
              <div className="relative flex min-w-0 items-start gap-0 xl:hidden">
                <div className="relative flex w-4 shrink-0 justify-center self-stretch">
                  {index === 0 ? (
                    <div
                      className="pointer-events-none absolute left-1/2 top-1 h-3 -translate-x-1/2 -translate-y-full border-l-[3px] border-amber-500"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="mt-1 h-4 w-4 rounded-full border-[3px] border-amber-500 bg-amber-50" />
                  {index < entries.length - 1 ? (
                    <div
                      className="pointer-events-none absolute bottom-[-2rem] left-1/2 top-5 -translate-x-1/2 border-l-[3px] border-amber-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <div
                      className="pointer-events-none absolute left-1/2 top-5 h-3 -translate-x-1/2 border-l-[3px] border-amber-500"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div
                  className="pointer-events-none mt-3 h-px w-6 shrink-0 border-t border-amber-500"
                  aria-hidden="true"
                />

                <div className="min-w-0 flex-1">
                  <HeaderBox {...boxProps} />
                </div>
              </div>

              {/* Desktop+: single entry keeps rail on the left; multiple keep zigzag */}
              {isSingleEntry ? (
                <div className="relative hidden min-w-0 items-start gap-0 xl:flex">
                  <div className="relative flex w-4 shrink-0 justify-center self-stretch">
                    <div
                      className="pointer-events-none absolute left-1/2 top-1 h-3 -translate-x-1/2 -translate-y-full border-l-[3px] border-amber-500"
                      aria-hidden="true"
                    />
                    <div className="mt-1 h-4 w-4 rounded-full border-[3px] border-amber-500 bg-amber-50" />
                    <div
                      className="pointer-events-none absolute left-1/2 top-5 h-3 -translate-x-1/2 border-l-[3px] border-amber-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className="pointer-events-none mt-3 h-px w-6 shrink-0 border-t border-amber-500"
                    aria-hidden="true"
                  />

                  <div className="min-w-0 flex-1">
                    <DetailBox {...boxProps} />
                  </div>
                </div>
              ) : (
                <div className="hidden min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-0 xl:grid">
                  <div className="min-w-0">
                    {isLeftSide ? (
                      <div className="flex min-w-0 items-start justify-end">
                        <div className="min-w-0 flex-1">
                          <DetailBox {...boxProps} />
                        </div>
                        <div
                          className="pointer-events-none mt-3 h-px w-6 shrink-0 border-t border-amber-500"
                          aria-hidden="true"
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex w-4 shrink-0 justify-center self-stretch">
                    {index === 0 ? (
                      <div
                        className="pointer-events-none absolute left-1/2 top-1 h-3 -translate-x-1/2 -translate-y-full border-l-[3px] border-amber-500"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="mt-1 h-4 w-4 rounded-full border-[3px] border-amber-500 bg-amber-50" />
                    {index < entries.length - 1 ? (
                      <div
                        className="pointer-events-none absolute bottom-[-2.25rem] left-1/2 top-5 -translate-x-1/2 border-l-[3px] border-amber-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <div
                        className="pointer-events-none absolute left-1/2 top-5 h-3 -translate-x-1/2 border-l-[3px] border-amber-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    {isLeftSide ? null : (
                      <div className="flex min-w-0 items-start">
                        <div
                          className="pointer-events-none mt-3 h-px w-6 shrink-0 border-t border-amber-500"
                          aria-hidden="true"
                        />
                        <div className="min-w-0 flex-1">
                          <DetailBox {...boxProps} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
