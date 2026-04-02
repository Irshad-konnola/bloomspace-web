"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import Image from "next/image";
const servicesList = [
  {
    title: "Modern Kitchens",
    number: "01",
    image: "/assets/services/kitchen.jpg",
  },
  {
    title: "Custom Wardrobes",
    number: "02",
    image: "/assets/services/wardrobe.jpg",
  },
  {
    title: "Curtains & Blinds",
    number: "03",
    image: "/assets/services/curtains.jpg",
  },
  {
    title: "Custom Sofas",
    number: "04",
    image: "/assets/services/sofa.jpg",
  },
];

export default function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <SectionWrapper className="bg-brand-secondary/10 py-16 md:py-20 lg:py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Interactive List */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <span className="text-brand-primary text-xs tracking-[0.3em] uppercase mb-8 md:mb-12 block font-semibold">
              Core Disciplines
            </span>

            <div className="flex flex-col group/list">
              {servicesList.map((service, index) => (
                <Link
                  href="/services"
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group flex items-baseline justify-between py-6 md:py-8 border-b border-border transition-all duration-500 md:hover:pl-6 cursor-pointer"
                >
                  <h3
                    className={`text-3xl md:text-4xl lg:text-5xl font-heading transition-colors duration-500 ${
                      hoveredIndex === index
                        ? "text-brand-primary"
                        : "text-foreground/40 lg:group-hover/list:text-foreground/20"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span
                    className={`text-xs md:text-sm font-medium tracking-widest transition-colors duration-500 ${
                      hoveredIndex === index
                        ? "text-brand-primary"
                        : "text-muted-foreground/30"
                    }`}
                  >
                    {service.number}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="mt-10 lg:hidden">
              <Link
                href="/services"
                className="text-brand-primary text-sm font-semibold tracking-widest uppercase hover:text-brand-primary/80 transition-colors"
              >
                View All Services &rarr;
              </Link>
            </div>
          </div>

          {/* Right Side: Sticky Image Reveal */}
          <div className="relative h-87.5 md:h-100 lg:h-[calc(100vh-16rem)] max-h-162.5 w-full rounded-2xl overflow-hidden order-1 lg:order-2 shadow-sm bg-muted">
           {servicesList.map((service, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                // 1. ADD THIS INITIAL PROP: Tells the browser the first image is visible instantly
                initial={{
                  opacity: index === 0 ? 1 : 0,
                  scale: index === 0 ? 1 : 1.1,
                  zIndex: index === 0 ? 10 : 0,
                }}
                // 2. Keep your animate prop
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.1,
                  zIndex: hoveredIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0} 
                />
              </motion.div>
            ))}

            {/* Premium dark gradient overlay to ensure image depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent mix-blend-overlay z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
