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
      className={`flex size-12 shrink-0 flex-col items-center justify-center rounded-md border-2 p-1 font-normal transition-[colors,box-shadow] md:size-14 lg:size-16 ${
        isActive
          ? "border-amber-200 text-amber-200 hover:shadow-[0_0_0_2px] hover:shadow-amber-200 "
          : "border-white text-white hover:shadow-[0_0_0_2px] hover:shadow-white"
      }`}
      aria-pressed={isActive}
    >
      <span className="flex flex-col items-center">
        <Image src={icon} alt="" width={28} height={28} className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        <span className="mt-0.5 text-center text-[9px] leading-tight md:text-[10px] lg:text-xs">
          {label}
        </span>
      </span>
    </button>
  );
};
