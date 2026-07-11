import Image from "next/image";
import Link from "next/link";
import type { IconName } from "@/components/icons/iconMap";
import { getIconByName } from "@/components/icons/iconMap";

interface IconButtonProps {
  label: string;
  href: string;
  iconName: IconName;
}

export const IconButton = ({ label, href, iconName }: IconButtonProps) => {
  const icon = getIconByName(iconName);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col items-center gap-2 text-white"
      aria-label={label}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full p-1 transition-shadow group-hover:drop-shadow-md">
        <Image src={icon} alt="" width={24} height={24} className="h-6 w-6" />
      </span>
      <span className="text-xs transition-shadow group-hover:drop-shadow-md">
        {label}
      </span>
    </Link>
  );
};
