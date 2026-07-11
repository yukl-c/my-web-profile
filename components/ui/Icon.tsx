import Image from "next/image";
import type { IconName } from "@/components/icons/iconMap";
import { getIconByName } from "@/components/icons/iconMap";

interface IconProps {
  iconName: IconName;
  alt: string;
  className?: string;
}

export const Icon = ({ iconName, alt, className = "h-6 w-6" }: IconProps) => {
  const icon = getIconByName(iconName);

  return <Image src={icon} alt={alt} width={24} height={24} className={className} />;
};
