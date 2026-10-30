import { PageHeading } from "@/components/ui/page-heading";
import { aboutContent } from "@/content/sobre";
import type { AboutLink } from "@/types/sobre";

function LinkList({ links }: { links: AboutLink[] }) {
  return (
    <p className="about-links">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label} →
        </a>
      ))}
    </p>
  );
}

export function About() {
  const {
    heading,
    paragraphs,
    doLabel,
    doItems,
    startup,
    mentorshipLabel,
    mentorship,
    educationLabel,
    education,
  } = aboutContent;

  return (
    <main className="page">
      <PageHeading {...heading} />

      <div className="shell page-body">

      {paragraphs.map((text) => (
        <p key={text} className="text-block">
          {text}
        </p>
      ))}

      <p className="section-label sub-label">{doLabel}</p>

      <div className="about-grid">
        {doItems.map((item, index) => (
          <div key={item.title} className="about-card">
            <span className="about-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <p className="section-label sub-label">{startup.label}</p>

      <div className="about-feature">
        <h3>{startup.name}</h3>
        {startup.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <LinkList links={startup.links} />
      </div>

      <p className="section-label sub-label">{mentorshipLabel}</p>

      <ul className="education-list">
        {mentorship.map((item) => (
          <li key={item.title} className="education-item">
            <h3>{item.title}</h3>
            <p className="education-meta">{item.mentor}</p>
            <p className="education-detail">{item.description}</p>
            <LinkList links={item.links} />
          </li>
        ))}
      </ul>

      <p className="section-label sub-label">{educationLabel}</p>

      <ul className="education-list">
        {education.map((item) => (
          <li key={item.title} className="education-item">
            <h3>{item.title}</h3>
            {item.meta.map((line) => (
              <p key={line} className="education-meta">
                {line}
              </p>
            ))}
            <p className="education-detail">{item.detail}</p>
            {item.practice && (
              <p className="education-practice">{item.practice}</p>
            )}
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}
