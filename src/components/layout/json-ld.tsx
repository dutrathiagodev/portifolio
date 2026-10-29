import { siteContent, socialLinks } from "@/content/site";

// dados estruturados (schema.org) para o Google entender quem é a pessoa
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.name,
    url: siteContent.url,
    jobTitle: siteContent.jobTitle,
    description: siteContent.description,
    image: `${siteContent.url}/images/profile.png`,
    knowsAbout: siteContent.skills,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteContent.location.city,
      addressRegion: siteContent.location.region,
      addressCountry: siteContent.location.country,
    },
    sameAs: socialLinks
      .filter((link) => link.external && !link.href.includes("wa.me"))
      .map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
