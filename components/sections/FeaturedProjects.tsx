"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData, personalLinks } from "@/lib/data";

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState(projectsData[0].id);
  const activeProject =
    projectsData.find((p) => p.id === activeTab) || projectsData[0];

  return (
    <section
      id="projects"
      className="py-20 relative z-10 max-w-7xl mx-auto px-6"
    >
      {/* العنوان */}
      <div className="flex items-center gap-2 mb-12">
        <span className="text-purple-500 font-bold text-2xl">&gt;_</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* الطرف الأيسر: قائمة المشاريع */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`text-left p-5 rounded-xl border transition-all flex flex-col gap-2 relative overflow-hidden backdrop-blur-sm ${
                activeTab === project.id
                  ? "bg-zinc-900/80 border-cyan-500/40 shadow-lg shadow-cyan-500/5"
                  : "bg-zinc-900/30 border-zinc-800/60 hover:border-zinc-700/60"
              }`}
            >
              {activeTab === project.id && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-400"
                />
              )}
              <h3
                className={`font-bold text-lg ${activeTab === project.id ? "text-zinc-100" : "text-zinc-400"}`}
              >
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </button>
          ))}

          {/* زر عرض كل المشاريع */}
          <Link
            href={personalLinks.githubRepo}
            target="_blank"
            className="flex items-center justify-between p-4 mt-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium hover:opacity-90 transition-opacity text-sm"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* الطرف الأيمن: شاشة عرض المحاكاة المذهلة للمشروع المختار */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-card border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
            >
              {/* شريط الماك العلوي للأزرار الثلاثة */}
              <div className="bg-card px-4 py-3 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-zinc-500 select-none">
                  {activeProject.path}
                </div>
                <div className="w-12" />
              </div>

              {/* نافذة عرض الصورة المجهزة في الـ public */}
              <div className="relative aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden group">
                <div
                  className="w-full h-full bg-card flex flex-col items-center justify-center text-center p-8 border-b border-zinc-800 select-none"
                  style={{
                    backgroundImage: `url(${personalLinks.imagePlaceholder})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* فلتر تجميلي داكن فوق الصورة المؤقتة ليعطي طابع زجاجي متطور */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  <div className="relative z-10">
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono rounded-full uppercase tracking-widest mb-3 inline-block">
                      Live Preview Frame
                    </span>
                    <h4 className="text-2xl font-bold text-zinc-200">
                      {activeProject.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* تفاصيل المشروع والتقنيات بالأسفل */}
              <div className="p-6 md:p-8 bg-card">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                {/* شارات التقنيات المستخدمة (Badges) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* أزرار الإجراءات وروابط العرض المباشر والمستودع الموحد */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={personalLinks.demoUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Link>

                  <Link
                    href={personalLinks.githubRepo}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-zinc-800 text-zinc-400 font-medium hover:bg-zinc-900 hover:text-zinc-200 transition-all w-full sm:w-auto text-sm"
                  >
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
