import Image from "next/image";
import { PageHeading } from "@/components/ui/page-heading";
import { skillsContent } from "@/content/skills";

export function Skills() {
  const { heading, groups } = skillsContent;

  return (
    <main className="page">
      <PageHeading {...heading} />

      <div className="skills-grid">
        {groups.map((group) => (
          <div key={group.label} className="skills-group">
            <p className="group-label">{group.label}</p>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill.name}>
                  {skill.icon && (
                    <Image src={skill.icon} alt="" width={14} height={14} />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
