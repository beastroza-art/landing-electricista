import { company } from "@/data/company";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsappBubble from "@/components/ui/WhatsappBubble";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": company.name,
    "image": `https://electricpro.cl${company.hero.image}`,
    "email": company.email,
    "telephone": company.phone,
    "url": "https://electricpro.cl",
    "description": company.metadata.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressLocality": "Santiago",
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data LocalBusiness for Google Search Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <TrustStats />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
        
        {/* Floating conversion bubble */}
        <WhatsappBubble />
      </main>
    </>
  );
}