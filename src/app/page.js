import Hero from "@/components/Hero";
import InteriorDesignSection from "@/components/InteriorDesignSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <InteriorDesignSection/>
    </section>
  );
}
