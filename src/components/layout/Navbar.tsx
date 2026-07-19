"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, Calendar, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Doctors", href: "/doctors" },
  { name: "Departments", href: "/departments" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isInnerPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showGlass = isScrolled || isInnerPage;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showGlass ? "py-4 glass border-b border-stone-200/50" : "py-6 bg-transparent"
      }`}
    >
      <div className="grid-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-xl group-hover:scale-105 transition-transform">
              <HeartPulse size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-slate-900">Aastha</span>
              <span className="text-sm font-semibold leading-none text-primary">Hospital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
              <div className="bg-slate-100 p-2 rounded-full">
                <PhoneCall size={16} className="text-primary" />
              </div>
              <span>Emergency: 1066</span>
            </a>
            <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 p-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <Button className="w-full justify-center rounded-xl" size="lg">
              <Calendar className="mr-2 h-5 w-5" /> Book Appointment
            </Button>
            <Button variant="outline" className="w-full justify-center rounded-xl" size="lg">
              <PhoneCall className="mr-2 h-5 w-5" /> Call Emergency
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
