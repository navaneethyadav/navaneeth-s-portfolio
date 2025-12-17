import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const achievements = [
  { metric: "10,000+", label: "Records Analyzed" },
  { metric: "45%", label: "Reduction in Manual Effort" },
  { metric: "35-40%", label: "Data Quality Improvement" },
  { metric: "15+", label: "Features Analyzed via EDA" },
];

const responsibilities = [
  "Analyzed and processed large datasets containing 10,000+ educational records for insights and pattern recognition",
  "Performed comprehensive Exploratory Data Analysis (EDA) across 15+ data features to identify trends and anomalies",
  "Designed and implemented data cleaning pipelines that reduced manual effort by 45%",
  "Improved overall data quality by 35-40% through systematic validation and error correction processes",
  "Created interactive Excel dashboards for management reporting and decision-making",
  "Collaborated with cross-functional teams to deliver actionable data insights",
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="Professional experience building data solutions that drive business impact"
          />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={100}>
            <GlassCard className="relative overflow-visible">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - Company Info */}
                <div className="md:w-1/3 md:pr-8 md:border-r border-border/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">Data Science Intern</h3>
                      <p className="text-primary font-medium">Edu Tantr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <Calendar size={16} />
                    <span className="text-sm">2024</span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map((item) => (
                      <div key={item.label} className="text-center p-3 rounded-lg bg-muted/50">
                        <div className="text-xl font-display font-bold text-primary">{item.metric}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Responsibilities */}
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="text-primary" />
                    Key Contributions & Impact
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
