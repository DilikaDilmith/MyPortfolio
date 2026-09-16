import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} Dilika Dilmith. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/your-username"
              target="_blank"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/your-username"
              target="_blank"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:your-email@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
