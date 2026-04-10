const fs = require('fs');
const path = require('path');

const files = [
  'WhyChooseUs.jsx', 'Services.jsx', 'Projects.jsx', 
  'Testimonals.jsx', 'Contact.jsx', 'Stats.jsx'
];

files.forEach(file => {
  const filepath = path.join('d:/evolve-energy-ui/src/components', file);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');

  // Background Flips
  content = content.replace(/bg-slate-950/g, 'bg-slate-50');
  content = content.replace(/bg-slate-900\/50/g, 'bg-white');
  content = content.replace(/bg-slate-900/g, 'bg-white');
  content = content.replace(/bg-slate-800\/50/g, 'bg-white');
  content = content.replace(/bg-slate-800\/80/g, 'bg-slate-50');
  content = content.replace(/bg-slate-800/g, 'bg-slate-50');

  // Border & Shadow Flips
  content = content.replace(/border-slate-800/g, 'border-slate-100 shadow-xl hover:shadow-2xl');
  content = content.replace(/border-slate-700/g, 'border-slate-200 shadow-lg');

  // Text Contrast Flips
  content = content.replace(/text-white/g, 'text-slate-900');
  content = content.replace(/text-slate-200/g, 'text-slate-700');
  content = content.replace(/text-slate-300/g, 'text-slate-600');
  content = content.replace(/text-slate-400/g, 'text-slate-600');

  fs.writeFileSync(filepath, content);
});
console.log('Light theme conversion applied successfully.');
