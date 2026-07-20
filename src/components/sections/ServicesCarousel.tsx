"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Wedding Planning",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    desc: "Comprehensive planning for your perfect day, from venue selection to final send-off."
  },
  {
    title: "Destination Weddings",
    image: "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg",
    desc: "Exotic locations and seamless logistics for a magical getaway celebration."
  },
  {
    title: "Corporate Events",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
    desc: "Professional and impressive events that elevate your brand and company culture."
  },
  {
    title: "Pre-Wedding Ceremonies",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    desc: "Vibrant Haldi, Mehendi, and Sangeet nights full of color, music, and joy."
  },
  {
    title: "Decor & Design",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    desc: "Breathtaking floral arrangements and structural designs that transform spaces."
  }
];

export function ServicesCarousel() {
  return (
    <section className="py-24 bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              What We Do
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight">
              Our Signature Services
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase tracking-widest text-sm font-medium"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-1 bg-primary mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                      <h3 className="text-white font-heading text-2xl md:text-3xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-stone-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {service.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                        Explore
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-10">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-12 w-12 bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-12 w-12 bg-transparent border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
