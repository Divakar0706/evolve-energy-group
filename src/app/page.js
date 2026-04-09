import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Journey from "./Journey";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonals";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Journey />
      <WhyChooseUs />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}