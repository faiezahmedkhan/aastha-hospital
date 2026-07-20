"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const packages = [
  {
    name: "The Intimate",
    desc: "A beautifully curated experience for smaller, private gatherings where every detail is magnified.",
    features: [
      "Bespoke Venue Curation",
      "Minimalist Floral Architecture",
      "Private Chef Coordination",
      "Seamless Day Management",
    ],
  },
  {
    name: "The Signature",
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
    name: "The Royal",
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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative floral/damask style background hint could go here, for now using a soft radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs">Investments</span>
              <span className="w-12 h-[1px] bg-secondary"></span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-medium mb-8">
              Curated <span className="italic text-primary font-light">Experiences</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              We offer highly tailored engagements. Each service is custom-quoted to ensure absolute perfection and regal elegance for your specific vision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col h-full p-10 relative overflow-hidden ${
                pkg.highlight 
                  ? "bg-primary text-white shadow-2xl scale-105 z-10 border-2 border-secondary" 
                  : "bg-white text-foreground shadow-xl border border-border"
              }`}
            >
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-secondary/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-secondary/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-secondary/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-secondary/50" />

              <div className="mb-10 text-center relative z-10">
                <h3 className={`font-heading text-3xl font-medium mb-4 ${pkg.highlight ? "text-white" : "text-primary"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-light text-sm leading-relaxed h-16 ${pkg.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {pkg.desc}
                </p>
              </div>
              
              <div className="flex-grow relative z-10">
                <ul className="space-y-5 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-4 text-sm font-light ${pkg.highlight ? "text-white/90" : "text-foreground"}`}>
                      <span className={`w-1.5 h-1.5 rotate-45 shrink-0 ${pkg.highlight ? "bg-secondary" : "bg-primary"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center relative z-10">
                <Link
                  href="/contact"
                  className={`inline-block w-full py-4 text-sm font-medium uppercase tracking-[0.2em] transition-colors border ${
                    pkg.highlight 
                      ? "bg-secondary text-[#1C1C1C] border-secondary hover:bg-transparent hover:text-secondary" 
                      : "bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
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
