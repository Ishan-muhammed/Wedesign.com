import React from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Logo } from "@/components/Logo";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useEffect, useRef, useState } from "react";
import { GlowEffectButton } from "@/components/ui/glow-effect-demo";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";
import { GlowEffect } from "@/components/ui/glow-effect";

const projects = [
  {
    title: "AI Voice Agent Site",
    description:
      "We transformed our client's vision into a cutting-edge AI phone agent platform that's revolutionizing customer service. This sleek, intuitive website doesn't just showcase AI capabilities—it demonstrates them through an innovative free demo call feature that converts visitors into customers,with the interactive demo feature consistently cited as the deciding factor in purchasing decisions.",
    imageUrl:
      "/lovable-uploads/382db79d-aaa2-462a-8438-42ac5ab1585b.png",
    liveSiteUrl: "https://www.exileautomate.com/",
    index: 0,
  },
  {
    title: "NutriChef AI",
    description: "A nasal dilator is a device that is placed externally or internally over the nose to help open the nasal passages, which can potentially reduce snoring in individuals with nonapneic snoring or mild obstructive sleep apnea.",
    imageUrl: "/lovable-uploads/NutriChefAI logo.png",
    liveSiteUrl: "https://healthy-meal-architect-22.vercel.app/",
    index: 1,
  },
  {
    title: "Premium Auto Car Service",
    description:
      "We built an interactive online quiz platform that empowers users to create, take, and share knowledge assessments on any subject. This dynamic web application features intuitive quiz creation tools, secure user authentication, and social sharing capabilities—all wrapped in an engaging, user-friendly interface.",
    imageUrl:
      "/lovable-uploads/aiuto service.png",
    liveSiteUrl: "https://quizz-hub-12.vercel.app/",
    index: 2,
  },
];

const stacks = [
  { title: 'Flutter', img: '/lovable-uploads/FLUTTER.png' },
  { title: 'React', img: '/lovable-uploads/REACT.png' },
  { title: 'JavaScript', img: '/lovable-uploads/JAVA SCRIPT.png' },
  { title: 'NodeJs', img: '/lovable-uploads/NODE JS.png' },
  { title: 'Python', img: '/lovable-uploads/PYTHON.png' },
  { title: 'HTML', img: '/lovable-uploads/HTML.png' },
];

