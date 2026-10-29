import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects/projects";

export const metadata: Metadata = { title: "Thiago Dutra | Projetos" };

export default function Page() {
  return <Projects />;
}
