"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic Health Check",
    price: "$99",
    description: "Essential tests for overall health monitoring.",
    features: [
      "Complete Blood Count (CBC)",
      "Blood Sugar Fasting",
      "Lipid Profile",
      "Liver Function Test",
      "Doctor Consultation"
    ],
    recommended: false,
  },
  {
    name: "Comprehensive Care",
    price: "$249",
    description: "Advanced screening for complete peace of mind.",
    features: [
      "All Basic Check features",
      "Kidney Function Test",
      "Thyroid Profile",
      "ECG & Chest X-Ray",
      "Vitamin D & B12 Test",
      "Specialist Consultation"
    ],
    recommended: true,
  },
  {
    name: "Senior Citizen",
    price: "$199",
    description: "Tailored health assessment for elderly patients.",
    features: [
      "All Basic Check features",
      "Bone Density Test",
      "Prostate Specific Antigen (Men)",
      "Mammogram (Women)",
      "Vision & Hearing Test",
      "Physiotherapy Assessment"
    ],
    recommended: false,
  },
];

export function HealthPackages() {
  return (
    <section id="packages" className="py-24 bg-white overflow-hidden">
      <div className="grid-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
            HEALTH PACKAGES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Proactive Healthcare Plans
          </h2>
          <p className="text-stone-600 text-lg">
            Choose from our thoughtfully curated health checkup packages designed for early detection and prevention of medical conditions.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`col-span-12 md:col-span-6 lg:col-span-4 relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${
                pkg.recommended 
                  ? "border-primary shadow-glow md:-translate-y-2" 
                  : "border-stone-100 shadow-soft hover:shadow-glow"
              } flex flex-col h-full`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                <span className="text-slate-500 text-sm font-medium">/ session</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full p-0.5 ${pkg.recommended ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={pkg.recommended ? "default" : "outline"} 
                className={`w-full rounded-xl h-14 text-base ${
                  pkg.recommended ? "shadow-lg shadow-primary/30" : "border-slate-200"
                }`}
              >
                Book Package <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
