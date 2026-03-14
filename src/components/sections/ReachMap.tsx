"use client";
// @ts-nocheck
import dynamic from "next/dynamic";

const IndiaMap = dynamic(
  () => import("@vishalvoid/react-india-map").then((m) => m.IndiaMap),
  { ssr: false }
);

const PROJECT_STATES = ["IN-DL", "IN-HR", "IN-HP", "IN-UP", "IN-UT"];

const stateData = [
  { id: "IN-DL", color: "#F97316", customData: { state: "Delhi", participants: 121,
    districts: "South Delhi, North Delhi" } },
  { id: "IN-HR", color: "#F97316", customData: { state: "Haryana", participants: 97,
    districts: "Palwal, Nuh" } },
  { id: "IN-HP", color: "#F97316", customData: { state: "Himachal Pradesh", participants: 166,
    districts: "Shimla, Hamirpur" } },
  { id: "IN-UP", color: "#F97316", customData: { state: "Uttar Pradesh", participants: 228,
    districts: "Lucknow, Prayagraj" } },
  { id: "IN-UT", color: "#F97316", customData: { state: "Uttarakhand", participants: 106,
    districts: "Dehradun, Haridwar" } },
];

export default function ReachMap() {
  return (
    <section id="map" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">Project Footprint</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            Reaching Across Northern India
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            10 districts across 5 states — all trained through
            IIT Delhi’s action research program
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
          <IndiaMap
            stateData={stateData}
            mapStyle={{
              backgroundColor: "#EEF2FF",
              hoverColor: "#EA580C",
              stroke: "#CBD5E1",
              strokeWidth: 0.8,
              tooltipConfig: {
                backgroundColor: "#003580",
                textColor: "#ffffff",
              },
            }}
            onStateHover={(stateId, info) => {}}
            onStateClick={(stateId, info) => {}}
          />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stateData.map((s) => (
            <div key={s.id} className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100">
              <div className="w-3 h-3 rounded-full bg-[#F97316] mx-auto mb-2" />
              <p className="font-semibold text-sm text-[#003580]">{s.customData.state}</p>
              <p className="text-xs text-gray-500 mt-1">{s.customData.participants} participants</p>
              <p className="text-xs text-gray-400">{s.customData.districts}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
