"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1C1C1C]">
      {/* Background Image with Cinematic Zoom */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop"
          alt="Royal wedding table setting"
          fill
          priority
          className="object-cover w-full h-full opacity-40"
          sizes="100vw"
        />
        {/* Deep vignette gradient for dramatic lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,28,28,0.8)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-[#1C1C1C]/80" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="text-secondary font-medium tracking-[0.4em] uppercase text-xs md:text-sm flex items-center gap-4">
            <span className="w-12 h-[1px] bg-secondary/50"></span>
            Raanjhana Events
            <span className="w-12 h-[1px] bg-secondary/50"></span>
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-[7rem] text-white font-medium leading-[1.1] mb-8 max-w-5xl tracking-wide drop-shadow-2xl"
        >
          The Art of <br/>
          <span className="italic font-light text-secondary">Celebration</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-300 text-base md:text-xl max-w-2xl mb-12 font-light leading-relaxed drop-shadow-md"
        >
          Curating exquisitely refined, emotional experiences for those who appreciate the true meaning of luxury and regal elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-primary text-white text-sm font-medium uppercase tracking-[0.2em] transition-all hover:bg-primary/90 border border-primary hover:border-secondary shadow-lg hover:shadow-primary/20"
          >
            Plan Your Event
          </Link>
          
          <Link
            href="/gallery"
            className="group relative px-8 py-4 border border-secondary text-secondary text-sm font-medium uppercase tracking-[0.2em] hover:bg-secondary hover:text-[#1C1C1C] transition-all shadow-lg"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
