"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About Me", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Work History", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);

    // مراقب الأقسام التلقائي لمتابعة السكرول
    const observerOptions = { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 };
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-[92rem] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* اللوجو */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold bg-gradient-to-r from-[#a374ff] to-[#17f1d1] bg-clip-text text-transparent">
            Osman
          </span>
        </Link>

        {/* روابط الديسكتوب مع الخط المتحرك (Sliding Line Indicator) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative py-2">
                <Link 
                  href={item.href} 
                  className={`transition-colors relative z-10 ${isActive ? "text-slate-900 dark:text-white font-semibold" : "hover:text-[#a374ff] dark:hover:text-[#17f1d1]"}`}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="navbar-line"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a374ff] to-[#17f1d1] z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* الأيقونات وزر الوضع الليلي للديسكتوب */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-4 text-slate-500 dark:text-zinc-400 border-r border-slate-200 dark:border-zinc-800 pr-5">
            <Link href="https://github.com/OsmanTaher" target="_blank" className="hover:text-[#a374ff] transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </Link>
          </div>
          
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-slate-500 dark:text-zinc-400 hover:text-[#17f1d1] transition-colors cursor-pointer">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* أزرار الموبايل (زر الوضع الليلي + زر الهامبرغر للقائمة) */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-slate-500 dark:text-zinc-400 hover:text-[#17f1d1] transition-colors cursor-pointer">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-500 dark:text-zinc-400 hover:text-[#a374ff] transition-colors cursor-pointer">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 🚀 السحر هنا: جسم قائمة الموبايل المنسدلة التي كانت مفقودة 🚀 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-2 text-base font-medium text-slate-600 dark:text-zinc-400">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)} // إغلاق القائمة فور الضغط على أي رابط
                      className={`block w-full py-3 px-2 rounded-lg transition-colors ${isActive ? "bg-slate-100 dark:bg-white/5 text-[#a374ff] dark:text-[#17f1d1]" : "hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#a374ff]"}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              
              {/* أيقونات التواصل الاجتماعي داخل قائمة الموبايل */}
              <li className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center gap-6 px-2">
                <Link href="https://github.com/OsmanTaher" target="_blank" className="text-slate-500 dark:text-zinc-400 hover:text-[#a374ff] transition-colors">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/osman-taher-661724326" target="_blank" className="text-slate-500 dark:text-zinc-400 hover:text-[#17f1d1] transition-colors">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}