"use client";

import { motion } from "framer-motion";
import { Coffee, ClipboardList, PenTool, Gem, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: <Coffee size={24} />,
    title: "Consultation",
    desc: "We start with a conversation to understand your vision, preferences, and requirements over a cup of coffee."
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Planning",
    desc: "Our team develops a comprehensive plan covering venues, budget, and logistical details."
  },
  {
    icon: <PenTool size={24} />,
    title: "Design",
    desc: "We create a bespoke design concept including themes, decor, and spatial arrangements."
  },
  {
    icon: <Gem size={24} />,
    title: "Execution",
    desc: "Our expert team works tirelessly behind the scenes to bring every detail to life flawlessly."
  },
  {
    icon: <PartyPopper size={24} />,
    title: "Celebration",
    desc: "You enjoy a stress-free, luxurious event while we manage everything on your special day."
  }
];

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              How We Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold mb-6">
              The Planning Process
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-stone-100">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary/30"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Indicator */}
                <div className="absolute -top-6 -right-2 text-8xl font-heading font-bold text-stone-50/80 -z-10 group-hover:text-accent/50 transition-colors duration-500">
                  {index + 1}
                </div>
                
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-50 flex items-center justify-center text-primary shadow-soft mb-8 relative z-10 group-hover:border-secondary transition-colors duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                
                <h3 className="font-heading text-xl text-stone-900 font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
