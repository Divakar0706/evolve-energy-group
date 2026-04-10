"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteModal from "./QuoteModal";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Immediately calculate state on mount to catch mid-page refreshes
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/90 backdrop-blur-xl shadow-xl py-3 border-b border-white/10" : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`transition-colors duration-300 ${scrolled ? "text-white" : "text-white"}`}
          >
            <a href="/" className="flex items-center">
              <Logo className="w-40 md:w-48 h-auto text-white drop-shadow-md" />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary-400 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer bg-accent-400 text-slate-900 px-6 py-2.5 rounded-full hover:bg-accent-500 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(245,153,40,0.5)] font-bold"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8"
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-200 hover:text-primary-400"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(true); setMobileMenuOpen(false); }}
              className="mt-8 cursor-pointer bg-accent-400 text-slate-900 px-8 py-3 rounded-full text-xl font-extrabold hover:bg-accent-500 shadow-lg shadow-accent-500/30"
            >
              Get Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}