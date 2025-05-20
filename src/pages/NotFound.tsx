import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Logo } from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Logo className="mb-12" />
        <div className="text-center we-card px-12 py-16">
          <h1 className="text-6xl font-bold mb-4 we-gradient-text">404</h1>
          <p className="text-xl text-white/80 mb-8">Oops! Page not found</p>
          <a href="/" className="we-button inline-block">
            Return to Portfolio
          </a>
        </div>
      </div>
    </GradientBackground>
  );
};

export default NotFound;
