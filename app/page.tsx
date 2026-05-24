import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* 1. شبكة ثابتة في الخلفية تعطي عمقاً */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60"></div>

      {/* 2. شبكة متحركة تتمدد مع محتوى الصفحة وتنزل وتصعد معك */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40"></div>

      {/* أقسام الموقع مزودة بـ ID ليعمل الـ Navbar والانزلاق بنجاح */}
      <div className="relative z-10 flex flex-col gap-4 pb-20">
        <div id="about"><HeroSection /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="projects"><FeaturedProjects /></div>
        <div id="experience"><ExperienceTimeline /></div>
        <div id="contact"><ContactSection /></div>
      </div>
    </main>
  );
}