import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { AboutHome } from "@/components/sections/AboutHome";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata = {
  title: "About Us | Raanjhana Events",
  description: "Learn about the passionate team behind Raanjhana Events, our vision, and our journey in creating luxury event experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-stone-50 min-h-screen">
        <div className="bg-stone-900 text-white py-24 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-stone-300">
              A journey of passion, creativity, and turning fleeting moments into eternal memories.
            </p>
          </div>
        </div>
        <AboutHome />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
