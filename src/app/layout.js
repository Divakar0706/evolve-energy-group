import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Solar Simplified",
  description: "Energizing the Future with Premium Solar Innovation",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
