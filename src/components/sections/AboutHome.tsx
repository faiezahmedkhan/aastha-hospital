"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-32 bg-[#0A0A0A] overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-[3rem] translate-x-6 translate-y-6 z-0 blur-md" />
              <div className="relative w-full h-full z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop"
                  alt="High impact event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Glassy Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-6 z-20 flex flex-col items-center justify-center text-center w-36 h-36"
              >
                <p className="font-heading font-medium text-4xl mb-1 text-primary">08<span className="text-2xl">+</span></p>
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-stone-300">Years of<br/>Excellence</p>
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
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 shadow-sm rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <span className="text-primary font-medium tracking-[0.1em] uppercase text-xs">Who We Are</span>
              </div>
              
              <h2 className="font-heading text-5xl md:text-6xl text-white font-normal leading-[1.1] mb-8">
                Curating <br/>
                <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Unforgettable</span> <br/>
                Memories.
              </h2>
              
              <p className="text-stone-400 text-lg md:text-xl mb-6 font-light leading-relaxed">
                Raanjhana Events is a premier luxury event design agency. We specialize in transforming your grandest visions into meticulously crafted, breathtaking realities.
              </p>
              
              <p className="text-stone-500 text-base mb-10 font-light leading-relaxed">
                Whether it's an intimate destination wedding or a monumental corporate gala, our approach marries artistic elegance with flawless logistical execution.
              </p>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-4 px-8 py-3.5 bg-white/5 border border-white/20 text-stone-300 text-sm font-medium uppercase tracking-[0.15em] rounded-full shadow-md hover:bg-white/10 hover:text-white hover:border-white/30 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                Our Philosophy
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
