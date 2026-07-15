import Image from "next/image";
import { Tag } from "@/components/ui/Tag";

interface DetailBoxProps {
  title: string;
  duration?: string;
  subtitle?: string;
  url?: string;
  tags?: string[];
  bullets?: string[];
  imageSrc?: string;
}

export const DetailBox = ({
  title,
  duration,
  subtitle,
  url,
  tags,
  bullets,
  imageSrc,
}: DetailBoxProps) => {
  return (
    <article className="overflow-hidden rounded-md shadow-sm">
      <header className="bg-amber-600 px-3 py-3 text-amber-950">
        <h3 className="line-clamp-3 font-semibold md:line-clamp-2 lg:line-clamp-1">
          {title}
        </h3>
        {duration ? <p className="mt-0.5 text-sm">{duration}</p> : null}
      </header>

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

          {tags ? <p className="mt-2 text-sm font-medium">Core Concepts</p> : null}
          <div className="mt-2 flex flex-wrap gap-2">
            {tags ? tags.map((tag) => (
              <Tag key={tag} text={tag} />
            )) : null}
          </div>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {bullets ? bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            )) : null}
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
    </article>
  );
};
