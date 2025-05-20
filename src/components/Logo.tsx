import React from "react";

interface LogoProps {
  className?: string;
  headerVariant?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  headerVariant = false
}) => {
  const logoClasses = "mx-auto animate-fade-in";

  return (
    <div className={`flex items-center justify-center`}>
      <img 
        alt="We Design Logo" 
        className={`${logoClasses} ${className}`} 
        src="/lovable-uploads/c3dc8bfd-bf93-41b7-a1c4-f2ee70265f16.png" 
      />
    </div>
  );
};

