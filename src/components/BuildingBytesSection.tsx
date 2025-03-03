
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Lightbulb, Building2, Globe, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BuildingBytesSectionProps {
  className?: string;
}

const BuildingBytesSection: React.FC<BuildingBytesSectionProps> = ({ className }) => {
  const topics = [
    {
      icon: <Building2 size={24} className="text-primary" />,
      title: "Smart Building Technology",
      description: "AI-powered energy management systems, predictive maintenance, and innovations enhancing building performance."
    },
    {
      icon: <Server size={24} className="text-primary" />,
      title: "IoT & Intelligent Spaces",
      description: "How sensors, connectivity, and data analytics transform design, construction, and operation of buildings."
    },
    {
      icon: <Lightbulb size={24} className="text-primary" />,
      title: "Emerging Technologies",
      description: "Blockchain, digital twins, and other innovations revolutionising the building industry and its processes."
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: "Future Cities",
      description: "How technology shapes cities of tomorrow, addressing sustainability, resilience, and quality of life."
    }
  ];

  return (
    <section id="building-bytes" className={cn("py-20 bg-gradient-to-b from-background to-muted/30", className)}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <span className="badge bg-secondary text-secondary-foreground">Newsletter</span>
            <h2 className="heading-lg">Building Bytes</h2>
            <p className="text-muted-foreground text-lg">
              Your weekly dose of insights into the future of buildings and cities. Exploring how technology is reshaping our built and natural environments.
            </p>
            
            <div className="space-y-4 pt-4">
              <Button variant="default" className="group">
                <span>Subscribe Now</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 border-b border-foreground/60 pb-1 font-medium transition-all hover:border-foreground group"
                >
                  <span>View archive</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-sm border border-border/40 transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-card rounded-xl p-8 border border-border/40 shadow-sm">
          <h3 className="heading-md mb-4">About Building Bytes</h3>
          <p className="text-muted-foreground mb-6">
            I believe that technology has the power to create a better world for everyone. By staying informed and embracing innovation, we can unlock a future where buildings are smarter, more sustainable, and more responsive to the needs of those that matter: us.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">
              <span>Latest Issue</span>
            </Button>
            <Button variant="outline">
              <span>Newsletter FAQ</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingBytesSection;
