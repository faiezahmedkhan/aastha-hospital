"use client";

import { motion } from "framer-motion";
import { Star, Shield, Award, CheckCircle } from "lucide-react";

const partners = [
  "Medicare", "Allianz", "Bupa", "Cigna", "Aetna", "UnitedHealthcare", "BlueCross"
];

const features = [
  { icon: Shield, title: "NABH Accredited", desc: "Highest quality standards" },
  { icon: Award, title: "Award Winning", desc: "Recognized for excellence" },
  { icon: Star, title: "4.9/5 Google Reviews", desc: "From 10,000+ patients" },
  { icon: CheckCircle, title: "ISO 9001:2015", desc: "Certified management" },
];

export function Trust() {
  return (
    <section className="py-12 bg-white border-y border-stone-100 overflow-hidden">
      <div className="grid-container">
        
        {/* Features/Badges */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="col-span-6 md:col-span-3 flex flex-col items-center text-center p-4 rounded-2xl hover:bg-stone-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Insurance Partners Marquee */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            Trusted by Top Insurance Providers
          </p>
          <div className="flex overflow-hidden relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex items-center gap-16 w-max"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="text-xl font-bold text-slate-300 whitespace-nowrap">
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
