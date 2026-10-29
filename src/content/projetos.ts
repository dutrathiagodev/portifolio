import type { ProjectsContent } from "@/types/projetos";

export const projectsContent: ProjectsContent = {
  heading: {
    label: "PROJETOS",
    title: "Projetos selecionados.",
    lead: "Apps em Flutter com painel web, entregues do zero até produção.",
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
      tags: ["Flutter", "React/Vite", "Painel web"],
    },
    {
      name: "Cantiere",
      href: "https://cantiereapp.com/",
      description:
        "SaaS white-label que conecta construtoras e clientes: documentos, financeiro e acompanhamento de obra em um único app, com painel web.",
      image: "/images/cantiere.png",
      imageAlt: "Cantiere",
      tone: "cantiere",
      tags: ["Flutter", "SaaS", "Painel web"],
    },
    {
      name: "FutFC",
      href: "https://apps.apple.com/br/app/futi-fc/id6758945796",
      description:
        "App para gestão de ligas amadoras de futebol, onde atuo como Tech Lead das decisões técnicas e da arquitetura em Flutter.",
      image: "/images/futfc.png",
      imageAlt: "Futi FC",
      tone: "futfc",
      tags: ["Flutter", "Tech Lead", "Painel web"],
    },
    {
      name: "Olimpíadas FAP",
      description:
        "App interno para organização das Olimpíadas da faculdade, com foco na arquitetura e estruturação do projeto em Flutter.",
      image: "/images/fap-olimpiadas.png",
      imageAlt: "Olimpíadas FAP",
      tone: "olimp",
      tags: ["Flutter", "Arquitetura", "Painel web"],
    },
    {
      name: "Weloz",
      description:
        "App de logística e entregas, com onboarding para clientes e entregadores e acompanhamento em tempo real.",
      image: "/images/weloz.png",
      imageAlt: "Weloz",
      tone: "weloz",
      tags: ["Flutter", "Mobile", "Painel web"],
    },
    {
      name: "Elos",
      description:
        "App em Flutter desenvolvido para o projeto Elos, conectando usuários e oferecendo painel web para acompanhamento.",
      image: "/images/elos.png",
      imageAlt: "Elos",
      tone: "elos",
      tags: ["Flutter", "Mobile", "Painel web"],
    },
    {
      name: "Face a Face",
      href: "https://dutrathiagodev.github.io/landing-page-face-a-face/",
      description:
        "Guia cívico do 2º turno de 2026: comparativo equilibrado entre os candidatos, com perfis, indicadores lado a lado, status jurídico e fontes.",
      initials: "FF",
      tone: "faceaface",
      tags: ["Next.js", "Tailwind", "Figma"],
    },
    {
      name: "To-Do List Detetive",
      href: "https://to-do-list-detetive.vercel.app",
      description:
        "Lista de tarefas com tema de investigação: cada tarefa é um caso preso num quadro de cortiça, com checklist, filtros e persistência em localStorage.",
      initials: "TD",
      tone: "detetive",
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
      tags: ["Flutter", "Firebase", "Cubit"],
    },
    {
      name: "FAP Books",
      href: "https://fap-books.vercel.app",
      description:
        "Sistema de gestão e empréstimo de livros da biblioteca da FAP: acervo, usuários, empréstimos, reservas, prazos e multas.",
      initials: "FB",
      tone: "fapbooks",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
    },
  ],
};
