"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { skills, Skill } from "@/data/portfolio";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const categoryColors = {
    Frontend: "from-primary to-secondary",
    Backend: "from-secondary to-accent", 
    Database: "from-accent to-primary",
    DevOps: "from-secondary to-primary",
    Tools: "from-accent to-secondary",
  };

  const levelPercentage = (skill.level / 5) * 100;

  return (
    <motion.div
      className="glass-card p-6 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
        <Badge variant="outline" className="text-xs">
          {skill.years}y
        </Badge>
      </div>

      {/* Skill Level Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="font-medium text-foreground">{skill.level}/5</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${levelPercentage}%` }}
            transition={{ 
              delay: (index * 0.1) + 0.5, 
              duration: 1,
              ease: "easeOut"
            }}
          />
        </div>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1">
        {skill.keywords.map((keyword, i) => (
          <motion.span
            key={keyword}
            className="text-xs bg-muted/50 px-2 py-1 rounded text-muted-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index * 0.1) + 0.6 + (i * 0.1) }}
          >
            {keyword}
          </motion.span>
        ))}
      </div>

      {/* Hover Effect Circle */}
      <motion.div
        className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${categoryColors[skill.category]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export function SkillsSection() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the full development stack, 
            from modern frontend frameworks to scalable backend architectures.
          </p>
        </AnimatedSection>

        {/* Skills by Category */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <AnimatedSection key={category} delay={categoryIndex * 0.2}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  <span className="text-gradient-secondary">{category}</span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <SkillCard 
                    key={skill.id} 
                    skill={skill} 
                    index={index} 
                  />
                ))}
              </StaggerContainer>
            </AnimatedSection>
          ))}
        </div>

        {/* Overall Stats */}
        <AnimatedSection className="mt-20">
          <div className="glass-card p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}