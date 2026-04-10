"use client";

import { useState } from "react";
import { FiX, FiUploadCloud } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    country: "+91",
    email: "",
    city: "",
    pin: "",
    bill: "",
    remark: "",
    projectType: "",
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Strict regex for metrics
    if ((name === "mobile" || name === "pin") && !/^\d*$/.test(value)) return;

    setForm({ ...form, [name]: value });
  };

  // File upload simulation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      setTimeout(() => {
        setFileName(file.name);
        setLoading(false);
      }, 1200);
    }
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (!form.name || !form.mobile || !form.email || !form.city || !form.pin) {
      setError("Please fill all required fields");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Enter valid email");
      return;
    }

    if (!form.projectType) {
      setError("Select project type");
      return;
    }

    setError("");
    setSuccess(true);
  };

  const InputClass = "w-full p-3.5 sm:p-4 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400 transition-all";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6"
        >

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[700px] max-h-[90vh] md:max-h-[85vh] overflow-y-auto rounded-[2rem] bg-white p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
            >
              <FiX className="text-xl" />
            </button>

            <h2 className="mb-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get a Quote
            </h2>
            <p className="text-slate-500 mb-8 font-medium">Leave your details below and our solar experts will reach out to you immediately.</p>

            {/* FORM */}
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 text-slate-900">

              <input
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                className={InputClass}
              />

              {/* PHONE */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full sm:w-28 p-3.5 sm:p-4 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-400/50"
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                </select>

                <input
                  name="mobile"
                  placeholder="Mobile *"
                  value={form.mobile}
                  onChange={handleChange}
                  className={`flex-1 ${InputClass}`}
                />
              </div>

              <input
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                className={`${InputClass} md:col-span-2`}
              />

              <input
                name="city"
                placeholder="City *"
                value={form.city}
                onChange={handleChange}
                className={InputClass}
              />

              <input
                name="pin"
                placeholder="PIN Code *"
                value={form.pin}
                onChange={handleChange}
                className={InputClass}
              />

            </div>

            {/* PROJECT TYPE */}
            <div className="mt-8 text-slate-900 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <p className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-4">Select Project Type *</p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
                {["Residential", "Commercial", "Others"].map((type) => (
                  <label key={type} className="relative flex cursor-pointer items-center">
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={form.projectType === type}
                      onChange={handleChange}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <span className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl border text-sm sm:text-base font-semibold transition-all duration-300 select-none ${
                        form.projectType === type 
                          ? 'border-accent-400 bg-accent-400 text-slate-900 shadow-md transform -translate-y-1' 
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* FILE SUBMISSION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6">
              
              <input
                name="bill"
                placeholder="Monthly EB Bill (INR)"
                value={form.bill}
                onChange={handleChange}
                className={InputClass}
              />

              <label className="flex items-center justify-center gap-3 p-3.5 sm:p-4 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/50 hover:bg-slate-100 cursor-pointer text-center font-bold text-slate-600 transition-colors group">
                <FiUploadCloud className="text-2xl text-slate-400 group-hover:text-accent-500 transition-colors" />
                <span className="truncate max-w-[150px]">{loading ? "Uploading..." : fileName}</span>
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>

            </div>

            {/* REMARK */}
            <textarea
              name="remark"
              placeholder="Additional Remarks (Optional)"
              value={form.remark}
              onChange={handleChange}
              className={`${InputClass} mt-4 sm:mt-5 min-h-[120px] resize-y`}
            />

            {/* ERROR NOTIFICATION */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-600 font-bold p-4 rounded-xl mt-4 border border-red-100 flex items-center justify-center"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full mt-8 cursor-pointer bg-accent-400 text-slate-900 font-extrabold px-6 py-4 rounded-xl hover:bg-accent-500 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(245,153,40,0.5)] transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
            >
              Get Free Quote
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}