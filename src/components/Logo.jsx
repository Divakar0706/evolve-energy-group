import Image from "next/image";

export default function Logo({ className = "w-48 h-auto" }) {
  return (
    <Image 
      src="/logo.png" 
      alt="Evolve Energy Group Logo" 
      width={400} 
      height={120} 
      className={`object-contain ${className}`}
      priority
    />
  );
}