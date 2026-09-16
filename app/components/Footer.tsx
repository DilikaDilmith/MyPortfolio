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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left — Brand */}
          <div>
            <Link
              href="#home"
              className="text-xl font-bold text-foreground inline-block"
            >
              Dilika Dilmith<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Full-Stack Developer building modern, reliable web and mobile
              applications.
            </p>
          </div>

          {/* Middle — Quick links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono mb-3">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-muted hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right — Contact + Socials */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono mb-3">
              Get In Touch
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted">
                <Mail size={14} className="text-accent" />
                <a
                  href="mailto:dilikadilmith@gmail.com"
                  className="hover:text-foreground transition-colors truncate"
                >
                  dilikadilmith@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} className="text-accent" />
                <span>Kadawatha, Sri Lanka</span>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-border bg-background/50 text-muted hover:text-foreground hover:border-accent transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted">
            © {year} Dilika Dilmith. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with{" "}
            <span className="text-foreground">Next.js</span> &amp;{" "}
            <span className="text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}