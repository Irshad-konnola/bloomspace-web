"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we are on the homepage
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on route and scroll position
  const isTransparent = isHome && !isScrolled;
  const navBg = isTransparent
    ? "bg-transparent"
    : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40";
  const textColor = isTransparent
    ? "text-gray-200 hover:text-white"
    : "text-muted-foreground hover:text-brand-primary";
  const logoColor = isTransparent ? "text-white" : "text-brand-primary";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0 flex items-center">
            <div className="relative w-40 h-14 transition-opacity duration-300">
              <Image
                // Dynamically swap the image source based on the navbar's background
                src={
                  isTransparent
                    ? "/assets/logo-light.png"
                    : "/assets/logo-dark.png"
                }
                alt="Bloom Space Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`group relative inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-widest uppercase overflow-hidden transition-all duration-300 rounded-full ${
                isTransparent
                  ? "text-white border border-white/30 hover:bg-white hover:text-black"
                  : "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-md hover:shadow-xl"
              }`}
            >
              Consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors duration-300 ${isTransparent ? "text-white" : "text-foreground"}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-24 left-0 w-full bg-background border-b border-border md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-heading text-foreground hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
