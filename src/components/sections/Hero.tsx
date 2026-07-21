"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start bg-[#0A0A0A]">
      {/* Soft Background Image & Glows for Dark Theme */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2938&auto=format&fit=crop"
          alt="Modern event setup"
          fill
          priority
          className="object-cover w-full h-full opacity-30 mix-blend-screen grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent" />
        
        {/* Soft floating glow orbs */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full mix-blend-screen opacity-60" />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-block"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-full px-5 py-2.5 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-stone-300 font-medium tracking-[0.1em] uppercase text-xs md:text-sm">
              Luxury Event Design
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl md:text-7xl lg:text-[8rem] text-white font-normal leading-[1.05] mb-8"
        >
          Curating <br/>
          <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Perfection.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-400 text-lg md:text-2xl max-w-2xl mb-12 font-light leading-relaxed"
        >
          We orchestrate elegant, unforgettable experiences with effortless grace and uncompromising attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-5 items-start"
        >
          <Link
            href="/contact"
            className="px-10 py-4 bg-primary text-white text-sm font-medium uppercase tracking-[0.15em] rounded-full shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Design Your Event
          </Link>
          
          <Link
            href="/gallery"
            className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-stone-200 text-sm font-medium uppercase tracking-[0.15em] rounded-full shadow-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
