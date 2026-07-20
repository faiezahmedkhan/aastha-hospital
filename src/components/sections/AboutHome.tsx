"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-tl-[100px] overflow-hidden"
              >
                <Image
                  src="https://images.pexels.com/photos/5759239/pexels-photo-5759239.jpeg"
                  alt="Elegant table setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[300px] mt-24 rounded-br-[100px] overflow-hidden"
              >
                <Image
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
                  alt="Wedding celebration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full flex items-center justify-center p-2 text-center"
            >
              <div className="w-full h-full border border-white/50 rounded-full flex flex-col items-center justify-center">
                <span className="text-white font-heading text-2xl font-bold">8+</span>
                <span className="text-white/90 text-[0.6rem] uppercase tracking-wider">Years of<br/>Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                About Raanjhana Events
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold leading-tight mb-6">
                Crafting Memories That Last A Lifetime
              </h2>
              
              <div className="w-20 h-1 bg-secondary mb-8" />
              
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                At Raanjhana Events, we believe that every event is a story waiting to be told. We specialize in transforming your visions into breathtaking realities, curating luxurious and emotional experiences that reflect your unique personality.
              </p>
              
              <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                From intimate gatherings to grand destination weddings, our meticulous attention to detail and passionate approach ensures that your special day is executed flawlessly, leaving you to simply enjoy the magic of the moment.
              </p>
              
              <Link
                href="/about"
                className="inline-block border-b-2 border-primary text-primary font-medium uppercase tracking-widest pb-1 hover:text-stone-900 hover:border-stone-900 transition-colors"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
