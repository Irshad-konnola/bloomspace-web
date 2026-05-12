"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Lightbox from "@/components/shared/LightBox";
import { urlFor } from "@/lib/sanity";

const categories = ["All", "Residential", "Commercial", "Custom"];

export default function GalleryGrid({ initialProjects }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // We filter the dynamic projects passed from the server
  const filteredItems = initialProjects?.filter((item) => 
    activeCategory === "All" ? true : item.category === activeCategory
  ) || [];

  return (
    <SectionWrapper className="bg-background pt-32 md:pt-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col items-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading text-foreground font-bold tracking-tight mb-10 text-center"
          >
            Our <span className="text-brand-primary">Portfolio</span>
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-white text-foreground border border-border hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item._id}
                className="group relative aspect-4/5 overflow-hidden rounded-xl bg-muted cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={urlFor(item.mainImage).url()}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                  <ZoomIn className="w-10 h-10 text-white/80 mb-4" />
                  <span className="text-brand-secondary text-xs tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Lightbox */}
      <Lightbox 
        isOpen={!!selectedImage} 
        image={selectedImage ? urlFor(selectedImage.mainImage).url() : null} 
        alt={selectedImage?.title} 
        onClose={() => setSelectedImage(null)} 
      />
    </SectionWrapper>
  );
}