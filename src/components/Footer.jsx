export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6 border-t border-white/10 text-center relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-primary-500 text-3xl">⚡</span> 
          Evolve <span className="text-primary-500">Energy</span>
        </h2>
        
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Evolve Energy Group. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 font-medium">Facebook</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 font-medium">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 font-medium">Twitter</a>
        </div>
      </div>
    </footer>
  );
}