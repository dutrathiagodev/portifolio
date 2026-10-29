import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Thiago Dutra em Flutter e Next.js: MRNT, FutFC, Face a Face, To-Do List Detetive, OneTick, FAP Books e mais, com status e camadas.",
  alternates: { canonical: "/projetos" },
};

export default function Page() {
  return <Projects />;
}
