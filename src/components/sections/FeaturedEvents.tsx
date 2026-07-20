"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Wedding", "Corporate", "Birthday", "Destination"];

const events = [
  {
    id: 1,
    title: "Royal Rajputana",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 2,
    title: "TechNova Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 3,
    title: "Amalfi Coast Vows",
    category: "Destination",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 4,
    title: "L'Elegance Soirée",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1530103862676-de8892bb6bf3?q=80&w=2940&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 5,
    title: "Annual Summit",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1505369711681-44754a61f365?q=80&w=2940&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 6,
    title: "Lake Como Romance",
    category: "Destination",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop",
    size: "large",
  },
];

export function FeaturedEvents() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = events.filter(
    (event) => activeCategory === "All" || event.category === activeCategory
  );

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-light mb-12">
              A Glimpse into <span className="italic text-stone-400">Perfection</span>
            </h2>
          </motion.div>

          {/* Minimalist Filters */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors relative pb-2 ${
                  activeCategory === category
                    ? "text-foreground"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Ethereal Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden cursor-pointer bg-stone-100 ${
                  event.size === "large" ? "md:col-span-2 md:row-span-2" : 
                  event.size === "medium" ? "row-span-2" : "row-span-1"
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-700" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-white/80 text-[0.65rem] font-medium uppercase tracking-[0.3em] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {event.category}
                  </span>
                  <h3 className="text-white font-heading text-3xl font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
