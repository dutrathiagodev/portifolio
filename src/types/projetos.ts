import type { PageHeadingContent } from "@/types/common";

export type Project = {
  name: string;
  href?: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: "mrnt" | "cantiere" | "futfc" | "olimp" | "weloz" | "elos";
  tags: string[];
};

export type ProjectsContent = {
  heading: PageHeadingContent;
  projects: Project[];
};
