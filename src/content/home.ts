import type {
  FeaturedContent,
  HelloContent,
  HomeContent,
  PipelineContent,
} from "@/types/home";

export const homeContent: HomeContent = {
  title: "Thiago Dutra",
  captions: { left: "SOFTWARE ENGINEER / BACKEND & MOBILE", right: "2026" },
  marquee: [
    {
      text: "Thiago Dutra —",
      variant: "solid",
      direction: "left",
      top: "2%",
    },
    {
      text: "Flutter — React — Node.js — Next.js — Supabase —",
      variant: "outline",
      direction: "right",
      top: "66%",
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

export const helloContent: HelloContent = {
  title: "Olá",
  skillsLabel: "Skills",
  skillNames: ["Flutter", "Dart", "React", "TypeScript", "Node.js", "Supabase"],
  experienceLabel: "Experiência",
  educationLabel: "Formação",
};
