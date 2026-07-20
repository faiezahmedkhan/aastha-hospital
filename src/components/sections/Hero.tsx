"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background Video (using a high quality placeholder from pexels) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source
            src="https://videos.pexels.com/video-files/5980072/5980072-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-900/20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
            Premium Event Management
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight mb-6 max-w-5xl"
        >
          Turning Moments Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white italic font-light">Masterpieces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-200 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed"
        >
          Curating luxurious, emotional, and unforgettable experiences that reflect your unique story with elegance and royal sophistication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-primary text-white text-sm font-medium uppercase tracking-widest overflow-hidden flex items-center justify-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Plan Your Event
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
          <Link
            href="/gallery"
            className="group px-8 py-4 bg-transparent border border-white/30 text-white text-sm font-medium uppercase tracking-widest flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
