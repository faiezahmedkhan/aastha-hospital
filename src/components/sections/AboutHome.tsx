"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square w-full max-w-lg mx-auto grayscale hover:grayscale-0 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 z-0" />
              <div className="relative w-full h-full z-10 border-4 border-black">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop"
                  alt="High impact event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Bold Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-black text-white p-8 z-20"
              >
                <p className="font-heading font-black text-4xl mb-1">08+</p>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Years Bold</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Who We Are</span>
              </div>
              
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-black font-black leading-[1.1] mb-8 uppercase tracking-tighter">
                Defying the <br/>
                <span className="text-primary">Ordinary.</span>
              </h2>
              
              <p className="text-stone-600 text-lg md:text-xl mb-8 font-medium leading-relaxed">
                Raanjhana Events is an unapologetic, high-end event design agency. We don't do boring. We create explosive, memorable, and meticulously engineered experiences.
              </p>
              
              <p className="text-stone-500 text-base mb-12 font-normal leading-relaxed">
                Whether it's a corporate gala that needs to break the internet or a private celebration that demands absolute exclusivity, we deliver with razor-sharp precision and unmatched creative firepower.
              </p>
              
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-black hover:text-primary transition-colors"
              >
                Read The Manifesto
                <span className="w-12 h-1 bg-black group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
