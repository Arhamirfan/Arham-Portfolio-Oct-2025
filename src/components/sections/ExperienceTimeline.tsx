"use client";

import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { Timeline } from "@/components/animated/Timeline";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Career <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            4+ years of building scalable applications, leading development teams, 
            and delivering impactful solutions across diverse industries.
          </p>
        </AnimatedSection>

        {/* Timeline Component */}
        <div className="max-w-6xl mx-auto">
          <Timeline experiences={experience} />
        </div>
      </div>
    </section>
  );
}