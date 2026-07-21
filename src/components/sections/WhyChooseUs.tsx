"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Unrivaled Elegance",
    desc: "We bring a refined, artistic touch to every element, ensuring your event feels incredibly luxurious and timeless."
  },
  {
    number: "02",
    title: "Flawless Execution",
    desc: "Our dedicated team handles the complexities behind the scenes, so you can simply enjoy the magic of the moment."
  },
  {
    number: "03",
    title: "Exclusive Access",
    desc: "Through our prestigious network, we unlock the most breathtaking venues and elite vendors for your celebration."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[100px] rounded-full mix-blend-screen opacity-70 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm rounded-full px-4 py-1.5 mb-8">
                <span className="text-primary font-medium tracking-[0.1em] uppercase text-xs">The Raanjhana Difference</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl text-white font-normal mb-8 leading-[1.1]">
                Why we are <br/>
                <span className="italic font-medium text-primary">Unparalleled.</span>
              </h2>
              <p className="text-stone-400 font-light leading-relaxed text-lg mb-8 max-w-md">
                We believe that true luxury lies in peace of mind. From the first sketch to the final toast, we orchestrate every detail with grace, precision, and immense passion.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <span className="font-heading text-6xl font-light text-primary/40 group-hover:text-primary transition-colors duration-500 shrink-0">
                      {feature.number}
                    </span>
                    <div className="pt-2">
                      <h3 className="font-heading text-2xl text-white font-medium mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-stone-400 font-light leading-relaxed text-base">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
