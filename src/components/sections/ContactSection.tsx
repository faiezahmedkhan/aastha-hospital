"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  eventType: z.string().min(2, { message: "Event type is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                Get In Touch
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-stone-900 font-bold mb-6">
                Let's Plan Your <br/>
                <span className="text-secondary italic font-light">Dream Event</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mb-10" />
              
              <p className="text-stone-600 text-lg mb-12 max-w-lg leading-relaxed">
                Ready to turn your vision into a breathtaking reality? Reach out to our team of expert planners to schedule a complimentary consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-stone-100 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Call Us</h4>
                    <p className="text-stone-600">+1 (234) 567-8900</p>
                    <p className="text-stone-500 text-sm">Mon-Fri, 9am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-stone-100 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Email Us</h4>
                    <p className="text-stone-600">hello@raanjhanaevents.com</p>
                    <p className="text-stone-500 text-sm">We'll reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-stone-100 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Visit Us</h4>
                    <p className="text-stone-600">123 Luxury Avenue</p>
                    <p className="text-stone-500 text-sm">Metropolis, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-stone-100"
          >
            <h3 className="font-heading text-2xl font-bold text-stone-900 mb-8">
              Request a Consultation
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                  <input
                    {...register("name")}
                    className={`w-full px-4 py-3 bg-stone-50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-primary'} rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                  <input
                    {...register("email")}
                    className={`w-full px-4 py-3 bg-stone-50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-primary'} rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <input
                    {...register("phone")}
                    className={`w-full px-4 py-3 bg-stone-50 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-primary'} rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent`}
                    placeholder="+1 (234) 567-8900"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Event Type</label>
                  <select
                    {...register("eventType")}
                    className={`w-full px-4 py-3 bg-stone-50 border ${errors.eventType ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-primary'} rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent text-stone-700`}
                  >
                    <option value="">Select an event</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other Celebration</option>
                  </select>
                  {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Event Details & Requirements</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full px-4 py-3 bg-stone-50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:ring-primary'} rounded-xl outline-none transition-all focus:ring-2 focus:border-transparent resize-none`}
                  placeholder="Tell us about your dream event..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium uppercase tracking-wider py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
