"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10 max-w-7xl mx-auto px-6">
      {/* عنوان القسم المستوحى من نظام التيرمنال */}
      <div className="flex items-center gap-2 mb-12">
        <span className="text-purple-500 font-bold text-2xl">&gt;_</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Core Stack
        </h2>
      </div>

      {/* شبكة المهارات */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm relative overflow-hidden group`}
          >
            {/* أيقونة التقنية بداخل مربع متميز */}
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center font-bold text-xl text-zinc-100 mb-3 border border-zinc-700/30 shadow-inner group-hover:border-cyan-500/50 transition-colors`}>
              {skill.icon}
            </div>
            
            {/* اسم التقنية */}
            <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}