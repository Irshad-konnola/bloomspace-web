import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactForm from "@/components/forms/ContactForm";
export const metadata = {
  title: "Contact Us | Bloomspace Interiors",
  description: "Get in touch with Bloomspace Interiors to start planning your next luxury design project.",
};

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
              Whether you're looking to redesign a single room or undertake a full-scale renovation, our team is ready to bring your vision to life.
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
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Our Studio</h4>
                    <p className="text-muted-foreground text-sm">
                      122 Al Hurouf St,<br />
Al Shamkhah, Abudhabi,UAE                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm">
                     bloomspace@gmail.com<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm">
                      0505 13 5201<br />
                      0505 13 5291<br/>
                      0505 13 5743
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-secondary/50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Clock className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consultations</h4>
                    <p className="text-muted-foreground text-sm">
                      By appointment only.<br />
                      Virtual meetings available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-75 md:h-100 bg-muted rounded-xl overflow-hidden shadow-sm border border-border relative">
                <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.172569356511!2d75.83143567452296!3d11.248712550305825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe359ced81%3A0xc17c381f72b87e02!2sHiLITE%20Mall!5e0!3m2!1sen!2sin!4v1774885733920!5m2!1sen!2sin"
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