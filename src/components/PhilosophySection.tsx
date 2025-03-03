
import React from "react";
import { cn } from "@/lib/utils";

interface PhilosophyItem {
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ className }) => {
  const philosophies: PhilosophyItem[] = [
    {
      title: "Technology as an Enabler",
      description: "Technology should serve as a means to enhance and streamline business processes, not complicate them."
    },
    {
      title: "Intentional Design",
      description: "Every technological implementation should be purposeful, addressing specific needs and providing measurable benefits."
    },
    {
      title: "Holistic Integration",
      description: "Smart building solutions should integrate seamlessly with existing systems, creating a cohesive and intuitive ecosystem."
    }
  ];

  return (
    <section id="philosophy" className={cn("py-20", className)}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge bg-secondary text-secondary-foreground">Philosophy</span>
          <h2 className="heading-lg mt-4">Work Principles</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            My approach to solutions architecture is guided by these core principles
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6">
                <span className="font-display font-semibold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{philosophy.title}</h3>
              <p className="text-muted-foreground">{philosophy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
