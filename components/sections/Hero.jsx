"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackSnapEvent } from "@/lib/tracking/snap-pixel";

export default function Hero() {
  const handleCTAClick = () => {
    // Fire Snapchat Pixel event when the user clicks the CTA
    trackSnapEvent("VIEW_CONTENT", { content_name: "Hero CTA - Get a Consultation" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Aceternity-style subtle scale animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Premium dark overlay */}
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Redefining Spaces
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-white font-bold tracking-tighter mb-6 max-w-4xl"
        >
          Elevate Your <br className="hidden md:block" /> Living Experience.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 font-light"
        >
          We craft bespoke, timeless interiors that perfectly blend aesthetics with unparalleled functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            onClick={handleCTAClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-brand-primary overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative">Get a Consultation</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}