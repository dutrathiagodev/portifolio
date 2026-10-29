import type { PageHeadingContent, RichTextPart } from "@/types/common";

export type ExperienceItem = {
  tag?: string;
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: RichTextPart[][];
  stack: string;
};

export type ExperienceContent = {
  heading: PageHeadingContent;
  items: ExperienceItem[];
};
