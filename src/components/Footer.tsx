
import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("py-12 border-t border-border/20", className)}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-medium">AB.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} André Bourgeois. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
