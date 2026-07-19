import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Departments } from "@/components/sections/Departments";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Trust />
      <Departments />
      <Testimonials />
    </main>
  );
}
