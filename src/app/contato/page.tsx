import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact/contact";

export const metadata: Metadata = { title: "Thiago Dutra | Contato" };

export default function Page() {
  return <Contact />;
}
