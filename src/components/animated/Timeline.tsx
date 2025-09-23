"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Experience } from "@/data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut" as const,
      }
    }
  };

  return (
    <div className="relative" ref={ref}>
      {/* Animated Timeline Line */}
      <motion.div
        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
        variants={lineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <AnimatedSection
            key={exp.id}
            animation="fade-right"
            delay={index * 0.2}
            className="relative pl-20"
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-6 w-4 h-4 bg-primary rounded-full shadow-glow border-2 border-background"
              whileHover={{ 
                scale: 1.5,
                boxShadow: "0 0 20px hsl(var(--primary-glow))"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            />

            {/* Experience Card */}
            <motion.div
              className="glass-card p-6 group"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gradient-primary mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    <span>{exp.company}</span>
                    {exp.companyUrl && (
                      <motion.a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(exp.startDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })} - {exp.endDate ? 
                        new Date(exp.endDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        }) : 'Present'
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">{exp.description}</p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (i * 0.1) }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-sm">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.2) + (i * 0.05) }}
                  >
                    <Badge variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}