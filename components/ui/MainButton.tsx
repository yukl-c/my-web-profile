import Image from "next/image";
import type { IconName } from "@/components/icons/iconMap";
import { getIconByName } from "@/components/icons/iconMap";

interface MainButtonProps {
  label: string;
  iconName: IconName;
  isActive?: boolean;
  onClick?: () => void;
}

export const MainButton = ({
  label,
  iconName,
  isActive = false,
  onClick,
}: MainButtonProps) => {
  const icon = getIconByName(iconName);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-16 w-16 flex-col items-center justify-center rounded-md border-2 p-[2px] font-normal transition-colors md:h-20 md:w-20 lg:h-24 lg:w-24 ${
        isActive
          ? "border-amber-200 text-amber-200"
          : "border-white text-white"
      }`}
      aria-pressed={isActive}
    >
      <span className="flex flex-col items-center">
        <Image src={icon} alt="" width={32} height={32} className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        <span className="mt-1 text-center text-[10px] leading-tight md:text-xs lg:text-sm">
          {label}
        </span>
      </span>
    </button>
  );
};
