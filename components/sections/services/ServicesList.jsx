"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Hammer, Sofa, CheckCircle2 } from "lucide-react";
import SectionWrapper from "../../layout/SectionWrapper";

const detailedServices = [
  {
    title: "Residential Interior Design",
    description: "We create bespoke living spaces that are intimately tied to your personal lifestyle. From sprawling estates to modern penthouses, we handle every detail from concept to installation.",
    icon: Home,
    features: ["Space Planning & Layout", "Custom Millwork Design", "Color & Material Selection", "Turnkey Installation"],
  },
  {
    title: "Commercial & Hospitality Design",
    description: "Elevate your brand presence. We design functional, inspiring, and durable commercial spaces that leave a lasting impression on your clients and boost employee morale.",
    icon: Briefcase,
    features: ["Brand Identity Integration", "Ergonomic Office Layouts", "Boutique Retail Design", "Restaurant & Cafe Interiors"],
  },
  {
    title: "Full-Scale Renovation",
    description: "Breathe new life into historic or outdated properties. We manage the entire renovation process, bridging the gap between architectural integrity and modern luxury.",
    icon: Hammer,
    features: ["Project Management", "Contractor Coordination", "Structural Redesign", "Permitting Assistance"],
  },
  {
    title: "Custom Furniture & Sourcing",
    description: "Sometimes the perfect piece doesn't exist yet. We design custom furniture and source rare, vintage, and high-end items from our exclusive global network of artisans.",
    icon: Sofa,
    features: ["Bespoke Upholstery", "Custom Cabinetry", "Art Curation", "Vintage Sourcing"],
  },
];

export default function ServicesList() {
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
            Our Design <span className="text-brand-primary">Disciplines</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A comprehensive suite of interior design services tailored to meet the exacting standards of our luxury clientele.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white border border-border p-10 rounded-2xl shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-brand-secondary/50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
                  <Icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm font-medium text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}