import type { ProjectsContent } from "@/types/projetos";

export const projectsContent: ProjectsContent = {
  heading: {
    label: "PROJETOS",
    title: "Projetos selecionados.",
    lead: "Apps em Flutter e sites em Next.js, entregues do zero até produção.",
  },
  statusLabels: {
    production: "Em produção",
    development: "Em desenvolvimento",
  },
  projects: [
    {
      name: "MRNT",
      href: "https://apps.apple.com/br/app/mrnt-rede-social-jovem-adv7/id6733221013",
      description:
        "Rede social para jovens advogados, com aplicativo em Flutter e painel administrativo em React + Vite.",
      image: "/images/mrnt.png",
      imageAlt: "MRNT",
      tone: "mrnt",
      status: "production",
      layers: [
        { kind: "Mobile", status: "production" },
        { kind: "Web", status: "production" },
      ],
      tags: ["Flutter", "React/Vite", "Painel web"],
    },
    {
      name: "FutFC",
      href: "https://apps.apple.com/br/app/futi-fc/id6758945796",
      description:
        "App para gestão de ligas amadoras de futebol, onde atuo como Tech Lead das decisões técnicas e da arquitetura em Flutter.",
      image: "/images/futfc.png",
      imageAlt: "Futi FC",
      tone: "futfc",
      status: "production",
      layers: [
        { kind: "Mobile", status: "production" },
        { kind: "Web", status: "production" },
      ],
      tags: ["Flutter", "Tech Lead", "Painel web"],
    },
    {
      name: "Weloz",
      description:
        "App de logística e entregas, com onboarding para clientes e entregadores e acompanhamento em tempo real.",
      image: "/images/weloz.png",
      imageAlt: "Weloz",
      tone: "weloz",
      status: "development",
      layers: [
        { kind: "Mobile", status: "development" },
        { kind: "Web", status: "development" },
      ],
      tags: ["Flutter", "Mobile", "Painel web"],
    },
    {
      name: "Elos",
      description:
        "App em Flutter desenvolvido para o projeto Elos, conectando usuários e oferecendo painel web para acompanhamento.",
      image: "/images/elos.png",
      imageAlt: "Elos",
      tone: "elos",
      status: "development",
      tags: ["Flutter", "Mobile", "Painel web"],
    },
    {
      name: "Face a Face",
      href: "https://dutrathiagodev.github.io/landing-page-face-a-face/",
      description:
        "Guia cívico do 2º turno de 2026: comparativo equilibrado entre os candidatos, com perfis, indicadores lado a lado, status jurídico e fontes.",
      image: "/images/face-a-face.svg",
      imageAlt: "Face a Face",
      tone: "faceaface",
      status: "production",
      tags: ["Next.js", "Tailwind", "Figma"],
    },
    {
      name: "To-Do List Detetive",
      href: "https://to-do-list-detetive.vercel.app",
      description:
        "Lista de tarefas com tema de investigação: cada tarefa é um caso preso num quadro de cortiça, com checklist, filtros e persistência em localStorage.",
      image: "/images/detetive.png",
      imageAlt: "To-Do List Detetive",
      tone: "detetive",
      status: "production",
      tags: ["Next.js", "TypeScript", "localStorage"],
    },
    {
      name: "OneTick",
      href: "https://github.com/dutrathiagodev/onetick",
      description:
        "App de foco diário: uma única tarefa por dia, com sequência de dias, histórico e lembrete. Flutter com Firebase Auth e Firestore.",
      image: "/images/onetick.png",
      imageAlt: "OneTick",
      tone: "onetick",
      status: "development",
      tags: ["Flutter", "Firebase", "Cubit"],
    },
    {
      name: "FAP Books",
      href: "https://fap-books.vercel.app",
      description:
        "Sistema de gestão e empréstimo de livros da biblioteca da FAP: acervo, usuários, empréstimos, reservas, prazos e multas.",
      image: "/images/fap-books.png",
      imageAlt: "FAP Books",
      tone: "fapbooks",
      status: "development",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
    },
  ],
};
