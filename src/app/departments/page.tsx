import { Departments } from "@/components/sections/Departments";

import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Specialized Departments | Aastha Hospital",
  description: "Discover our specialized centers of excellence equipped with cutting-edge medical technology.",
};

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Centers of Excellence" 
        description="Our specialized departments are equipped with cutting-edge technology and staffed by internationally trained specialists."
        badge="DEPARTMENTS"
      />
      <Departments />
    </main>
  );
}
