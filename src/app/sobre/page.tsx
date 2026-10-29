import type { Metadata } from "next";
import { About } from "@/components/sections/about/about";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Quem é Thiago Dutra: desenvolvedor de software em Maringá, PR, com foco em Flutter, React e Node.js. Formação, o que faz e como trabalha.",
  alternates: { canonical: "/sobre" },
};

export default function Page() {
  return <About />;
}
