"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Aarti & Rahul",
    role: "Wedding Clients",
    text: "Raanjhana Events made our dream wedding a reality. Their attention to detail and ability to handle everything flawlessly left us speechless. It truly felt like magic.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Corporate Director, TechNova",
    text: "The most professional and creative event management team we have ever worked with. Our annual gala was an absolute hit, thanks to their innovative design.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Destination Wedding",
    text: "Planning a wedding in Udaipur seemed daunting, but the Raanjhana team made it a breeze. Every guest was treated like royalty. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Sharma",
    role: "Birthday Celebration",
    text: "They transformed my 30th birthday into an elegant, sophisticated soirée. The decor was breathtaking and the execution was absolutely perfect.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-stone-200/50">
        <Quote size={200} />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem] relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Client Stories
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold mb-6">
              Words of Love
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4 md:pl-6">
                  <div className="bg-white p-10 rounded-2xl shadow-soft border border-stone-100 h-full flex flex-col relative">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    <p className="text-stone-600 text-lg leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="mt-auto">
                      <h4 className="font-heading font-bold text-xl text-stone-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <span className="text-sm text-stone-500 uppercase tracking-wider">
                        {testimonial.role}
                      </span>
                    </div>
                    
                    <div className="absolute top-8 right-8 text-stone-100">
                      <Quote size={40} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="position-relative static translate-x-0 translate-y-0 h-12 w-12 bg-white border-stone-200 text-stone-600 hover:bg-primary hover:border-primary hover:text-white" />
              <CarouselNext className="position-relative static translate-x-0 translate-y-0 h-12 w-12 bg-white border-stone-200 text-stone-600 hover:bg-primary hover:border-primary hover:text-white" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
