import type { PageHeadingContent } from "@/types/common";

export type ProjectStatus = "production" | "development";

export type ProjectLayer = {
  kind: "Web" | "Mobile" | "API" | "Banco";
  status?: ProjectStatus;
};

export type Project = {
  name: string;
  href?: string;
  description: string;
  status?: ProjectStatus;
  private?: boolean;
  featured?: boolean;
  layers: ProjectLayer[];
  tags: string[];
};

export type TeamContent = {
  label: string;
  name: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type ProjectsContent = {
  heading: PageHeadingContent;
  statusLabels: Record<ProjectStatus, string>;
  privateLabel: string;
  projects: Project[];
  team: TeamContent;
};
