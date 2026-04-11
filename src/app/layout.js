import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://evolveenergygroup.com'),
  title: {
    default: "Evolve Energy Group | Solar Simplified",
    template: "%s | Evolve Energy Group"
  },
  description: "India's Premier Solar Engineering Firm. We deliver reliable, premium, and sustainable commercial and residential solar solutions tailored to elevate your energy independence.",
  keywords: ["Solar Energy", "Solar Panels India", "Commercial Solar", "Residential Solar", "Solar Engineering", "Evolve Energy Group"],
  authors: [{ name: "Evolve Energy Group" }],
  creator: "Evolve Energy Group",
  publisher: "Evolve Energy Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Evolve Energy Group | Intelligent Solar Infrastructure',
    description: "India's Premier Solar Engineering Firm.",
    url: 'https://evolveenergygroup.com',
    siteName: 'Evolve Energy Group',
    images: [
      {
        url: '/solar.webp',
        width: 1200,
        height: 630,
        alt: 'Evolve Energy Solar Installations',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
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
