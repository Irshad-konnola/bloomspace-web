"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

export default function AboutPreview() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2900&auto=format&fit=crop"
              alt="Minimalist Living Space"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-foreground font-bold tracking-tight mb-6 leading-tight">
              Design is not just what it looks like, it's how it feels.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Lumière, we believe that your space should be a true reflection of your personality and lifestyle. Our approach combines rigorous architectural planning with an intuitive sense of style to create environments that are both breathtaking and deeply comfortable.
            </p>
            
            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primary/80 transition-colors group"
              >
                Discover Our Story
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}