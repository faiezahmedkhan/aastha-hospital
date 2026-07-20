import { Hero } from "@/components/sections/Hero";
import { StatsCounters } from "@/components/sections/StatsCounters";
import { AboutHome } from "@/components/sections/AboutHome";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedEvents } from "@/components/sections/FeaturedEvents";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingPackages } from "@/components/sections/PricingPackages";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsCounters />
      <AboutHome />
      <ServicesCarousel />
      <WhyChooseUs />
      <FeaturedEvents />
      <ProcessTimeline />
      <VideoShowcase />
      <Testimonials />
      <PricingPackages />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </>
  );
}
