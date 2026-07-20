"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Relentless Innovation",
    desc: "We don't follow trends; we set them. Expect cutting-edge spatial design and immersive experiences."
  },
  {
    number: "02",
    title: "Surgical Execution",
    desc: "Our production team operates with military precision. No detail is too small; no logistical challenge too complex."
  },
  {
    number: "03",
    title: "Exclusive Network",
    desc: "We hold the keys to the most restricted venues and elite talent globally. If you want it, we have it."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="w-full md:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <h2 className="font-heading text-6xl md:text-7xl text-black font-black mb-8 leading-[0.9] uppercase tracking-tighter">
                Our <br/>
                <span className="text-primary">Edge.</span>
              </h2>
              <p className="text-stone-600 font-medium leading-relaxed text-lg md:text-xl mb-8 border-l-4 border-primary pl-6">
                In a world of copy-paste events, we engineer bespoke masterpieces. We are the agency you call when failure is not an option and ordinary is unacceptable.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-[#F4F4F4] p-8 md:p-12 border border-[#E5E5E5] hover:border-primary transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col gap-6">
                    <span className="font-heading text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#CCCCCC] to-[#F4F4F4] group-hover:from-primary group-hover:to-primary/50 transition-all duration-500 tracking-tighter leading-none">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-3xl text-black font-bold mb-4 uppercase tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-stone-600 font-medium leading-relaxed text-lg">
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
