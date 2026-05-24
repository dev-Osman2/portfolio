"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal } from "lucide-react";
import { skillsData } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10 max-w-7xl mx-auto px-6">
      
      {/* العنوان مع أيقونة التيرمنال التي تفضلها */}
      <div className="flex items-center gap-3 mb-12">
        <Terminal className="w-7 h-7 text-purple-500" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Core Stack
        </h2>
      </div>

      {/* شبكة المهارات: تم ضبطها لـ 8 أعمدة في الشاشات الكبيرة لتكون المربعات صغيرة وأنيقة */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl bg-zinc-50/80 dark:bg-[#0c0c0e]/90 border border-zinc-200 dark:border-zinc-800/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] backdrop-blur-sm transition-all group cursor-pointer ${skill.hoverColor}`}
          >
            {/* حاوية الصورة المتجاوبة (تم تصغير الحجم ليكون أنيقاً) */}
            <div className="w-12 h-12 relative flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src={skill.icon} 
                alt={`${skill.name} logo`}
                width={48} 
                height={48} 
                className="object-contain drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
              />
            </div>
            
            {/* اسم التقنية */}
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100 transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}