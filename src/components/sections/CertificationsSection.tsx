import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Analysis Using Python",
    issuer: "IBM",
    file: "/certificates/ibm-data-analysis.pdf",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    file: "/certificates/python-data-science.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    file: "/certificates/cybersecurity.pdf",
  },
  {
    title: "Big Data – 201",
    issuer: "Infosys Springboard",
    file: "/certificates/bigdata.pdf",
  },
  {
    title: "Exploratory Data Analysis with MATLAB",
    issuer: "MathWorks",
    file: "/certificates/matlab-eda.pdf",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">

        <AnimatedSection>
          <SectionHeading
            title="Certifications"
            subtitle="Industry-recognized credentials validating my data analysis expertise"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 100}>

              <GlassCard className="flex items-center justify-between gap-4">

                {/* Left side */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary">
                    <Award size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Right side (VIEW BUTTON) */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={16} />
                  View
                </a>

              </GlassCard>

            </AnimatedSection>
          ))}

        </div>
      </div>
    </section>
  );
};