"use client";

import Image from "next/image";
import { useState } from "react";
import { Tag } from "@/components/ui/Tag";

interface HeaderBoxProps {
  title: string;
  subtitle: string;
  url?: string;
  tags: string[];
  bullets: string[];
  imageSrc?: string;
}

export const HeaderBox = ({
  title,
  subtitle,
  url,
  tags,
  bullets,
  imageSrc,
}: HeaderBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-md shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 bg-amber-600 px-3 py-3 text-left text-amber-950"
        aria-expanded={isOpen}
      >
        <span className="min-w-0 flex-1 truncate pr-1 font-semibold">{title}</span>
        <span
          className={`inline-flex shrink-0 transition-transform ${isOpen ? "rotate-0" : "rotate-180"}`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L10 7L15 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen ? (
        <div className="flex flex-col bg-amber-400 text-amber-950 md:flex-row">
          <div className={`w-full px-3 py-3 ${imageSrc ? "md:w-[70%]" : "md:w-full"}`}>
            <p className="text-sm font-medium">{subtitle}</p>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm underline"
              >
                {url}
              </a>
            ) : null}

            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          {imageSrc ? (
            <div className="w-full border-l border-amber-50 px-3 py-3 md:w-[30%]">
              <div className="relative h-28 w-full overflow-hidden rounded-md bg-amber-100">
                <Image
                  src={imageSrc}
                  alt={`${title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
};
