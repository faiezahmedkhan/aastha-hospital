"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Lightweight background gradient instead of expensive blur/mix-blend */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)' }} />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/5] max-w-lg mx-auto"
            >
              {/* White overlap card for the image */}
              <div className="absolute inset-0 bg-white shadow-2xl translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6 z-0" />
              
              <div className="relative w-full h-full z-10 p-3 bg-white shadow-xl">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
                    alt="Romantic wedding ceremony"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Decorative Leaf SVG */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-80 z-20">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 100C50 100 20 80 20 50C20 20 50 0 50 0C50 0 80 20 80 50C80 80 50 100 50 100Z" fill="#D4AF37" fillOpacity="0.2"/>
                  <path d="M50 100C50 100 30 75 30 50C30 25 50 10 50 10" stroke="#D4AF37" strokeWidth="2"/>
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-10 md:p-16 shadow-2xl relative z-10"
            >
              <div className="text-center mb-8">
                <h2 className="font-script text-6xl md:text-7xl text-foreground font-normal mb-2">
                  Our Story
                </h2>
                <div className="w-16 h-px bg-secondary mx-auto"></div>
              </div>
              
              <p className="text-foreground/80 text-center text-sm md:text-base mb-6 font-light leading-loose">
                Raanjhana Events is an intimate, luxury design house. We specialize in transforming your grandest visions into meticulously crafted, deeply romantic realities.
              </p>
              
              <p className="text-foreground/70 text-center text-sm md:text-base mb-10 font-light leading-loose">
                Whether it's an ethereal destination wedding or a poetic private soirée, our approach marries delicate artistic elegance with flawless orchestration, creating memories that last a lifetime.
              </p>
              
              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-block border-b border-secondary pb-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
