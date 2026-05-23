"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowUp, MessageSquare } from "lucide-react";
import Link from "next/link";
import { personalLinks } from "@/lib/data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // محاكاة إرسال البيانات بشكل آمن وسريع جداً تماشياً مع متطلبات الأداء
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="py-20 relative z-10 max-w-6xl mx-auto px-6 w-full"
    >
      {/* عنوان القسم */}
      <div className="flex items-center gap-3 mb-16">
        <MessageSquare className="w-8 h-8 text-purple-500" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
          Let's Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* الجانب الأيسر: معلومات التواصل والشبكات الاجتماعية */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              I'm available for freelance opportunities and full-time positions.
              Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* بطاقة البريد الإلكتروني */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 block">Email Me</span>
                <Link
                  href="mailto:osman.developer@example.com"
                  className="text-sm md:text-base text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  osman.developer@example.com
                </Link>
              </div>
            </div>

            {/* بطاقة الموقع الجغرافي */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 block">Location</span>
                <span className="text-sm md:text-base text-zinc-300">
                  Egypt
                </span>
              </div>
            </div>
          </div>

          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://github.com/AbdoDeveloper"
              target="_blank"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/AbdoDeveloper"
              target="_blank"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>

        {/* الجانب الأيمن: استمارة إرسال الرسائل الفاخرة */}
        <div className="lg:col-span-7">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 p-6 md:p-8 rounded-2xl bg-card border border-zinc-800/90 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-400">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="Project Discussion"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-400">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                placeholder="Tell me more about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors text-sm disabled:opacity-50 select-none cursor-pointer"
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

            {/* رسائل النجاح أو الفشل عند الإرسال */}
            {status === "success" && (
              <p className="text-xs text-green-400 font-medium pt-2 text-center">
                ✓ Thank you! Your message has been sent successfully.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      {/* حقل التذييل الأساسي السفلي (Footer) */}
      <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 w-full text-zinc-500 text-xs select-none">
        <div>&copy; {new Date().getFullYear()} Abdo. All rights reserved.</div>

        {/* زر الصعود الذكي المتجاوب للأعلى */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors group cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
