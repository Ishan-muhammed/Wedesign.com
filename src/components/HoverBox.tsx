import React, { forwardRef } from 'react';

interface HoverBoxProps {
  children: React.ReactNode;
  className?: string; // Allow adding extra classes from parent
}

export const HoverBox = forwardRef<HTMLDivElement, HoverBoxProps>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        bg-white 
        rounded-xl 
        p-6 
        shadow-md 
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-105 
        hover:-translate-y-2 
        hover:shadow-lg 
        hover:bg-gray-100 
        active:scale-105 
        active:-translate-y-2 
        active:shadow-lg 
        active:bg-gray-100
        ${className || ''} // Apply any additional classes passed in
      `}
    >
      {children}
    </div>
  );
}); 