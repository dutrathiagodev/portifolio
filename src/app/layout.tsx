import type { Metadata } from "next";
import { Anton, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/layout/json-ld";
import { siteContent } from "@/content/site";
import "./globals.css";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400" },
    { path: "./fonts/satoshi-500.woff2", weight: "500" },
    { path: "./fonts/satoshi-700.woff2", weight: "700" },
    { path: "./fonts/satoshi-900.woff2", weight: "900" },
  ],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: {
    default: siteContent.title,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.description,
  keywords: siteContent.keywords,
  authors: [{ name: siteContent.name, url: siteContent.url }],
  creator: siteContent.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteContent.name,
    title: siteContent.title,
    description: siteContent.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.title,
    description: siteContent.description,
  },
  robots: { index: true, follow: true },
  // código do Google Search Console, definido na Vercel (GOOGLE_SITE_VERIFICATION)
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${satoshi.variable} ${anton.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
