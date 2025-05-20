import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void;
}

export const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] bg-we-navy/90 backdrop-blur-md border-l border-white/10 text-white"
      >
        <nav className="flex flex-col gap-4 mt-8">
          <button
            onClick={() => onNavigate("hero")}
            className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-md transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-md transition-colors font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate("services")}
            className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-md transition-colors font-medium"
          >
            Our Services
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-md transition-colors font-medium"
          >
            Our Projects
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-md transition-colors font-medium"
          >
            Contact Us
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
