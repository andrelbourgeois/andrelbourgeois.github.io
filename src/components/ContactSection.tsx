
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className={cn("py-20", className)}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge bg-secondary text-secondary-foreground">Contact</span>
          <h2 className="heading-lg mt-4">Get in touch</h2>
          <p className="subheading mt-4 max-w-2xl mx-auto">
            Interested in working together? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-card border-border/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-card border-border/40"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can I help you?"
                className="bg-card border-border/40"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="bg-card border-border/40 min-h-[120px]"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full md:w-auto group"
            >
              <span>Send Message</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
