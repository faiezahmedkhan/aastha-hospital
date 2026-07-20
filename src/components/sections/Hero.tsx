"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Background Image (using a high-quality luxury Unsplash image) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury wedding table setting"
          fill
          priority
          className="object-cover w-full h-full opacity-30"
          sizes="100vw"
        />
        {/* Subtle gradient for depth, keeping it mostly light */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-stone-500 font-medium tracking-[0.4em] uppercase text-xs md:text-sm">
            Raanjhana Events
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground font-light leading-tight mb-8 max-w-5xl tracking-wide"
        >
          The Art of <br/>
          <span className="italic font-thin text-stone-500">Celebration</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-500 text-base md:text-lg max-w-xl mb-16 font-light leading-relaxed"
        >
          Curating exquisitely refined, emotional experiences for those who appreciate the true meaning of luxury and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-8 items-center justify-center"
        >
          <Link
            href="/contact"
            className="group relative px-2 py-1 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors"
          >
            <span className="relative z-10 flex items-center gap-4">
              Plan Your Event
              <span className="w-8 h-[1px] bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
            </span>
          </Link>
          
          <Link
            href="/gallery"
            className="group relative px-2 py-1 text-sm font-medium uppercase tracking-[0.2em] text-stone-500 hover:text-foreground transition-colors"
          >
            <span className="relative z-10 flex items-center gap-4">
              View Portfolio
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator - Ultra minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-stone-200 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 64] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-full h-1/2 bg-stone-800"
          />
        </div>
      </motion.div>
    </section>
  );
}
