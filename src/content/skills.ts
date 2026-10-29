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
        { name: "TestFlight" },
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
        { name: "RESTful APIs" },
        { name: "SQL" },
        { name: "Modelagem de Banco de Dados" },
        { name: "Supabase", icon: icon("supabase") },
      ],
    },
    {
      label: "ARCHITECTURE & TOOLING",
      skills: [
        { name: "Arquitetura Limpa" },
        { name: "Arquitetura MVVM" },
        { name: "Modularização de Software" },
        { name: "Git", icon: icon("git") },
        { name: "GitHub", icon: icon("github") },
        { name: "GitFlow" },
        { name: "Azure DevOps", icon: icon("azuredevops") },
        { name: "CI/CD" },
      ],
    },
    {
      label: "PROCESS & COLLAB",
      skills: [
        { name: "Agile/Scrum" },
        { name: "Kanban" },
        { name: "Jira", icon: icon("jira") },
      ],
    },
    {
      label: "UX/UI DESIGN",
      skills: [
        { name: "UX/UI Design" },
        { name: "Figma", icon: icon("figma") },
        { name: "Google Stitch" },
        { name: "Design responsivo" },
      ],
    },
    {
      label: "IA NO DESENVOLVIMENTO",
      note: "Uso Claude Code e Codex no dia a dia para acelerar o desenvolvimento, sem abrir mão de revisão e boas práticas.",
      skills: [
        { name: "Claude Code" },
        { name: "Codex" },
        { name: "Inteligência Artificial" },
      ],
    },
    {
      label: "IDIOMAS",
      skills: [{ name: "Português" }, { name: "Inglês (Básico)" }],
    },
  ],
};
