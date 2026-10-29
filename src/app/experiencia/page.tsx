import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience/experience";

export const metadata: Metadata = { title: "Thiago Dutra | Experiência" };

export default function Page() {
  return <Experience />;
}
