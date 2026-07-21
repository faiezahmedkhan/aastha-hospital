"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Intimate",
    desc: "A beautifully curated experience for smaller, private gatherings where every detail is magnified.",
    features: [
      "Bespoke Venue Curation",
      "Minimalist Floral Architecture",
      "Private Chef Coordination",
      "Seamless Day Management",
    ],
  },
  {
    name: "Signature",
    desc: "Our hallmark service for grand celebrations, offering comprehensive design and flawless execution.",
    features: [
      "Complete Venue Transformation",
      "Immersive Thematic Design",
      "Full Vendor Curation",
      "Multi-day Event Direction",
    ],
    highlight: true,
  },
  {
    name: "Royal",
    desc: "An uncompromising, limitless approach to luxury event planning for the most discerning clients.",
    features: [
      "Global Destination Logistics",
      "Celebrity Talent Procurement",
      "Custom Haute Couture Decor",
      "24/7 Dedicated Concierge",
    ],
  }
];

export function PricingPackages() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-primary font-medium tracking-[0.1em] uppercase text-xs">Tailored Offerings</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-white font-normal leading-[1.1]">
              Bespoke <br/>
              <span className="italic font-medium text-primary">Engagements.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="text-stone-400 font-light leading-relaxed">
              We offer highly tailored engagements. Each service is custom-quoted to ensure absolute perfection and exclusivity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col h-full p-10 rounded-[2rem] border ${
                pkg.highlight 
                  ? "bg-white/10 border-primary/30 shadow-2xl shadow-primary/20 scale-105 z-10 backdrop-blur-xl" 
                  : "bg-white/5 backdrop-blur-md border-white/10 shadow-xl"
              } transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/10 hover:border-white/20`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10 text-center">
                <h3 className="font-heading text-3xl font-medium mb-4 text-white">
                  {pkg.name}
                </h3>
                <p className="font-light text-sm leading-relaxed text-stone-400 h-16">
                  {pkg.desc}
                </p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-5 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 font-medium text-sm text-stone-300">
                      <div className={`mt-0.5 p-1 rounded-full ${pkg.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-stone-400'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Link
                  href="/contact"
                  className={`inline-block w-full py-4 text-sm font-medium uppercase tracking-[0.1em] rounded-full transition-all text-center ${
                    pkg.highlight 
                      ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95" 
                      : "bg-white/5 text-stone-300 border border-white/10 hover:bg-primary hover:border-primary hover:text-white hover:scale-105 active:scale-95"
                  }`}
                >
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
