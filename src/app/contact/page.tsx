import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Contact Us & FAQ | Aastha Hospital",
  description: "Get in touch with Aastha Hospital. Find our location, contact details, and answers to frequently asked questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Contact & FAQs" 
        description="We're here to help. Reach out to us for appointments, emergency care, or any other inquiries."
        badge="GET IN TOUCH"
      />
      <Contact />
      <FAQ />
    </main>
  );
}
