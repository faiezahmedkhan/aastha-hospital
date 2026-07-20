"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Silver",
    price: "Custom",
    desc: "Perfect for intimate gatherings and pre-wedding ceremonies.",
    features: [
      "Venue Selection Assistance",
      "Basic Decor & Floral Design",
      "Vendor Recommendations",
      "Day-of Coordination",
      "Standard Lighting Setup"
    ],
    highlighted: false,
  },
  {
    name: "Gold",
    price: "Custom",
    desc: "Comprehensive planning for grand celebrations and weddings.",
    features: [
      "Full Venue Management",
      "Premium Thematic Decor",
      "Complete Vendor Management",
      "Catering & Menu Tasting",
      "Entertainment Coordination",
      "Dedicated Event Manager"
    ],
    highlighted: true,
  },
  {
    name: "Platinum",
    price: "Custom",
    desc: "The ultimate luxury experience for destination and royal weddings.",
    features: [
      "End-to-End Planning & Execution",
      "Luxury Bespoke Decor",
      "Celebrity Artist Management",
      "Guest Hospitality & Logistics",
      "Customised Invitations & Favors",
      "Multi-day Event Coordination",
      "24/7 Concierge Service"
    ],
    highlighted: false,
  }
];

export function PricingPackages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Investment
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold mb-6">
              Exclusive Packages
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-stone-600 text-lg">
              We offer bespoke solutions tailored to your unique vision and requirements. Contact us for detailed pricing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                pkg.highlighted 
                  ? "bg-stone-900 text-white shadow-2xl scale-100 md:scale-105 z-10 border border-stone-800" 
                  : "bg-stone-50 text-stone-900 border border-stone-100"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`font-heading text-3xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-stone-900"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.highlighted ? "text-stone-400" : "text-stone-500"}`}>
                  {pkg.desc}
                </p>
                <div className={`text-4xl font-bold font-heading ${pkg.highlighted ? "text-secondary" : "text-primary"}`}>
                  {pkg.price}
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={20} className={`shrink-0 mt-0.5 ${pkg.highlighted ? "text-secondary" : "text-primary"}`} />
                    <span className={`text-sm ${pkg.highlighted ? "text-stone-300" : "text-stone-600"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  href="/contact"
                  className={`inline-block w-full py-4 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-white border border-stone-200 hover:border-primary hover:text-primary text-stone-700 shadow-sm"
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
