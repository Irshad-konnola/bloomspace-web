"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../../layout/SectionWrapper";

const team = [
  {
    name: "Eleanor Vance",
    role: "Founder & Principal Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
  },
  {
    name: "Marcus Sterling",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
  },
  {
    name: "Sophia Rossi",
    role: "Interior Stylist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <SectionWrapper className="bg-brand-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            The Visionaries
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground font-bold tracking-tight">
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl h-[450px] mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-brand-primary/80 uppercase tracking-wider text-sm mt-2">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}