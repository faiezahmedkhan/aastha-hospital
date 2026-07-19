import { About } from "@/components/sections/About";
import { Trust } from "@/components/sections/Trust";

import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "About Us | Aastha Hospital",
  description: "Learn more about Aastha Hospital's legacy, our accreditations, and our commitment to premium healthcare.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="About Aastha Hospital" 
        description="A legacy of excellence, compassion, and innovation in healthcare. Discover our mission to provide world-class medical services to our community."
        badge="OUR STORY"
      />
      <About />
      <Trust />
    </main>
  );
}
