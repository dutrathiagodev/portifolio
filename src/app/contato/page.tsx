import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact/contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Thiago Dutra: e-mail, LinkedIn, GitHub, WhatsApp e Instagram. Vamos trocar uma ideia sobre o seu projeto.",
  alternates: { canonical: "/contato" },
};

export default function Page() {
  return <Contact />;
}
