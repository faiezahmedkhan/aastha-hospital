"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "The Heirloom",
    desc: "A beautifully curated, delicate experience for intimate gatherings where romance is magnified.",
    features: [
      "Bespoke Venue Curation",
      "Romantic Floral Styling",
      "Personal Chef Coordination",
      "Seamless Day Management",
    ],
  },
  {
    name: "The Signature",
    desc: "Our hallmark offering for grand, breathtaking celebrations, providing comprehensive design.",
    features: [
      "Complete Venue Transformation",
      "Immersive Botanical Design",
      "Curated Artisan Vendors",
      "Multi-day Event Direction",
    ],
    highlight: true,
  },
  {
    name: "The Imperial",
    desc: "An uncompromising, limitless approach to luxury planning for the most discerning romantics.",
    features: [
      "Global Destination Logistics",
      "Exclusive Entertainment",
      "Custom Haute Couture Decor",
      "24/7 Dedicated Concierge",
    ],
  }
];

export function PricingPackages() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Floral/Watercolor background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem] relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4">
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">Curated Collections</span>
            </div>
            <h2 className="font-script text-6xl md:text-7xl text-foreground font-normal mb-6">
              Bespoke Engagements
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              We offer highly tailored engagements. Each collection is custom-quoted to ensure absolute perfection, reflecting your unique love story.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col h-full p-10 bg-white shadow-xl ${
                pkg.highlight 
                  ? "border-t-4 border-secondary scale-105 z-10" 
                  : "border border-border/50"
              } transition-all duration-500 hover:-translate-y-2`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-8 bg-secondary text-white text-[0.55rem] font-medium uppercase tracking-[0.2em] px-3 py-2 rounded-b-md shadow-sm">
                  Most Beloved
                </div>
              )}

              <div className="mb-10 text-center border-b border-border/50 pb-8 mt-4">
                <h3 className="font-script text-4xl font-normal mb-4 text-foreground">
                  {pkg.name}
                </h3>
                <p className="font-light text-xs leading-relaxed text-foreground/70">
                  {pkg.desc}
                </p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-6 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-center justify-center font-light text-sm text-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center mt-auto">
                <Link
                  href="/contact"
                  className={`inline-block border pb-2 pt-2 px-8 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    pkg.highlight 
                      ? "bg-primary text-white border-primary hover:bg-white hover:text-primary" 
                      : "bg-transparent text-foreground border-foreground/30 hover:border-primary hover:text-primary"
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
