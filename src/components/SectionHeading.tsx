import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ title, subtitle, className, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-16", align === "center" && "text-center", className)}>
      <h2 className="section-heading gradient-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
