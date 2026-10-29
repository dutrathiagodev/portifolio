import type { PageHeadingContent } from "@/types/common";

export type ContactContent = {
  heading: PageHeadingContent;
  email: string;
  mailSubjectPrefix: string;
  copyright: string;
  fields: {
    name: string;
    subject: string;
    email: string;
  };
};
