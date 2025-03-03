
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-20", className)}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="badge bg-secondary text-secondary-foreground">About</span>
            <h2 className="heading-lg">Translating complexity into clarity</h2>
            <p className="text-muted-foreground text-lg">
              My expertise lies in translating the high level concepts from the development lifecycle of technology products into actionable strategies, designs, deployments, and integrations that enable businesses to fully realize the return of informed and intentional investments in technology.
            </p>
            <div className="pt-4">
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 border-b border-foreground/60 pb-1 font-medium transition-all hover:border-foreground group"
              >
                <span>View my experience</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-muted rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-lg font-medium">
                  Profile Image
                </div>
              </div>
            </div>
            
            <div 
              className="absolute -z-10 -bottom-10 -right-10 w-[300px] h-[300px] rounded-full blur-3xl opacity-20" 
              style={{ 
                background: "radial-gradient(circle, rgba(204,251,241,1) 0%, rgba(255,255,255,0) 70%)" 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
