import { PageHeading } from "@/components/ui/page-heading";
import { aboutContent } from "@/content/sobre";

export function About() {
  const { heading, paragraphs, doLabel, doItems, educationLabel, education } =
    aboutContent;

  return (
    <main className="page">
      <PageHeading {...heading} />

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
          </li>
        ))}
      </ul>
    </main>
  );
}
