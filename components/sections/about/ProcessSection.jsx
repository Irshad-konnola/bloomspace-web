"use client";

import { motion } from "framer-motion";
import { Search, Cuboid, Ruler, Hammer } from "lucide-react";
import SectionWrapper from "../../layout/SectionWrapper";

const processSteps = [
  {
    id: "01",
    title: "Vision & Discovery",
    description: "By deeply understanding your taste, lifestyle, and preferences, we establish a clear design trajectory tailored specifically to you.",
    icon: Search,
  },
  {
    id: "02",
    title: "3D Visualization",
    description: "Experience your space before it's built. We craft highly detailed 3D visuals to help you see the final outcome and ensure every texture aligns with your expectations.",
    icon: Cuboid,
  },
  {
    id: "03",
    title: "Precision Planning",
    description: "Every architectural element and bespoke furniture piece is pre-measured with precision and finalized only upon your absolute approval, ensuring accuracy at every stage.",
    icon: Ruler,
  },
  {
    id: "04",
    title: "Flawless Execution",
    description: "Our expert team of craftsmen and project managers seamlessly translate the approved designs into your physical reality with uncompromising quality.",
    icon: Hammer,
  },
];

export default function ProcessSection() {
  return (
    <SectionWrapper className="bg-brand-secondary/10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs tracking-[0.3em] uppercase mb-6 block font-semibold"
          >
            Our Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground tracking-tight mb-8"
          >
            Design to <i className="text-brand-primary">Precision</i> Execution.
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* The Vertical Connecting Line */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-[2px] bg-border/60" />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start gap-8 md:gap-16 group"
                >
                  {/* Timeline Node & Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-background border border-border rounded-full flex items-center justify-center shadow-sm group-hover:border-brand-primary transition-colors duration-500">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <span className="text-brand-primary/40 font-heading text-3xl md:text-4xl font-bold block mb-4">
                      {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}