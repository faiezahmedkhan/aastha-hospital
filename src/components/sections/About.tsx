"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "State-of-the-art Medical Equipment",
  "Highly Experienced Specialists",
  "Patient-Centric Approach",
  "Affordable Health Packages",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="grid-container">
        <div className="grid grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Images Grid */}
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                alt="Doctors collaborating"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-4 lg:-right-12 z-20 rounded-[2rem] overflow-hidden shadow-xl border-8 border-[#FCFCFD] w-2/3 aspect-square"
            >
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                alt="Medical Equipment"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 space-y-6 lg:pl-10"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
              ABOUT AASTHA
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A Legacy of Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                A Future of Healing.
              </span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Aastha Hospital, we believe that healthcare is more than just treating illnesses—it&apos;s about caring for the person. For over 20 years, we have been at the forefront of medical innovation, delivering compassionate care to our community.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-success shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center border-t border-slate-200 pt-8">
              <Button size="lg" className="rounded-full px-8 h-12 w-full sm:w-auto">
                Discover Our Story
              </Button>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop" alt="CEO" width={48} height={48} className="rounded-full object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-slate-500">Chief Medical Officer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
