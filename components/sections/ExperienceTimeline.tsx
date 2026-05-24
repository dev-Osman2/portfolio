"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { workHistoryData } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="pb-20 relative z-10 max-w-9xl mx-auto px-6"
    >
      {/* عنوان القسم */}
      <div className="flex items-center gap-3 mb-16">
        <Briefcase className="w-8 h-8 text-[#a374ff]" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
          Work History
        </h2>
      </div>

      {/* حاوية المسار الزمني المتناوب */}
      <div className="relative">
        {/* الخط العمودي بتدرج الألوان المطلوب (#a374ff إلى #17f1d1) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#a374ff] to-[#17f1d1] md:-translate-x-1/2 z-0 opacity-50" />

        <div className="space-y-12 relative z-10">
          {workHistoryData.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={job.id}
                className={`flex flex-col md:flex-row items-start w-full relative ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* الدائرة المتوهجة على الخط */}
                <div className="absolute left-[11px] md:left-1/2 top-8 w-3 h-3 rounded-full bg-[#17f1d1] shadow-[0_0_12px_#17f1d1] md:-translate-x-1/2 ring-4 ring-[#fbfbfd] dark:ring-[#09090b] z-20 transition-colors" />

                {/* كارت الخبرة بنفس تدرج وتأثير SkillsSection بالمللي */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                  className={`relative w-full md:w-[calc(50%-32px)] p-6 md:p-8 rounded-2xl transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-2xl bg-gradient-to-r from-[#a374ff]/10 to-[#17f1d1]/10 hover:from-[#a374ff]/20 hover:to-[#17f1d1]/20 pl-6 md:pl-8 ml-9 md:ml-0 ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* طبقة إضافية للأنيميشن الداخلي (تزيد قوة اللون عند الـ Hover) */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#a374ff]/0 to-[#17f1d1]/0 opacity-0 group-hover:from-[#a374ff]/10 group-hover:to-[#17f1d1]/10 transition-opacity duration-300" />

                  {/* حاوية المحتوى لضمان بقائه فوق طبقة الخلفية */}
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        {/* العنوان */}
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-[#17f1d1]">
                          {job.title}
                        </h3>
                        {/* اسم الشركة */}
                        <span className="text-slate-600 dark:text-zinc-400 font-medium text-sm md:text-base">
                          {job.company}
                        </span>
                      </div>

                      {/* كبسولة التاريخ (زجاجية لتلائم التدرج اللوني للخلفية) */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-black/20 border border-slate-200/50 dark:border-white/10 text-xs md:text-sm text-slate-800 dark:text-zinc-200 w-fit shrink-0 h-fit backdrop-blur-sm">
                        <Calendar className="w-3.5 h-3.5 text-[#17f1d1]" />
                        <span>{job.date}</span>
                      </div>
                    </div>

                    {/* الوصف */}
                    <p className="text-slate-700 dark:text-zinc-300 text-sm md:text-base mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* الإنجازات */}
                    <div className="mb-6">
                      <h4 className="text-slate-900 dark:text-zinc-100 font-semibold text-sm md:text-base mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-slate-700 dark:text-zinc-300 text-xs md:text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-[#a374ff] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* شارات التقنيات الفاخرة بالأسفل (زجاجية أيضاً) */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-white/10">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/40 dark:bg-black/20 text-slate-800 dark:text-zinc-200 border border-slate-200/50 dark:border-white/10 transition-colors cursor-default backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* مساحة فارغة موازية للكارت في الشاشات الكبيرة للحفاظ على توازن الـ Layout */}
                <div className="hidden md:block w-[calc(50%-32px)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}