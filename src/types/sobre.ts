import type { PageHeadingContent } from "@/types/common";

export type AboutLink = { label: string; href: string };

export type AboutContent = {
  heading: PageHeadingContent;
  paragraphs: string[];
  doLabel: string;
  doItems: { title: string; description: string }[];
  startup: {
    label: string;
    name: string;
    paragraphs: string[];
    links: AboutLink[];
  };
  mentorshipLabel: string;
  mentorship: {
    title: string;
    mentor: string;
    description: string;
    links: AboutLink[];
  }[];
  educationLabel: string;
  education: {
    title: string;
    meta: string[];
    detail: string;
    practice?: string;
    links?: AboutLink[];
  }[];
};
