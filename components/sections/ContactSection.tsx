"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUp, MessageSquare, GitGraph, Link2 } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // محاكاة الإرسال
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className=" relative z-10 max-w-9xl mx-auto px-6 w-full">
      {/* عنوان القسم */}
      <div className="flex items-center gap-3 mb-16">
        <MessageSquare className="w-8 h-8 text-[#a374ff]" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
          Let's Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* الجانب الأيسر: معلومات التواصل والشبكات الاجتماعية */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-4 transition-colors">
              Have a project in mind?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base transition-colors">
              I'm available for freelance opportunities and full-time positions. Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* بطاقة GitHub المتطورة */}
            <div className="group relative p-4 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl bg-gradient-to-r from-[#a374ff]/10 to-[#17f1d1]/10 hover:from-[#a374ff]/20 hover:to-[#17f1d1]/20 border border-slate-200/50 dark:border-white/5">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#a374ff]/0 to-[#17f1d1]/0 opacity-0 group-hover:from-[#a374ff]/10 group-hover:to-[#17f1d1]/10 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/50 dark:bg-black/20 border border-slate-200/50 dark:border-white/10 flex items-center justify-center backdrop-blur-sm transition-colors group-hover:border-[#a374ff]/50">
                  <GitGraph className="w-6 h-6 text-[#a374ff]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">GitHub</span>
                  <Link href="https://github.com/AbdoDeveloper" target="_blank" className="text-sm md:text-base text-slate-800 dark:text-zinc-200 font-semibold group-hover:text-[#17f1d1] transition-colors">
                    Check out my code
                  </Link>
                </div>
              </div>
            </div>

            {/* بطاقة LinkedIn المتطورة */}
            <div className="group relative p-4 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl bg-gradient-to-r from-[#a374ff]/10 to-[#17f1d1]/10 hover:from-[#a374ff]/20 hover:to-[#17f1d1]/20 border border-slate-200/50 dark:border-white/5">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#a374ff]/0 to-[#17f1d1]/0 opacity-0 group-hover:from-[#a374ff]/10 group-hover:to-[#17f1d1]/10 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/50 dark:bg-black/20 border border-slate-200/50 dark:border-white/10 flex items-center justify-center backdrop-blur-sm transition-colors group-hover:border-[#17f1d1]/50">
                  <Link2 className="w-6 h-6 text-[#17f1d1]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">LinkedIn</span>
                  <Link href="https://linkedin.com/in/AbdoDeveloper" target="_blank" className="text-sm md:text-base text-slate-800 dark:text-zinc-200 font-semibold group-hover:text-[#a374ff] transition-colors">
                    Connect with me
                  </Link>
                </div>
              </div>
            </div>

            {/* بطاقة البريد الإلكتروني المتطورة */}
            <div className="group relative p-4 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl bg-gradient-to-r from-[#a374ff]/10 to-[#17f1d1]/10 hover:from-[#a374ff]/20 hover:to-[#17f1d1]/20 border border-slate-200/50 dark:border-white/5">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#a374ff]/0 to-[#17f1d1]/0 opacity-0 group-hover:from-[#a374ff]/10 group-hover:to-[#17f1d1]/10 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/50 dark:bg-black/20 border border-slate-200/50 dark:border-white/10 flex items-center justify-center backdrop-blur-sm transition-colors group-hover:border-[#17f1d1]/50">
                  <Mail className="w-6 h-6 text-cyan-500 dark:text-[#17f1d1]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 block font-medium">Email</span>
                  <Link href="mailto:osman.developer@example.com" className="text-sm md:text-base text-slate-800 dark:text-zinc-200 font-semibold group-hover:text-[#a374ff] transition-colors">
                    Send me a message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن: استمارة إرسال الرسائل بتصميم زجاجي */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(23,241,209,0.1)] bg-gradient-to-r from-[#a374ff]/5 to-[#17f1d1]/5 hover:from-[#a374ff]/10 hover:to-[#17f1d1]/10 border border-slate-200/50 dark:border-white/5"
          >
            {/* طبقة التوهج الخلفية للنموذج */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#a374ff]/0 to-[#17f1d1]/0 opacity-0 group-hover:from-[#a374ff]/5 group-hover:to-[#17f1d1]/5 transition-opacity duration-500 blur-xl" />
            
            <form onSubmit={handleSubmit} className="relative z-10 p-6 md:p-8 space-y-5 backdrop-blur-md rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/50 dark:bg-[#15222B]/50 border border-slate-200 dark:border-[#1C2A36] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-[#a374ff]/50 focus:ring-1 focus:ring-[#a374ff]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/50 dark:bg-[#15222B]/50 border border-slate-200 dark:border-[#1C2A36] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-[#17f1d1]/50 focus:ring-1 focus:ring-[#17f1d1]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/50 dark:bg-[#15222B]/50 border border-slate-200 dark:border-[#1C2A36] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-[#a374ff]/50 focus:ring-1 focus:ring-[#a374ff]/30 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600 backdrop-blur-sm"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/50 dark:bg-[#15222B]/50 border border-slate-200 dark:border-[#1C2A36] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-[#17f1d1]/50 focus:ring-1 focus:ring-[#17f1d1]/30 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-zinc-600 backdrop-blur-sm"
                  placeholder="Tell me more about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#a374ff] to-[#17f1d1] text-white font-bold hover:opacity-90 hover:shadow-lg transition-all text-sm disabled:opacity-50 select-none cursor-pointer"
              >
                {status === "loading" ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-xs text-[#17f1d1] font-medium pt-2 text-center">
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}