"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Urban Loft Workspace",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2869&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Coastal Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "The Artisan Boutique",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
];

export default function FeaturedProjects() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-foreground font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link 
            href="/gallery" 
            className="hidden md:inline-flex items-center text-brand-primary font-medium hover:text-brand-primary/80 transition-colors group mb-2"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl h-[400px] cursor-pointer ${project.colSpan}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Premium dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-secondary text-sm font-medium tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-heading font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primary/80 transition-colors group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}