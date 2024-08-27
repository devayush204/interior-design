import FeaturedProducts from "@/components/featuredProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import InteriorDesignSection from "@/components/InteriorDesignSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <InteriorDesignSection/>
      <ServicesSection/>
      <FeaturedProducts/>
      <HowWeWork/>
      <Testimonials/>
      <Footer/>
    </section>
  );
}
