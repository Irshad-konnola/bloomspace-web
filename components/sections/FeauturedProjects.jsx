"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const projects = [
  {
    id: 1,
    title: "Bespoke TV Unit Design",
    category: "Living Space",
    image: "assets/featured/five.jpeg",
    // Wide item in a wide box (Perfect for minimal cropping)
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Custom Luxury Sofa",
    category: "Furniture",
    image: "assets/featured/one.jpeg",
    // Wide item in a narrower box (Crucial to make the box not-too-tall)
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Modern Fitted Wardrobe",
    category: "Storage Solutions",
    image: "/assets/gallery/gallery-2-new.jpeg",
    // Tall item in a wider box (Gives the item room to breathe)
    colSpan: "md:col-span-2",
  },
  {
    id: 4,
    title: "Elegant Window Curtains",
    category: "Decor & Dressings",
    image: "assets/featured/three.jpeg",
    // Tall item in a narrower box (Perfect for minimal cropping)
    colSpan: "md:col-span-1",
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
              // 1. Reverted overflow-hidden to the image itself for cleaner borders.
              // 2. Used aspect-ratios to make the grid dynamic and less boring.
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${project.colSpan}
                ${project.colSpan === "md:col-span-2" 
                  ? "aspect-[16/9]" // Wide aspect for col-span-2 cells
                  : "aspect-square md:aspect-[3/4]" // Square on mobile, slightly tall on desktop for col-span-1
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                // 3. Changed back to object-cover to fill the container.
                // 4. Added overflow-hidden to the image.
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 overflow-hidden"
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