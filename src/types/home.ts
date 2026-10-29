export type HomeContent = {
  word: string;
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
