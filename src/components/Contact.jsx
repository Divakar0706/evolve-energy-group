"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Let's <span className="text-primary-600">Connect</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to transition to solar? Reach out to us for a free, customized energy consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl sm:text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FiMapPin />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Headquarters</h4>
                <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 truncate">Chennai, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl sm:text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FiPhone />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 truncate">+91 800 16 12345</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl sm:text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FiMail />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</h4>
                <p className="text-sm sm:text-lg lg:text-xl font-bold text-slate-800 break-words sm:break-normal">info@evolveenergygroup.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/20 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none"></div>

            <form className="relative z-10 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">Complete Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 sm:p-4 border border-slate-700 rounded-xl text-white placeholder-slate-500 bg-slate-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 sm:p-4 border border-slate-700 rounded-xl text-white placeholder-slate-500 bg-slate-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">How can we help?</label>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  className="w-full p-3 sm:p-4 border border-slate-700 rounded-xl h-24 sm:h-32 text-white placeholder-slate-500 bg-slate-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-primary-600 text-white font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-primary-500 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 text-sm sm:text-base">
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>

    </section>
  );
}