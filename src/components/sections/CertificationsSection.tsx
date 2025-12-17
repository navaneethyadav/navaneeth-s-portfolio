import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    color: "primary",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    color: "primary",
  },
  {
    title: "Data Science Internship",
    issuer: "Edu Tantr",
    color: "secondary",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    color: "secondary",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <SectionHeading
            title="Certifications"
            subtitle="Industry-recognized credentials validating my technical expertise"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 100}>
              <GlassCard className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl flex-shrink-0 ${
                    cert.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                  }`}
                >
                  <Award size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
