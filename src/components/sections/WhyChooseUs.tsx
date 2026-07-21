"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "I",
    title: "Timeless Elegance",
    desc: "We weave romance and sophistication into every element, ensuring your event feels incredibly luxurious and deeply personal."
  },
  {
    number: "II",
    title: "Flawless Orchestration",
    desc: "Our devoted team handles every complexity with invisible grace, allowing you to remain fully present in your beautiful moments."
  },
  {
    number: "III",
    title: "Curated Venues",
    desc: "Through our prestigious network, we unlock the most breathtaking, romantic venues and elite artisans for your celebration."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <div className="mb-6">
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Our Philosophy</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl text-foreground font-normal mb-8 leading-[1.1]">
                A devotion to <br/>
                <span className="italic text-primary">Beauty.</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8 max-w-md">
                We believe that true luxury lies in the delicate nuances. From the first watercolor sketch to the final candlelight toast, we orchestrate every detail with grace, precision, and immense passion.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col md:flex-row gap-8 items-start border-b border-border pb-12 last:border-0"
                >
                  <span className="font-heading text-4xl italic text-primary/40 shrink-0 mt-1">
                    {feature.number}.
                  </span>
                  <div>
                    <h3 className="font-heading text-3xl text-foreground font-normal mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-base max-w-lg">
                      {feature.desc}
                    </p>
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
