import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "evolve Energy Group | Solar Innovation",
  description: "Energizing the Future with Premium Solar Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans">
        {children}
      </body>
    </html>
  );
}
