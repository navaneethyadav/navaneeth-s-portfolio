import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle } from "lucide-react";

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">

        <AnimatedSection>
          <SectionHeading
            title="Download Resume"
            subtitle="Get my complete professional profile in a single document"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <GlassCard className="max-w-2xl mx-auto text-center gradient-border">

            <div className="p-8">

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 box-glow">
                <FileText size={40} className="text-primary-foreground" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">
                Navaneeth Kaku – Resume
              </h3>

              <p className="text-muted-foreground mb-6">
                Data Analyst & Application Developer with hands-on experience in data cleaning, 
                EDA, visualization, and building real-world applications.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>ATS-Friendly Format</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Updated 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>PDF Download</span>
                </div>
              </div>

              {/* ✅ FIXED DOWNLOAD BUTTON */}
              <Button variant="hero" size="lg" asChild>
                <a
                  href={`${import.meta.env.BASE_URL}Navaneeth_Resume.pdf`}
                  download="Navaneeth_Kaku_Resume.pdf"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume (PDF)
                </a>
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                No login required • Instant download
              </p>

            </div>

          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};