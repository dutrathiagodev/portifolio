import type { PageHeadingContent } from "@/types/common";

export type ProjectStatus = "production" | "development";

export type ProjectLayer = {
  kind: "Web" | "Mobile" | "API" | "Banco";
  status: ProjectStatus;
};

export type Project = {
  name: string;
  href?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  initials?: string;
  tone:
    | "mrnt"
    | "futfc"
    | "weloz"
    | "elos"
    | "faceaface"
    | "detetive"
    | "onetick"
    | "fapbooks";
  status: ProjectStatus;
  layers: ProjectLayer[];
  tags: string[];
};

export type ProjectsContent = {
  heading: PageHeadingContent;
  statusLabels: Record<ProjectStatus, string>;
  projects: Project[];
};
