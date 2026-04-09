"use client";

import { motion } from "framer-motion";
import { FaSolarPanel, FaTools, FaIndustry, FaHome } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "EPC Solutions",
      desc: "Complete solar system design, procurement, and installation.",
      icon: <FaSolarPanel size={40} />,
    },
    {
      title: "Solar Manufacturing",
      desc: "High-performance solar panels and components.",
      icon: <FaIndustry size={40} />,
    },
    {
      title: "Operation & Maintenance",
      desc: "Ensure long-term efficiency and system reliability.",
      icon: <FaTools size={40} />,
    },
    {
      title: "Residential Solar",
      desc: "Transform your home into a sustainable energy source.",
      icon: <FaHome size={40} />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white text-center" id="services">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            End-to-end premium solar solutions tailored specifically for homes, businesses, and industrial complexes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-left">
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-default group"
            >
              <div className="text-white bg-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}