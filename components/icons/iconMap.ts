import type { StaticImageData } from "next/image";

import aboutAmber from "@/components/icons/about_amber200.svg";
import aboutWhite from "@/components/icons/about_white.svg";
import contactAmber from "@/components/icons/contacts_amber200.svg";
import contactWhite from "@/components/icons/contacts_white.svg";
import email from "@/components/icons/email.svg";
import error from "@/components/icons/error.svg";
import github from "@/components/icons/github.svg";
import linkedin from "@/components/icons/linkedin.svg";
import projectAmber from "@/components/icons/project_amber200.svg";
import projectWhite from "@/components/icons/project_white.svg";
import telephone from "@/components/icons/telephone.svg";
import workAmber from "@/components/icons/work_amber200.svg";
import workWhite from "@/components/icons/work_white.svg";

export const iconMap = {
  aboutAmber,
  aboutWhite,
  contactAmber,
  contactWhite,
  email,
  error,
  github,
  linkedin,
  projectAmber,
  projectWhite,
  telephone,
  workAmber,
  workWhite,
} as const;

export type IconName = keyof typeof iconMap;

export const getIconByName = (name: IconName): StaticImageData => {
  return iconMap[name];
};
