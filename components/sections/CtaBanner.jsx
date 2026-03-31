"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackSnapEvent } from "@/lib/tracking/snap-pixel";

export default function CtaBanner() {
  const handleCTAClick = () => {
    trackSnapEvent("VIEW_CONTENT", { content_name: "Bottom CTA - Start Your Project" });
  };

  return (
    <section className="relative py-24 bg-brand-primary overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-white font-bold tracking-tight mb-6"
        >
          Ready to transform your space?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-secondary text-lg mb-10 max-w-2xl mx-auto"
        >
          Book a consultation with our lead designers and let’s discuss how we can bring your vision to life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            onClick={handleCTAClick}
            className="inline-block bg-white text-brand-primary px-8 py-4 font-semibold rounded-md shadow-lg hover:bg-brand-secondary transition-colors duration-300 hover:-translate-y-1 transform"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}