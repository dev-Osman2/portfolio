export const personalLinks = {
  demoUrl: "https://zad-islam.app",
  githubRepo: "https://github.com/dev-Osman2/portfolio.git",
  imagePlaceholder: "/images/test.png" // سيتم قراءتها من مجلد public تلقائياً
};

export const skillsData = [
  { name: "TypeScript", icon: "TS", color: "from-blue-500/20 to-blue-600/5" },
  { name: "Next.js", icon: "N", color: "from-zinc-700/20 to-zinc-800/5" },
  { name: "React", icon: "⚛", color: "from-cyan-500/20 to-cyan-600/5" },
  { name: "Node.js", icon: "node", color: "from-green-500/20 to-green-600/5" },
  { name: "PostgreSQL", icon: "🐘", color: "from-indigo-500/20 to-indigo-600/5" },
  { name: "Express.js", icon: "ex", color: "from-neutral-500/20 to-neutral-600/5" },
  { name: "Tailwind", icon: "🌊", color: "from-teal-400/20 to-teal-500/5" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-500/20 to-yellow-600/5" },
];

export const projectsData = [
  {
    id: "egypt-travel",
    title: "Egypt Travel",
    description: "Tour showcase website for Egyptian destinations with contact forms.",
    path: "~/projects/egypt-travel",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
  },
  {
    id: "luxor-ads",
    title: "Luxor Ads Marketing Agency",
    description: "Marketing website with 15 tools and 3000+ pages made for Google search.",
    path: "~/projects/luxor-ads",
    tags: ["Next.js 15", "TypeScript", "shadcn/ui", "Framer Motion", "MDX", "Tailwind CSS"],
  },
  {
    id: "tell-me",
    title: "TellMe: Anonymous Feedback Platform",
    description: "Get anonymous feedback with real-time updates and social login.",
    path: "~/projects/tell-me",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "elnakhil-hotel",
    title: "Elnakhil Hotel",
    description: "Hotel website with booking forms and guest review display.",
    path: "~/projects/elnakhil-hotel",
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
      "Delivered 2 production apps for thousands of users, increasing development speed by 30% through reusable components.",
      "Managed deployments, infrastructure, database design, authentication systems, and REST APIs.",
      "Shipped complete solutions including landing pages and admin dashboards."
    ],
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Git"]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Saray El-Nile",
    date: "July 2024 - August 2024",
    description: "I helped develop a business data management system with SQL and Next.js.",
    achievements: [
      "Supported the team by joining meetings and code reviews, showing adaptability and communication skills.",
      "Ensured websites were responsive and worked well on mobile and tablet devices."
    ],
    skills: ["HTML", "CSS", "JavaScript", "SQL", "Next.js"]
  },
  {
    id: 3,
    title: "Video Editor",
    company: "Freelance",
    date: "November 2021 - July 2024",
    description: "I edited 100+ videos for 5 clients across Instagram, YouTube, TikTok, and podcasts.",
    achievements: [
      "Kept 100% on-time delivery with strong time management and client communication.",
      "Produced content in various formats including wide screen, square, and vertical videos.",
      "Organized and labeled over 1,000 client video files for easy access."
    ],
    skills: ["Adobe Premiere Pro", "Adobe Photoshop", "DaVinci Resolve", "Adobe Audition", "Slack"]
  }
];