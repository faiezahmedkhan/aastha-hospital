"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-32 bg-background overflow-hidden relative border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 border border-primary/20 translate-x-6 translate-y-6 z-0" />
              <div className="relative w-full h-full z-10 overflow-hidden shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2940&auto=format&fit=crop"
                  alt="Romantic bride details"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-background border border-border shadow-soft p-8 z-20 flex flex-col items-center justify-center text-center w-40 h-40"
              >
                <p className="font-heading font-normal text-4xl mb-2 text-foreground italic">08<span className="text-xl">+</span></p>
                <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-muted-foreground">Years of<br/>Devotion</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6">
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Our Story</span>
              </div>
              
              <h2 className="font-heading text-5xl md:text-6xl text-foreground font-normal leading-[1.1] mb-8">
                Curating <br/>
                <span className="italic text-primary">Unforgettable</span> <br/>
                Romance.
              </h2>
              
              <p className="text-muted-foreground text-lg mb-6 font-light leading-relaxed max-w-lg">
                Raanjhana Events is an intimate, luxury design house. We specialize in transforming your grandest visions into meticulously crafted, deeply romantic realities.
              </p>
              
              <p className="text-muted-foreground/80 text-base mb-12 font-light leading-relaxed max-w-lg">
                Whether it's an ethereal destination wedding or a poetic private soirée, our approach marries delicate artistic elegance with flawless, invisible orchestration.
              </p>
              
              <Link
                href="/about"
                className="inline-block border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.15em] text-foreground hover:text-primary hover:border-primary transition-colors"
              >
                Discover Our Heritage
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
