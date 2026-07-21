"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Timeless Elegance",
    desc: "We weave romance and sophistication into every element, ensuring your event feels incredibly luxurious and deeply personal."
  },
  {
    title: "Flawless Orchestration",
    desc: "Our devoted team handles every complexity with invisible grace, allowing you to remain fully present."
  },
  {
    title: "Curated Venues",
    desc: "Through our prestigious network, we unlock the most breathtaking, romantic venues for your celebration."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem] relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[3/4] max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0" />
              
              <div className="relative w-full h-full z-10 p-2 bg-white shadow-md">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80"
                    alt="Elegant details"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6">
                <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">The Details</span>
              </div>
              <h2 className="font-script text-6xl md:text-7xl text-foreground font-normal mb-8">
                Why Choose Us
              </h2>
              
              <div className="space-y-10 mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-12 h-12 shrink-0 rounded-full border border-primary/30 flex items-center justify-center bg-white shadow-sm mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#8BA382"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-foreground font-normal mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 font-light leading-relaxed text-sm md:text-base max-w-lg">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
