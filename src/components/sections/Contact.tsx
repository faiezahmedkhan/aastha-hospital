"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="grid-container">
        <div className="grid grid-cols-12 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              We're Here to Help You
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Have a question or need to schedule an appointment? Reach out to our dedicated support team. We're available 24/7 for emergencies.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Emergency Call</h4>
                  <p className="text-slate-500 mb-1">24/7 Available for trauma & emergencies</p>
                  <p className="text-lg font-semibold text-primary">+1 234 567 8900</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-secondary flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500 mb-1">We'll respond within 24 hours</p>
                  <p className="text-lg font-semibold text-slate-800">info@aasthahospital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-500 mb-1">Main Medical Campus</p>
                  <p className="text-lg font-semibold text-slate-800">123 Health Avenue, Medical District, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-stone-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <Input placeholder="John" className="h-12 bg-slate-50 border-transparent focus-visible:bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <Input placeholder="Doe" className="h-12 bg-slate-50 border-transparent focus-visible:bg-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-transparent focus-visible:bg-white" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <Input type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-slate-50 border-transparent focus-visible:bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Department (Optional)</label>
                <select defaultValue="" className="flex h-12 w-full items-center justify-between rounded-md border border-transparent bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="" disabled>Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Your Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-slate-50 border-transparent focus-visible:bg-white resize-none" />
              </div>
              
              <Button size="lg" className="w-full h-14 text-base rounded-xl">
                Send Message <Send className="ml-2" size={18} />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
