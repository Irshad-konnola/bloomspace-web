"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import Image from "next/image";

const servicesList = [
  {
    title: "Custom Wardrobes",
    number: "01",
    image: "/assets/gallery/gallery-6-new.jpeg",
  },
  {
    title: "Curtains & Blinds",
    number: "02",
    image: "/assets/gallery/gallery-4-new.jpeg",
  },
  {
    title: "Modern Kitchens",
    number: "03",
    image: "/assets/gallery/gallery-9-new.jpeg",
  },
  { title: "Custom Sofas", number: "04", image: "/assets/services/sofa.jpg" },
];

export default function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const scrollRefs = useRef([]);

  // MOBILE-FIRST LOGIC: Detect which service is in view during scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when element is in the middle 20% of screen
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setHoveredIndex(parseInt(index));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    scrollRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper className="bg-brand-secondary/10 py-16 md:py-20 lg:py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* MOBILE HEADER: Since the image is at the top in mobile, let's keep titles clear */}
        <span className="lg:hidden text-brand-primary text-xs tracking-[0.3em] uppercase mb-6 block font-semibold text-center">
          Core Disciplines
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* IMAGE SIDE: Now order-1 on mobile so it stays sticky at the top while scrolling text */}
          <div className="sticky top-24 lg:top-32 h-64 md:h-80 lg:h-[calc(100vh-16rem)] max-h-162.5 w-full rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl bg-muted z-30">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={false} // Prevent flash on mobile mount
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.05,
                }}
                transition={{ duration: 0.5, ease: "circOut" }}
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
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none" />
          </div>

          {/* TEXT SIDE: order-2 on mobile so it scrolls under the sticky image */}
          <div className="flex flex-col justify-center order-2 lg:order-1 relative z-10">
            <span className="hidden lg:block text-brand-primary text-xs tracking-[0.3em] uppercase mb-12 font-semibold">
              Core Disciplines
            </span>

            <div className="flex flex-col group/list">
              {servicesList.map((service, index) => (
                <Link
                  href="/services"
                  key={index}
                  data-index={index}
                  ref={(el) => (scrollRefs.current[index] = el)} // Attach observer ref
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group flex items-baseline justify-between py-10 md:py-12 border-b border-border transition-all duration-500 cursor-pointer"
                >
                  <h3
                    className={`text-3xl md:text-5xl lg:text-6xl font-heading transition-all duration-500 ${
                      hoveredIndex === index
                        ? "text-brand-primary translate-x-2"
                        : "text-foreground/30"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span
                    className={`text-xs md:text-sm font-medium tracking-widest transition-colors duration-500 ${
                      hoveredIndex === index
                        ? "text-brand-primary"
                        : "text-muted-foreground/20"
                    }`}
                  >
                    {service.number}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
