import type { PageHeadingContent } from "@/types/common";

export type ContactChannel = {
  label: string;
  handle: string;
  href: string;
  icon: string;
};

export type ContactContent = {
  heading: PageHeadingContent;
  availability: string;
  headline: string;
  email: string;
  copyLabel: string;
  copiedLabel: string;
  mailSubjectPrefix: string;
  channels: ContactChannel[];
  form: {
    title: string;
    send: string;
  };
  fields: {
    name: string;
    subject: string;
    email: string;
  };
};
