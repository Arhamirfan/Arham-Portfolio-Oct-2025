"use client";

import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/portfolio";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < (count ?? 0) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Social Proof
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Client <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What partners and stakeholders say about delivering with me.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="glass-card">
              <CardContent className="p-8 flex flex-col gap-4">
                <Stars count={t.rating ?? 5} />
                <p className="text-foreground leading-relaxed">“{t.quote}”</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> — {t.role}
                  {t.company ? `, ${t.company}` : ""}
                </div>
                {t.link && (
                  <a href={t.link} target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    View project
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default TestimonialsSection;



