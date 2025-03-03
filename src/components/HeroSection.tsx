
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section id="hero" className={cn("min-h-screen flex items-center", className)}>
      <div className="section-container animate-fade-in">
        <div className="max-w-3xl">
          <span className="badge bg-secondary text-secondary-foreground animate-slide-down opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Solutions Architect
          </span>
          <h1 className="heading-xl mt-6 animate-slide-down opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            André Bourgeois
          </h1>
          <p className="subheading mt-6 max-w-2xl animate-slide-down opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            I'm a solutions architect working in the smart buildings sector, I've built my career on the simple belief that organisations can understand their built assets and business processes like technology products.
          </p>
          <div className="mt-10 animate-slide-down opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a
              href="#about"
              className="inline-flex items-center space-x-2 border-b border-foreground/60 pb-1 font-medium transition-all hover:border-foreground group"
            >
              <span>Learn more about my work</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl animate-fade-in" 
          style={{ 
            background: "radial-gradient(circle, rgba(204,251,241,1) 0%, rgba(255,255,255,0) 70%)",
            animationDuration: "2s"
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
