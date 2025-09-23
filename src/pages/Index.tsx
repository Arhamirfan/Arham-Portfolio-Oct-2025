import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectShowcase />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
