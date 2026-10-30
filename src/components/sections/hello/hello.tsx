import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { experienceContent } from "@/content/experiencia";
import { helloContent } from "@/content/home";
import { aboutContent } from "@/content/sobre";
import { skillsContent } from "@/content/skills";

export function Hello() {
  const { title, skillsLabel, skillNames, experienceLabel, educationLabel } =
    helloContent;

  const allSkills = skillsContent.groups.flatMap((group) => group.skills);
  const skills = skillNames
    .map((name) => allSkills.find((skill) => skill.name === name))
    .filter((skill) => skill?.icon);

  return (
    <section className="hello paper torn-both">
      <div className="shell">
        <Reveal>
          <div className="hello-head">
            <h2 className="hello-title">{title}</h2>
            <p className="hello-text">{aboutContent.paragraphs[0]}</p>
            <p className="hello-text">{aboutContent.paragraphs[3]}</p>
          </div>

          <div className="hello-grid">
            <div>
              <h3 className="hello-label">{skillsLabel}</h3>
              <ul className="skill-tiles">
                {skills.map((skill) => (
                  <li key={skill!.name} title={skill!.name}>
                    <Image
                      src={skill!.icon!}
                      alt={skill!.name}
                      width={26}
                      height={26}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="hello-label">{educationLabel}</h3>
              <ul className="hello-list">
                {aboutContent.education.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.meta[item.meta.length - 1]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="hello-label">{experienceLabel}</h3>
              <ul className="hello-list">
                {experienceContent.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.company}</span>
                    <span>{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
