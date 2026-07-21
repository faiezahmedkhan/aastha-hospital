"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      "Immersive Ethereal Design",
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
    <section className="py-32 bg-accent/20 relative overflow-hidden">
      {/* Decorative Floral/Watercolor background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4">
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Curated Collections</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground font-normal leading-[1.1] mb-6">
              Bespoke <span className="italic text-primary">Engagements.</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              We offer highly tailored engagements. Each collection is custom-quoted to ensure absolute perfection, reflecting your unique love story.
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
              className={`relative flex flex-col h-full p-12 bg-background border ${
                pkg.highlight 
                  ? "border-primary/40 shadow-glow scale-105 z-10" 
                  : "border-border shadow-sm"
              } transition-all duration-500`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary border border-primary/20 text-[0.65rem] font-medium uppercase tracking-[0.2em] px-4 py-1">
                  Most Beloved
                </div>
              )}

              <div className="mb-10 text-center border-b border-border/50 pb-10">
                <h3 className="font-heading text-3xl font-normal mb-4 text-foreground italic">
                  {pkg.name}
                </h3>
                <p className="font-light text-sm leading-relaxed text-muted-foreground">
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
                  className={`inline-block border-b pb-1 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    pkg.highlight 
                      ? "text-primary border-primary hover:text-foreground hover:border-foreground" 
                      : "text-foreground border-foreground/30 hover:border-foreground"
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
