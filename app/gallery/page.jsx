"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Lightbox from "@/components/shared/LightBox";

const categories = ["All", "Residential", "Commercial", "Custom"];

const galleryItems = [
  { id: 1, category: "Residential", title: "Soho Penthouse", src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2874&auto=format&fit=crop" },
  { id: 2, category: "Commercial", title: "Creative Agency HQ", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2869&auto=format&fit=crop" },
  { id: 3, category: "Residential", title: "Modern Minimalist Villa", src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop" },
  { id: 4, category: "Custom", title: "Bespoke Walnut Dining", src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2938&auto=format&fit=crop" },
  { id: 5, category: "Residential", title: "Coastal Retreat", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop" },
  { id: 6, category: "Commercial", title: "The Artisan Boutique", src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940&auto=format&fit=crop" },
  { id: 7, category: "Residential", title: "Urban Loft", src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2940&auto=format&fit=crop" },
  { id: 8, category: "Custom", title: "Marble Kitchen Island", src: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2940&auto=format&fit=crop" },
  { id: 9, category: "Residential", title: "Mid-Century Modern", src: "https://images.unsplash.com/photo-1583847268964-b28ce8fde4f8?q=80&w=2787&auto=format&fit=crop" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryItems.filter((item) => 
    activeCategory === "All" ? true : item.category === activeCategory
  );

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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
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
          </motion.div>
        </div>

        {/* Masonry/Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative aspect-4/5 overflow-hidden rounded-xl bg-muted cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <ZoomIn className="w-10 h-10 text-white/80 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="text-brand-secondary text-xs tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
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
        image={selectedImage?.src} 
        alt={selectedImage?.title} 
        onClose={() => setSelectedImage(null)} 
      />
    </SectionWrapper>
  );
}