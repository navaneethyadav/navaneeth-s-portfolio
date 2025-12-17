import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { ChevronDown, ChevronUp, Target, Layers, Zap, BarChart, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  shortDesc: string;
  techStack: string[];
  problem: string;
  overview: string;
  built: string[];
  metrics: { label: string; value: string }[];
  skills: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "AOHI Monitoring Dashboard",
    shortDesc: "Real-time operational health monitoring system with automated data pipelines and visual analytics",
    techStack: ["Python", "SQL", "Excel", "Data Visualization"],
    problem: "Organizations often struggle to monitor operational health metrics across multiple systems, leading to delayed responses to critical issues and inefficient resource allocation.",
    overview: "Built a comprehensive monitoring dashboard that aggregates operational health indicators from multiple data sources, providing real-time insights and automated alerting for key performance metrics.",
    built: [
      "Designed and implemented automated data collection pipelines to aggregate metrics from multiple sources",
      "Created interactive dashboards with drill-down capabilities for detailed metric analysis",
      "Implemented automated alerting system for critical threshold breaches",
      "Built data validation layers to ensure accuracy of reported metrics",
    ],
    metrics: [
      { label: "Data Sources Integrated", value: "5+" },
      { label: "Metrics Tracked", value: "20+" },
      { label: "Reporting Frequency", value: "Real-time" },
      { label: "Data Accuracy", value: "99%+" },
    ],
    skills: ["Data Pipeline Design", "Dashboard Development", "Data Validation", "Automation", "SQL Queries"],
  },
  {
    title: "Netflix Business Data Analysis",
    shortDesc: "Comprehensive analysis of Netflix content library to uncover trends, patterns, and business insights",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    problem: "Understanding content distribution patterns, viewer preferences, and release strategies requires deep analysis of large content datasets to inform strategic business decisions.",
    overview: "Conducted extensive exploratory data analysis on Netflix's content catalog to identify trends in content production, genre popularity, and regional content distribution patterns.",
    built: [
      "Performed data cleaning and preprocessing on 8,000+ content records",
      "Created comprehensive visualizations showing content distribution by genre, country, and release year",
      "Analyzed temporal trends in content additions and production patterns",
      "Generated actionable insights for content acquisition and production strategy",
    ],
    metrics: [
      { label: "Records Analyzed", value: "8,000+" },
      { label: "Features Explored", value: "12+" },
      { label: "Visualizations Created", value: "25+" },
      { label: "Insights Generated", value: "15+" },
    ],
    skills: ["Exploratory Data Analysis", "Data Visualization", "Statistical Analysis", "Python", "Business Intelligence"],
  },
  {
    title: "Real-Time Exam Monitoring System",
    shortDesc: "Computer vision-based proctoring system for detecting suspicious behavior during online examinations",
    techStack: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
    problem: "Online examinations are vulnerable to cheating without proper monitoring, and manual proctoring is expensive and not scalable for large numbers of examinees.",
    overview: "Developed an automated exam monitoring system using computer vision techniques to detect suspicious behaviors such as looking away from screen, multiple faces, and absence detection.",
    built: [
      "Implemented face detection and tracking using OpenCV's cascade classifiers",
      "Built gaze estimation module to detect when examinees look away from the screen",
      "Created multi-face detection to identify unauthorized persons in frame",
      "Developed real-time alerting system for flagged suspicious activities",
    ],
    metrics: [
      { label: "Detection Accuracy", value: "95%+" },
      { label: "Processing Speed", value: "30 FPS" },
      { label: "Alert Response Time", value: "<1 sec" },
      { label: "False Positive Rate", value: "<5%" },
    ],
    skills: ["Computer Vision", "OpenCV", "Real-time Processing", "Python", "Algorithm Design"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 150}>
      <GlassCard className="overflow-hidden">
        {/* Header - Always visible */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.shortDesc}</p>
          </div>
          {project.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-3 text-primary hover:text-primary/80 transition-colors border-t border-border/30"
        >
          <span className="text-sm font-medium">{isExpanded ? "Show Less" : "View Case Study"}</span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="pt-6 border-t border-border/30 space-y-6 animate-fade-in">
            {/* Problem Statement */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-primary" />
                <h4 className="font-semibold text-foreground">Problem Statement</h4>
              </div>
              <p className="text-muted-foreground pl-6">{project.problem}</p>
            </div>

            {/* System Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers size={18} className="text-secondary" />
                <h4 className="font-semibold text-foreground">System Overview</h4>
              </div>
              <p className="text-muted-foreground pl-6">{project.overview}</p>
            </div>

            {/* What Was Built */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap size={18} className="text-primary" />
                <h4 className="font-semibold text-foreground">What Was Built</h4>
              </div>
              <ul className="space-y-2 pl-6">
                {project.built.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BarChart size={18} className="text-secondary" />
                <h4 className="font-semibold text-foreground">Key Metrics & Results</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pl-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-display font-bold gradient-text">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Demonstrated */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </GlassCard>
    </AnimatedSection>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Deep dives into projects that showcase my data analysis and development capabilities"
          />
        </AnimatedSection>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
