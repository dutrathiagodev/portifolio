import type { ReactNode } from "react";
import type { Project, ProjectStatus } from "@/types/projetos";
import { cn } from "@/lib/utils";

type ProjectRowProps = {
  index: number;
  project: Project;
  statusLabels: Record<ProjectStatus, string>;
  privateLabel: string;
  showDetails?: boolean;
};

const stagesByStatus: Record<ProjectStatus, number> = {
  production: 4,
  development: 2,
};

export function ProjectRow({
  index,
  project,
  statusLabels,
  privateLabel,
  showDetails = false,
}: ProjectRowProps) {
  const tone = project.status ? `tone-${project.status}` : "tone-private";
  const label = project.status ? statusLabels[project.status] : privateLabel;
  const stages = project.status ? stagesByStatus[project.status] : 0;

  const content: ReactNode = (
    <>
      <span className="row-index">{String(index).padStart(2, "0")}</span>

      <div>
        <div className="row-name">{project.name}</div>
        {showDetails && (
          <>
            <p className="row-desc">{project.description}</p>
            {project.tags.length > 0 && (
              <p className="row-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
            )}
          </>
        )}
      </div>

      <ul className="row-layers" aria-label="Camadas do projeto">
        {project.layers.map((layer) => (
          <li key={layer.kind}>
            <span
              className={cn(
                "dot",
                layer.status ? `tone-${layer.status}` : "tone-private",
              )}
              aria-hidden="true"
            >
              ●
            </span>
            {layer.kind}
          </li>
        ))}
      </ul>

      <div className="row-stage">
        <span className={cn("row-status", tone)}>{label}</span>
        {stages > 0 && (
          <div className="stages-bar" aria-hidden="true">
            {[1, 2, 3, 4].map((step) => (
              <i key={step} className={cn(step <= stages && "on")} />
            ))}
          </div>
        )}
      </div>

      <span className="row-go" aria-hidden="true">
        {project.href ? "→" : "·"}
      </span>
    </>
  );

  if (!project.href) {
    return <li className="row">{content}</li>;
  }

  return (
    <li>
      <a
        className="row"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    </li>
  );
}
