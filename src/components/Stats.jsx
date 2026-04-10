"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "1.5 GW", label: "Inverter & Modules Supplied" },
    { value: "200+ MW", label: "Projects Installed" },
    { value: "800+", label: "Happy Customers" },
    { value: "2.9L+", label: "Tonnes CO₂ Reduced" },
  ];

  return (
    <section className="py-20 bg-white text-center px-6 md:px-12 lg:px-20 border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-slate-900"
        >
          Our <span className="text-primary-600">Impact</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16">
          
          {stats.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 cursor-pointer bg-slate-50 border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-green-400 mb-2 drop-shadow-sm group-hover:scale-105 transition-transform duration-300 inline-block">
                {item.value}
              </h3>
              <p className="mt-4 text-slate-600 text-xs md:text-sm font-semibold uppercase tracking-widest">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}