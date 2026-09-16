import { ArrowRight, GitBranch, Globe, Mail, Send } from "lucide-react";

const stats = [
  { value: "SLIIT", label: "Undergraduate" },
  { value: "Full-Stack", label: "Focus Area" },
  { value: "4", label: "Projects Built" },
  { value: "100%", label: "Passion for Code" },
];

export default function Home() {
  return (
    <main>
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
                <GitBranch size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dilika-dilmith-748633299/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-accent transition-colors"
              >
                <Globe size={18} />
              </a>
              <a
                href="mailto:dilikadilmith@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-accent transition-colors"
              >
                <Mail size={18} />
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

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-4 left-4 md:left-8 px-3 py-1.5 rounded-lg border border-border bg-background/90 backdrop-blur text-xs font-medium text-foreground">
              Dilika Dilmith
            </div>

            {/* Floating badge — bottom right */}
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
    </main>
  );
}