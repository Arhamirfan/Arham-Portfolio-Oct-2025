"use client";

import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Who I Am
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-primary">Arham</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {profile.summary}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-6">
          <Card className="glass-card col-span-1 lg:col-span-2">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Name</div>
                  <div className="text-foreground font-medium">{profile.name}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Title</div>
                  <div className="text-foreground font-medium">{profile.title}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="text-foreground font-medium">{profile.location}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a href={`mailto:${profile.email}`} className="text-primary font-medium hover:underline">
                    {profile.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <a href={`tel:${profile.phone}`} className="text-primary font-medium hover:underline">
                    {profile.phone}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Socials</div>
                  <div className="flex items-center gap-4">
                  {profile.socials.upwork && (
                      <a href={profile.socials.upwork} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        LinkedIn
                      </a>
                    )}
                    {profile.socials.linkedin && (
                      <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        LinkedIn
                      </a>
                    )}
                    {profile.socials.github && (
                      <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="glass-card">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="text-sm text-muted-foreground">Engagement Model</div>
                <div className="text-foreground font-semibold">Project-based, Retainer, or Hourly</div>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div>• Discovery and scoping workshops</div>
                <div>• Clear milestones and transparent delivery</div>
                <div>• Performance, security, and scalability focus</div>
              </div>
            </CardContent>
          </Card> */}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default AboutSection;



