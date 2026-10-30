import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

// rastreadores de IA liberados de propósito, para o portfólio aparecer em buscas e respostas
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteContent.url}/sitemap.xml`,
    host: siteContent.url,
  };
}
