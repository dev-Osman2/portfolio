export const personalLinks = {
  demoUrl: "https://zad-islam.app",
  githubRepo: "https://github.com/dev-Osman2/portfolio.git",
  imagePlaceholder: "/images/test.png" // المسار الصحيح لقراءة ملف public/images/test.png
};

// ابحث عن skillsData واستبدلها بهذا الكود
export const skillsData = [
  { name: "TypeScript", icon: "/icons/typescript.webp", hoverColor: "hover:border-blue-500/50 dark:hover:border-blue-500/50" },
  { name: "Next.js", icon: "/icons/nextjs.webp", hoverColor: "hover:border-zinc-500/50 dark:hover:border-zinc-500/50" },
  { name: "React", icon: "/icons/react.webp", hoverColor: "hover:border-cyan-500/50 dark:hover:border-cyan-500/50" },
  { name: "Node.js", icon: "/icons/node.svg", hoverColor: "hover:border-green-500/50 dark:hover:border-green-500/50" },
  { name: "PostgreSQL", icon: "/icons/postgresql.webp", hoverColor: "hover:border-indigo-500/50 dark:hover:border-indigo-500/50" },
  { name: "Express.js", icon: "/icons/express.webp", hoverColor: "hover:border-neutral-500/50 dark:hover:border-neutral-500/50" },
  { name: "Tailwind", icon: "/icons/tailwind.webp", hoverColor: "hover:border-teal-500/50 dark:hover:border-teal-500/50" },
  { name: "JavaScript", icon: "/icons/javascript.webp", hoverColor: "hover:border-yellow-500/50 dark:hover:border-yellow-500/50" },
];

export const projectsData = [
  {
    id: "egypt-travel",
    title: "Egypt Travel",
    description: "Tour showcase website for Egyptian destinations with contact forms.",
    path: "~/projects/egypt-travel",
    image: "/images/egypt-tours-main.png", // استخدام الصورة الفعلية الموجودة لديك
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
  },
  {
    id: "luxor-ads",
    title: "Luxor Ads Marketing Agency",
    description: "Marketing website with 15 tools and 3000+ pages made for Google search.",
    path: "~/projects/luxor-ads",
    image: "/images/luxor-ads-main.png",
    tags: ["Next.js 15", "TypeScript", "shadcn/ui", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: "tell-me",
    title: "TellMe: Anonymous Feedback Platform",
    description: "Get anonymous feedback with real-time updates and social login.",
    path: "~/projects/tell-me",
    image: "/images/tellme-main.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "elnakhil-hotel",
    title: "Elnakhil Hotel",
    description: "Hotel website with booking forms and guest review display.",
    path: "~/projects/elnakhil-hotel",
    image: "/images/elnakhil-home.png",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Email"],
  }
];

export const workHistoryData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    date: "August 2024 - Present",
    description: "I developed client web apps using Next.js, TypeScript, and PostgreSQL.",
    achievements: [
      "Delivered 2 production apps for thousands of users, increasing development speed by 30%.",
      "Managed deployments, infrastructure, database design, and REST APIs.",
      "Shipped complete solutions including landing pages and admin dashboards."
    ],
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Saray El-Nile",
    date: "July 2024 - August 2024",
    description: "I helped develop a business data management system with SQL and Next.js.",
    achievements: [
      "Supported the team by joining meetings and code reviews.",
      "Ensured websites were responsive and worked well on mobile devices."
    ],
    skills: ["HTML", "CSS", "JavaScript", "SQL", "Next.js"]
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Saray El-Nile",
    date: "July 2024 - August 2024",
    description: "I helped develop a business data management system with SQL and Next.js.",
    achievements: [
      "Supported the team by joining meetings and code reviews.",
      "Ensured websites were responsive and worked well on mobile devices."
    ],
    skills: ["HTML", "CSS", "JavaScript", "SQL", "Next.js"]
  }
];