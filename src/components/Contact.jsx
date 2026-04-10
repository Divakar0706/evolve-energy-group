"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1500);
  };

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
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Ready to transition to solar? Reach out to us for a free, customized energy consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl sm:text-2xl group-hover:bg-primary-600 group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                <FiMapPin />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mb-1">Headquarters</h4>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-slate-800 truncate">Chennai, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl sm:text-2xl group-hover:bg-primary-600 group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                <FiPhone />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mb-1">Phone</h4>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-slate-800 truncate">+91 800 16 12345</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl sm:text-2xl group-hover:bg-primary-600 group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                <FiMail />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mb-1">Email Support</h4>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-slate-800 break-all sm:break-normal">info@evolveenergygroup.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/20 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-600">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Name"
                  className="w-full p-3 sm:p-4 border border-slate-200 shadow-lg rounded-xl text-slate-900 placeholder-slate-500 bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-600">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full p-3 sm:p-4 border border-slate-200 shadow-lg rounded-xl text-slate-900 placeholder-slate-500 bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-600">How can we help you?</label>
                <textarea
                  required
                  placeholder="Tell us about your project requirements..."
                  className="w-full p-3 sm:p-4 border border-slate-200 shadow-lg rounded-xl h-24 sm:h-32 text-slate-900 placeholder-slate-500 bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== "idle"}
                className="w-full cursor-pointer bg-accent-400 text-slate-900 font-extrabold px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-accent-500 disabled:bg-slate-700 disabled:text-slate-600 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(245,153,40,0.5)] transform disabled:hover:-translate-y-0 hover:-translate-y-1 text-sm sm:text-base flex justify-center items-center gap-2"
              >
                {formStatus === "idle" && "Send Request"}
                {formStatus === "submitting" && (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                )}
                {formStatus === "success" && "Message Sent Successfully! ✓"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

    </section>
  );
}