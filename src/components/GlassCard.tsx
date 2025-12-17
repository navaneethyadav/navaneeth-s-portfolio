import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 transition-all duration-500",
        hover && "hover:scale-[1.02] hover:border-primary/30",
        className
      )}
    >
      {children}
    </div>
  );
};
