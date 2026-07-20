"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="font-heading text-3xl font-bold tracking-wider text-white">
                RAANJHANA
              </h2>
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-stone-500 -mt-1">
                Events
              </p>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Creating world-class, premium event experiences that are emotional, luxurious, and truly unforgettable. Your vision, our masterpiece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">Our Portfolio</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary transition-colors">Packages & Pricing</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Event Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/wedding-planning" className="hover:text-primary transition-colors">Wedding Planning</Link>
              </li>
              <li>
                <Link href="/services/destination-weddings" className="hover:text-primary transition-colors">Destination Weddings</Link>
              </li>
              <li>
                <Link href="/services/corporate-events" className="hover:text-primary transition-colors">Corporate Events</Link>
              </li>
              <li>
                <Link href="/services/social-gatherings" className="hover:text-primary transition-colors">Social Gatherings</Link>
              </li>
              <li>
                <Link href="/services/decor-design" className="hover:text-primary transition-colors">Decor & Design</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@raanjhanaevents.com</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-stone-800">
              <h4 className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-stone-900 border-none outline-none text-sm px-4 py-2 w-full focus:ring-1 focus:ring-primary text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Raanjhana Events. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
