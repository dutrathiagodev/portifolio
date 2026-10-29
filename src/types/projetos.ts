import type { PageHeadingContent } from "@/types/common";

export type Project = {
  name: string;
  href?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  initials?: string;
  tone:
    | "mrnt"
    | "cantiere"
    | "futfc"
    | "weloz"
    | "elos"
    | "faceaface"
    | "detetive"
    | "onetick"
    | "fapbooks";
  tags: string[];
};

export type ProjectsContent = {
  heading: PageHeadingContent;
  projects: Project[];
};
