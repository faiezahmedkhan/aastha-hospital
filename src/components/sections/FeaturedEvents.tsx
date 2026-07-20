"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Wedding", "Corporate", "Birthday", "Destination"];

const events = [
  {
    id: 1,
    title: "Royal Rajputana Wedding",
    category: "Wedding",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    size: "large",
  },
  {
    id: 2,
    title: "Tech Summit 2024",
    category: "Corporate",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    size: "small",
  },
  {
    id: 3,
    title: "Bali Beach Vows",
    category: "Destination",
    image: "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg",
    size: "medium",
  },
  {
    id: 4,
    title: "Sweet Sixteen Gala",
    category: "Birthday",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    size: "small",
  },
  {
    id: 5,
    title: "Annual Gala Dinner",
    category: "Corporate",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
    size: "medium",
  },
  {
    id: 6,
    title: "Udaipur Palace Wedding",
    category: "Destination",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    size: "large",
  },
];

export function FeaturedEvents() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = events.filter(
    (event) => activeCategory === "All" || event.category === activeCategory
  );

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Portfolio
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold mb-6">
              Featured Events
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-10" />
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  event.size === "large" ? "md:col-span-2 md:row-span-2" : 
                  event.size === "medium" ? "row-span-2" : "row-span-1"
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-secondary text-xs font-medium uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {event.category}
                  </span>
                  <h3 className="text-white font-heading text-2xl md:text-3xl font-bold">
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
