"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal } from "lucide-react";
import { skillsData } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10 max-w-9lg mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
      
      {/* عنوان القسم */}
      <div className="flex items-center gap-2 mb-12">
        <Terminal className="w-6 h-6 text-[#a374ff]" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
          Core Stack
        </h2>
      </div>

      {/* الشبكة بنفس الأبعاد الأصلية التي أرسلتها */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
          >
            {/* الكارت الأساسي بتدرج لوني خفيف يكبر عند التمرير */}
            <div className="relative p-6 md:p-8 lg:p-10 rounded-xl bg-gradient-to-r from-[#a374ff]/10 to-[#17f1d1]/10 hover:from-[#a374ff]/20 hover:to-[#17f1d1]/20 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-2xl">
              
              {/* طبقة إضافية للأنيميشن الداخلي */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#a374ff]/0 to-[#17f1d1]/0 opacity-0 group-hover:from-[#a374ff]/10 group-hover:to-[#17f1d1]/10 transition-opacity duration-300" />
              
              <div className="relative flex flex-col items-center gap-4">
                
                {/* حاوية الأيقونة المتطورة (Layers) */}
                <div className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 transform transition-transform duration-300 group-hover:scale-110">
                  
                  {/* 1. الإطار الملون الخلفي */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#a374ff] to-[#17f1d1] opacity-20" />
                  
                  {/* 2. الخلفية الداخلية (بيضاء في الفاتح وداكنة في الداكن) */}
                  <div className="absolute inset-[1px] rounded-2xl bg-[#f8f9fa] dark:bg-[#15222B] shadow-sm transition-colors duration-300" />
                  
                  {/* 3. التوهج الخارجي (Glow Effect) يظهر عند الـ Hover */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#a374ff] to-[#17f1d1] opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md" />
                  
                  {/* 4. الصورة (اللوجو) */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center p-3 md:p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* اسم التقنية */}
                <h3 className="font-medium text-base text-center text-slate-800 dark:text-zinc-100 transition-colors duration-300">
                  {skill.name}
                </h3>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}