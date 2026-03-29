import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
} from "lucide-react";

interface Project {
  title: string;
  shortDesc: string;
  techStack: string[];
  problem: string;
  overview: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "AOHI Monitoring Dashboard",
    shortDesc: "Real-time operational dashboard",
    techStack: ["Python", "SQL", "Excel"],
    github: "https://github.com/navaneethyadav/AOHI",
    problem: "Monitoring systems is difficult...",
    overview: "Built dashboard for real-time insights...",
  },
  {
    title: "Netflix Business Data Analysis",
    shortDesc: "Netflix dataset analysis",
    techStack: ["Python", "Pandas"],
    github:
      "https://github.com/navaneethyadav/navaneethyadav-netflix-data-analysis",
    problem: "Understanding content patterns...",
    overview: "Performed EDA...",
  },
  {
    title: "Real-Time Exam Monitoring System",
    shortDesc: "Computer vision system",
    techStack: ["Python", "OpenCV"],
    github:
      "https://github.com/navaneethyadav/customer-churn-prediction",
    problem: "Detect cheating...",
    overview: "Built monitoring system...",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 150}>
      <GlassCard className="p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground">{project.shortDesc}</p>
          </div>

          {/* GitHub Icon (CLICKABLE) */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Github />
            </a>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-muted px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary"
        >
          {isExpanded ? "Show Less" : "View Case Study"}
          {isExpanded ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {/* ✅ GUARANTEED WORKING LINK */}
        {project.github && (
          <div className="mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
            >
              <ExternalLink className="mr-2" size={16} />
              View on GitHub
            </a>
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 space-y-2">
            <p>{project.problem}</p>
            <p>{project.overview}</p>
          </div>
        )}
      </GlassCard>
    </AnimatedSection>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Projects" subtitle="My Work" />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};