export type MarqueeRow = {
  text: string;
  variant: "solid" | "outline";
  direction: "left" | "right";
  top: string;
};

export type HomeContent = {
  title: string;
  captions: { left: string; right: string };
  marquee: MarqueeRow[];
  role: string;
  technologies: string[];
  location: string;
  photo: { src: string; alt: string };
  cta: { label: string; href: string };
};

export type PipelineContent = {
  label: string;
  stages: string[];
};

export type FeaturedContent = {
  title: string;
  allLabel: string;
  allHref: string;
};

export type HelloContent = {
  title: string;
  skillsLabel: string;
  skillNames: string[];
  experienceLabel: string;
  educationLabel: string;
};
