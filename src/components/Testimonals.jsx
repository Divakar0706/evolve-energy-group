"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Padmanaban J",
      company: "PJ Solar",
      text: "Evolve Energy Group has been very helpful and reliable in every situation.",
    },
    {
      name: "Dinesh Jaglan",
      company: "Solaris Power",
      text: "We rely on their dependable service to keep our business running smoothly.",
    },
    {
      name: "Purvaraj Jhala",
      company: "Evotar Technologies",
      text: "Their support is outstanding. They are always available when needed.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/50 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            What Our <span className="text-primary-600">Clients Say</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Hear from our satisfied customers who trust us to power their homes and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
          
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative cursor-pointer bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-5 left-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-green-400 rounded-full flex items-center justify-center text-slate-900 shadow-lg">
                <FaQuoteLeft size={20} />
              </div>
              
              <p className="text-slate-700 italic mt-4 text-base leading-relaxed">
                "{item.text}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <h3 className="font-bold text-slate-900 text-lg">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-primary-600 uppercase tracking-widest mt-1">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}