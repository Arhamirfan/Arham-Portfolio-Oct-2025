"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { projects, Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      animation={isEven ? "fade-right" : "fade-left"}
      delay={index * 0.2}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 py-16`}
    >
      {/* Project Visual */}
      <div className="flex-1 relative group">
        <motion.div
          className="relative glass-card p-8 magnetic"
          whileHover={{ scale: 1.02, rotateY: isEven ? 5 : -5 }}
          transition={{ duration: 0.4 }}
        >
          {/* Project Preview Mockup */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-lg border border-border/50 overflow-hidden">
            <div className="p-6 h-full flex flex-col justify-between">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 h-4 bg-muted/30 rounded ml-4" />
              </div>
              
              {/* Content Preview */}
              <div className="space-y-3 flex-1">
                <div className="h-6 bg-primary/30 rounded w-3/4" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted/40 rounded w-full" />
                  <div className="h-3 bg-muted/40 rounded w-2/3" />
                  <div className="h-3 bg-muted/40 rounded w-4/5" />
                </div>
                <div className="flex space-x-2 pt-4">
                  <div className="h-8 bg-accent/30 rounded px-4 flex-1" />
                  <div className="h-8 bg-secondary/30 rounded px-4 flex-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <motion.div
                key={tech}
                className="absolute w-8 h-8 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs font-mono text-primary"
                style={{
                  right: `${i * 20 + 10}%`,
                  top: `${i * 15 + 10}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tech.slice(0, 2).toUpperCase()}
              </motion.div>
            ))}
          </div>

          {/* Project Links Overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/90 rounded-lg flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.liveUrl && (
              <Button size="sm" variant="secondary" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="flex-1 space-y-6">
        <div>
          <motion.div
            className="flex items-center space-x-3 mb-3"
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.2) + 0.3 }}
          >
            <Badge variant="outline" className="text-xs">
              {project.featured ? "Featured Project" : "Project"}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {project.role}
            </Badge>
          </motion.div>

          <h3 className="text-3xl font-bold text-gradient-primary mb-2">
            {project.name}
          </h3>
          
          <p className="text-lg font-semibold text-accent mb-4">
            {project.tagline}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-3">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.2) + 0.4 + (i * 0.1) }}
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{highlight}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        {Object.keys(project.impactMetrics).length > 0 && (
          <div className="flex flex-wrap gap-4 py-4">
            {Object.entries(project.impactMetrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground">{key}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index * 0.2) + 0.5 + (i * 0.05) }}
            >
              <Badge variant="outline" className="text-xs">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.liveUrl && (
            <Button asChild className="magnetic">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" asChild className="magnetic">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ProjectShowcase() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Portfolio Showcase
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my recent work showcasing expertise in full-stack development, 
            Web3 technologies, AI integration, and cloud architecture.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <AnimatedSection className="text-center mt-24">
          <Button variant="outline" className="magnetic group">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}