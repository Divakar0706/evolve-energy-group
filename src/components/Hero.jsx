"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 text-white overflow-hidden" id="home">
      
      {/* Background Image */}
      <Image
        src="/solar.jpg"
        alt="Solar panels on a roof representing renewable energy"
        fill
        className="object-cover"
        priority
        quality={90}
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
          className="text-accent-400 font-semibold tracking-widest uppercase mb-4 text-xs md:text-sm bg-white/5 px-5 py-2 rounded-full backdrop-blur-md border border-white/10"
        >
          Energizing the Future with Solar Innovation
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mt-4 leading-tight tracking-tight drop-shadow-2xl"
        >
          Think <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">25 Years</span><br className="hidden md:block" /> When 
          Installing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-green-300">Solar</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light"
        >
          Reliable and cost-effective solar solutions for homes and businesses. 
          Maximize your energy independence today with top-tier technology.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="mt-8 md:mt-10 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] focus:outline-none focus:ring-4 focus:ring-primary-500/50">
            Get Your Free Quote
          </button>
        </motion.div>

      </div>

    </section>
  );
}