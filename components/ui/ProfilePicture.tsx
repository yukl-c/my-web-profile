import Image, { type StaticImageData } from "next/image";
import { profileMap } from "@/components/profile_img/profileMap";

interface ProfilePictureProps {
  src?: StaticImageData | string;
  alt: string;
  sizeClassName?: string;
}

export const ProfilePicture = ({
  src = profileMap,
  alt,
  sizeClassName = "h-40 w-40 md:h-36 md:w-36",
}: ProfilePictureProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-amber-300 bg-white ${sizeClassName}`}
    >
      <Image src={src} alt={alt} fill className="object-cover p-2" loading="eager" />
    </div>
  );
};
