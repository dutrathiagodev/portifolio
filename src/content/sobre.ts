import type { AboutContent } from "@/types/sobre";

export const aboutContent: AboutContent = {
  heading: {
    label: "SOBRE",
    title: "Construo software com propósito.",
    lead: "Sou Thiago Dutra de Oliveira, desenvolvedor de software curioso e proativo, com experiência prática em desenvolvimento mobile e web.",
  },
  paragraphs: [
    "Sou apaixonado por desenvolvimento de software e gosto de atuar em ambientes dinâmicos, onde posso aprender, evoluir e enfrentar novos desafios. Tenho o compromisso de buscar constantemente crescimento profissional, explorando novas tecnologias e metodologias por meio de cursos, literatura e networking.",
    "Atuo com Flutter e React, integrando APIs RESTful e serviços como Supabase, sempre aplicando Arquitetura Limpa e boas práticas de automação. Atualmente trabalho na Fteam, referência em desenvolvimento Flutter no Brasil, e como Tech Lead e desenvolvedor na Lifeados Academy, onde aplico esses conhecimentos em projetos reais.",
    "Valorizo código de alta qualidade, colaboração em equipe e aprendizado contínuo.",
  ],
  doLabel: "O QUE EU FAÇO",
  doItems: [
    {
      title: "Mobile development",
      description: "Aplicações multiplataforma em Flutter para Android e iOS.",
    },
    {
      title: "Web & backend",
      description:
        "React, Vite, Node.js, APIs RESTful e integrações com Supabase.",
    },
    {
      title: "Arquitetura e entrega",
      description: "MVVM, modularização, Clean Architecture e pipelines CI/CD.",
    },
    {
      title: "Liderança técnica",
      description: "Decisões técnicas, revisão de código e mentoria em times.",
    },
  ],
  educationLabel: "EDUCAÇÃO",
  education: [
    {
      title: "Ensino Médio Técnico — Desenvolvimento de Sistemas",
      meta: [
        "Colégio Estadual Maria Dalila · Santo Antônio da Platina, PR · 2023–2025",
      ],
      detail:
        "Lógica de Programação; Algoritmos e Estrutura de Dados; Arquitetura de Computadores.",
    },
    {
      title: "Tecnólogo — Análise e Desenvolvimento de Sistemas",
      meta: [
        "Gestão da Tecnologia da Informação e Redes de Computadores",
        "Faculdade Adventista do Paraná · Ivatuba, PR · 2026–2028",
      ],
      detail:
        "Lógica de Programação; Algoritmos e Programação; Arquitetura e Organização de Computadores; Gestão de Sistemas de Informação.",
    },
  ],
};
