"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const testimonials = [
  {
    id: 1,
    name: "Fatima Shaima",
    role: "Homeowner,Riyadh City ",
    text: "Absolutely thrilled with our new kitchen! 🌟 The team at Bloom Space transformed our outdated cooking area into a modern masterpiece. Their attention to detail in the custom cabinetry and layout planning is unmatched. Highly recommend them! 💯",
  },
  {
    id: 2,
    name: "Wael Ahmed",
    role: "Villa Owner, Al Shawamekh",
    text: "Amazing perfection! ✨ This is the only way to describe the creative work done by the Bloom Space Interior team. From the most precise initial measurements to the final touches of installation, the service was flawless. 👌 Wow, the custom curtains made a huge difference, beautifying my entire home and adding a touch of luxury. 🏠💖",
  },
  {
    id: 3,
    name: "Aisha Farhana",
    role: "Homeowner, Al Falah",
    text: "I couldn't be happier with the custom wardrobes installed in our master bedroom. The storage solutions are both elegant and highly functional. 👗👔 The installation team was incredibly professional, clean, and finished right on schedule. Thank you, Bloom Space! 🙏",
  },
  {
    id: 4,
    name: "Marwan Alzabi",
    role: "Managing Director, Shakhbout City",
    text: "Bloom Space did an incredible job upgrading our corporate office! 🏢 The automated blinds they installed give us the perfect balance of natural light and privacy for the glass meeting rooms. We also had them design sleek storage units and a modern kitchenette for the staff breakroom. Professional team and on-time delivery! 💼🤝 Highly recommended for commercial spaces.",
  }
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