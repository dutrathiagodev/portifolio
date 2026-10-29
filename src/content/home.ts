import type { FeaturedContent, HomeContent, PipelineContent } from "@/types/home";

export const homeContent: HomeContent = {
  word: "PORTFÓLIO",
  role: "Backend & Mobile Developer",
  technologies: ["Flutter", "React", "Node.js"],
  location: "Maringá, PR",
  photo: {
    src: "/images/profile.png",
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
