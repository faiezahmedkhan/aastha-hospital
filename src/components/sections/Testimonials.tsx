"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Patient",
    content: "The level of care I received at Aastha Hospital was exceptional. The doctors took the time to explain every step of my procedure, and the nursing staff was incredibly attentive and compassionate.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Eleanor Pena",
    role: "Patient",
    content: "From the moment I walked in, I felt reassured. The facility is spotless, modern, and the efficiency of the administrative staff made my admission process completely stress-free.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Guy Hawkins",
    role: "Patient Family",
    content: "My father underwent major heart surgery here. The cardiology team led by Dr. Johnson is simply world-class. We are forever grateful to Aastha Hospital for giving him a new lease on life.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="grid-container">
        <div className="grid grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="col-span-12 lg:col-span-4">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-stone-600 mb-8">
              We take pride in providing exceptional healthcare experiences. Read the stories of recovery and hope from the people who matter most—our patients.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <Image
                      src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop&sig=${i}`}
                      alt="Patient"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-sm font-bold text-slate-900">4.9/5 from 10k+ reviews</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 relative">
            <div className="absolute top-0 -left-6 text-stone-100 -z-10 rotate-180">
              <Quote size={120} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.slice(0, 2).map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow"
                >
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
