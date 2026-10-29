export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
};

export type RichTextPart = string | { text: string; href: string };

export type PageHeadingContent = {
  label: string;
  title: string;
  lead?: string;
};
