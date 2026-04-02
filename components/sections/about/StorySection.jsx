"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../../layout/SectionWrapper";
import Image from "next/image";

export default function StorySection() {
  return (
    <SectionWrapper className="bg-background pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-heading text-foreground font-bold tracking-tight mb-6"
          >
            Crafting Spaces with <br /> <span className="text-brand-primary">Purpose & Elegance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Since 2023, Bloom Space has been at the forefront of luxury interior design, transforming ordinary rooms into extraordinary living experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-150 rounded-xl overflow-hidden"
          >
            <Image 
              src="/assets/about/cover.jpg" 
              alt="Our Studio" 
              className="absolute inset-0  object-cover"
              fill
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
We are a team of highly experienced designers, skilled carpenters, tailors, and fabric specialists dedicated to delivering exceptional interior solutions. With a strong focus on craftsmanship and precision, we ensure that every detail is carefully executed to perfection. Our approach combines creativity, technical expertise, and a deep understanding of client preferences to create spaces that are both functional and visually refined. We believe that excellence lies in the details—and we never miss one.              </p>
            </div>
            
            <div className="pl-6 border-l-2 border-brand-primary">
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Mission & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to translate our clients' personalities into physical spaces. We envision a world where every interior environment not only looks breathtaking but inherently improves the daily lives of those who inhabit it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}