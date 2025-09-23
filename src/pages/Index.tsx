import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProjectShowcase />
      <ExperienceTimeline />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
