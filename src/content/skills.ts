import type { SkillsContent } from "@/types/skills";

const icon = (name: string) => `/icons/${name}.svg`;

export const skillsContent: SkillsContent = {
  heading: {
    label: "SKILLS",
    title: "Ferramentas e competências.",
    lead: "Tecnologias que uso no dia a dia para construir soluções escaláveis e de alta qualidade.",
  },
  groups: [
    {
      label: "MOBILE",
      skills: [
        { name: "Flutter", icon: icon("flutter") },
        { name: "Dart", icon: icon("dart") },
        { name: "TestFlight", icon: icon("apple") },
        { name: "Firebase App Distribution", icon: icon("firebase") },
      ],
    },
    {
      label: "WEB",
      skills: [
        { name: "React", icon: icon("react") },
        { name: "TypeScript", icon: icon("typescript") },
      ],
    },
    {
      label: "BACKEND & DATA",
      skills: [
        { name: "Node.js", icon: icon("nodedotjs") },
        { name: "RESTful APIs", icon: icon("openapiinitiative") },
        { name: "SQL", icon: icon("postgresql") },
        { name: "Modelagem de Banco de Dados", icon: icon("diagramsdotnet") },
        { name: "Supabase", icon: icon("supabase") },
      ],
    },
    {
      label: "ARCHITECTURE & TOOLING",
      skills: [
        { name: "Arquitetura Limpa", icon: icon("mermaid") },
        { name: "Arquitetura MVVM", icon: icon("mermaid") },
        { name: "Modularização de Software", icon: icon("mermaid") },
        { name: "Git", icon: icon("git") },
        { name: "GitHub", icon: icon("github") },
        { name: "GitFlow", icon: icon("git") },
        { name: "Azure DevOps", icon: icon("azuredevops") },
        { name: "CI/CD", icon: icon("githubactions") },
      ],
    },
    {
      label: "PROCESS & COLLAB",
      skills: [
        { name: "Agile/Scrum", icon: icon("scrumalliance") },
        { name: "Kanban", icon: icon("trello") },
        { name: "Jira", icon: icon("jira") },
      ],
    },
    {
      label: "UX/UI DESIGN",
      skills: [
        { name: "UX/UI Design", icon: icon("adobexd") },
        { name: "Figma", icon: icon("figma") },
        { name: "Google Stitch", icon: icon("google") },
        { name: "Design responsivo", icon: icon("tailwindcss") },
        { name: "Motion Graphics", icon: icon("adobeaftereffects") },
      ],
    },
    {
      label: "IA NO DESENVOLVIMENTO",
      note: "Uso Claude Code e Codex no dia a dia para acelerar o desenvolvimento, sem abrir mão de revisão e boas práticas.",
      skills: [
        { name: "Claude Code", icon: icon("claude") },
        { name: "Codex", icon: icon("openai") },
        { name: "Inteligência Artificial", icon: icon("googlegemini") },
      ],
    },
    {
      label: "IDIOMAS",
      skills: [{ name: "Português", icon: icon("googletranslate") }, { name: "Inglês (Básico)", icon: icon("googletranslate") }],
    },
  ],
};
