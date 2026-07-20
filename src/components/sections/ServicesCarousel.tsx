"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop",
    desc: "Comprehensive planning for your perfect day, handled with absolute precision."
  },
  {
    title: "Destination Events",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2940&auto=format&fit=crop",
    desc: "Exotic locations and seamless global logistics for a magical getaway."
  },
  {
    title: "Corporate Galas",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2938&auto=format&fit=crop",
    desc: "Impressive, brand-elevating events that leave a lasting impact."
  },
  {
    title: "Private Celebrations",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2938&auto=format&fit=crop",
    desc: "Intimate, sophisticated soirées designed for the most discerning guests."
  },
  {
    title: "Spatial Design",
    image: "https://images.unsplash.com/photo-1518228392106-fceab3d7c588?q=80&w=2940&auto=format&fit=crop",
    desc: "Breathtaking floral and structural artistry that transforms any environment."
  }
];

export function ServicesCarousel() {
  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-light leading-tight">
              Our <span className="italic text-stone-400">Expertise</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 hover:text-foreground transition-colors"
            >
              Explore All Services
              <span className="w-8 h-[1px] bg-stone-300 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 md:-ml-8">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-6 md:pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-[550px] overflow-hidden cursor-pointer bg-stone-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-700" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <div className="w-12 h-[1px] bg-white/50 mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
                      <h3 className="text-white font-heading text-3xl font-light mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/80 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-end gap-6 mt-12 pr-4">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-none border-stone-200 text-stone-400 hover:bg-transparent hover:text-foreground hover:border-foreground transition-colors" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-none border-stone-200 text-stone-400 hover:bg-transparent hover:text-foreground hover:border-foreground transition-colors" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
