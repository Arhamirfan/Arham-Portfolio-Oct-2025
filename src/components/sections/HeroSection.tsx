"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10 dark:opacity-20" />
      
      {/* Floating Geometric Shapes */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-xl ${
              i % 3 === 0 ? 'bg-primary/20' : 
              i % 3 === 1 ? 'bg-secondary/20' : 'bg-accent/20'
            }`}
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Animated Lines */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              width: '200%',
              left: '-50%',
              top: `${20 + i * 30}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <StaggerContainer className="space-y-9">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-y-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary glow-primary"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              🚀 Available for new opportunities
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold leading-tight break-words">
                <span className="block text-gradient-primary">
                  {profile.name.split(' ')[0]}
                </span>
                <span className="block text-gradient-secondary">
                  {profile.name.split(' ')[1]}
                </span>
              </h1>
              
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {profile.title}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Building scalable web applications and cloud-native solutions with{" "}
              <span className="text-primary font-semibold">4+ years of experience</span>.
              Specialized in modern JavaScript, React ecosystem, and emerging Web3 technologies.
            </motion.p>

            {/* Tech Stack Marquee */}
            <motion.div
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span>React & Next.js</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" />
                  <span>Node.js & Cloud</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                  <span>Web3 & AI</span>
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Button 
                onClick={scrollToProjects}
                className="btn-hero group min-w-[160px] sm:min-w-[200px]"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="btn-ghost min-w-[160px] sm:min-w-[200px]"
              >
                <Mail className="mr-2 w-4 h-4" />
                Let's Connect
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center space-x-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {profile.socials.github && (
                <motion.a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors magnetic"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
              )}
              
              {profile.socials.linkedin && (
                <motion.a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors magnetic"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.a>
              )}
              
              <a target="_blank" href="https://drive.google.com/file/d/1Xt75ttiCEP9EuE_bThwo2_uG0YB6yNTP/view?usp=sharing">
                <motion.button
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors magnetic"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="text-sm font-medium">Resume</span>
                </motion.button>
              
              </a>
            </motion.div>
          </StaggerContainer>
        </div>
        
          {/* Scroll Indicator (inline so it flows below content and doesn't overlap icons) */}
          <motion.div
            className="mt-6 flex justify-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ height: [12, 6, 12] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}