import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" />
        </div>
        <h1 className="text-6xl font-display font-700 text-foreground mb-4">404</h1>
        <p className="text-xl font-body text-muted-foreground mb-2">Page Not Found</p>
        <p className="font-body text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Button variant="stella" size="lg" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
