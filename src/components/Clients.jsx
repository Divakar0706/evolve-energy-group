"use client";

import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    { name: "BHU", color: "" },
    { name: "Reserve Bank of India", color: "" },
    { name: "Appasamy Associates", color: "" },
    { name: "Deccan Enterprises", color: "" },
    { name: "IIBAT", color: "" },
    { name: "TEXBOND", color: "" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden flex flex-col items-center" id="clients">
      
      {/* Header Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 mb-16"
      >
        <span className="text-accent-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
          TRUSTED BY BUSINESSES & HOMEOWNERS WORLDWIDE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Our Clients
        </h2>
        <p className="text-slate-500 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
          As the best solar company in India, we have successfully implemented solar projects across homes, businesses, and industries. Our commitment to sustainability and innovation ensures seamless installations with significant cost savings.
        </p>
      </motion.div>

      {/* Infinite Marquee Section */}
      <div className="relative flex overflow-hidden bg-slate-50 border-y border-slate-100 py-12 md:py-16 w-full shadow-inner group">
        
        {/* Fading Edges for pure seamless look */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap items-center min-w-max"
        >
          {/* Creating an artificially deep array for robust unbroken scrolling */}
          {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="mx-8 md:mx-16 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
               <span className="font-black text-2xl md:text-4xl text-slate-800 tracking-[-0.04em] uppercase">
                 {client.name}
               </span>
               {/* Minimalist dot separator between logos */}
               <div className="w-2 h-2 rounded-full bg-accent-400/50 absolute -right-8 md:-right-16 drop-shadow-sm"></div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
