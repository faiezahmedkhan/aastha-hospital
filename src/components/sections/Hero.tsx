"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Ethereal Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop"
          alt="Ethereal floral arrangement"
          fill
          priority
          className="object-cover w-full h-full opacity-30 mix-blend-multiply"
          sizes="100vw"
        />
        {/* Soft fading gradient to blend with the background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] mt-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
            Elegance & Grace
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl md:text-7xl lg:text-[7rem] text-foreground font-normal leading-[1.1] mb-8 max-w-5xl mx-auto"
        >
          Creating <span className="italic text-primary">Poetry</span> in Every Detail.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed"
        >
          We curate romantic, ethereal celebrations that feel like stepping into a beautiful dream.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <Link
            href="/contact"
            className="px-10 py-4 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-[0.15em] rounded-sm transition-all hover:bg-primary/90"
          >
            Begin Your Journey
          </Link>
          
          <Link
            href="/gallery"
            className="px-10 py-4 bg-transparent border border-primary/30 text-foreground text-xs font-medium uppercase tracking-[0.15em] rounded-sm hover:border-primary transition-all"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
