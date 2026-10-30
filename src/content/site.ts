import type { NavItem, SocialLink } from "@/types/common";

export const siteContent = {
  name: "Thiago Dutra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dutrathiagodev.com.br",
  fullName: "Thiago Dutra de Oliveira",
  title: "Thiago Dutra | Software Engineer, Flutter, React e Node.js",
  description:
    "Portfólio de Thiago Dutra, Software Engineer em Maringá, PR, aberto a oportunidades. Apps Flutter, web com React e Next.js e backend com Node.js e Supabase.",
  jobTitle: "Software Engineer",
  keywords: [
    "Thiago Dutra",
    "Software Engineer",
    "desenvolvedor Flutter",
    "desenvolvedor mobile",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "backend Node.js",
    "Supabase",
    "portfólio",
    "Maringá",
    "Paraná",
    "Tech Lead Flutter",
    "Flutter developer Brazil",
    "desenvolvedor Flutter Maringá",
    "desenvolvedor full-stack",
    "desenvolvedor de software júnior",
    "Fteam",
    "Lifeados Academy",
  ],
  skills: [
    "Flutter",
    "Dart",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Supabase",
    "Firebase",
    "Clean Architecture",
    "Git Flow",
    "CI/CD",
    "Figma",
  ],
  email: "thiagodutrasap@gmail.com",
  worksFor: [
    { name: "Fteam" },
    { name: "Lifeados Academy", url: "https://www.lifeados.com.br" },
  ],
  alumniOf: [
    { name: "Faculdade Adventista do Paraná" },
  ],
  location: { city: "Maringá", region: "PR", country: "BR" },
  copyright: "© Thiago Dutra 2026",
  madeWith: "Feito com Next.js",
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "/sobre" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Projetos", href: "/projetos" },
  { label: "Skills", href: "/skills" },
  { label: "Contato", href: "/contato" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dutrathiagodev/",
    icon: "/icons/linkedin.svg",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/dutrathiagodev/",
    icon: "/icons/github.svg",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5543999737688",
    icon: "/icons/whatsapp.svg",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dutrathiago.dev/",
    icon: "/icons/instagram.svg",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:thiagodutrasap@gmail.com",
    icon: "/icons/gmail.svg",
  },
];
