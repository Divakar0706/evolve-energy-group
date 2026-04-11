"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  // Start with the middle card active on desktop
  const [active, setActive] = useState(1);

  const projects = [
    {
      title: "Atharva Sai Texbond Mysore 1Mw",
      short: "MYSORE",
      img: "/mysore.webp",
    },
    {
      title: "Thirupathiyarn 1Mw",
      short: "THIRUPATHIYARN",
      img: "/tirupathiyarn.webp",
    },
    {
      title: "Coimbatore 2.8Mw",
      short: "COIMBATORE",
      img: "/coimbatore.webp",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden" id="projects">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-accent-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              REAL-WORLD IMPACT
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Our Flagship Projects
            </h2>
          </div>
          <button className="hidden cursor-pointer md:inline-block bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-full text-base font-bold shadow-sm hover:shadow-md hover:border-primary-400 hover:text-primary-600 transition-all duration-300">
            View All Installations
          </button>
        </motion.div>

        {/* Interactive Expanding Gallery */}
        <div className="flex flex-col md:flex-row w-full h-[700px] md:h-[600px] gap-4 mt-12 md:mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              animate={{ 
                flex: active === index ? 4 : 1, 
                opacity: active === index ? 1 : 0.6 
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer shadow-xl border border-slate-200 group bg-slate-900`}
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              
              {/* Deep Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${active === index ? 'from-slate-950 via-slate-900/40 to-transparent opacity-90' : 'from-slate-950/80 to-slate-900/50 opacity-100'}`}></div>
              
              {/* Content Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col justify-end h-full pointer-events-none">
                
                {/* Active Full Content */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: active === index ? 1 : 0, y: active === index ? 0 : 40 }}
                  transition={{ duration: 0.5, delay: active === index ? 0.2 : 0 }}
                  className={`overflow-hidden ${active === index ? 'block' : 'hidden md:block'}`}
                  style={{ display: active === index ? 'block' : 'none' }}
                >
                  <div className="w-16 h-1.5 bg-accent-400 mb-5 rounded-full shadow-[0_0_15px_rgba(245,153,40,0.5)]"></div>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-md mb-4 max-w-sm">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base max-w-xs font-medium tracking-wide">
                    Discover how we delivered massive efficiency and scale for this high-yield solar installation.
                  </p>
                </motion.div>

                {/* Vertical Text for Inactive State (Desktop Only) */}
                <motion.div 
                   animate={{ opacity: active === index ? 0 : 1 }}
                   className={`absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-white font-extrabold tracking-[0.3em] uppercase text-sm md:text-xl md:-rotate-90 md:origin-center drop-shadow-lg ${active === index ? 'hidden' : 'hidden md:block'}`}
                >
                   {project.short}
                </motion.div>

                {/* Mobile Inactive Indicator */}
                <motion.div 
                   animate={{ opacity: active === index ? 0 : 1 }}
                   className={`absolute bottom-6 left-6 whitespace-nowrap text-white font-bold tracking-widest uppercase text-sm ${active === index ? 'hidden' : 'block md:hidden'}`}
                >
                   {project.short}
                </motion.div>
                
              </div>
            </motion.div>
          ))}
        </div>

        <button className="mt-8 w-full cursor-pointer md:hidden bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-lg font-bold shadow-sm hover:shadow-md hover:border-primary-400 transition-all duration-300">
           View All Installations
        </button>

      </div>
    </section>
  );
}