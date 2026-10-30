import { siteContent, socialLinks } from "@/content/site";

// dados estruturados (schema.org) para buscadores e IAs entenderem quem é a pessoa
export function JsonLd() {
  const personId = `${siteContent.url}/#person`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteContent.name,
    alternateName: siteContent.fullName,
    url: siteContent.url,
    email: `mailto:${siteContent.email}`,
    jobTitle: siteContent.jobTitle,
    description: siteContent.description,
    image: `${siteContent.url}/images/profile.webp`,
    knowsAbout: siteContent.skills,
    worksFor: siteContent.worksFor.map((org) => ({
      "@type": "Organization",
      ...org,
    })),
    alumniOf: siteContent.alumniOf.map((org) => ({
      "@type": "CollegeOrUniversity",
      ...org,
    })),
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

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${siteContent.url}/#website`,
        url: siteContent.url,
        name: `${siteContent.name} | Portfólio`,
        inLanguage: "pt-BR",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteContent.url}/#profile`,
        url: siteContent.url,
        name: siteContent.title,
        inLanguage: "pt-BR",
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${siteContent.url}/#website` },
      },
    ],
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
