import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Education"
            subtitle="Academic foundation in Computer Science and Data Science"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <GlassCard className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap size={32} className="text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-primary font-medium mb-4">
                  Computer Science Engineering – Data Science
                </p>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <span>Garden City University, Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    <span>Expected Graduation: 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-secondary" />
                    <span>Overall Percentage: <strong className="text-foreground">73.8%</strong></span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Data Science</span>
                  <span className="tech-badge">Machine Learning</span>
                  <span className="tech-badge">Data Structures</span>
                  <span className="tech-badge">Database Systems</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};
