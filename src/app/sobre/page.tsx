import type { Metadata } from "next";
import { About } from "@/components/sections/about/about";

export const metadata: Metadata = { title: "Thiago Dutra | Sobre" };

export default function Page() {
  return <About />;
}
