import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70 pointer-events-none" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* ✅ Profile Image (FIXED PATH) */}
        <div className="flex justify-center mb-6 animate-fade-in-down">
          <img
            src={`${import.meta.env.BASE_URL}navaneeth.jpeg`}
            alt="Navaneeth Kaku"
            onClick={() => setOpen(true)}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-xl cursor-pointer hover:scale-105 transition"
          />
        </div>

        {/* Role */}
        <div className="animate-fade-in-down">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full border border-primary/30 bg-primary/10 text-primary">
            Data Analyst & Application Developer
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">Navaneeth</span>
          <br />
          <span className="gradient-text neon-glow">Kaku</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
          Turning structured data into insights and building reliable, real-world applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">

          {/* Resume */}
          <Button variant="hero" size="lg" asChild>
            <a href={`${import.meta.env.BASE_URL}Navaneeth_Resume.pdf`} download>
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </Button>

          {/* Projects */}
          <Button variant="glass" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs mb-2">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>

      {/* ✅ Image Popup (FIXED PATH) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}navaneeth.jpeg`}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};