"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import PremiumButton from "../shared/PremiumButton";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 z-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-primary text-xs tracking-[0.3em] uppercase mb-8 block font-semibold"
            >
              The Studio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-heading text-foreground tracking-tight mb-8 leading-[1.1]"
            >
              Shaping spaces <br /> that{" "}
              <i className="text-brand-primary">breathe.</i>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-muted-foreground text-lg leading-relaxed mb-10"
            >
              We reject the ordinary. Our design philosophy is rooted in the
              belief that an interior should be a physical manifestation of your
              highest aspirations—crafted with obsessive attention to detail and
              texture.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <PremiumButton href="/about" dark={true}>
                Discover Our Story
              </PremiumButton>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative h-100 lg:h-[calc(100vh-16rem)] max-h-162.5 w-full rounded-2xl overflow-hidden group">
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/about-preview.jpg"
                alt="Minimalist Living Space"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
