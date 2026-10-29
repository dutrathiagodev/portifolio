import Link from "next/link";
import { ProjectRow } from "@/components/ui/project-row";
import { Reveal } from "@/components/ui/reveal";
import { featuredContent } from "@/content/home";
import { projectsContent } from "@/content/projetos";

export function FeaturedProjects() {
  const { title, allLabel, allHref } = featuredContent;
  const { projects, statusLabels, privateLabel } = projectsContent;
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="block">
      <div className="shell">
        <Reveal>
          <div className="block-head">
            <h2 className="block-title">{title}</h2>
            <Link href={allHref} className="link-quiet">
              {allLabel}
            </Link>
          </div>
        </Reveal>

        <ul className="rows">
          {featured.map((project, index) => (
            <ProjectRow
              key={project.name}
              index={index + 1}
              project={project}
              statusLabels={statusLabels}
              privateLabel={privateLabel}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
