"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop"
          alt="Rustic romantic wedding"
          fill
          priority
          className="object-cover w-full h-full opacity-60"
          sizes="100vw"
        />
        {/* Soft fading gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] mt-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="text-white/80 font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
            Est. 2018
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-7xl md:text-8xl lg:text-[10rem] text-white font-normal leading-[1] mb-6 drop-shadow-lg"
        >
          Raanjhana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/90 font-heading text-xl md:text-2xl max-w-2xl mb-12 font-light tracking-wide drop-shadow-md"
        >
          Creating poetic, botanical, and timeless celebrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <Link
            href="/contact"
            className="px-12 py-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-[0.2em] transition-all hover:bg-primary shadow-lg"
          >
            Design Your Story
          </Link>
        </motion.div>
      </div>

      {/* Decorative Gold Sprinkles / Botanical element placeholder */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
