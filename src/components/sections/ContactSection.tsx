"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { profile } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Form submission failed");

      setIsLoading(false);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setIsLoading(false);
      toast({
        title: "Failed to send message",
        description: err?.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient-primary">Collaborate</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a skilled developer for your team or need a reliable 
            freelancer for your next project, I'm here to help bring your ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right" className="space-y-8">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <StaggerContainer className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a 
                      href={`tel:${profile.phone}`}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
              </StaggerContainer>
            </div>

            {/* Services Quick Links */}
            <div className="glass-card p-8">
              <h4 className="text-xl font-bold mb-6">Looking For</h4>
              <StaggerContainer className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                  <Briefcase className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Full-time Position</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                  <Calendar className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Freelance Project</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Consultation</span>
                </div>
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Formsubmit hidden fields */}
                <input type="hidden" name="_subject" value="New message from portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <StaggerContainer className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <select name="projectType" className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Full Stack Development</option>
                      <option>AI Integration</option>
                      <option>Web3 & Blockchain</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Range</label>
                    <select name="budgetRange" className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                      <option>Hourly Rate</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-hero" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. Let's build something amazing together!
                  </p>
                </StaggerContainer>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}