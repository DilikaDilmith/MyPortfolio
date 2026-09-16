"use client";

import { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IconType } from "react-icons";

type DetailedSkill = {
  name: string;
  level: "core" | "proficient";
  tag: string;
  icon: IconType;
  brandColor: string;
};

type CategoryData = {
  id: string;
  title: string;
  role: string;
  icon: typeof Code2;
  gradientBorder: string;
  accentBadge: string;
  skills: DetailedSkill[];
};

const categories: CategoryData[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    role: "UI & Client Architecture",
    icon: Code2,
    gradientBorder: "from-sky-500/40 via-blue-500/20 to-transparent",
    accentBadge: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      {
        name: "React.js",
        level: "core",
        tag: "Hooks · SPA · Components",
        icon: SiReact,
        brandColor: "#61DAFB",
      },
      {
        name: "JavaScript / TypeScript",
        level: "core",
        tag: "ES6+ · Type Safety · Async",
        icon: SiTypescript,
        brandColor: "#3178C6",
      },
      {
        name: "React Native",
        level: "proficient",
        tag: "Mobile Apps · Expo · UI",
        icon: SiReact,
        brandColor: "#0284C7",
      },
      {
        name: "Tailwind CSS",
        level: "proficient",
        tag: "Modern Responsive Design",
        icon: SiTailwindcss,
        brandColor: "#38BDF8",
      },
      {
        name: "HTML5 / CSS3",
        level: "proficient",
        tag: "Semantic Markup · Flex · Grid",
        icon: SiHtml5,
        brandColor: "#E34F26",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    role: "Server, APIs & Microservices",
    icon: Server,
    gradientBorder: "from-emerald-500/40 via-teal-500/20 to-transparent",
    accentBadge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      {
        name: "Java",
        level: "core",
        tag: "OOP · Collections · Concurrency",
        icon: FaJava,
        brandColor: "#EA2D2E",
      },
      {
        name: "Node.js & Express.js",
        level: "core",
        tag: "REST Endpoints · Middleware",
        icon: SiNodedotjs,
        brandColor: "#5FA04E",
      },
      {
        name: "Spring Boot",
        level: "proficient",
        tag: "MVC · Dependency Injection · JPA",
        icon: SiSpringboot,
        brandColor: "#6DB33F",
      },
      {
        name: "Spring Security & JWT",
        level: "proficient",
        tag: "RBAC · Auth · Token Security",
        icon: SiSpringsecurity,
        brandColor: "#10B981",
      },
      {
        name: "RESTful APIs",
        level: "proficient",
        tag: "API Contract · JSON · CRUD",
        icon: Layers,
        brandColor: "#3B82F6",
      },
    ],
  },
  {
    id: "tools",
    title: "Databases & DevOps",
    role: "Data Persistence & Tooling",
    icon: Database,
    gradientBorder: "from-indigo-500/40 via-purple-500/20 to-transparent",
    accentBadge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    skills: [
      {
        name: "MySQL",
        level: "proficient",
        tag: "Relational Schemas · Queries",
        icon: SiMysql,
        brandColor: "#4479A1",
      },
      {
        name: "MongoDB",
        level: "proficient",
        tag: "NoSQL · Aggregations · Mongoose",
        icon: SiMongodb,
        brandColor: "#47A248",
      },
      {
        name: "Git & GitHub",
        level: "proficient",
        tag: "Version Control · Collaboration",
        icon: SiGit,
        brandColor: "#F05032",
      },
      {
        name: "Postman & Maven",
        level: "proficient",
        tag: "API Testing · Build Automation",
        icon: SiPostman,
        brandColor: "#FF6C37",
      },
      {
        name: "npm & Vite",
        level: "proficient",
        tag: "Fast Bundling · Package Mgmt",
        icon: SiVite,
        brandColor: "#8B5CF6",
      },
    ],
  },
];

export default function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const displayedCategories =
    selectedFilter === "all"
      ? categories
      : categories.filter((c) => c.id === selectedFilter);

  return (
    <div>
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-mono text-muted">02</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Expertise
            </span>
            <span className="h-px w-16 bg-border" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Technical Toolkit
          </h2>
          <p className="mt-2 text-muted max-w-xl text-sm sm:text-base">
            Modern frameworks, languages, and developer tools I leverage to build high-performance software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl border border-border bg-card/60 backdrop-blur-sm self-start md:self-end overflow-x-auto max-w-full">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedFilter === "all"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted hover:text-foreground hover:bg-background/40"
            }`}
          >
            All Tools
          </button>
          <button
            onClick={() => setSelectedFilter("frontend")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedFilter === "frontend"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted hover:text-foreground hover:bg-background/40"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setSelectedFilter("backend")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedFilter === "backend"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted hover:text-foreground hover:bg-background/40"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setSelectedFilter("tools")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              selectedFilter === "tools"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted hover:text-foreground hover:bg-background/40"
            }`}
          >
            Databases & DevOps
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div
        className={`grid gap-6 ${
          selectedFilter === "all"
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 max-w-2xl mx-auto"
        }`}
      >
        {displayedCategories.map((cat) => {
          const CatIcon = cat.icon;

          return (
            <div
              key={cat.id}
              className="relative rounded-2xl border border-border/80 bg-card/60 hover:bg-card/90 backdrop-blur-sm p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 flex flex-col justify-between group"
            >
              {/* Top ambient glow line */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${cat.gradientBorder} rounded-full`}
              />

              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-background/80 border border-border flex items-center justify-center text-accent shadow-sm group-hover:scale-105 transition-transform">
                      <CatIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-mono text-muted tracking-wide uppercase mt-0.5">
                        {cat.role}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full border border-border/60 bg-background/60 text-[10px] font-mono text-muted">
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Skill List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    const isCore = skill.level === "core";

                    return (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center justify-between p-3 rounded-xl border border-border/60 bg-background/40 hover:bg-background/80 hover:border-border transition-all duration-200 hover:translate-x-1"
                      >
                        {/* Left: Brand Icon + Title + Subtitle */}
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-border/50 bg-background/90 group-hover/skill:border-border transition-colors shadow-xs"
                            style={{
                              color: skill.brandColor,
                            }}
                          >
                            <SkillIcon size={16} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-semibold text-foreground group-hover/skill:text-accent transition-colors truncate">
                                {skill.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-muted truncate">
                              {skill.tag}
                            </p>
                          </div>
                        </div>

                        {/* Right: Badge */}
                        <div className="shrink-0 ml-2">
                          {isCore ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-[10px] font-mono font-medium text-accent">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              CORE
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-border/70 bg-card/60 text-[10px] font-mono text-muted">
                              PROFICIENT
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Highlight Strip */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            <Zap size={18} />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground">Full-Stack Synthesis</h4>
            <p className="text-[11px] text-muted leading-tight mt-0.5">
              Connecting responsive React UIs with robust Spring Boot & Express services.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground">Enterprise Security</h4>
            <p className="text-[11px] text-muted leading-tight mt-0.5">
              Role-based access control, JWT tokens, and secure state handling.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground">Modern Engineering</h4>
            <p className="text-[11px] text-muted leading-tight mt-0.5">
              Clean architecture, relational & NoSQL schemas, and Git workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
