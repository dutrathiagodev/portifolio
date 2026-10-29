import type { HomeContent } from "@/types/home";

export const homeContent: HomeContent = {
  label: "SOFTWARE ENGINEER",
  name: "Thiago Dutra",
  role: "Backend & Mobile Developer",
  technologies: ["Flutter", "React", "Node.js"],
  photo: {
    src: "/images/profile.png",
    alt: "Illustrated portrait of Thiago Dutra",
  },
  actions: [
    { label: "Sobre", href: "/sobre", variant: "outline" },
    { label: "Ver Projetos", href: "/projetos", variant: "primary" },
    { label: "Contato", href: "/contato", variant: "outline" },
  ],
};
