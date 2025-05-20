import { Phone, Mail, MapPin } from "lucide-react";

export const ContactDetails = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 md:p-10 bg-white rounded-xl gap-10">
    <div className="flex items-center gap-6">
      <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#66009d] to-[#9333ea] p-4">
        <Phone className="w-10 h-8 text-white" />
      </div>
      <div>
        <div className="text-base text-black/80 font-medium mb-1">Phone</div>
        <div className="font-bold text-1xl text-black">
          +91 80862 72916 <br /> +91 8593024796
        </div>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#66009d] to-[#9333ea] p-4">
        <Mail className="w-8 h-8 text-white" />
      </div>
      <div>
        <div className="text-base text-black/80 font-medium mb-1">Email</div>
        <div className="font-bold text-1xl text-black whitespace-nowrap">wedesignhereforyou@gmail.com</div>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#66009d] to-[#9333ea] p-4">
        <MapPin className="w-8 h-8 text-white" />
      </div>
      <div>
        <div className="text-base text-black/80 font-medium mb-1">Address</div>
        <div className="font-bold text-1xl text-black">Kerala, India</div>
      </div>
    </div>
  </div>
);
