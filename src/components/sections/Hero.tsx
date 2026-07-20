"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start bg-black">
      {/* Background Image with High Contrast/Brutalist Dark Overlay */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2938&auto=format&fit=crop"
          alt="Modern event setup"
          fill
          priority
          className="object-cover w-full h-full opacity-50 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-block bg-primary text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-4 py-2">
            Raanjhana Events
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl md:text-8xl lg:text-[9rem] text-white font-black leading-[0.9] mb-8 uppercase tracking-tighter"
        >
          Curating <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-500">Madness.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-300 text-lg md:text-2xl max-w-2xl mb-12 font-medium leading-tight"
        >
          We architect bold, high-impact experiences that break the mold and leave an indelible mark.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <Link
            href="/contact"
            className="group relative px-10 py-5 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white"
          >
            Start a Project
          </Link>
          
          <Link
            href="/gallery"
            className="group relative px-10 py-5 border-2 border-white text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Explore Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
