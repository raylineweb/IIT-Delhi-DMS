import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Partners from "@/components/sections/Partners";
import { Footer } from "@/components/ui/flickering-footer";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

import ReachMap from "@/components/sections/ReachMap";
import ImpactCharts from "@/components/sections/ImpactCharts";

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
      <ReachMap />
      <ImpactCharts />
      <Testimonials />
      <Footer />
    </main>
  );
}
