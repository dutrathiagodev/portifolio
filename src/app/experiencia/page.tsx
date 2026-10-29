import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience/experience";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Trajetória profissional de Thiago Dutra: Software Engineer na Fteam e Tech Lead na Lifeados Academy, com Flutter, Supabase e CI/CD.",
  alternates: { canonical: "/experiencia" },
};

export default function Page() {
  return <Experience />;
}
