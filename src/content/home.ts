import type { FeaturedContent, HomeContent, PipelineContent } from "@/types/home";

export const homeContent: HomeContent = {
  marquee: [
    {
      text: "Backend & Mobile Developer —",
      variant: "solid",
      direction: "left",
      top: "9%",
    },
    {
      text: "Flutter — React — Node.js — Next.js — Supabase —",
      variant: "outline",
      direction: "right",
      top: "33%",
    },
    {
      text: "Software Engineer — Tech Lead — Maringá, PR —",
      variant: "dim",
      direction: "left",
      top: "57%",
    },
  ],
  role: "Backend & Mobile Developer",
  technologies: ["Flutter", "React", "Node.js"],
  location: "Maringá, PR",
  photo: {
    src: "/images/profile.webp",
    alt: "Retrato ilustrado de Thiago Dutra",
  },
  cta: { label: "Ver projetos →", href: "/projetos" },
};

export const pipelineContent: PipelineContent = {
  label: "ENTREGA",
  stages: ["Build", "Teste", "Deploy", "Produção"],
};

export const featuredContent: FeaturedContent = {
  title: "Projetos",
  allLabel: "Ver todos →",
  allHref: "/projetos",
};
