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
    desc: "Comprehensive planning for your perfect day, handled with absolute grace."
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
    <section className="py-32 bg-[#111111] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-primary font-medium tracking-[0.1em] uppercase text-xs">Our Services</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-white font-normal leading-[1.1]">
              Crafting Your <br/>
              <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Masterpiece.</span>
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
              className="px-8 py-3 bg-white/5 backdrop-blur-md text-stone-200 text-sm font-medium uppercase tracking-wider rounded-full shadow-md border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              View All Services
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
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 py-4">
                  <div className="group relative h-[550px] overflow-hidden cursor-pointer rounded-3xl bg-black shadow-lg shadow-black/50 hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-primary/50">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Glassy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                      <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-white font-heading text-2xl font-medium mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-end gap-3 mt-12 pr-4">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-12 w-12 rounded-full border border-white/10 bg-white/5 text-stone-400 shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all backdrop-blur-md" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-12 w-12 rounded-full border border-white/10 bg-white/5 text-stone-400 shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all backdrop-blur-md" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
