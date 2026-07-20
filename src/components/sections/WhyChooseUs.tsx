"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Uncompromising Vision",
    desc: "We approach every event as a blank canvas, designing custom architectural spaces and decor that reflect the pinnacle of modern luxury."
  },
  {
    number: "02",
    title: "Impeccable Precision",
    desc: "From the first thread of linen to the final lighting cue, our logistical execution is invisible, seamless, and flawless."
  },
  {
    number: "03",
    title: "Exclusive Access",
    desc: "Our deep relationships grant you entry to the world's most sought-after venues, talent, and culinary artists."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#1C1C1C] relative border-y-4 border-secondary/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="w-full md:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-secondary"></span>
                <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs">Why Choose Us</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-8 leading-tight">
                The <span className="italic text-primary font-light">Standard</span> of Excellence
              </h2>
              <p className="text-stone-300 font-light leading-relaxed text-lg mb-8">
                We don't just plan events; we architect royal experiences. Our philosophy is rooted in the belief that true luxury is a blend of grand tradition and flawless, subtle execution.
              </p>
              <div className="w-24 h-[1px] bg-secondary/30"></div>
            </motion.div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-[#242424] p-8 md:p-10 border-l-4 border-primary hover:border-secondary transition-all duration-500 shadow-2xl hover:bg-[#2A2A2A]"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <span className="font-heading text-4xl italic font-light text-secondary/30 group-hover:text-secondary transition-colors duration-500">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl text-white font-medium mb-4 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-stone-400 font-light leading-relaxed">
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
