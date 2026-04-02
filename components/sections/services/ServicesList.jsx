"use client";

import { motion } from "framer-motion";
import { 
  Sofa, 
  Tv, 
  Blinds, 
  Utensils, 
  LayoutGrid, 
  Layers, 
  Hammer, 
  PaintRoller 
} from "lucide-react";
import SectionWrapper from "../../layout/SectionWrapper";
import Image from "next/image";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Kitchen",
    description: "Modern kitchens designed for functionality and style. We offer fully customized kitchen solutions with a wide variety of materials, finishes, and smart accessories to maximize space and efficiency. From contemporary to classic designs, we deliver durable, elegant kitchens tailored to your needs and budget.",
    icon: Utensils,
    image: "/assets/services/kitchen.jpg",
  },
  {
    title: "Wardrobes",
    description: "Minimal, sleek, and intelligently designed wardrobes tailored to your space. We create fully customized cupboard solutions with smart storage accessories, premium finishes, and flexible designs — all aligned with your budget and lifestyle.",
    icon: LayoutGrid,
    image: "/assets/services/wardrobe.jpg",
  },
  {
    title: "Custom Sofas",
    description: "Designed for comfort and crafted for style. Our customized sofas blend modern aesthetics with durable materials, giving you the perfect balance of elegance, functionality, and long-lasting quality.",
    icon: Sofa,
    image: "/assets/services/sofa.jpg",
  },
  {
    title: "TV Units",
    description: "Contemporary TV units designed to enhance your living space. Clean lines, smart storage, and premium finishes combine to create a stylish focal point for your home.",
    icon: Tv,
    image: "/assets/services/tv unit.jpg",
  },
  {
    title: "Curtains & Blinds",
    description: "Elevate your interiors with premium yet affordable curtain solutions. We offer artistic tailoring, high-quality railing systems, and a wide range of fabric options to match every design theme. Upgrade to advanced Italian motorized systems with up to 15 years warranty for effortless luxury.",
    icon: Blinds,
    image: "/assets/services/curtains.jpg",
  },
  {
    title: "Wall Paneling",
    description: "Transform plain walls into statement features. Our modern wall paneling solutions add depth, texture, and sophistication, using high-quality materials and flawless finishing techniques.",
    icon: Layers,
    image: "/assets/services/wall paneling.jpg",
  },
  {
    title: "Gypsum Works",
    description: "Creative gypsum solutions that redefine your interiors. From modern false ceilings to custom wall features and lighting details, we deliver precise workmanship with clean, seamless finishing for a premium look.",
    icon: Hammer,
    image: "/assets/services/ceiling2.jpg",
  },
  {
    title: "Painting",
    description: "Professional painting services with superior surface preparation and flawless finishing. We use high-quality materials and advanced techniques to achieve smooth, long-lasting, and elegant results that elevate your entire space.",
    icon: PaintRoller,
    image: "/assets/services/painting.jpg",
  },
];

export default function ServicesList() {
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    // Preload the first image
    const img = new window.Image();
    img.src = services[0].image;
  }, []);

  return (
    <SectionWrapper className="bg-background pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-40">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary text-xs tracking-[0.3em] uppercase mb-6 block font-semibold"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-heading text-foreground tracking-tight mb-8 leading-[1.1]"
          >
            Crafting Every <br /> <i className="text-brand-primary">Detail.</i>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            From custom kitchens to flawless finishes, we provide a comprehensive suite of interior solutions designed to elevate your living spaces.
          </motion.p>
        </div>

        {/* Editorial Services List */}
        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Alternate layout directions for desktop
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-0 relative group`}
              >
                
                {/* Image Half */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[65%] relative z-10"
                >
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                    {index === 0 ? (
                      // Use standard img for first image to ensure immediate loading
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        loading="eager"
                        fetchPriority="high"
                      />
                    ) : (
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        quality={85}
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none transition-opacity duration-500 group-hover:bg-transparent" />
                  </div>
                </motion.div>

                {/* Text Half (Overlapping the image on desktop) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full lg:w-[45%] relative z-20 ${
                    isEven ? 'lg:-ml-24' : 'lg:-mr-24'
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-border/50">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 bg-brand-secondary/30 rounded-xl flex items-center justify-center text-brand-primary">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-brand-primary/40 font-heading text-5xl font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    {/* Decorative elegant line */}
                    <div className="w-12 h-[2px] bg-brand-primary mt-10 transition-all duration-500 group-hover:w-24" />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}