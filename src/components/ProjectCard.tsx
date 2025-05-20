import { useState } from "react";
import { GlowEffectButton } from "@/components/ui/glow-effect-demo";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveSiteUrl: string;
  index: number;
}

const accentColors = [
  "bg-[#4CAF50]", // green for NutriChef
  "bg-[#6506a2]", // purple for Project 2
  "bg-[#1955d9]", // blue for Project 3
];

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveSiteUrl,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const accent = accentColors[index % accentColors.length];
  
  return (
    <div className={
      [
        "relative bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col h-full animate-fade-in opacity-0 transition-transform duration-300",
        "hover:bg-gradient-to-tr hover:from-[#9333ea] hover:to-[#2d145e]"
      ].join(' ')
    }>
      {/* Floating small box with logo */}
      <div className="absolute left-8 -top-10 bg-white rounded-xl shadow-md p-4 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
        <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
      </div>
      {/* Add top margin to push content below the floating box */}
      <div className="mt-16" />
      <h3 className="text-white font-bold text-2xl mb-2 text-left">{title}</h3>
      <p className="text-white/80 text-base text-left mb-4 flex-grow">{description}</p>
      {/* Button */}
      <a
        href={liveSiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full self-start"
        style={{ textDecoration: "none" }}
      >
        <GlowEffectButton className="w-full max-w-xs self-start">
          Visit Website
        </GlowEffectButton>
      </a>
    </div>
  );
};


