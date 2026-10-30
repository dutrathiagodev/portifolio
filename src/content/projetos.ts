import type { ProjectsContent } from "@/types/projetos";

export const projectsContent: ProjectsContent = {
  heading: {
    label: "PROJETOS",
    title: "Projetos",
    lead: "Apps em Flutter e sites em Next.js, entregues do zero até produção.",
    marquee: "MRNT — FutFC — Face a Face — OneTick — FAP Books —",
  },
  statusLabels: {
    production: "Em produção",
    development: "Em desenvolvimento",
  },
  privateLabel: "Repositório privado",
  projects: [
    {
      name: "MRNT",
      href: "https://apps.apple.com/br/app/mrnt-rede-social-jovem-adv7/id6733221013",
      description:
        "Plataforma white label de rede social, com aplicativo em Flutter e painel em React + Vite. Base dos apps Pass7 e MRNT Teen.",
      status: "production",
      featured: true,
      layers: [
        { kind: "Mobile", status: "production" },
        { kind: "Web", status: "production" },
      ],
      tags: ["Flutter", "React/Vite", "White label"],
    },
    {
      name: "Pass7",
      href: "https://apps.apple.com/br/app/pass7/id6806004328",
      description:
        "App derivado da plataforma MRNT (white label), publicado na App Store.",
      status: "production",
      layers: [{ kind: "Mobile", status: "production" }],
      tags: ["Flutter", "White label"],
    },
    {
      name: "MRNT Teen",
      href: "https://apps.apple.com/br/app/mrnt-teen-rede-adv7-teen/id6801344875",
      description:
        "Versão para o público adolescente da rede, a partir da mesma plataforma MRNT.",
      status: "production",
      layers: [{ kind: "Mobile", status: "production" }],
      tags: ["Flutter", "White label"],
    },
    {
      name: "Together Movement",
      href: "https://apps.apple.com/br/app/together-movement/id6755253318",
      description:
        "Participação no projeto com suporte e testes do aplicativo.",
      status: "production",
      layers: [{ kind: "Mobile", status: "production" }],
      tags: ["Suporte", "Testes"],
    },
    {
      name: "FutFC",
      href: "https://apps.apple.com/br/app/futi-fc/id6758945796",
      description:
        "Gestão de ligas amadoras de futebol. Tech Lead da arquitetura em Flutter.",
      status: "production",
      featured: true,
      layers: [
        { kind: "Mobile", status: "production" },
        { kind: "Web", status: "production" },
      ],
      tags: ["Flutter", "Tech Lead"],
    },
    {
      name: "Face a Face",
      href: "https://dutrathiagodev.github.io/landing-page-face-a-face/",
      description:
        "Guia cívico do 2º turno de 2026, com comparativo equilibrado e fontes.",
      status: "production",
      featured: true,
      layers: [
        { kind: "Web", status: "production" },
      ],
      tags: ["Next.js", "Tailwind", "Figma"],
    },
    {
      name: "To-Do List Detetive",
      href: "https://to-do-list-detetive.vercel.app",
      description:
        "Lista de tarefas com tema de investigação e persistência em localStorage.",
      status: "production",
      layers: [
        { kind: "Web", status: "production" },
      ],
      tags: ["Next.js", "TypeScript", "localStorage"],
    },
    {
      name: "Weloz",
      description:
        "App de logística e entregas, com acompanhamento em tempo real.",
      status: "development",
      layers: [
        { kind: "Mobile", status: "development" },
        { kind: "Web", status: "development" },
      ],
      tags: ["Flutter", "Mobile"],
    },
    {
      name: "Elos",
      description:
        "App em Flutter que conecta usuários, com painel web de acompanhamento.",
      status: "development",
      layers: [
        { kind: "Mobile", status: "development" },
        { kind: "Web", status: "development" },
      ],
      tags: ["Flutter", "Mobile"],
    },
    {
      name: "OneTick",
      href: "https://github.com/dutrathiagodev/onetick",
      description:
        "Um foco essencial por dia, com sequência, histórico e lembrete.",
      status: "development",
      layers: [
        { kind: "Mobile", status: "development" },
        { kind: "Banco", status: "development" },
      ],
      tags: ["Flutter", "Firebase", "Cubit"],
    },
    {
      name: "FAP Books",
      href: "https://fap-books.vercel.app",
      description:
        "Gestão e empréstimo de livros da biblioteca da FAP.",
      status: "development",
      featured: true,
      layers: [
        { kind: "Web", status: "development" },
        { kind: "API", status: "development" },
        { kind: "Banco", status: "development" },
      ],
      tags: ["Next.js", "Supabase", "PostgreSQL"],
    },
    {
      name: "Big-Z",
      description:
        "Projeto em equipe na RiseMov.",
      private: true,
      layers: [
        { kind: "Mobile" },
        { kind: "Web" },
        { kind: "API" },
        { kind: "Banco" },
      ],
      tags: [],
    },
  ],
  team: {
    label: "EQUIPE",
    name: "RiseMov",
    description:
      "Tecnologia e produtos digitais. Aplicativos, sistemas web e APIs sob medida, com Flutter, Next.js, NestJS e Supabase.",
    href: "https://github.com/RiseMov",
    linkLabel: "github.com/RiseMov →",
  },
};
