"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, HeartPulse, Brain, Bone, Baby, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: 1,
    title: "Cardiology",
    desc: "Comprehensive heart care with advanced diagnostics and treatment.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-2",
  },
  {
    id: 2,
    title: "Neurology",
    desc: "Expert care for brain and nervous system disorders.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Orthopedics",
    desc: "Advanced treatment for bones and joints.",
    icon: Bone,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
  },
  {
    id: 4,
    title: "Pediatrics",
    desc: "Compassionate care for infants, children, and adolescents.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1581594549595-35f1118bb137?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-2",
  },
];

export function Departments() {
  return (
    <section id="departments" className="py-24 bg-white">
      <div className="grid-container">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
              CENTERS OF EXCELLENCE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
              Specialized Medical Departments
            </h2>
            <p className="text-stone-600 text-lg">
              Our hospital features dedicated centers of excellence, each equipped with cutting-edge technology and staffed by internationally trained specialists.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-full h-12 px-6">
            View All Departments <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-stone-50 border border-stone-100 hover:border-primary/30 transition-colors p-8 flex flex-col justify-between ${
                index === 0 || index === 3 ? "col-span-12 lg:col-span-8 min-h-[360px]" : "col-span-12 lg:col-span-4 min-h-[360px]"
              }`}
            >
              <Image
                src={dept.image}
                alt={dept.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <dept.icon size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{dept.title}</h3>
                <p className="text-slate-200 line-clamp-2 mb-4 max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {dept.desc}
                </p>
                
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-150">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
            View All Departments <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
