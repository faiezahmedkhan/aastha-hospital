"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Pediatrics",
    experience: "10+ Years",
    rating: 5.0,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1594824436951-7f12bc4168e2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    experience: "20+ Years",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-stone-50 overflow-hidden">
      <div className="grid-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
            OUR SPECIALISTS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Top Doctors
          </h2>
          <p className="text-slate-600 text-lg">
            Our team of world-renowned specialists is dedicated to providing you with the highest standard of personalized medical care.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 group bg-white rounded-3xl p-6 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button size="sm" className="w-full bg-white text-primary hover:bg-slate-50">View Profile</Button>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary bg-blue-50 px-2 py-1 rounded-md">
                    {doctor.specialty}
                  </span>
                  <div className="flex items-center text-sm font-medium text-slate-600">
                    <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                    {doctor.rating} ({doctor.reviews})
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{doctor.experience} Experience</p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin size={16} className="mr-1" /> Main Branch
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors p-2 bg-blue-50 hover:bg-teal-50 rounded-full">
                    <Calendar size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 border-slate-200 text-slate-700 hover:text-primary">
            View All Doctors <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
