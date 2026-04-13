import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure premium fonts mapping to our v4 CSS variables
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Bloomspace | Premium Interior Design",
  description: "High-end, elegant interior design for residential and commercial spaces.",
};

export default function RootLayout({ children }) {
const SNAP_PIXEL_ID = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID;
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Snapchat Pixel Initialization */}
        <Script id="snapchat-pixel" strategy="afterInteractive">
          {`
            (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
            {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
            a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
            r.src=n;var u=t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);})(window,document,
            'https://sc-static.net/scevent.min.js');

            snaptr('init', '${SNAP_PIXEL_ID}');
            snaptr('track', 'PAGE_VIEW');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}