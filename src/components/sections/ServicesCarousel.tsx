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
    title: "Wedding Design",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    desc: "Bespoke, poetic curation for your perfect day, handled with absolute grace."
  },
  {
    title: "Destination Romance",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    desc: "Exotic, breathtaking locations and seamless global logistics for a magical getaway."
  },
  {
    title: "Floral Artistry",
    image: "https://images.unsplash.com/photo-1522748906645-95d8ad838382?auto=format&fit=crop&w=800&q=80",
    desc: "Lush, romantic floral installations that transform spaces into ethereal gardens."
  },
  {
    title: "Intimate Soirées",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    desc: "Delicate, sophisticated gatherings designed for your closest loved ones."
  },
];

export function ServicesCarousel() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle overlay without expensive mix-blend */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl w-full"
          >
            <div className="mb-4">
              <span className="text-white/80 font-medium tracking-[0.2em] uppercase text-xs">Our Offerings</span>
            </div>
            <h2 className="font-script text-6xl md:text-7xl text-white font-normal">
              A symphony of Experiences
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-auto"
          >
            <Link
              href="/services"
              className="text-white text-xs font-medium uppercase tracking-[0.15em] border-b border-white pb-1 hover:text-secondary hover:border-secondary transition-colors"
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
            <CarouselContent className="-ml-4 md:-ml-8">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3 py-4">
                  <div className="group relative h-[500px] overflow-hidden cursor-pointer bg-white shadow-xl p-3 pb-8 transition-transform hover:-translate-y-2 duration-500">
                    <div className="relative w-full h-[350px] mb-6 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="text-center px-4">
                      <h3 className="text-foreground font-script text-4xl mb-2">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 font-light text-xs leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Small botanical corner */}
                    <svg className="absolute bottom-2 right-2 w-6 h-6 text-primary/30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-6 mt-12">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-white/50 bg-transparent text-white hover:bg-white hover:text-primary transition-all" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-white/50 bg-transparent text-white hover:bg-white hover:text-primary transition-all" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
