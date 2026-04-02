"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "Bloom Space completely transformed our living space. Their attention to detail and ability to capture our personal style while elevating it to a magazine-worthy level was truly astounding.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CEO, TechFlow",
    text: "Designing our new corporate headquarters was a massive undertaking. The team delivered an inspiring workspace that our employees love, perfectly balancing aesthetics with functional ergonomics.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Boutique Owner",
    text: "The custom furniture and lighting choices created an atmosphere in my store that instantly increased our foot traffic and dwell time. Worth every penny of the investment.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWrapper className="bg-brand-secondary/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <Quote className="w-16 h-16 text-brand-primary/20 mx-auto mb-8 transform rotate-180" />
        
        <div className="relative min-h-62.5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-4"
            >
              <p className="text-xl md:text-3xl font-heading text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-semibold text-brand-primary text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-brand-primary" : "bg-brand-primary/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="p-3 rounded-full border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}