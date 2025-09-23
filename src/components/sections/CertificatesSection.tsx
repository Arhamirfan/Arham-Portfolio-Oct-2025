"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated/AnimatedSection";
import { StaggerContainer } from "@/components/animated/StaggerContainer";
import { certificates, Certificate } from "@/data/portfolio";
import { Award, ExternalLink, Calendar } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <motion.div
      className="glass-card p-6 group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Certificate Image */}
      <div className="relative mb-6 rounded-lg overflow-hidden bg-muted/50 aspect-[4/3]">
        <img
          src={certificate.imageUrl}
          alt={`${certificate.name} certificate`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-foreground leading-tight">
            {certificate.name}
          </h3>
          <Award className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground font-medium">
            {certificate.organization}
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Issued {new Date(certificate.issueDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, skillIndex) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Credential Link */}
        {certificate.credentialUrl && (
          <motion.a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            whileHover={{ x: 5 }}
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Credential</span>
          </motion.a>
        )}
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
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

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Growth
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Certifications & <span className="text-gradient-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized 
            certifications and specialized training programs.
          </p>
        </AnimatedSection>

        {/* Certificates Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              index={index} 
            />
          ))}
        </StaggerContainer>

        {/* Summary Stats */}
        <AnimatedSection className="mt-20">
          <div className="glass-card p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">4</div>
                <div className="text-muted-foreground">Specializations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Completion Rate</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}