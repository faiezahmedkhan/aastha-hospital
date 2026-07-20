"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Content */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight mb-10 tracking-wide text-balance">
                Elevating the <br/>
                <span className="italic text-stone-400">Ordinary</span> to the <br/>
                <span className="italic font-medium">Extraordinary</span>
              </h2>
              
              <p className="text-stone-500 text-lg mb-8 leading-relaxed font-light">
                At Raanjhana Events, we believe that luxury is found in the unseen details. It's the seamless flow of an evening, the subtle scent of fresh florals, and the intuitive anticipation of your needs.
              </p>
              
              <p className="text-stone-500 text-lg mb-14 leading-relaxed font-light">
                We craft bespoke experiences that transcend expectations, ensuring that your most important moments are celebrated with effortless grace and unparalleled sophistication.
              </p>
              
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors"
              >
                Discover Our Heritage
                <span className="w-8 h-[1px] bg-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
              </Link>
            </motion.div>
          </div>

          {/* Minimalist Image Layout */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-lg ml-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop"
                alt="Elegant setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Floating Accent Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -left-12 bottom-20 bg-background/80 backdrop-blur-md p-6 border border-border"
              >
                <p className="font-heading italic text-xl text-foreground mb-1">Since 2016</p>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-400">Defining Luxury</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
