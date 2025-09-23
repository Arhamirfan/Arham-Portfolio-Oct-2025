"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, User, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center px-4 pt-20 md:pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >

            {/* Modal */}
            <motion.div
              className="w-full max-w-5xl bg-background rounded-2xl shadow-2xl overflow-hidden z-[70] mx-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: 'calc(100vh - 120px)' }}
            >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
                <p className="text-muted-foreground">{project.tagline}</p>
              </div>
              <Button
                variant="ghost" 
                size="icon"
                onClick={onClose}
                className="hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Left Side - Image */}
              <div className="lg:w-1/2 bg-muted/20 flex items-center justify-center p-4 md:p-8">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">No image available</span>
                  </div>
                )}
              </div>

              {/* Right Side - Details */}
              <div className="lg:w-1/2 p-4 md:p-6 overflow-y-auto space-y-6" style={{ maxHeight: '70vh' }}>
                {/* Project Meta */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{project.role}</span>
                    </div>
                    {project.startDate && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(project.startDate).getFullYear()}
                          {project.endDate && ` - ${new Date(project.endDate).getFullYear()}`}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                {Object.keys(project.impactMetrics).length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Impact Metrics</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.impactMetrics).map(([key, value]) => (
                        <div key={key} className="glass-card p-3 text-center">
                          <div className="font-bold text-primary text-lg">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {project.liveUrl && (
                    <Button asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}