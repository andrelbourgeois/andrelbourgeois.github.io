
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center mx-auto max-w-md px-4">
        <span className="badge bg-secondary text-secondary-foreground animate-fade-in">
          Error 404
        </span>
        <h1 className="heading-lg mt-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Page not found
        </h1>
        <p className="subheading mt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild>
            <a href="/" className="inline-flex items-center space-x-2">
              <ArrowLeft size={18} />
              <span>Return to Home</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
