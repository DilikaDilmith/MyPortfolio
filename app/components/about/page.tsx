import { GraduationCap, MapPin, Code2, Download, CheckCircle2 } from "lucide-react";
import PageHeader from "../PageHeader";

const currentlyDoing = [
  "Studying Information Technology at SLIIT",
  "Building full-stack projects with Spring Boot and React",
  "Improving my skills in Java and software engineering practices",
  "Open to internship and junior developer opportunities",
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Me"
        subtitle="Get to know more about my background, experience, and what drives me as a developer."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Bio + Info Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Who I am
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm an{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Information Technology undergraduate at SLIIT
              </span>{" "}
              with a strong passion for software engineering and full-stack
              development. I enjoy turning ideas into practical digital
              solutions — building modern, user-friendly web and mobile
              applications that solve real problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm currently following the{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                MERN Stack
              </span>{" "}
              development path — working with{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                MongoDB
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Express.js
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                React
              </span>
              , and{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Node.js
              </span>{" "}
              — while also building enterprise-grade backends with{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Java
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Spring Boot
              </span>
              . I have hands-on experience with RESTful APIs, JWT
              authentication, MySQL, MongoDB, and React Native for
              cross-platform mobile apps.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My goal is to become a skilled Software Engineer who builds
              reliable, scalable, and meaningful software solutions. I'm always
              learning, always building, and always looking for opportunities to
              grow.
            </p>

            {/* Download CV button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                BSc (Hons) in Information Technology
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                SLIIT — Sri Lanka
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-3 mb-2">
                <Code2
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Focus
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full-Stack Web Development
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                MERN Stack · Spring Boot · React Native
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-3 mb-2">
                <MapPin
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Location
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Currently Doing */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            What I'm Currently Doing
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {currentlyDoing.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
              >
                <CheckCircle2
                  size={20}
                  className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}