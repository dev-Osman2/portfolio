"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { workHistoryData } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative z-10 max-w-6xl mx-auto px-6">
      
      {/* عنوان القسم */}
      <div className="flex items-center gap-3 mb-16">
        <Briefcase className="w-8 h-8 text-purple-500" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
          Work History
        </h2>
      </div>

      {/* حاوية المسار الزمني المتناوب */}
      <div className="relative">
        
        {/* الخط العمودي الملون والمتدرج في المنتصف تماماً بالشاشات الكبيرة وعلى اليسار في الموبايل */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-zinc-900 md:-translate-x-1/2 z-0" />

        <div className="space-y-12 relative z-10">
          {workHistoryData.map((job, index) => {
            const isLeft = index % 2 === 0; // الأول والثالث على اليسار، الثاني على اليمين
            
            return (
              <div 
                key={job.id} 
                className={`flex flex-col md:flex-row items-start w-full relative ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* الدائرة المتوهجة المتمحورة على الخط بدقة */}
                <div className="absolute left-[11px] md:left-1/2 top-8 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] md:-translate-x-1/2 ring-4 ring-[#0a0a0a] z-20" />

                {/* كارت الخبرة مع أنيميشن الدخول الجانبي وتأثيرات الـ Hover الممتازة */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }} // كروت اليسار تأتي من اليسار، وكروت اليمين تأتي من اليمين
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ 
                    y: -5,
                    borderColor: "rgba(6, 182, 212, 0.4)",
                    backgroundColor: "rgba(20, 20, 25, 0.95)"
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                  className={`w-full md:w-[calc(50%-32px)] bg-[#0c0c0e]/95 border border-zinc-800/90 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-xl transition-all group pl-6 md:pl-8 ml-9 md:ml-0 ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-zinc-400 font-medium text-sm md:text-base">{job.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs md:text-sm text-zinc-300 w-fit shrink-0 h-fit">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{job.date}</span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-zinc-200 font-semibold text-sm md:text-base mb-3">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-400 text-xs md:text-sm">
                          <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* شارات التقنيات الفاخرة بالأسفل */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 group-hover:border-zinc-700/80 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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