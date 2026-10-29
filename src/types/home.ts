export type HomeContent = {
  label: string;
  name: string;
  role: string;
  technologies: string[];
  photo: { src: string; alt: string };
  actions: { label: string; href: string; variant: "outline" | "primary" }[];
};
