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
    "Atuo com Flutter e React, integrando APIs RESTful e serviços como Supabase, sempre aplicando Arquitetura Limpa e boas práticas de automação. Na Fteam, referência em desenvolvimento Flutter no Brasil, trabalho na plataforma white label MRNT e nos apps Pass7 e MRNT Teen, e apoio os testes e o suporte do Together Movement. Como Tech Lead e desenvolvedor na Lifeados Academy, aplico esses conhecimentos em projetos reais.",
    "Também atuo no EAD da FAP, com suporte à plataforma D2L e design gráfico e edição, e estudo automação com SQL, Python e BI para otimizar o trabalho. Na faculdade, lidero projetos em equipe como o FAP Books, em que sou Tech Lead, Dev e QA, e uso Figma, Stitch e IA (Claude Code) para desenhar, organizar e entregar melhor.",
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
        "Decisões técnicas, revisão de código, mentoria, Git Flow e QA em times.",
    },
    {
      title: "Design e UX/UI",
      description:
        "Interfaces no Figma e Google Stitch, design responsivo, design gráfico e edição.",
    },
    {
      title: "IA e automação",
      description:
        "Claude Code e Codex no desenvolvimento; automação com SQL, Python e BI em estudo.",
    },
  ],
  startup: {
    label: "STARTUP",
    name: "RiseMov",
    paragraphs: [
      "Criei a RiseMov, uma startup focada em estudos, com mais 3 colegas que também são da área de TI. Ela nasceu para ajudar um amigo: enquanto ensino, eu aprendo e aprimoro ainda mais o meu conhecimento.",
      "Começamos nas férias do meio do ano, com uma skill de ensino baseada em roadmaps estruturados e na metodologia Mastery Learning (aprendizagem para o domínio, de Benjamin Bloom), aplicada por uma IA. Ela explica os conceitos teóricos e práticos, pede que o aluno pratique e faz um mini teste teórico e prático ao final, sempre com foco em boas práticas, e indica um vídeo para aprofundar o assunto.",
      "A IA é rigorosa nos detalhes: se o aluno erra, ela cobra, orienta e diz o que está certo ou errado, para que ninguém avance de módulo sem dominar o conteúdo. Com isso, meu amigo melhorou aspectos do desenvolvimento no trabalho e voltou à rotina. Seguimos estudando aos poucos, com aulas e workshops sobre tecnologia, um ajudando o outro.",
    ],
    links: [{ label: "github.com/RiseMov", href: "https://github.com/RiseMov" }],
  },
  mentorshipLabel: "MENTORIAS E COMUNIDADE",
  mentorship: [
    {
      title: "Lifeados Academy",
      mentor: "Mentor: André Pimentel",
      description:
        "Participo da mentoria da Lifeados Academy. Ela me ajudou a me desenvolver e a chegar até a Fteam.",
      links: [
        { label: "lifeados.com.br", href: "https://www.lifeados.com.br/" },
        {
          label: "LinkedIn da Lifeados",
          href: "https://www.linkedin.com/company/lifeados-academy/",
        },
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
        "Comunidade dev que ajuda nos estudos. O Guilherme ajuda a melhorar o LinkedIn e o GitHub e a me posicionar, sempre apoiando o pessoal. Muita coisa mudou para mim depois que entrei nas duas mentorias.",
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
      practice:
        "Na prática: projetos desenvolvidos em trabalhos e disciplinas da faculdade, como FAP Books (Tech Lead, Dev e QA), Face a Face e To-Do List Detetive.",
    },
  ],
};
