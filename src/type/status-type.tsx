import { LucideIcon } from "lucide-react";

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    link: string;
  };

export type WorkProps = {
    Logo: string;
    title: string;
    role: string;
    link: string;
    date: string;
    freelance?: boolean;
  };

export type ContactProps = {
    url: string;
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    className?: string;
  };