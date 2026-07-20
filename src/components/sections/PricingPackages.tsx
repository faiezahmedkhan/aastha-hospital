"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-black font-black leading-[0.9] uppercase tracking-tighter">
              Bespoke <br/>
              <span className="text-primary">Engagements.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="text-stone-600 font-medium leading-relaxed">
              We offer highly tailored engagements. Each service is custom-quoted to ensure absolute perfection.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-2 border-black">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col h-full p-10 md:p-14 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 ${
                pkg.highlight 
                  ? "bg-black text-white" 
                  : "bg-white text-black hover:bg-stone-50"
              } transition-colors duration-300`}
            >
              <div className="mb-12">
                <h3 className={`font-heading text-4xl font-black uppercase tracking-tight mb-4 ${pkg.highlight ? "text-primary" : "text-black"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-medium text-base leading-relaxed h-20 ${pkg.highlight ? "text-stone-400" : "text-stone-600"}`}>
                  {pkg.desc}
                </p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-6 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-4 font-bold text-sm tracking-wide ${pkg.highlight ? "text-white" : "text-black"}`}>
                      <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${pkg.highlight ? "bg-primary" : "bg-black"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Link
                  href="/contact"
                  className={`inline-block w-full py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all text-center border-2 ${
                    pkg.highlight 
                      ? "bg-primary text-white border-primary hover:bg-transparent hover:text-primary" 
                      : "bg-black text-white border-black hover:bg-white hover:text-black"
                  }`}
                >
                  Inquire
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
