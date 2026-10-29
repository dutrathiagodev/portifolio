import type { NavItem, SocialLink } from "@/types/common";

export const siteContent = {
  name: "Thiago Dutra",
  title: "Thiago Dutra | Software Engineer",
  description:
    "Thiago Dutra — Software Engineer focused on mobile and web development.",
  logo: { text: "TD", suffix: ".dev" },
};

export const navItems: NavItem[] = [
  { label: "SOBRE", href: "/sobre" },
  { label: "EXPERIÊNCIA", href: "/experiencia" },
  { label: "PROJETOS", href: "/projetos" },
  { label: "SKILLS", href: "/skills" },
  { label: "CONTATO", href: "/contato" },
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
