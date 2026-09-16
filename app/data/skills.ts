export type SkillLevel = "core" | "advanced" | "proficient" | "learning" | "familiar";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    subtitle: "UI & CLIENT",
    skills: [
      { name: "React.js", level: "core" },
      { name: "JavaScript / TypeScript", level: "core" },
      { name: "React Native", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "HTML5 / CSS3", level: "proficient" },
    ],
  },
  {
    title: "Backend",
    subtitle: "SERVER",
    skills: [
      { name: "Java", level: "core" },
      { name: "Node.js & Express.js", level: "core" },
      { name: "Spring Boot", level: "proficient" },
      { name: "Spring Security & JWT", level: "proficient" },
      { name: "RESTful APIs", level: "proficient" },
    ],
  },
  {
    title: "Databases & Tools",
    subtitle: "STORAGE & DEVOPS",
    skills: [
      { name: "MySQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Git & GitHub", level: "proficient" },
      { name: "Postman & Maven", level: "proficient" },
      { name: "npm & Vite", level: "proficient" },
    ],
  },
];