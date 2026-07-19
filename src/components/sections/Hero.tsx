"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const stats = [
  { label: "Expert Doctors", value: "50+" },
  { label: "Beds Capacity", value: "100+" },
  { label: "Departments", value: "25+" },
  { label: "Happy Patients", value: "100k+" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-50 via-primary/5 to-white"></div>

      <div className="grid-container relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-6 z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6"
            >
              <ShieldCheck size={16} />
              <span>NABH Accredited Hospital</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Compassionate Healthcare, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Advanced Medical Excellence.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Experience world-class medical care with state-of-the-art technology and a team of dedicated specialists putting your health first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                <Calendar className="mr-2 h-5 w-5" /> Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-slate-200 hover:bg-slate-50 hover:text-primary transition-all duration-300">
                Find a Doctor <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200/60">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                >
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="col-span-12 lg:col-span-6 relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                alt="Modern Hospital Facility"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Floating Card 1 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center gap-4"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-secondary">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">24/7 Emergency Care</h3>
                  <p className="text-sm text-slate-600">Always here when you need us</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Element 2 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-6 lg:-right-12 glass p-4 rounded-2xl flex flex-col items-center gap-2 shadow-xl border border-white/40"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-slate-200">
                    <Image
                      src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop&sig=${i}`}
                      alt="Doctor"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-slate-800">Top Specialists</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
