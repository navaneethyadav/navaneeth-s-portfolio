import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Code2, Database, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL"],
    color: "primary",
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Data Validation", "Structured Datasets"],
    color: "secondary",
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: ["Excel Dashboards", "Matplotlib", "Seaborn"],
    color: "primary",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Excel", "Jupyter Notebook", "Git", "GitHub"],
    color: "secondary",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technical proficiencies that power my data analysis and development work"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      category.color === "primary"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 hover:scale-105 ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary border border-primary/20 hover:border-primary/40"
                          : "bg-secondary/10 text-secondary border border-secondary/20 hover:border-secondary/40"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
