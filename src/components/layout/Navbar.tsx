"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4 border-b border-border/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <h1
              className={`font-heading text-2xl md:text-3xl font-normal tracking-wider transition-colors duration-300 ${
                isSolid ? "text-foreground" : "text-foreground"
              }`}
            >
              RAANJHANA
            </h1>
            <p
              className={`text-[0.6rem] tracking-[0.3em] uppercase -mt-1 transition-colors duration-300 ${
                isSolid ? "text-muted-foreground" : "text-muted-foreground"
              }`}
            >
              Events
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[0.65rem] font-medium tracking-[0.15em] uppercase transition-colors hover:text-primary ${
                  isSolid ? "text-foreground/80" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-sm transition-all duration-300 hover:bg-primary/90 text-[0.65rem] font-medium uppercase tracking-[0.15em] ${
                isSolid
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border border-primary text-foreground hover:text-primary-foreground hover:bg-primary"
              }`}
            >
              Plan Event
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 -mr-2 transition-colors ${
              isSolid || isMobileMenuOpen ? "text-foreground" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center h-screen"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="font-heading text-3xl font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-3 bg-primary text-white text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Plan Your Event
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
