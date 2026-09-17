import {
  ArrowRight,
  Send,
  GraduationCap,
  Layers,
  Target,
  Quote,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
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
    <main className="overflow-x-hidden">
      {/* ============ HERO ============ */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28"
      >
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Opportunities
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.15] sm:leading-[1.1]">
              Dilika Dilmith
            </h1>

            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg font-medium text-accent leading-relaxed">
              Information Technology Undergraduate · Aspiring Software Engineer · Full-Stack Developer
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              Hi, I'm Dilika — an IT undergraduate at SLIIT with a strong
              interest in Software Engineering and Full-Stack Development. I
              enjoy building modern, user-friendly web and mobile applications
              and turning ideas into practical digital solutions.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="/resume.pdf"
                download="Dilika_Dilmith_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-all shadow-sm"
              >
                <Download
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5 text-accent"
                />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-card transition-colors"
              >
                Contact Me
                <Send size={16} />
              </a>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-3">
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

          {/* RIGHT — Profile photo */}
          <div className="relative min-w-0">
            <div className="relative aspect-square max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
              <Image
                src="/profile.jpg"
                alt="Dilika Dilmith"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 400px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:left-8 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-border bg-background/90 backdrop-blur text-[11px] sm:text-xs font-medium text-foreground shadow-xs">
              Dilika Dilmith
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:right-8 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-border bg-background/90 backdrop-blur text-[11px] sm:text-xs font-medium text-accent shadow-xs">
              Full-Stack Dev
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 sm:p-5 rounded-xl border border-border bg-card"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-mono text-muted">01</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              About Me
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-3xl">
            Crafting software with precision &amp; purpose
          </h2>

          <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
            {/* LEFT — Bio */}
            <div className="space-y-4 sm:space-y-5 min-w-0">
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                I'm an{" "}
                <span className="text-foreground font-medium">
                  Information Technology undergraduate at SLIIT
                </span>{" "}
                with a strong passion for software engineering and full-stack
                development. I enjoy turning ideas into practical digital
                solutions — building modern, user-friendly web and mobile
                applications that solve real problems.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                I'm currently following the{" "}
                <span className="text-foreground font-medium">MERN Stack</span>{" "}
                development path — working with{" "}
                <span className="text-foreground font-medium">MongoDB</span>,{" "}
                <span className="text-foreground font-medium">Express.js</span>,{" "}
                <span className="text-foreground font-medium">React</span>, and{" "}
                <span className="text-foreground font-medium">Node.js</span> —
                while also building enterprise-grade backends with{" "}
                <span className="text-foreground font-medium">Java</span> and{" "}
                <span className="text-foreground font-medium">Spring Boot</span>
                . I have hands-on experience with{" "}
                <span className="text-foreground font-medium">RESTful APIs</span>
                ,{" "}
                <span className="text-foreground font-medium">
                  JWT authentication
                </span>
                ,{" "}
                <span className="text-foreground font-medium">MySQL</span>,{" "}
                <span className="text-foreground font-medium">MongoDB</span>, and{" "}
                <span className="text-foreground font-medium">
                  React Native
                </span>{" "}
                for cross-platform mobile apps.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                My goal is to become a skilled{" "}
                <span className="text-foreground font-medium">
                  Software Engineer
                </span>{" "}
                who builds reliable, scalable, and meaningful software
                solutions. I'm always learning, always building, and always
                looking for opportunities to grow.
              </p>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={16} className="text-accent" />
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted">
                      Student
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    SLIIT
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Layers size={16} className="text-accent" />
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted">
                      Projects
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    4 Completed
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={16} className="text-accent" />
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted">
                      Focus
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    MERN + Spring Boot
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <Quote size={16} className="text-accent" />
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted">
                      Passion
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    100% Code
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-5 rounded-xl border border-border bg-card">
                <Quote size={18} className="text-accent mb-2" />
                <p className="text-xs sm:text-sm italic text-muted leading-relaxed">
                  "My goal is to become a skilled Software Engineer who can build
                  reliable, scalable, and meaningful software solutions."
                </p>
              </div>
            </div>

            {/* RIGHT — Code card */}
            <div className="relative min-w-0">
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
                <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-border">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2.5 sm:ml-3 text-[11px] sm:text-xs font-mono text-muted">
                    DilikaDilmith.java
                  </span>
                </div>

                <pre className="p-3 sm:p-5 text-[10px] sm:text-xs md:text-[13px] font-mono leading-relaxed overflow-x-auto text-foreground">
                  <code>
                    {`/**
 * @author  Dilika Dilmith
 * @role    Full-Stack Developer
 * @focus   MERN Stack · Spring Boot · React Native
 */
public class Developer {

  private String name      = "Dilika Dilmith";
  private String location  = "Sri Lanka";
  private String education = "IT Undergraduate @ SLIIT";
  private String[] stack   = {
    "MongoDB", "Express.js", "React", "Node.js",
    "Java", "Spring Boot", "MySQL", "React Native"
  };

  public String getGoal() {
    return "Build reliable, scalable & meaningful software";
  }

  public boolean isLearning() {
    return true;
  }
}`}
                  </code>
                </pre>

                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 border-t border-border text-[11px] sm:text-xs text-muted">
                  <span className="font-mono truncate">public class Developer</span>
                  <span className="font-mono text-accent text-[10px] sm:text-xs shrink-0">MERN · Java · Spring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
          <SkillsSection />
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="border-t border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <ContactSection />
    </main>
  );
}