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
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden text-white flex items-center justify-center min-h-[40vh]">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
          alt="Aastha Hospital Excellence"
          fill
          className="object-cover"
          priority
        />
        {/* Dull Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-stone-950/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
      </div>
      
      {/* Centered Text Content */}
      <div className="grid-container relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {badge && (
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white backdrop-blur-sm shadow-xl text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-md">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl lg:text-2xl text-stone-200 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
