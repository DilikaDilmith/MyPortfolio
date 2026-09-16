import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
          👋 Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
          Dilika Dilmith
        </h1>
        <p className="mt-6 text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
          Full Stack Web Developer
        </p>
        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
          I build modern, fast, and beautiful web applications with a focus on
          great user experience and clean code.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            View My Work →
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}