const Index = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const aboutRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutSupportTitleRef = useRef(null);
  const aboutDescRef = useRef(null);
  const aboutImgRef = useRef(null);
  const [aboutTitleVisible, setAboutTitleVisible] = useState(false);
  const [aboutSupportTitleVisible, setAboutSupportTitleVisible] = useState(false);
  const [aboutDescVisible, setAboutDescVisible] = useState(false);
  const [aboutImgVisible, setAboutImgVisible] = useState(false);
  const servicesRef = useRef(null);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [stackVisible, setStackVisible] = useState(Array(stacks.length).fill(false));
  const stackRefs = useRef<React.RefObject<HTMLDivElement>[]>(stacks.map(() => React.createRef<HTMLDivElement>()));
  const servicesTextRef = useRef(null);
  const servicesGridRef = useRef(null);
  const [servicesTextVisible, setServicesTextVisible] = useState(false);
  const [servicesGridVisible, setServicesGridVisible] = useState(false);
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [heroImageVisible, setHeroImageVisible] = useState(false);
  const [heroActionsVisible, setHeroActionsVisible] = useState(false);
  const [serviceCardsVisible, setServiceCardsVisible] = useState(Array(3).fill(false));
  const serviceCardRefs = useRef<React.RefObject<HTMLDivElement>[]>(Array(3).fill(null).map(() => React.createRef<HTMLDivElement>()));
  const servicesTitleRef = useRef(null);
  const servicesSubtitleRef = useRef(null);
  const stacksTitleRef = useRef(null);
  const stacksSubtitleRef = useRef(null);
  const [stacksTextVisible, setStacksTextVisible] = useState(false);
  const projectsTitleRef = useRef(null);
  const [projectsTextVisible, setProjectsTextVisible] = useState(false);
  const [projectCardsVisible, setProjectCardsVisible] = useState(Array(3).fill(false));
  const projectCardRefs = useRef<React.RefObject<HTMLDivElement>[]>(Array(3).fill(null).map(() => React.createRef<HTMLDivElement>()));

  useEffect(() => {
    // Update document title for SEO
    document.title = "We Design Portfolio | Creative Web Solutions";

    // Add meta description
    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "See We Design's bold portfolio of innovative websites."
      );
    }

    const timer = setTimeout(() => setHeroVisible(true), 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroTextVisible(true), 500);      // Text first
    const t2 = setTimeout(() => setHeroImageVisible(true), 1000);    // Image second
    const t3 = setTimeout(() => setHeroActionsVisible(true), 1500);  // Button & icons third
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // About section observers
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAboutTitleVisible(true);
          }, 200); // 200ms delay
          titleObserver.disconnect();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const supportTitleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAboutSupportTitleVisible(true);
          }, 400); // 400ms delay
          supportTitleObserver.disconnect();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const descObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAboutDescVisible(true);
          }, 600); // 600ms delay
          descObserver.disconnect();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAboutImgVisible(true);
          }, 800); // 800ms delay
          imgObserver.disconnect();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (aboutTitleRef.current) titleObserver.observe(aboutTitleRef.current);
    if (aboutSupportTitleRef.current) supportTitleObserver.observe(aboutSupportTitleRef.current);
    if (aboutDescRef.current) descObserver.observe(aboutDescRef.current);
    if (aboutImgRef.current) imgObserver.observe(aboutImgRef.current);

    return () => {
      titleObserver.disconnect();
      supportTitleObserver.disconnect();
      descObserver.disconnect();
      imgObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const servicesObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          servicesObserver.disconnect();
        }
      },
      { threshold: 0 }
    );
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    return () => servicesObserver.disconnect();
  }, []);

  useEffect(() => {
    stackRefs.current.forEach((ref, i) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStackVisible(prev => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  useEffect(() => {
    const titleObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesTextVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (servicesTitleRef.current) titleObserver.observe(servicesTitleRef.current);
    if (servicesSubtitleRef.current) titleObserver.observe(servicesSubtitleRef.current);

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    serviceCardRefs.current.forEach((ref, i) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setServiceCardsVisible(prev => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  useEffect(() => {
    const titleObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStacksTextVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (stacksTitleRef.current) titleObserver.observe(stacksTitleRef.current);
    if (stacksSubtitleRef.current) titleObserver.observe(stacksSubtitleRef.current);

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const titleObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsTextVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (projectsTitleRef.current) titleObserver.observe(projectsTitleRef.current);

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    projectCardRefs.current.forEach((ref, i) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setProjectCardsVisible(prev => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GradientBackground>
      {/* HEADER NAVIGATION */}
      <header className="fixed z-50 top-0 left-0 w-full backdrop-blur-md shadow-sm border-b border-white/10" style={{ backgroundColor: '#220f6d' }}>
        <nav className="container mx-auto flex items-center justify-between py-6 px-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Logo headerVariant={true} className="h-8" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 sm:gap-6 items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="relative font-medium text-white/90 hover:text-white transition-colors text-base px-2 py-1 bg-transparent rounded-md after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative font-medium text-white/90 hover:text-white transition-colors text-base px-2 py-1 bg-transparent rounded-md after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative font-medium text-white/90 hover:text-white transition-colors text-base px-2 py-1 bg-transparent rounded-md after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative font-medium text-white/90 hover:text-white transition-colors text-base px-2 py-1 bg-transparent rounded-md after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              Our Projects
            </button>
            <GlowEffectButton
              onClick={() => scrollToSection("contact")}
              className="ml-2"
            >
              Contact Us
            </GlowEffectButton>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu onNavigate={scrollToSection} />
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section id="hero" className="h-screen mt-8 pt-24 pb-2 md:pt-48 md:py-40 w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#66009d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-4 md:px-12">
          {/* Text Content */}
          <div
            className={`flex-1 md:pr-12 transition-all duration-700 ${
              heroTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {/* Hero section heading */}
            <h1 className="font-poppins font-semibold mb-4 md:mb-6 we-gradient-text animate-fade-in drop-shadow-2xl text-left w-full leading-none" style={{ color: '#f4f4f2' }}>
              <span className="block text-[48px] md:text-[72px] leading-none">Transform</span>
              <span className="block text-[48px] md:text-[72px] leading-none">your online</span>
              <span className="block text-[48px] md:text-[72px] leading-none">presence</span>
              <span className="flex items-baseline text-[48px] md:text-[72px] leading-none">
                with
                <Logo className="w-[120px] md:w-[180px] h-auto ml-2" />
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 md:mb-10 animate-fade-in px-0 font-poppins" style={{ color: '#f4f4f2', animationDelay: '200ms' }}>
              Discover how We Design brings your vision to life.
            </p>
            <div className={`flex items-center gap-4 mt-8 mb-8 transition-all duration-700 ${heroActionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <GlowEffectButton onClick={() => scrollToSection('contact')}>
                Get in Touch
              </GlowEffectButton>
              <a href="https://whatsapp.com/channel/0029Vb9lC6kA89MdSFyb4x3l" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-black transition-colors duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl">
                <img src="/lovable-uploads/icons8-whatsapp.svg" alt="WhatsApp" className="w-6 h-6 invert" />
              </a>
              <a href="https://www.instagram.com/wedessign?igsh=MzBsdTNwZTg2cGxr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-black transition-colors duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl">
                <img src="/lovable-uploads/icons8-instagram.svg" alt="Instagram" className="w-6 h-6 invert" />
              </a>
            </div>
          </div>
          {/* Image */}
          <div
            className={`flex-1 flex justify-center items-center transition-all duration-700 ${
              heroImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            } pb-10`}
          >
            <img src="/lovable-uploads/front page.png" alt="Front Page Visual" className="w-3/4 md:w-full max-w-lg h-auto object-contain" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center gap-8 md:gap-16" style={{ backgroundColor: '#220f6d' }}>
        {/* About Us Section */}
        <section id="about" ref={aboutRef} className="py-12 md:py-28 bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
            {/* Left: Text Content */}
            <div className="flex-1 px-4 md:pl-16">
              <h3 
                ref={aboutTitleRef}
                className={`text-3xl md:text-4xl font-poppins font-bold mb-4 text-[#66009d] transform transition-all duration-700 ${
                  aboutTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                }`}
              >
                About Us
              </h3>
              <h2 
                ref={aboutSupportTitleRef}
                className={`text-2xl md:text-4xl font-poppins font-extrabold text-[#23272a] mb-8 leading-[1.1] transform transition-all duration-700 ${
                  aboutSupportTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                }`}
              >
                Yah, We Are Elevating<br />Digital Possibilities
              </h2>
              <p 
                ref={aboutDescRef}
                className={`text-base text-gray-800 mb-2 font-inter transform transition-all duration-700 ${
                  aboutDescVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                }`}
              >
                Innovation is at the heart of everything we do at Wedesign. We are constantly exploring the cutting edge of Web Development, App Development, and Graphic Design to create forward-thinking digital solutions. We merge creativity and technology to build robust, scalable, and visually stunning online presences that are ready for the future and designed to drive your growth..
              </p>
            </div>
            {/* Right: Images */}
            <div 
              ref={aboutImgRef}
              className={`flex-1 flex justify-center gap-8 transform transition-all duration-700 ${
                aboutImgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
              }`}
            >
              <img src="/lovable-uploads/Guy sitting on a chair by wawing shooper.png" alt="Guy sitting on a chair by wawing shooper" className="w-75 h-auto object-contain" />
            </div>
          </div>
        </section>
        {/* Quality Services Section */}
        <section
          id="services"
          ref={servicesRef}
          className="py-20 md:py-28 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="mb-12">
              <h2 
                ref={servicesTitleRef}
                className={`text-4xl md:text-5xl font-bold text-center mb-4 we-gradient-text transition-all duration-700 ${
                  servicesTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: '#f4f4f2' }}
              >
                Our Quality Services
              </h2>
              <p 
                ref={servicesSubtitleRef}
                className={`text-center text-lg transition-all duration-700 ${
                  servicesTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: '#f4f4f2' }}
              >
                Discover excellence through our array of high-quality services.
              </p>
            </div>
                        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {/* Web Development Card */}
              <div
                ref={serviceCardRefs.current[0]}
                className={`transition-all duration-700 ${
                  serviceCardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } bg-[#181028] rounded-3xl py-6 px-6 md:px-8 min-h-[280px] md:min-h-[320px] max-w-sm w-full flex flex-col items-start shadow-lg hover:bg-gradient-to-tr hover:from-[#9333ea] hover:to-[#2d145e]`}
              >
                <img src="/lovable-uploads/web dev icon.png" alt="Web Development" className="w-20 h-20 mb-6" />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f4f4f2' }}>
                  WEB DEVELOPMENT
                </h3>
                <p className="text-base" style={{ color: '#f4f4f2' }}>
                  Crafting a captivating website to attract and convert visitors into loyal customers.
                </p>
              </div>
              {/* App Development Card */}
              <div
                ref={serviceCardRefs.current[1]}
                className={`transition-all duration-700 ${
                  serviceCardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } bg-[#181028] rounded-3xl py-6 px-8 min-h-[320px] max-w-sm w-full flex flex-col items-start shadow-lg hover:bg-gradient-to-tr hover:from-[#9333ea] hover:to-[#2d145e]`}
              >
                <img src="/lovable-uploads/pngwing.com.png" alt="App Development" className="w-20 h-20 mb-6" />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f4f4f2' }}>
                  APP DEVELOPMENT
                </h3>
                <p className="text-base" style={{ color: '#f4f4f2' }}>
                  Crafting a captivating app to attract and convert visitors into loyal customers.
                </p>
              </div>
              {/* Software Development Card */}
              <div
                ref={serviceCardRefs.current[2]}
                className={`transition-all duration-700 ${
                  serviceCardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } bg-[#181028] rounded-3xl py-6 px-8 min-h-[320px] max-w-sm w-full flex flex-col items-start shadow-lg hover:bg-gradient-to-tr hover:from-[#9333ea] hover:to-[#2d145e]`}
              >
                <div className="flex gap-2 mb-6">
                  <img src="/lovable-uploads/Pr.png" alt="Pr" className="w-10 h-10" />
                  <img src="/lovable-uploads/Ae.png" alt="Ae" className="w-10 h-10" />
                  <img src="/lovable-uploads/Ps.png" alt="Ps" className="w-10 h-10" />
                  <img src="/lovable-uploads/Ai.png" alt="Ai" className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f4f4f2' }}>
                  GRAPHIC DESIGN
                </h3>
                <p className="text-base" style={{ color: '#f4f4f2' }}>
                  From striking poster design and branding to digital assets, we create visually compelling designs that capture attention and communicate your message effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Stacks Section */}
        <section className="py-12 w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-6">
            <div className="mb-8">
              <h2 
                ref={stacksTitleRef}
                className={`text-4xl md:text-5xl font-bold text-center mb-10 we-gradient-text text-gray-900 transition-all duration-700 ${
                  stacksTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Our Stacks
              </h2>
              <p 
                ref={stacksSubtitleRef}
                className={`text-center text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 ${
                  stacksTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                We put your ideas and thus your wishes in the form of a unique project that inspires our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 custom-cursor-stacks">
              {stacks.map((stack, i) => (
                <div
                  key={stack.title}
                  ref={stackRefs.current[i]}
                  className={`transition-all duration-700 ${
                    stackVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } bg-[#181028] rounded-3xl flex flex-col items-center justify-center py-10 px-4 shadow-lg hover:bg-gradient-to-tr hover:from-[#9333ea] hover:to-[#2d145e]`}
                >
                  <img src={stack.img} alt={stack.title} className="w-16 h-16 mb-4" />
                  <span className="text-xl font-semibold text-gray-300">{stack.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="py-14 md:py-36 pb-48 w-screen relative left-1/2 right-1/2 -mx-[50vw] -mt-16 bg-gradient-to-br from-[#6506a2] to-[#1955d9] flex justify-center items-center">
          <div className="w-full">
            <h2 
              ref={projectsTitleRef}
              className={`text-4xl md:text-5xl font-bold text-center mb-28 md:mb-32 we-gradient-text text-white font-poppins transition-all duration-700 ${
                projectsTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Project
            </h2>
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-8 px-4 md:px-0">
              <div
                ref={projectCardRefs.current[0]}
                className={`transition-all duration-700 ${
                  projectCardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ProjectCard
                  title="Exile Automate"
                  description="Transformed vision into a cutting-edge AI phone agent platform revolutionizing customer service. Features an innovative free demo call that actively converts visitors into customers."
                  imageUrl="/lovable-uploads/xi logo.png"
                  liveSiteUrl="https://www.exileautomate.com/"
                  index={0}
                />
              </div>
              <div
                ref={projectCardRefs.current[1]}
                className={`transition-all duration-700 ${
                  projectCardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ProjectCard
                  title="Nutrichef AI"
                  description="Harnessing AI for healthy eating transformation with NutriChef AI. This intuitive web platform creates personalized recipes, delivering a truly custom meal planning experience."
                  imageUrl="/lovable-uploads/NutriChefAI logo.png"
                  liveSiteUrl="https://healthy-meal-architect-22.vercel.app/"
                  index={1}
                />
              </div>
              <div
                ref={projectCardRefs.current[2]}
                className={`transition-all duration-700 ${
                  projectCardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ProjectCard
                  title="Zoom auto detailing"
                  description="Developed a user-friendly site for premium auto detailing services including paint correction and ceramic coatings. Showcases service packages and offers convenient online booking for discerning clients."
                  imageUrl="/lovable-uploads/zoom auto dealing.png"
                  liveSiteUrl="https://www.zoomautodetailing.com/"
                  index={2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 md:px-12 -mt-20">
          <ContactForm />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </GradientBackground>
  );
};

export default Index;
