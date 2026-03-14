"use client";
import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import("@/components/ui/map"), { ssr: false });

export default function ReachMap() {
  return (
    <section id="map" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">Project Footprint</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            Reaching Across Northern India
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            10 districts across 5 states and union territories — all 
            connected through IIT Delhi's research network
          </p>
        </div>

        <WorldMap
          dots={[
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 30.3165, lng: 78.0322, label: "Dehradun" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 29.9457, lng: 78.1642, label: "Haridwar" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 26.8467, lng: 80.9462, label: "Lucknow" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 25.4358, lng: 81.8463, label: "Prayagraj" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 31.1048, lng: 77.1734, label: "Shimla" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 31.6862, lng: 76.5212, label: "Hamirpur" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 28.1200, lng: 77.3330, label: "Palwal" } },
            { start: { lat: 28.6139, lng: 77.2090, label: "IIT Delhi" }, end: { lat: 27.1024, lng: 77.0244, label: "Nuh" } }
          ]}
          lineColor="#E8821A"
        />

        <div className="flex flex-row justify-center flex-wrap gap-4 mt-12">
          <span className="rounded-full bg-[#003580]/10 text-[#003580] px-4 py-2 text-sm font-semibold border border-[#003580]/20">Delhi · 121 participants</span>
          <span className="rounded-full bg-[#003580]/10 text-[#003580] px-4 py-2 text-sm font-semibold border border-[#003580]/20">Haryana · 97 participants</span>
          <span className="rounded-full bg-[#003580]/10 text-[#003580] px-4 py-2 text-sm font-semibold border border-[#003580]/20">Himachal Pradesh · 166 participants</span>
          <span className="rounded-full bg-[#003580]/10 text-[#003580] px-4 py-2 text-sm font-semibold border border-[#003580]/20">Uttar Pradesh · 228 participants</span>
          <span className="rounded-full bg-[#003580]/10 text-[#003580] px-4 py-2 text-sm font-semibold border border-[#003580]/20">Uttarakhand · 106 participants</span>
        </div>
      </div>
    </section>
  );
}
