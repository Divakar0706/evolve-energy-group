"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Journey() {
  const steps = [
    {
      title: "Free Site Visit",
      desc: "Our expert evaluates your rooftop and energy needs.",
    },
    {
      title: "Custom Proposal",
      desc: "We design a tailored solar plan with pricing and savings.",
    },
    {
      title: "Installation",
      desc: "Certified engineers install your solar system safely.",
    },
    {
      title: "Grid Connection",
      desc: "We handle approvals and connect to the grid.",
    },
    {
      title: "Activation",
      desc: "Your system goes live and starts saving energy.",
    },
    {
      title: "Lifetime Savings",
      desc: "Enjoy long-term savings with clean solar energy.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800" id="services">
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Workflow</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-green-400">Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A simple, transparent, and hassle-free process from consultation to decades of clean energy savings.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative cursor-pointer bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <FiCheckCircle className="text-2xl text-slate-300 dark:text-slate-600 group-hover:text-primary-500 transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}