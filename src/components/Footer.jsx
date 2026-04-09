import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6 border-t border-white/10 text-center relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="flex items-center">
          <Logo className="w-32 md:w-40 h-auto text-white/90 drop-shadow-lg" />
        </Link>
        
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