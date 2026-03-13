import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/sections/Footer";

import Team from "@/components/sections/Team";

export const metadata = {
  title: "IIT Delhi DMS | Digital Market Shiksha — Social Impact Report",
  description:
    "IIT Delhi Department of Management Studies trained 688 SHG women across 10 districts in Northern India in financial and digital literacy, in partnership with EXL.",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <section id="about">
        <About />
        <Team />
      </section>
      <Project />
      <Partners />
      <Footer />
    </main>
  );
}
