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
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop",
    desc: "Bespoke, poetic curation for your perfect day, handled with absolute grace."
  },
  {
    title: "Destination Romance",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop",
    desc: "Exotic, breathtaking locations and seamless global logistics for a magical getaway."
  },
  {
    title: "Floral Artistry",
    image: "https://images.unsplash.com/photo-1522748906645-95d8ad838382?q=80&w=2940&auto=format&fit=crop",
    desc: "Lush, romantic floral installations that transform spaces into ethereal gardens."
  },
  {
    title: "Intimate Soirées",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop",
    desc: "Delicate, sophisticated gatherings designed for your closest loved ones."
  },
];

export function ServicesCarousel() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-4">
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Our Offerings</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground font-normal leading-[1.1]">
              A symphony of <br/>
              <span className="italic text-primary">Experiences.</span>
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
              className="text-foreground text-xs font-medium uppercase tracking-[0.15em] border-b border-primary pb-1 hover:text-primary transition-colors"
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
                  <div className="group relative h-[600px] overflow-hidden cursor-pointer rounded-t-full rounded-b-sm bg-muted shadow-sm">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-center text-center z-10">
                      <h3 className="text-foreground font-heading text-3xl font-normal mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-[250px]">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-6 mt-16">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
