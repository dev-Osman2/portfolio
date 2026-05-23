"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2"
        >
          I'm Abdo,
          <br />
          Full Stack Developer
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6 pb-2"
        >
          Building Modern Web Apps
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-medium mb-6"
        >
          JavaScript | TypeScript | React | Node.js | Next.js | SQL
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          I build web applications using modern tools. I write clean code and focus on making things that work well.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link 
            href="#contact" 
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Get in Touch 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="#projects" 
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            See My Work
            <Briefcase className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}