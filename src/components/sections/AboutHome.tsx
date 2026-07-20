"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Our Heritage</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-medium leading-[1.2] mb-10 text-balance">
                Elevating the Ordinary to the <br/>
                <span className="italic text-primary font-light">Extraordinary</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-light">
                At Raanjhana Events, we believe that true luxury is found in the unseen details. It's the seamless flow of an evening, the subtle scent of fresh florals, and the intuitive anticipation of your needs.
              </p>
              
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-light">
                We craft bespoke experiences that transcend expectations, ensuring that your most important moments are celebrated with effortless grace, rich tradition, and unparalleled regal sophistication.
              </p>
              
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors"
              >
                Discover Our Story
                <span className="w-12 h-[1px] bg-primary group-hover:w-16 group-hover:bg-secondary transition-all duration-500" />
              </Link>
            </motion.div>
          </div>

          {/* Regal Image Layout */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-lg mx-auto"
            >
              {/* Gold Frame Border */}
              <div className="absolute -inset-4 border border-secondary/30 rounded-t-full rounded-b-md z-0" />
              
              <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-md shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop"
                  alt="Elegant setup"
                  fill
                  className="object-cover transition-transform duration-[3s] hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Royal Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-10 -left-6 lg:-left-12 bg-primary p-8 shadow-xl z-20 border-t-2 border-l-2 border-secondary/50"
              >
                <p className="font-heading italic text-3xl text-white mb-2">Since 2016</p>
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-secondary font-medium">Defining Luxury</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
