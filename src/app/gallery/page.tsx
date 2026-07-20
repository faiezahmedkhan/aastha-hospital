import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { FeaturedEvents } from "@/components/sections/FeaturedEvents";

export const metadata = {
  title: "Event Gallery | Raanjhana Events",
  description: "View our portfolio of luxury weddings, destination events, and corporate galas curated by Raanjhana Events.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-stone-50 min-h-screen">
        <div className="bg-stone-900 text-white py-24 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
            <p className="text-lg text-stone-300">
              A curated collection of our most spectacular events.
            </p>
          </div>
        </div>
        <FeaturedEvents />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
