import { useState, useRef, useEffect } from "react";
import { GlowEffectButton } from "@/components/ui/glow-effect-demo";
import { ContactDetails } from "./ContactDetails";
import { useToast } from "@/hooks/use-toast";
import { validateContactForm } from "@/utils/formValidation";
import { FormInput } from "./form/FormInput";
import { FormTextArea } from "./form/FormTextArea";
import { FormSuccess } from "./form/FormSuccess";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: ""
  });
  
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) {
              setIsFormVisible(true);
              setTimeout(() => {
                setIsDetailsVisible(true);
              }, 200);
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setFormState("submitting");
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        setFormState("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectDescription: ""
        });

        toast({
          title: "Message sent!",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormState("error");
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
        });
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-0" id="contact">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
        <div 
          ref={detailsRef}
          className={`flex-1 min-w-[270px] transition-all duration-700 md:-translate-x-4 ${
            isDetailsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}
        >
          <ContactDetails />
        </div>
        <div 
          ref={formRef}
          className={`we-card flex-1 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-[#6506a2] to-[#1955d9] text-[#f4f4f2] transition-all duration-700 ${
            isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#f4f4f2' }}>Get In Touch</h3>
          {formState === "success" ? (
            <FormSuccess onReset={() => setFormState("idle")} />
          ) : (
            <form onSubmit={handleSubmit} className="text-[#f4f4f2] mx-auto w-full max-w-md">
              <FormInput
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="Your name"
              />
              
              <div className="flex flex-col md:flex-row gap-4">
                <FormInput
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  placeholder="Your email"
                  className="flex-1"
                />
                <FormInput
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                  placeholder="Phone number"
                  className="flex-1"
                />
              </div>

              <FormInput
                label="Company Name"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company (Optional)"
              />
              
              <FormTextArea
                label="Project Description"
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                error={errors.projectDescription}
                required
                placeholder="Tell us about your project"
              />

              <GlowEffectButton
                type="submit"
                disabled={formState === "submitting"}
                className="w-full flex justify-center items-center"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Sending...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </GlowEffectButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
