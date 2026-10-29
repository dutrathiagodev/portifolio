import type { PageHeadingContent } from "@/types/common";

export type AboutContent = {
  heading: PageHeadingContent;
  paragraphs: string[];
  doLabel: string;
  doItems: { title: string; description: string }[];
  educationLabel: string;
  education: { title: string; meta: string[]; detail: string }[];
};
