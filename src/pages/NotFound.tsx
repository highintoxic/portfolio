import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-black text-accent">404</h1>
          <p className="text-2xl font-mono uppercase tracking-wide">PAGE NOT FOUND</p>
          <p className="text-lg font-mono text-muted-foreground">
            THE REQUESTED RESOURCE DOES NOT EXIST.
          </p>
        </div>
        
        <Button 
          variant="brutal"
          size="lg"
          asChild
        >
          <a href="/">RETURN HOME</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
