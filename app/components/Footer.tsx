import Link from "next/link";
import { GitBranch, Globe, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/DilikaDilmith", label: "GitHub", Icon: GitBranch },
    { href: "https://www.linkedin.com/in/dilika-dilmith-748633299/", label: "LinkedIn", Icon: Globe },
    { href: "mailto:dilikadilmith@gmail.com", label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} Dilika Dilmith. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}