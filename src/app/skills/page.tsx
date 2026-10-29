import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Tecnologias de Thiago Dutra: Flutter, Dart, React, TypeScript, Node.js, Supabase, Firebase, UX/UI Design e IA no desenvolvimento com Claude Code.",
  alternates: { canonical: "/skills" },
};

export default function Page() {
  return <Skills />;
}
