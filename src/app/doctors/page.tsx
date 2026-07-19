import { Doctors } from "@/components/sections/Doctors";

import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Our Specialists | Aastha Hospital",
  description: "Meet our team of internationally renowned medical specialists dedicated to your health.",
};

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Our Specialist Doctors" 
        description="Meet our team of internationally renowned medical specialists dedicated to providing the highest standard of care."
        badge="MEDICAL TEAM"
      />
      <Doctors />
    </main>
  );
}
