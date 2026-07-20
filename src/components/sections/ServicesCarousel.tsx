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
    desc: "Comprehensive planning for your perfect day, handled with absolute regal precision."
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
    desc: "Intimate, sophisticated soirées designed for the most discerning royalty."
  },
  {
    title: "Spatial Design",
    image: "https://images.unsplash.com/photo-1518228392106-fceab3d7c588?q=80&w=2940&auto=format&fit=crop",
    desc: "Breathtaking floral and structural artistry that transforms any environment."
  }
];

export function ServicesCarousel() {
  return (
    <section className="py-32 bg-[#1C1C1C] overflow-hidden relative border-t-4 border-secondary/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-secondary"></span>
              <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
              A Legacy of <span className="italic text-primary font-light">Elegance</span>
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
              className="group inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-secondary hover:text-white transition-colors"
            >
              Explore All Services
              <span className="w-8 h-[1px] bg-secondary group-hover:w-16 group-hover:bg-white transition-all duration-500" />
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
                  <div className="group relative h-[550px] overflow-hidden cursor-pointer bg-[#242424] border-2 border-transparent hover:border-secondary transition-colors duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out z-10">
                      <div className="w-12 h-[2px] bg-secondary mb-6 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
                      <h3 className="text-white font-heading text-3xl font-medium mb-4 group-hover:text-secondary transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-stone-300 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-end gap-4 mt-12 pr-4">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-secondary/50 text-secondary hover:bg-secondary hover:text-[#1C1C1C] transition-colors bg-transparent" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-secondary/50 text-secondary hover:bg-secondary hover:text-[#1C1C1C] transition-colors bg-transparent" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
