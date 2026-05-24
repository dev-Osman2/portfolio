"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { projectsData, personalLinks } from "@/lib/data";

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState(projectsData[0].id);
  const activeProject = projectsData.find((p) => p.id === activeTab) || projectsData[0];

  // التبديل التلقائي كل 5 ثوانٍ
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = projectsData.findIndex(p => p.id === activeTab);
      const nextIndex = (currentIndex + 1) % projectsData.length;
      setActiveTab(projectsData[nextIndex].id);
    }, 5000);
    
    // تنظيف المؤقت عند تغيير التبويب يدوياً ليبدأ الحساب من جديد
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="projects" className="py-20 relative z-10 max-w-[92rem] mx-auto px-4 w-full">
      <div className="flex items-center gap-3 mb-12">
        <Terminal className="w-7 h-7 text-[#a374ff]" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
          Featured Projects
        </h2>
      </div>

      {/* تقسيم العرض: 5 أعمدة للقائمة (40%) و 7 أعمدة للعرض (60%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* أزرار المشاريع (يسار) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden backdrop-blur-md cursor-pointer ${
                activeTab === project.id
                  ? "bg-white/80 dark:bg-white/5 border-[#17f1d1]/40 shadow-lg shadow-[#17f1d1]/5"
                  : "bg-white/30 dark:bg-black/20 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
              }`}
            >
              {activeTab === project.id && (
                <motion.div
                  layoutId="activeGlowProjects"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#a374ff] to-[#17f1d1]"
                />
              )}
              <h3 className={`font-bold text-lg transition-colors ${activeTab === project.id ? "text-slate-900 dark:text-[#17f1d1]" : "text-slate-600 dark:text-zinc-400"}`}>
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-zinc-500 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </button>
          ))}

          <Link href={personalLinks.githubRepo} target="_blank" className="flex items-center justify-between p-4 mt-2 rounded-xl bg-gradient-to-r from-[#a374ff]/10 to-[#17f1d1]/10 border border-[#a374ff]/20 text-slate-800 dark:text-[#17f1d1] font-medium hover:opacity-90 transition-opacity text-sm">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* شاشة العرض (يمين) - الحاوية ثابتة تماماً لا تتحرك */}
        <div className="lg:col-span-7 flex flex-col w-full bg-white dark:bg-[#0c0c0e] border border-slate-200 dark:border-[#1C2A36] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* الشريط العلوي الثابت للنافذة */}
          <div className="bg-slate-100 dark:bg-[#15222B] px-4 py-3 border-b border-slate-200 dark:border-[#1C2A36] flex items-center justify-between relative z-20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-zinc-500">
              {activeProject.path}
            </div>
            <div className="w-12" />
          </div>

          {/* منطقة الصورة - الأنيميشن يطبق على الصورة المنزلقة للداخل فقط */}
          <div className="relative aspect-video bg-slate-200 dark:bg-black/40 flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 60 }}      // الصورة الجديدة تأتي من الأسفل
                animate={{ opacity: 1, y: 0 }}       // تستقر في المنتصف
                exit={{ opacity: 0, y: -60 }}        // الصورة القديمة تصعد للأعلى وتختفي
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // حركة مريحة للعين مثل Apple
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${activeProject.image || personalLinks.imagePlaceholder})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center'
                }}
              >
                {/* ظل خفيف فوق الصورة لتحسين التباين */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c0c0e] via-white/5 dark:via-black/10 to-transparent opacity-90" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* منطقة النصوص والأزرار أسفل الصورة - تتلاشى بلطف وتتغير بدون تحريك الحاوية */}
          <div className="relative h-[220px] md:h-[180px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-2">
                  {activeProject.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link href={personalLinks.demoUrl} target="_blank" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#a374ff] to-[#17f1d1] text-white font-medium hover:opacity-90 transition-opacity w-full sm:w-auto text-sm shadow-md">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>

                    <Link href={personalLinks.githubRepo} target="_blank" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 font-medium hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all w-full sm:w-auto text-sm">
                      <ArrowRight className="w-4 h-4" />
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}