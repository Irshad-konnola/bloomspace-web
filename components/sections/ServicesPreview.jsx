"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Hammer, Sofa } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const services = [
  {
    title: "Residential Design",
    description: "Transforming houses into personalized homes with tailored layouts and curated furnishings.",
    icon: Home,
  },
  {
    title: "Commercial Spaces",
    description: "Designing productive and inspiring workspaces that reflect your brand identity.",
    icon: Briefcase,
  },
  {
    title: "Renovation",
    description: "Full-scale remodeling services to breathe new life into outdated architectures.",
    icon: Hammer,
  },
  {
    title: "Custom Furniture",
    description: "Bespoke furniture pieces crafted to fit perfectly within your spatial requirements.",
    icon: Sofa,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPreview() {
  return (
    <SectionWrapper className="bg-brand-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground font-bold tracking-tight">
            Comprehensive Services
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 bg-brand-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}