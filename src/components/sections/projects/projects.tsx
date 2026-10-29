import { PageHeading } from "@/components/ui/page-heading";
import { ProjectRow } from "@/components/ui/project-row";
import { Reveal } from "@/components/ui/reveal";
import { projectsContent } from "@/content/projetos";

export function Projects() {
  const { heading, projects, statusLabels, privateLabel, team } =
    projectsContent;

  return (
    <main className="page shell">
      <PageHeading {...heading} tightDivider />

      <ul className="rows" style={{ marginTop: 0, borderTop: "none" }}>
        {projects.map((project, index) => (
          <ProjectRow
            key={project.name}
            index={index + 1}
            project={project}
            statusLabels={statusLabels}
            privateLabel={privateLabel}
            showDetails
          />
        ))}
      </ul>

      <Reveal>
        <section className="team">
          <div>
            <p className="section-label" style={{ marginBottom: 0 }}>
              {team.label}
            </p>
            <h2>{team.name}</h2>
          </div>
          <p>{team.description}</p>
          <a
            className="link-quiet"
            href={team.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {team.linkLabel}
          </a>
        </section>
      </Reveal>
    </main>
  );
}
