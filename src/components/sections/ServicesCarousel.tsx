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
    desc: "Impressive, brand-elevating events that leave a lasting impact of excellence."
  },
  {
    title: "Private Celebrations",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2938&auto=format&fit=crop",
    desc: "Intimate, sophisticated soirées designed for the most discerning VIPs."
  },
  {
    title: "Spatial Design",
    image: "https://images.unsplash.com/photo-1518228392106-fceab3d7c588?q=80&w=2940&auto=format&fit=crop",
    desc: "Breathtaking floral and structural artistry that transforms any environment."
  }
];

export function ServicesCarousel() {
  return (
    <section className="py-32 bg-[#F4F4F4] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-black font-black leading-[0.9] uppercase tracking-tighter">
              Our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-black">Expertise.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-black hover:text-primary transition-colors"
            >
              Explore All
              <span className="w-12 h-1 bg-black group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                  <div className="group relative h-[600px] overflow-hidden cursor-pointer bg-white border border-[#E5E5E5] hover:border-primary transition-colors duration-300">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105 opacity-10 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                      <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
                          View
                        </span>
                      </div>
                      
                      <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-black font-heading text-4xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-stone-600 font-medium text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-end gap-2 mt-12 pr-4">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-16 w-16 rounded-none border-2 border-black text-black hover:bg-black hover:text-white transition-colors bg-transparent" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-16 w-16 rounded-none border-2 border-black text-black hover:bg-black hover:text-white transition-colors bg-transparent" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
