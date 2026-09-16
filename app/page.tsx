import {
  ArrowRight,
  Send,
  GraduationCap,
  Layers,
  Target,
  Quote,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { projects } from "./data/projects";
import ContactSection from "./components/ContactSection";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SkillsSection from "./components/SkillsSection";

const stats = [
  { value: "SLIIT", label: "Undergraduate" },
  { value: "Full-Stack", label: "Focus Area" },
  { value: "4", label: "Projects Built" },
  { value: "100%", label: "Passion for Code" },
];

export default function Home() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Opportunities
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              Dilika Dilmith
            </h1>

            <p className="mt-5 text-base md:text-lg font-medium text-accent leading-relaxed">
              Information Technology Undergraduate · Aspiring Software Engineer · Full-Stack Developer
            </p>

            <p className="mt-6 text-muted leading-relaxed max-w-xl">
              Hi, I'm Dilika — an IT undergraduate at SLIIT with a strong
              interest in Software Engineering and Full-Stack Development. I
              enjoy building modern, user-friendly web and mobile applications
              and turning ideas into practical digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-colors"
              >
                Contact Me
                <Send size={18} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/DilikaDilmith"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-accent transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dilika-dilmith-748633299/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-accent transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="mailto:dilikadilmith@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-accent transition-colors"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT — Profile placeholder */}
          <div className="relative">
            <div className="relative aspect-square max-w-sm mx-auto rounded-3xl border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-muted">
                  Profile photo coming soon
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 md:left-8 px-3 py-1.5 rounded-lg border border-border bg-background/90 backdrop-blur text-xs font-medium text-foreground">
              Dilika Dilmith
            </div>

            <div className="absolute bottom-4 right-4 md:right-8 px-3 py-1.5 rounded-lg border border-border bg-background/90 backdrop-blur text-xs font-medium text-accent">
              Full-Stack Dev
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <p className="text-xl md:text-2xl font-bold text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-mono text-muted">01</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              About Me
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-3xl">
            Crafting software with precision &amp; purpose
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* LEFT — Bio */}
            <div className="space-y-5">
              <p className="text-muted leading-relaxed">
                I have experience working with technologies such as{" "}
                <span className="text-foreground font-medium">Java</span>,{" "}
                <span className="text-foreground font-medium">JavaScript</span>,{" "}
                <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Node.js</span>,{" "}
                <span className="text-foreground font-medium">Express.js</span>,{" "}
                <span className="text-foreground font-medium">Spring Boot</span>,{" "}
                <span className="text-foreground font-medium">MongoDB</span>, and{" "}
                <span className="text-foreground font-medium">MySQL</span>.
              </p>

              <p className="text-muted leading-relaxed">
                Currently, I'm focused on improving my skills in Java, Spring
                Boot, React, and software development best practices while
                working on personal and academic projects. I believe in writing
                clean code, building reusable components, and delivering
                solutions that create real value.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Student
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    SLIIT
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Layers size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Projects
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    4 Completed
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Focus
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Full-Stack
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Quote size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Passion
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    100% Code
                  </p>
                </div>
              </div>

              <div className="mt-6 p-5 rounded-xl border border-border bg-card">
                <Quote size={18} className="text-accent mb-2" />
                <p className="text-sm italic text-muted leading-relaxed">
                  "My goal is to become a skilled Software Engineer who can build
                  reliable, scalable, and meaningful software solutions."
                </p>
              </div>
            </div>

            {/* RIGHT — Code card */}
            <div className="relative">
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono text-muted">
                    DilikaDilmith.java
                  </span>
                </div>

                <pre className="p-5 text-xs md:text-[13px] font-mono leading-relaxed overflow-x-auto text-foreground">
                  <code>
{`/**
 * @author  Dilika Dilmith
 * @role    Full-Stack Developer
 * @focus   Java · Spring Boot · React
 */
public class Developer {

  private String name     = "Dilika Dilmith";
  private String location = "Sri Lanka";
  private String[] stack  = {
    "Java", "Spring Boot", "React",
    "Node.js", "Express.js", "MongoDB", "MySQL"
  };

  public String getGoal() {
    return "Build reliable & scalable software";
  }

  public boolean isLearning() {
    return true;
  }
}`}
                  </code>
                </pre>

                <div className="flex items-center justify-between px-4 py-3 border-t border-border text-xs text-muted">
                  <span className="font-mono">public class Developer</span>
                  <span className="font-mono text-accent">Java 17 · Spring Boot 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SkillsSection />
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="border-t border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <ContactSection />
    </main>
  );
}