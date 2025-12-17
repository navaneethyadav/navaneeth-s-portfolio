import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const repositories = [
  {
    name: "Netflix-Data-Analysis",
    description: "Comprehensive EDA on Netflix content library with visualizations and business insights",
    language: "Python",
  },
  {
    name: "AOHI-Dashboard",
    description: "Operational health monitoring dashboard with automated data pipelines",
    language: "Python",
  },
  {
    name: "Exam-Monitoring-System",
    description: "Real-time computer vision based proctoring system using OpenCV",
    language: "Python",
  },
];

export const GithubSection = () => {
  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="GitHub & Code"
            subtitle="Explore my repositories and see the code behind the projects"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <GlassCard className="max-w-4xl mx-auto text-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <Github size={40} className="text-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">@navaneeth-kaku</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile to see all my projects, contributions, and code quality.
              </p>
              <Button variant="hero" asChild>
                <a href="https://github.com/navaneeth-kaku" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={18} />
                  Visit GitHub Profile
                  <ExternalLink className="ml-2" size={14} />
                </a>
              </Button>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Featured Repositories */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {repositories.map((repo, index) => (
            <AnimatedSection key={repo.name} delay={200 + index * 100}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Folder size={18} className="text-primary" />
                  <h4 className="font-semibold text-foreground text-sm truncate">{repo.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground flex-1 mb-4">{repo.description}</p>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">{repo.language}</span>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
