import Image from "next/image";

interface ProfilePictureProps {
  src?: string;
  alt: string;
  sizeClassName?: string;
}

export const ProfilePicture = ({
  src = "/window.svg",
  alt,
  sizeClassName = "h-40 w-40 md:h-24 md:w-24",
}: ProfilePictureProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-amber-300 bg-white ${sizeClassName}`}
    >
      <Image src={src} alt={alt} fill className="object-cover p-2" />
    </div>
  );
};
