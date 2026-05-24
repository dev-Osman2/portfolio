"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData, personalLinks } from "@/lib/data";

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState(projectsData[0].id);
  const activeProject = projectsData.find((p) => p.id === activeTab) || projectsData[0];

  return (
    <section className="py-20 relative z-10 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-2 mb-12">
        <span className="text-purple-500 font-bold text-2xl">&gt;_</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* أزرار المشاريع (يسار) مع الخط الجانبي النيون */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`text-left p-5 rounded-xl border transition-all flex flex-col gap-2 relative overflow-hidden backdrop-blur-md cursor-pointer ${
                activeTab === project.id
                  ? "bg-zinc-200/50 dark:bg-zinc-900/80 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                  : "bg-zinc-100/30 dark:bg-zinc-900/30 border-zinc-300 dark:border-zinc-800/60 hover:border-zinc-400 dark:hover:border-zinc-700/60"
              }`}
            >
              {activeTab === project.id && (
                <motion.div
                  layoutId="activeGlowProjects"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-400"
                />
              )}
              <h3 className={`font-bold text-lg ${activeTab === project.id ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </button>
          ))}

          <Link href={personalLinks.githubRepo} target="_blank" className="flex items-center justify-between p-4 mt-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-medium hover:opacity-90 transition-opacity text-sm">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* شاشة العرض (يمين) - نافذة الماك الفاخرة مع الـ Hover */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-zinc-50 dark:bg-[#121214] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] dark:hover:border-cyan-500/30 transition-all group duration-500"
            >
              <div className="bg-zinc-200/50 dark:bg-[#18181c] px-4 py-3 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  {activeProject.path}
                </div>
                <div className="w-12" />
              </div>

              {/* الصورة مع تأثير التكبير عند التمرير */}
              <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-950 flex items-center justify-center overflow-hidden">
                <div
                  className="w-full h-full bg-zinc-300 dark:bg-zinc-900 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${activeProject.image || personalLinks.imagePlaceholder})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 via-zinc-50/10 dark:via-zinc-950/20 to-transparent opacity-80" />
                </div>
              </div>

              <div className="p-6 md:p-8 bg-zinc-50 dark:bg-[#121214]">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{activeProject.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-200 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href={personalLinks.demoUrl} target="_blank" className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto text-sm shadow-sm cursor-pointer">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Link>

                  <Link href={personalLinks.githubRepo} target="_blank" className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all w-full sm:w-auto text-sm cursor-pointer">
                    <ArrowRight className="w-4 h-4" />
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}