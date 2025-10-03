"use client";

import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            What I Offer
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Productized <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clear deliverables, timelines, and outcomes designed to help you ship faster and scale confidently.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="glass-card">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-2xl font-semibold mb-2">{service.name}</div>
                <div className="text-muted-foreground mb-4">{service.description}</div>
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-1">Starts From</div>
                  <div className="text-3xl font-bold">${service.priceFrom}</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Deliverables</div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {service.deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm text-muted-foreground">Timeline: {service.timeline}</div>
                  <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    {service.ctaText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default ServicesSection;



