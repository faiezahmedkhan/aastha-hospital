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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-light mb-8">
              Curated <span className="italic text-stone-400">Experiences</span>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed text-lg">
              We offer highly tailored engagements. Each service is custom-quoted to ensure absolute perfection for your specific vision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full"
            >
              <div className="mb-10">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                  {pkg.name}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed h-16">
                  {pkg.desc}
                </p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm font-light text-stone-600 border-b border-stone-100 pb-4">
                      <span className="w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors"
                >
                  Inquire Now
                  <span className="w-8 h-[1px] bg-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
