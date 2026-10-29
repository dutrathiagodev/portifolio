import type { PageHeadingContent } from "@/types/common";

export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  label: string;
  note?: string;
  skills: Skill[];
};

export type SkillsContent = {
  heading: PageHeadingContent;
  groups: SkillGroup[];
};
