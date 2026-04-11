"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaMoneyBillWave, FaTools, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  const points = [
    {
      title: "High-Quality Products",
      desc: "Durable and efficient solar systems built to last decades.",
      icon: <FaShieldAlt size={32} />,
      color: "from-primary-500 to-primary-400",
      bgLight: "bg-primary-50 group-hover:bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      title: "Affordable Solutions",
      desc: "Cost-effective solar options offering rapid ROI.",
      icon: <FaMoneyBillWave size={32} />,
      color: "from-emerald-500 to-emerald-400",
      bgLight: "bg-emerald-50 group-hover:bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      title: "Sustainable Energy",
      desc: "Reduce carbon footprint with pristine clean energy.",
      icon: <FaLeaf size={32} />,
      color: "from-accent-500 to-accent-400",
      bgLight: "bg-orange-50 group-hover:bg-orange-100",
      iconColor: "text-accent-500"
    },
    {
      title: "After-Sales Support",
      desc: "Reliable, 24/7 service and maintenance commitment.",
      icon: <FaTools size={32} />,
      color: "from-primary-600 to-primary-500",
      bgLight: "bg-primary-50 group-hover:bg-primary-100",
      iconColor: "text-primary-600"
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 text-center relative overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-500 font-bold uppercase tracking-wider text-sm mb-2 block">Our Value</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            We deliver reliable, premium, and sustainable solar solutions specifically tailored to elevate your energy independence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative cursor-pointer bg-white border border-slate-100 shadow-xl hover:shadow-2xl p-8 rounded-2xl shadow-xl hover:bg-slate-50 transition-all duration-300 overflow-hidden text-left"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-[0.08] rounded-bl-full transition-transform duration-500 group-hover:scale-110`}></div>
              
              <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-6 ${item.bgLight} ${item.iconColor} shadow-sm group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}