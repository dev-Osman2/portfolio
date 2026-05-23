import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      
      {/* 1. الشبكة الثابتة (Fixed): تظل في مكانها ولا تتحرك أبداً، مع تلاشي دائري من الأطراف */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>
      </div>

      {/* 2. الحاوية الرئيسية والمتحركة (تتحرك مع السكرول) */}
      <main className="relative z-10 w-full flex flex-col">
        
        {/* الشبكة المتحركة (Absolute): تأخذ طول المحتوى بالكامل وتتحرك للأعلى والأسفل مع النزول */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern bg-[size:40px_40px] opacity-40"></div>

        {/* فلتر شفاف خفيف لدمج الشبكتين وصنع تأثير (Parallax) بدون إخفائهما */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-background/50"></div>

        {/* محتوى الموقع (الأقسام) */}
        <div className="relative z-10 flex flex-col gap-4 pb-10">
          <Navbar />
          <HeroSection />
          <SkillsSection />
          <FeaturedProjects />
          <ExperienceTimeline />
          <ContactSection />
        </div>
        
      </main>
    </div>
  );
}