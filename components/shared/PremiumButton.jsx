"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PremiumButton({ href, children, onClick, dark = false }) {
  const baseStyle = dark 
    ? "border-brand-primary text-brand-primary hover:text-white" 
    : "border-white/30 text-white hover:text-brand-primary";

  const sweepStyle = dark ? "bg-brand-primary" : "bg-white";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-4 px-8 py-4 border rounded-full overflow-hidden transition-colors duration-500 ${baseStyle}`}
    >
      <div className={`absolute inset-0 w-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full ${sweepStyle}`} />
      
      <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase">
        {children}
      </span>
      
      <ArrowRight className="relative z-10 w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}