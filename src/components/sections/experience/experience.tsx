import { PageHeading } from "@/components/ui/page-heading";
import { RichText } from "@/components/ui/rich-text";
import { experienceContent } from "@/content/experiencia";

export function Experience() {
  const { heading, items } = experienceContent;

  return (
    <main className="page">
      <PageHeading {...heading} />

      <div className="shell page-body">

      <ul className="timeline">
        {items.map((item) => (
          <li key={item.title} className="timeline-item">
            {item.tag && <span className="timeline-tag">{item.tag}</span>}
            <h3>{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-meta">{item.period}</p>
            <p className="timeline-meta">{item.location}</p>

            <ul className="timeline-list">
              {item.highlights.map((parts, index) => (
                <li key={index}>
                  <RichText parts={parts} />
                </li>
              ))}
            </ul>

            <p className="timeline-stack">{item.stack}</p>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}
