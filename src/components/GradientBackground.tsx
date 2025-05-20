
import { useState, useEffect } from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-we-purple bg-gradient-to-b from-we-purple to-we-navy z-0 h-full w-full"></div>
      
      {/* Animated gradient blobs */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-we-blue opacity-50 blur-3xl animate-blob blend-hard-light"
        style={{
          transformOrigin: "-400px center",
        }}
      ></div>
      
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-we-magenta opacity-50 blur-3xl animate-blob-slow blend-hard-light"
        style={{
          transformOrigin: "400px center",
        }}
      ></div>
      
      <div 
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-we-cyan opacity-50 blur-3xl animate-blob-fast blend-hard-light"
        style={{
          transformOrigin: "center -400px",
        }}
      ></div>
      
      <div 
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-we-red opacity-50 blur-3xl animate-blob blend-hard-light"
        style={{
          transformOrigin: "center 400px",
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-we-yellow opacity-50 blur-3xl animate-blob-slow blend-hard-light"
        style={{
          transformOrigin: "-200px -200px",
        }}
      ></div>
      
      {/* Mouse following gradient */}
      <div 
        className="absolute w-[200px] h-[200px] rounded-full bg-we-pointer opacity-40 blur-3xl mix-blend-screen pointer-events-none"
        style={{
          left: `${mousePosition.x - 100}px`,
          top: `${mousePosition.y - 100}px`,
          transition: "left 0.2s ease-out, top 0.2s ease-out",
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
