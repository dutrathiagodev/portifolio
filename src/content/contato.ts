import type { ContactContent } from "@/types/contato";

export const contactContent: ContactContent = {
  heading: {
    label: "CONTATO",
    title: "Contato",
    tagline: "Bora trocar uma ideia?",
    marquee: "Vamos conversar — Bora trocar uma ideia —",
  },
  availability: "Aberto a novos projetos",
  headline: "Tem um projeto ou uma vaga? Me chama.",
  email: "thiagodutrasap@gmail.com",
  copyLabel: "Copiar e-mail",
  copiedLabel: "Copiado!",
  mailSubjectPrefix: "Contato pelo portfólio - ",
  channels: [
    {
      label: "WhatsApp",
      handle: "Conversa direta",
      href: "https://wa.me/5543999737688",
      icon: "/icons/whatsapp.svg",
    },
    {
      label: "LinkedIn",
      handle: "in/dutrathiagodev",
      href: "https://www.linkedin.com/in/dutrathiagodev/",
      icon: "/icons/linkedin.svg",
    },
    {
      label: "GitHub",
      handle: "@dutrathiagodev",
      href: "https://github.com/dutrathiagodev/",
      icon: "/icons/github.svg",
    },
    {
      label: "Instagram",
      handle: "@dutrathiago.dev",
      href: "https://www.instagram.com/dutrathiago.dev/",
      icon: "/icons/instagram.svg",
    },
  ],
  form: {
    title: "Ou preencha e eu recebo por e-mail",
    send: "Enviar mensagem",
  },
  fields: {
    name: "SEU NOME",
    subject: "SEU ASSUNTO",
    email: "SEU E-MAIL",
  },
};
