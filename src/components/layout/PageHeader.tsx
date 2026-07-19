"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-stone-950 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/80 via-stone-950/95 to-stone-950"></div>
      
      <div className="grid-container relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 max-w-3xl"
          >
            {badge && (
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wide mb-6">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 hidden lg:block"
          >
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop"
                alt="Aastha Hospital Excellence"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
