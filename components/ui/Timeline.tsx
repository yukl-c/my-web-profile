import type { DateRange, TimelineEntry } from "@/lib/data/profile";
import { HeaderBox } from "@/components/ui/HeaderBox";

interface TimelineProps {
  entries: TimelineEntry[];
}

const formatMonth = (month: number) => String(month).padStart(2, "0");

const renderDateLabel = (range: DateRange) => {
  const start = `${formatMonth(range.startMonth)}/${range.startYear}`;
  const end = `${formatMonth(range.endMonth)}/${range.endYear}`;

  if (range.startMonth === range.endMonth && range.startYear === range.endYear) {
    return <span>{start}</span>;
  }

  if (range.startYear === range.endYear) {
    return (
      <span>
        {formatMonth(range.startMonth)}-{formatMonth(range.endMonth)}/{range.startYear}
      </span>
    );
  }

  return (
    <span className="inline-flex flex-col items-start leading-tight md:items-center">
      <span>{start}</span>
      <span>-</span>
      <span>{end}</span>
    </span>
  );
};

export const Timeline = ({ entries }: TimelineProps) => {
  return (
    <div className="relative">
      <ul className="space-y-5">
        {entries.map((entry, index) => (
          <li key={entry.id} className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
            <div className="w-full text-left text-xs font-medium text-amber-900 md:w-24 md:pt-1 md:text-center">
              {renderDateLabel(entry.range)}
            </div>

            <div className="relative flex min-w-0 flex-1 items-start gap-2">
              <div className="relative flex w-4 shrink-0 justify-center self-stretch">
                <div className="mt-1 h-4 w-4 rounded-full border-[3px] border-amber-500 bg-amber-50" />
                {index < entries.length - 1 ? (
                  <div
                    className="pointer-events-none absolute bottom-[-1.25rem] left-1/2 top-5 -translate-x-1/2 border-l-[3px] border-amber-500 md:border-l-[4px]"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <div className="mt-3 hidden h-px w-6 border-t border-amber-50 md:block" />
              <div className="min-w-0 flex-1">
                <HeaderBox
                  title={entry.title}
                  subtitle={entry.subtitle}
                  url={entry.url}
                  tags={entry.tags}
                  bullets={entry.bullets}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
