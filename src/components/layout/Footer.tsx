import Link from "next/link";
import { HeartPulse, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-10 border-t border-stone-900">
      <div className="grid-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-primary p-2 rounded-xl group-hover:scale-105 transition-transform text-white">
                <HeartPulse size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white">Aastha</span>
                <span className="text-sm font-semibold leading-none text-primary">Hospital</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Compassionate healthcare with advanced medical excellence. We are dedicated to providing the highest quality care to our patients with state-of-the-art facilities.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" /> Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" /> Departments
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" /> Health Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Departments</h3>
            <ul className="space-y-3">
              {["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology", "General Surgery"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Health Avenue, Medical District, NY 10001, United States</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 234 567 8900 (24x7 Emergency)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@aasthahospital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Aastha Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
