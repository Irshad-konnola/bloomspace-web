"use client";

import { motion } from "framer-motion";
import PremiumButton from "../shared/PremiumButton";
import { trackSnapEvent } from "@/lib/tracking/snap-pixel";

export default function Hero() {
  const handleCTAClick = () => {
    trackSnapEvent("VIEW_CONTENT", {
      content_name: "Hero CTA - View Portfolio",
    });
  };

  return (
    <section className="relative h-svh w-full flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Immersive Image Reveal */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/80 z-10" />
        <img
          src="/assets/landing.jpg"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Asymmetrical Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading text-white font-medium tracking-tighter leading-[1.1]">
              Architecture of <br className="hidden md:block" />
              <span className="italic text-white/80">Atmosphere.</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start md:items-end gap-6"
        >
          <p className="text-gray-100 text-sm md:text-base max-w-sm md:text-right font-light leading-relaxed">
            Curating bespoke environments that blend timeless elegance with
            uncompromising functionality for the modern lifestyle.
          </p>
          <PremiumButton href="/gallery" onClick={handleCTAClick}>
            Explore Portfolio
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
