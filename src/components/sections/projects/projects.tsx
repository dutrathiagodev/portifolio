import Image from "next/image";
import { PageHeading } from "@/components/ui/page-heading";
import { projectsContent } from "@/content/projetos";

export function Projects() {
  const { heading, projects, statusLabels } = projectsContent;

  return (
    <main className="page">
      <PageHeading {...heading} tightDivider />

      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.name} className="project-card">
            <div className={`project-icon ${project.tone}`}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? project.name}
                  width={44}
                  height={44}
                />
              ) : (
                <span aria-hidden="true">{project.initials}</span>
              )}
            </div>

            <div className="project-info">
              <h3>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
                {project.status && (
                  <span className={`status-badge status-${project.status}`}>
                    {statusLabels[project.status]}
                  </span>
                )}
              </h3>
              <p>{project.description}</p>

              {project.layers && (
                <ul className="project-layers" aria-label="Camadas do projeto">
                  {project.layers.map((layer) => (
                    <li
                      key={layer.kind}
                      className={`layer status-${layer.status}`}
                    >
                      {layer.kind} <span>{statusLabels[layer.status]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
