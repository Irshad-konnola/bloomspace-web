import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <div className="relative w-56 h-14">
              <Image
                src="/assets/logo-light.png"
                alt="Bloom Space Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-brand-secondary text-xs leading-relaxed max-w-sm">
              Creating elegant, timeless, and functional interior spaces
              tailored to your unique lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm text-brand-secondary">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm hover:text-brand-secondary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm text-brand-secondary">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-brand-secondary/80">
              <li>123 Design Studio Lane</li>
              <li>Creative District, NY 10001</li>
              <li className="pt-2">hello@lumiereinteriors.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-secondary/60">
          <p>
            &copy; {new Date().getFullYear()} Bloom Space Interiors. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
