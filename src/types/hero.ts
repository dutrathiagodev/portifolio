export type HeroLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: HeroLink;
  secondaryAction: HeroLink;
};
