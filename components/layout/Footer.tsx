"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-50 bg-[#fbfbfd] dark:bg-[#09090b] border-t border-slate-200 dark:border-[#1C2A36] pt-16 pb-8 px-6 mt-10 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* الجزء العلوي: اللوجو، الروابط، وأيقونات التواصل */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* اللوجو (اسمك بتدرج لوني) */}
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-[#a374ff] to-[#17f1d1] bg-clip-text text-transparent">
            Osman
          </Link>

          {/* روابط التنقل السريعة */}
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600 dark:text-zinc-400">
            <li><Link href="#about" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">About Me</Link></li>
            <li><Link href="#skills" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Projects</Link></li>
            <li><Link href="#experience" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Work History</Link></li>
            <li><Link href="#contact" className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">Contact</Link></li>
          </ul>

          {/* أيقونات التواصل الاجتماعي (SVG مباشر لضمان العمل 100%) */}
          <div className="flex items-center gap-5 text-slate-500 dark:text-zinc-400">
            {/* GitHub */}
            <Link href="https://github.com/OsmanTaher" target="_blank" className="hover:text-[#a374ff] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </Link>
            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/osman-taher-661724326" target="_blank" className="hover:text-[#17f1d1] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            {/* Email */}
            <Link href="mailto:fciluxor2027@gmail.com" target="_blank" className="hover:text-[#a374ff] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </Link>
            {/* WhatsApp */}
            <Link href="https://wa.me/201118731783" target="_blank" className="hover:text-[#17f1d1] transition-colors">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </Link>
          </div>
        </div>

        {/* الجزء السفلي: حقوق النشر وزر العودة للأعلى */}
        <div className="pt-8 border-t border-slate-200 dark:border-[#1C2A36] flex flex-col sm:flex-row items-center justify-between gap-4 w-full text-slate-500 dark:text-zinc-500 text-xs font-medium select-none">
          <div>
            &copy; {new Date().getFullYear()} Osman. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#a374ff] dark:hover:text-[#17f1d1] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}