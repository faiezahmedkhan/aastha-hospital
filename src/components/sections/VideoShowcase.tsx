"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export function VideoShowcase() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative py-32 bg-stone-950 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.pexels.com/photos/5759239/pexels-photo-5759239.jpeg')] bg-cover bg-center bg-fixed"
      />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group hover:bg-white/20 transition-all duration-300 relative"
          >
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-50" />
            <div className="absolute -inset-4 rounded-full border border-white/20 animate-pulse opacity-30" />
            
            <Play size={32} className="text-white ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Experience The <span className="text-secondary italic font-light">Magic</span> We Create
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            A glimpse into the extraordinary moments, joyous celebrations, and breathtaking setups crafted by the Raanjhana team.
          </p>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl border border-white/10"
            >
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Raanjhana Events Showcase"
                className="w-full h-full absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
