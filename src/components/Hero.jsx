"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CalculatorModal from "./CalculatorModal";
import { useState } from "react";

export default function Hero() {
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 text-white overflow-hidden" id="home">

      {/* Background Image - Aggressively compressed payload */}
      <Image
        src="/solar.webp"
        alt="Solar panels on a roof representing renewable energy"
        fill
        className="object-cover"
        priority
        quality={40}
        sizes="100vw"
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-950/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto flex flex-col items-center mt-6">

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-accent-400 font-bold tracking-[0.15em] sm:tracking-widest uppercase mb-4 text-[10px] sm:text-xs md:text-sm bg-white/5 px-4 md:px-5 py-1.5 md:py-2 rounded-full backdrop-blur-md border border-white/10 text-center max-w-[90%] md:max-w-none leading-tight"
        >
          India's Premier Solar Engineering Firm
        </motion.div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-4 leading-[1.15] md:leading-tight tracking-tight drop-shadow-2xl text-center"
        >
          <span className="block">Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-400">Solar.</span></span>
          <span className="block mt-1 sm:mt-2">Infinite <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Returns.</span></span>
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed px-4 md:px-0"
        >
          Advanced solar solutions engineered for energy independence and a cleaner tomorrow.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full sm:w-auto px-6 sm:px-0"
        >
          <button 
             onClick={() => setCalcOpen(true)}
             className="mt-8 md:mt-10 w-full sm:w-auto px-8 py-4 cursor-pointer bg-accent-400 text-slate-900 font-extrabold rounded-full hover:bg-accent-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(245,153,40,0.6)] focus:outline-none focus:ring-4 focus:ring-accent-400/50"
          >
            Calculate Your Savings
          </button>
        </motion.div>

      </div>
      
      {/* Calculator Modal Injection */}
      <CalculatorModal isOpen={calcOpen} onClose={() => setCalcOpen(false)} />

    </section>
  );
}