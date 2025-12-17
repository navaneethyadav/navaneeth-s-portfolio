import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Data-driven developer passionate about turning raw data into actionable insights"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <GlassCard className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm <span className="text-foreground font-medium">Navaneeth Kaku</span>, a final-year B.Tech student specializing in Computer Science with a focus on Data Science at Garden City University, Bangalore. My journey in tech has been driven by a genuine curiosity for how data can tell stories and solve real problems.
              </p>
              <p>
                As a <span className="text-primary">Data Analyst</span>, I thrive on exploring datasets, uncovering patterns, and transforming raw numbers into meaningful business insights. I've worked with datasets containing over 10,000+ records, performed extensive exploratory data analysis, and built dashboards that help stakeholders make informed decisions.
              </p>
              <p>
                As an <span className="text-secondary">Application Developer</span>, I build practical solutions that work in the real world. From monitoring systems using computer vision to business analytics dashboards, I focus on creating applications that are both functional and reliable.
              </p>
              <p>
                I'm currently seeking opportunities where I can contribute my analytical skills and development capabilities to solve challenging problems. Whether it's cleaning messy data, building predictive models, or developing full-stack applications—I'm ready to make an impact.
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};
