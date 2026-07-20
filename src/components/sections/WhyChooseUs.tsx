"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  HeartHandshake, 
  Wallet, 
  Crown, 
  Sparkles, 
  Clock 
} from "lucide-react";

const features = [
  {
    icon: <Palette size={32} />,
    title: "Creative Team",
    desc: "Our design experts bring innovative ideas and breathtaking concepts to life for every event."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Personalized Planning",
    desc: "We tailor every detail to reflect your unique personality, style, and love story."
  },
  {
    icon: <Wallet size={32} />,
    title: "Budget Friendly",
    desc: "Transparent pricing and smart allocation to maximize value without compromising luxury."
  },
  {
    icon: <Crown size={32} />,
    title: "Premium Vendors",
    desc: "Exclusive access to top-tier venues, caterers, decorators, and entertainment."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Stress-Free Execution",
    desc: "Our team handles every logistical detail, so you can focus on enjoying your special day."
  },
  {
    icon: <Clock size={32} />,
    title: "Timely Delivery",
    desc: "Meticulous timeline management ensuring flawless execution from start to finish."
  }
];

export function WhyChooseUs() {
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
              The Raanjhana Difference
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold mb-6">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-stone-50 p-10 rounded-2xl border border-stone-100 hover:border-primary/20 hover:shadow-glow transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 group-hover:text-primary group-hover:bg-accent transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl text-stone-900 font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
