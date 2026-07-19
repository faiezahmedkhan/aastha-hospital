import { Services } from "@/components/sections/Services";
import { HealthPackages } from "@/components/sections/HealthPackages";

import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Services & Health Packages | Aastha Hospital",
  description: "Explore our comprehensive medical services and proactive health checkup packages.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Services & Health Packages" 
        description="Comprehensive medical care spanning diagnosis, treatment, and proactive health maintenance."
        badge="OUR EXPERTISE"
      />
      <Services />
      <HealthPackages />
    </main>
  );
}
