import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="pt-6 pb-6 w-full min-h-[400px]" style={{ backgroundColor: '#220f6d' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20 px-4">
        {/* Logo and Description */}
        <div className="w-[200px] flex flex-col items-start mb-10 md:mb-0">
          <Logo className="h-12 w-[200px]" />
          <p className="text-sm text-white w-full break-words mt-3">
          We craft effective marketing and technology solutions tailored to your unique needs, driving results.
          </p>
        </div>      
        {/* Products */}
        <div className="w-full md:w-1/5 text-left mb-10 md:mb-0">
          <h4 className="font-bold text-lg mb-4">PRODUCTS</h4>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Graphic Designing</li>
          </ul>
        </div>
        {/* Useful Links */}
        <div className="w-full md:w-1/5 text-left mb-10 md:mb-0">
          <h4 className="font-bold text-lg mb-4">PAGE LINKS</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        {/* Social Media Icons (replacing Subscribe) */}
        <div className="w-full md:w-1/5 text-left flex flex-col items-start">
          <h4 className="font-bold text-lg mb-4">FOLLOW US</h4>
          <div className="flex space-x-8 mt-4">
            <a href="https://whatsapp.com/channel/0029Vb9lC6kA89MdSFyb4x3l" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-black transition-colors duration-200 hover:bg-gray-800 pb-4 md:pb-0">
              <img src="/lovable-uploads/icons8-whatsapp.svg" alt="WhatsApp" className="w-6 h-6 invert" />
            </a>
            <a
                href="https://www.instagram.com/wedessign?igsh=MzBsdTNwZTg2cGxr"  target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-black transition-colors duration-200 hover:bg-gray-800 pb-4 md:pb-0">
                <img src="/lovable-uploads/icons8-instagram.svg" alt="Instagram" className="w-6 h-6 invert" />
              </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 w-full">
        <div className="text-center text-sm pt-6 pb-2 text-white">
          Copyright © {new Date().getFullYear()} Wedesign. All rights reserved.
        </div>
      </div>
    </footer>
  );
}; 