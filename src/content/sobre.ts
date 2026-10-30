import type { AboutContent } from "@/types/sobre";

export const aboutContent: AboutContent = {
  heading: {
    label: "SOBRE MIM",
    title: "Sobre",
    tagline: "Construo software com propósito.",
    lead: "Sou Thiago Dutra de Oliveira, desenvolvedor de software curioso e proativo, com experiência prática em desenvolvimento mobile e web.",
    marquee: "Backend & Mobile Developer —",
  },
  paragraphs: [
    "Sou apaixonado por desenvolvimento de software e gosto de atuar em ambientes dinâmicos, onde posso aprender, evoluir e enfrentar novos desafios. Tenho o compromisso de buscar constantemente crescimento profissional, explorando novas tecnologias e metodologias por meio de cursos, literatura e networking.",
    "Atuo com Flutter e React, integrando APIs RESTful e serviços como Supabase, sempre aplicando Arquitetura Limpa e boas práticas de automação. Trabalho na Fteam, referência em Flutter no Brasil, sou Tech Lead e desenvolvedor na Lifeados Academy e atuo no EAD da FAP, com suporte D2L, design e estudo de automação.",
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
      description:
        "Decisões técnicas, code review, Git Flow e QA.",
    },
    {
      title: "Design e UX/UI",
      description:
        "Figma, Google Stitch e design responsivo.",
    },
    {
      title: "IA e automação",
      description:
        "Claude Code, Codex e automação com SQL, Python e BI.",
    },
  ],
  startup: {
    label: "RISEMOV",
    name: "Startup de estudos",
    paragraphs: [
      "Criei a RiseMov com mais 3 colegas de TI, nas férias do meio do ano, para ajudar um amigo: ensinando, eu também aprendo e evoluo.",
      "Usamos uma IA com roadmaps estruturados e Mastery Learning, de Benjamin Bloom: ela explica a teoria e a prática, pede que o aluno pratique, aplica um mini teste e só libera o próximo módulo quando ele domina, indicando um vídeo para aprofundar. Hoje assistimos juntos a aulas e workshops de tecnologia e também pegamos projetos freelance.",
    ],
    links: [{ label: "github.com/RiseMov", href: "https://github.com/RiseMov" }],
  },
  mentorshipLabel: "MENTORIAS",
  mentorship: [
    {
      title: "Lifeados Academy",
      mentor: "Mentor: André Pimentel",
      description:
        "Mentoria online de desenvolvimento mobile e web com IA, com Flutter, Node.js e React, projetos reais e comunidade. Me ajudou a evoluir e a chegar até a Fteam.",
      links: [
        { label: "lifeados.com.br", href: "https://www.lifeados.com.br/" },
        {
          label: "LinkedIn do André",
          href: "https://www.linkedin.com/in/appimentels/",
        },
      ],
    },
    {
      title: "Acelera Dev",
      mentor: "Mentor: Guilherme Pessoa",
      description:
        "Comunidade dev de estudos. Mentoria de carreira e posicionamento profissional, para construir uma presença sólida e me destacar no mercado.",
      links: [
        {
          label: "LinkedIn do Guilherme",
          href: "https://www.linkedin.com/in/guilhermep-c/",
        },
      ],
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
        "Lógica de Programação; Algoritmos e Estrutura de Dados; Arquitetura de Computadores; Banco de Dados.",
    },
    {
      title: "Tecnólogo — Análise e Desenvolvimento de Sistemas",
      meta: [
        "Gestão da Tecnologia da Informação e Redes de Computadores",
        "Faculdade Adventista do Paraná · Ivatuba, PR · 2026–2028",
      ],
      detail:
        "Lógica de Programação; Algoritmos e Programação; Arquitetura e Organização de Computadores; Gestão de Sistemas de Informação.",
      practice:
        "Na prática: projetos desenvolvidos em trabalhos e disciplinas da faculdade, como FAP Books (Tech Lead, Dev e QA), Face a Face e To-Do List Detetive.",
    },
    {
      title: "CS50x — Introdução à Ciência da Computação",
      meta: [
        "8 de 10 módulos concluídos",
        "Harvard University · online · em andamento",
      ],
      detail: "C, Python, SQL, algoritmos e desenvolvimento web.",
    },
  ],
};
