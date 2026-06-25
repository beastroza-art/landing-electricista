import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import TrustStats from "@/components/TrustStats";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}