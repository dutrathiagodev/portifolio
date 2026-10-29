import type { ExperienceContent } from "@/types/experiencia";

export const experienceContent: ExperienceContent = {
  heading: {
    label: "EXPERIENCIA",
    title: "Trajetória e entregas.",
    lead: "Experiência prática construindo produtos mobile e web, do design da arquitetura à entrega em produção.",
  },
  items: [
    {
      tag: "ATUAL",
      title: "Software Engineer Intern",
      company: "Fteam | A Referência em Flutter no Brasil · Meio período",
      period: "06/2026 — o momento",
      location: "Maringá, Paraná, Brasil · Remoto",
      highlights: [
        [
          "Desenvolvimento dos projetos ",
          {
            text: "MRNT",
            href: "https://apps.apple.com/br/app/mrnt-rede-social-jovem-adv7/id6733221013",
          },
          " (aplicativo Flutter e painel web em React + Vite) e ",
          { text: "Cantiere", href: "https://cantiereapp.com/" },
          " (SaaS com aplicativo e painel em Flutter).",
        ],
        [
          "Desenvolvimento e manutenção de aplicações mobile multiplataforma em Flutter para Android e iOS.",
        ],
        [
          "Integração de aplicações com Supabase, utilizando Authentication, Database, Storage e Edge Functions.",
        ],
        [
          "Estruturação de projetos utilizando Arquitetura MVVM, modularização e boas práticas de desenvolvimento, com foco em escalabilidade, organização e facilidade de manutenção.",
        ],
        [
          "Implementação e manutenção de pipelines de CI/CD utilizando Azure DevOps, além do gerenciamento de versionamento com Git e GitFlow.",
        ],
        [
          "Correção de bugs, otimização de performance e implementação de novas funcionalidades, contribuindo para a evolução contínua das aplicações.",
        ],
        [
          "Validação e distribuição de builds em conjunto com a equipe de QA utilizando TestFlight e Firebase App Distribution.",
        ],
      ],
      stack: "Full-Stack Development e Mobile Development",
    },
    {
      tag: "ATUAL",
      title: "Tech Lead e Desenvolvedor",
      company: "Lifeados Academy · Autônomo",
      period: "04/2026 — o momento",
      location: "Remoto",
      highlights: [
        [
          "Atuação como Tech Lead em dois projetos internos (",
          {
            text: "FutFC",
            href: "https://apps.apple.com/br/app/futi-fc/id6758945796",
          },
          " e Olimpíadas FAP), liderando decisões técnicas e arquitetura em Flutter.",
        ],
        [
          "Desenvolvimento em Flutter como desenvolvedor em outros dois projetos (Weloz e Elos).",
        ],
        [
          "Realização de code reviews e mentoria a outros desenvolvedores da equipe.",
        ],
        [
          "Colaboração em equipes que utilizam metodologias Ágeis, como Scrum e Kanban, contribuindo para a organização do desenvolvimento e a entrega contínua de soluções de qualidade.",
        ],
      ],
      stack: "Flutter, Node.js e mais 4 competências",
    },
  ],
};
