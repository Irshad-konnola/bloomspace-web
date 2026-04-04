"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { trackSnapEvent } from "@/lib/tracking/snap-pixel";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError("");

//     try {
//       // 1. Format data for Netlify Forms
//       const formSubmission = new URLSearchParams();
//       formSubmission.append("form-name", "contact");
      
//       // CRITICAL FIX 1: Explicitly pass the empty honeypot field so Netlify knows it's not a bot
//       formSubmission.append("bot-field", ""); 

//       Object.entries(formData).forEach(([key, value]) => {
//         formSubmission.append(key, value);
//       });

//       // CRITICAL FIX 2: Point the fetch directly to your hidden HTML file instead of "/"
//       // (If you named your file something other than "hidden-forms.html", use that exact name here)
//       const response = await fetch("/netlify-forms", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: formSubmission.toString(),
//       });

//       if (!response.ok) throw new Error("Network response was not ok");

//       // 3. Fire Snapchat Pixel on successful lead submission
//       trackSnapEvent("SIGN_UP", { 
//         content_category: "Lead Generation",
//         content_name: "Contact Form Submission"
//       });

//       // 4. Update UI State
//       setIsSubmitted(true);
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     } catch (err) {
//       console.error("Form submission error:", err);
//       setError("Something went wrong. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // 1. Grab the native HTML form data directly from the DOM
      // This automatically captures your hidden form-name, bot-field, and all inputs!
      const formElement = e.target;
      const formData = new FormData(formElement);
      
      // 2. Format it exactly how Netlify's servers expect
      const urlEncodedData = new URLSearchParams(formData).toString();

      // 3. Pro-Trick: POST to a guaranteed static route to bypass Next.js routing conflicts
      const response = await fetch("/favicon.ico", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      // 4. Fire Snapchat Pixel on successful lead submission
      trackSnapEvent("SIGN_UP", { 
        content_category: "Lead Generation",
        content_name: "Contact Form Submission"
      });

      // 5. Update UI State
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-secondary/20 border border-brand-primary/20 rounded-xl p-10 text-center flex flex-col items-center justify-center h-full min-h-100"
      >
        <CheckCircle2 className="w-16 h-16 text-brand-primary mb-6" />
        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Message Received</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. One of our lead designers will be in touch with you shortly to discuss your project.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-brand-primary text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
   <form 
  onSubmit={handleSubmit} 
  name="contact" 
  className="space-y-6 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-border"
>
      {/* Hidden input required by Netlify to route the form */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot field to prevent spam */}
      <p className="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm mb-6">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
          placeholder="Jane Doe"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Project Details</label>
        <textarea
          id="message"
          name="message"
          required 
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-y"
          placeholder="Tell us about your space and what you're looking to achieve..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-primary text-white py-4 rounded-md font-medium hover:bg-brand-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}