"use client";

import { motion } from "framer-motion";
import { Stethoscope, Microscope, HeartPulse, Brain, Bone, Baby, Syringe, Ambulance, ArrowRight } from "lucide-react";

const services = [
  { icon: Ambulance, title: "24/7 Emergency", desc: "Round-the-clock emergency care with rapid response teams." },
  { icon: Microscope, title: "Advanced Diagnostics", desc: "State-of-the-art imaging and laboratory services." },
  { icon: HeartPulse, title: "Cardiology", desc: "Comprehensive heart care from prevention to surgery." },
  { icon: Brain, title: "Neurology", desc: "Expert treatment for neurological and brain disorders." },
  { icon: Bone, title: "Orthopedics", desc: "Specialized care for bones, joints, and spine issues." },
  { icon: Baby, title: "Maternity Care", desc: "Complete care for mothers and newborns." },
  { icon: Stethoscope, title: "General Surgery", desc: "Minimally invasive surgical procedures." },
  { icon: Syringe, title: "Vaccination", desc: "Immunization services for all age groups." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="grid-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Medical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Services & Specialties
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            We offer a wide range of specialized medical services using the latest technology and evidence-based practices to ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative bg-white rounded-3xl p-8 border border-stone-100 shadow-soft hover:shadow-glow hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-[1.2]"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 mb-6 line-clamp-2">{service.desc}</p>
              
              <a href="#" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
