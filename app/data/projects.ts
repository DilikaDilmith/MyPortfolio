export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "eduhub-lms",
    title: "EduHub LMS",
    category: "Full-Stack Enterprise",
    description:
      "A Learning Management System built with Spring Boot and React to manage institutes, courses, assignments, quizzes, attendance, fees, and student progress with five role-based dashboards.",
    image: "/projects/eduhub.png",
    tech: ["Spring Boot", "React", "MySQL", "JWT", "Tailwind"],
    github: "https://github.com/DilikaDilmith/LMS-Project-.git",
  },
  {
    slug: "task-management-system",
    title: "Task Management System",
    category: "Full-Stack Web App",
    description:
      "A task management platform with secure JWT authentication, a dashboard tracking Pending, In Progress, Completed and Overdue tasks, plus search, filter and sorting features.",
    image: "/projects/task-manager.png",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    github: "https://github.com/DilikaDilmith/task-management-system",
  },
  {
    slug: "fittrack",
    title: "FitTrack",
    category: "Mobile App",
    description:
      "A cross-platform fitness and wellness mobile app with workout plans, nutrition tracking, interactive charts, offline storage and Cloudinary image uploads.",
    image: "/projects/fittrack.jpeg",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/DilikaDilmith/FitTrack",
  },
  {
    slug: "matchmate",
    title: "MatchMate",
    category: "AI-Powered Platform",
    description:
      "A campus Lost & Found platform with an AI-based smart matching system using Hugging Face CLIP and image similarity to identify potential lost and found item matches.",
    image: "/projects/matchmate.jpg",
    tech: ["React", "Node.js", "MongoDB", "Hugging Face CLIP"],
    github: "https://github.com/Oshadi15/MatchMate",
  },
];