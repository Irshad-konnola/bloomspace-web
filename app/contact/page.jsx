import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact Us | Bloomspace Interiors",
  description:
    "Get in touch with Bloomspace Interiors to start planning your next luxury design project.",
};

// Custom SVG matching Lucide's exact design system
const CustomInstagram = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="bg-background pt-32 md:pt-40 min-h-screen">
      <SectionWrapper className="py-0 md:py-0 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-heading text-foreground font-bold tracking-tight mb-6">
              Let's create something <br className="hidden md:block" />
              <span className="text-brand-primary">extraordinary.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Whether you're looking to redesign a single room or undertake a
              full-scale renovation, our team is ready to bring your vision to
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Column */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Details & Map Column */}
            <div className="space-y-12">
              {/* Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* 1. Visit Our Studio */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Visit Our Studio
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      122 Al Hurouf St,
                      <br />
                      Al Shamkhah, Abu Dhabi, UAE
                    </p>
                  </div>
                </div>

                {/* 2. Call & Chat */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Call & Chat
                    </h4>
                    <div className="text-muted-foreground text-sm space-y-2 mt-1">
                      <a
                        href="https://wa.me/971505135201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-brand-primary transition-colors w-fit font-medium text-foreground"
                        title="Chat with us on WhatsApp"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-[#25D366]"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        <span>+971 50 513 5201</span>
                      </a>
                      <p>+971 50 513 5291</p>
                      <p>+971 50 513 5743</p>
                    </div>
                  </div>
                </div>

                {/* 3. Email Us */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email Us
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      <a
                        href="mailto:bloomspace@gmail.com"
                        className="hover:text-brand-primary transition-colors"
                      >
                        bloomspace@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* 4. Social Media */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <CustomInstagram className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Follow Us
                    </h4>
                    <div className="text-muted-foreground text-sm mt-1">
                      <a
                        href="https://www.instagram.com/bloomspacedecor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-brand-primary transition-colors w-fit font-medium text-foreground"
                        title="Follow us on Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-[#E1306C]"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                        <span>@bloomspacedecor</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 5. Consultations - Centered & Spanning full width on tablet/desktop */}
                <div className="flex items-start sm:col-span-2 sm:border-t sm:border-border sm:pt-6 mt-2">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Clock className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Consultations
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      By appointment only. <br className="sm:hidden" />
                      <span className="hidden sm:inline"> | </span> Virtual
                      meetings available.
                    </p>
                  </div>
                </div>

              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-75 md:h-100 bg-muted rounded-xl overflow-hidden shadow-sm border border-border relative mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3634.0733341906334!2d54.709354975355566!3d24.378752178246852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIyJzQzLjUiTiA1NMKwNDInNDMuMCJF!5e0!3m2!1sen!2sin!4v1776079923567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                  className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}