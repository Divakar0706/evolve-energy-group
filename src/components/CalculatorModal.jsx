"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function CalculatorModal({ isOpen, onClose }) {
  const [units, setUnits] = useState("");
  const [cycle, setCycle] = useState("monthly");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!units || isNaN(units)) return;
    
    // Convert units to pure monthly scale
    let monthlyUnits = cycle === "bimonthly" ? parseFloat(units) / 2 : parseFloat(units);
    
    // Formula: 1 kW generates ~135 units per month (4.5 units per day) 
    const kw = monthlyUnits / 135;
    
    // Formula: 1 kW requires ~70 sqft of shadow free area
    const sqft = kw * 70;
    
    setResult({
      kw: kw.toFixed(2),
      sqft: Math.round(sqft)
    });
  };

  const handleClose = () => {
    setResult(null);
    setUnits("");
    setCycle("monthly");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[600px] bg-white border border-slate-100 rounded-[2rem] p-6 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
            >
              <FiX className="text-xl" />
            </button>

            {/* Header */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Solar Calculator
            </h2>

            {/* Input Forms */}
            <div className="space-y-8">
              
              {/* Units */}
              <div>
                <label className="block text-slate-600 text-sm font-semibold tracking-wider uppercase mb-3">Consumer Units</label>
                <input 
                  type="number" 
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  placeholder="Enter monthly consumed units"
                  className="w-full p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-slate-900 text-lg sm:text-xl font-medium placeholder-slate-400 shadow-inner"
                />
              </div>

              {/* Billing Cycle - Smart Pill Segmented Control */}
              <div>
                <label className="block text-slate-600 text-sm font-semibold tracking-wider uppercase mb-3">Billing Cycle</label>
                <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner">
                  <div 
                    onClick={() => setCycle('monthly')}
                    className={`flex-1 text-center py-3 rounded-full cursor-pointer transition-all duration-300 font-extrabold text-sm sm:text-base ${cycle === 'monthly' ? 'bg-primary-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                  >
                    Monthly (30 days)
                  </div>
                  <div 
                    onClick={() => setCycle('bimonthly')}
                    className={`flex-1 text-center py-3 rounded-full cursor-pointer transition-all duration-300 font-extrabold text-sm sm:text-base ${cycle === 'bimonthly' ? 'bg-primary-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                  >
                    Bimonthly (60 days)
                  </div>
                </div>
              </div>

              {/* Action Category */}
              <div className="pt-2">
                <button 
                  onClick={handleCalculate}
                  className="w-full bg-accent-400 text-slate-900 font-extrabold rounded-full py-4 text-lg cursor-pointer hover:bg-accent-500 shadow-[0_10px_30px_-10px_rgba(245,153,40,0.6)] transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent-400/50"
                >
                  Calculate Requirement
                </button>
              </div>

              {/* Intelligent Dynamic Result Outputs */}
              {result && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100"
                >
                  {/* Solar Plant Card */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-[1.5rem] p-6 relative overflow-hidden shadow-sm">
                    <h3 className="text-emerald-700 font-bold mb-1 text-xs tracking-widest uppercase">Solar Plant</h3>
                    <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">{result.kw} <span className="text-lg font-bold text-emerald-600">kW</span></p>
                    <p className="text-emerald-700/80 text-xs sm:text-sm mt-3 font-medium leading-relaxed">Estimated requirement based on usage.</p>
                  </div>
                  
                  {/* Roof Space Card */}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200 rounded-[1.5rem] p-6 relative overflow-hidden shadow-sm">
                    <h3 className="text-primary-700 font-bold mb-1 text-xs tracking-widest uppercase">Roof Space</h3>
                    <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">{result.sqft} <span className="text-lg font-bold text-primary-600">Sqft</span></p>
                    <p className="text-primary-700/80 text-xs sm:text-sm mt-3 font-medium leading-relaxed">Shadow-free area required.</p>
                  </div>
                </motion.div>
              )}
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
