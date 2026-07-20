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
    <section className="py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground font-light mb-8 leading-tight">
                The <span className="italic text-stone-400">Standard</span> of Excellence
              </h2>
              <p className="text-stone-500 font-light leading-relaxed">
                We don't just plan events; we architect experiences. Our philosophy is rooted in the belief that true luxury is subtle, thoughtful, and highly personalized.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-col">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative py-12 border-b border-stone-200 last:border-0"
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <span className="font-heading text-3xl font-light text-stone-300 group-hover:text-primary transition-colors duration-500">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl text-foreground font-medium mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-stone-500 font-light leading-relaxed max-w-lg">
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
