import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills/skills";

export const metadata: Metadata = { title: "Thiago Dutra | Skills" };

export default function Page() {
  return <Skills />;
}
