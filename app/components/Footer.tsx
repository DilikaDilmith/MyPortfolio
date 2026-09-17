import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/DilikaDilmith", label: "GitHub", Icon: FaGithub },
    { href: "https://www.linkedin.com/in/dilika-dilmith-748633299/", label: "LinkedIn", Icon: FaLinkedinIn },
    { href: "mailto:dilikadilmith@gmail.com", label: "Email", Icon: FaEnvelope },
  ];

  return (
    <footer className="border-t border-border bg-card/30 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left — Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="#home"
              className="text-lg sm:text-xl font-bold text-foreground inline-block"
            >
              Dilika Dilmith<span className="text-accent">.</span>
            </Link>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted leading-relaxed max-w-xs">
              Full-Stack Developer building modern, reliable web and mobile
              applications.
            </p>
          </div>

          {/* Middle — Quick links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono mb-2.5 sm:mb-3">
              Quick Links
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#home" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right — Contact + Socials */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono mb-2.5 sm:mb-3">
              Get In Touch
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                <Mail size={14} className="text-accent shrink-0" />
                <a
                  href="mailto:dilikadilmith@gmail.com"
                  className="hover:text-foreground transition-colors truncate"
                >
                  dilikadilmith@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                <MapPin size={14} className="text-accent shrink-0" />
                <span>Kadawatha, Sri Lanka</span>
              </li>
            </ul>

            <div className="mt-3.5 sm:mt-4 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-border bg-background/50 text-muted hover:text-foreground hover:border-accent transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-muted">
            © {year} Dilika Dilmith. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-muted">
            Built with{" "}
            <span className="text-foreground">Next.js</span> &amp;{" "}
            <span className="text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}