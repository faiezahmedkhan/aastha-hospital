import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Raanjhana Events",
  description: "Get in touch with Raanjhana Events to start planning your dream wedding or corporate event.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-stone-50 min-h-screen">
        <div className="bg-stone-900 text-white py-24 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-stone-300">
              We'd love to hear from you. Let's make something beautiful together.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
