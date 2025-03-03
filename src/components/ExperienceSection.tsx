
import React from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Building, Globe } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className }) => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Solutions Architect",
      company: "Smart Buildings Co.",
      period: "2020 - Present",
      description: "Leading the architecture and design of integrated smart building solutions for enterprise clients. Developed frameworks for IoT integration with building management systems.",
      icon: <Building size={24} className="text-primary" />
    },
    {
      title: "Solutions Architect",
      company: "Tech Integration Partners",
      period: "2017 - 2020",
      description: "Designed and implemented asset management solutions for commercial real estate clients. Created strategies for digital transformation of building operations.",
      icon: <Briefcase size={24} className="text-primary" />
    },
    {
      title: "Systems Analyst",
      company: "Global Tech Solutions",
      period: "2014 - 2017",
      description: "Analyzed and optimized business processes through technology implementation. Specialized in smart building technology integration and automation.",
      icon: <Globe size={24} className="text-primary" />
    }
  ];

  return (
    <section id="experience" className={cn("py-20 bg-muted/50", className)}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge bg-secondary text-secondary-foreground">Experience</span>
          <h2 className="heading-lg mt-4">Career Journey</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            A timeline of my professional experience in the smart buildings sector
          </p>
        </div>

        <div className="mt-20 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                {exp.icon}
              </div>
              
              <div className="flex-1 bg-card rounded-xl p-6 shadow-sm border border-border/40 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <span className="badge bg-secondary/70 text-secondary-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
