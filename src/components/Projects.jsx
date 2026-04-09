"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "1MW Solar Plant - Mysore",
      img: "/solar.jpg", 
    },
    {
      title: "Industrial Solar Setup",
      img: "/solar.jpg",
    },
    {
      title: "Rooftop Solar - Coimbatore",
      img: "/solar.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-900 border-t border-slate-800 text-center" id="projects">
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-500 font-bold uppercase tracking-wider text-sm mb-2 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-green-400">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our state-of-the-art solar installations successfully deployed across industries and residential zones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-3xl shadow-2xl bg-black border border-slate-800"
            >
              {/* Image */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:opacity-60 transition duration-700 ease-out"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest rounded-full mb-3 backdrop-blur-sm border border-primary-500/20">Solar Install</span>
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
                <div className="w-0 h-1 bg-primary-500 mt-4 group-hover:w-16 transition-all duration-500 ease-out"></div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}