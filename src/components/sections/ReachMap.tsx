"use client";
import { useRef, useEffect, useState } from "react";
import { MapPin, Users, Building2 } from "lucide-react";

const states = [
  {
    name: "Delhi",
    participants: 121,
    districts: "South Delhi, North Delhi",
    shgs: 42,
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&auto=format&fit=crop",
    alt: "India Gate Delhi",
  },
  {
    name: "Haryana",
    participants: 97,
    districts: "Palwal, Nuh",
    shgs: 31,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
    alt: "Rural Haryana",
  },
  {
    name: "Himachal Pradesh",
    participants: 166,
    districts: "Shimla, Hamirpur",
    shgs: 58,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop",
    alt: "Himalayan mountains HP",
  },
  {
    name: "Uttar Pradesh",
    participants: 228,
    districts: "Lucknow, Prayagraj",
    shgs: 71,
    img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&auto=format&fit=crop",
    alt: "Uttar Pradesh",
  },
  {
    name: "Uttarakhand",
    participants: 106,
    districts: "Dehradun, Haridwar",
    shgs: 38,
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&auto=format&fit=crop",
    alt: "Uttarakhand river valley",
  },
];

function StateCard({ s }: { s: typeof states[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);
  const [touched, setTouched] = useState(false);

  // Mouse move glow
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const handleLeave = () => setGlowPos(null);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Touch glow - center of card
  const handleTouchStart = (e: React.TouchEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const t = e.touches[0];
    setGlowPos({ x: t.clientX - rect.left, y: t.clientY - rect.top });
    setTouched(true);
  };
  const handleTouchEnd = () => {
    setTimeout(() => { setGlowPos(null); setTouched(false); }, 400);
  };

  return (
    <div
      ref={cardRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900",
        "flex flex-col cursor-pointer",
        "transition-transform duration-300",
        touched ? "scale-[0.98]" : "hover:-translate-y-1",
        "hover:shadow-xl hover:shadow-orange-900/20",
      ].join(" ")}
    >
      {/* Radial glow overlay */}
      {glowPos && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl z-10"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(249,115,22,0.25), transparent 60%)`,
          }}
        />
      )}

      {/* State image */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={s.img}
          alt={s.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e: any) => { e.target.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        <span className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow">{s.name}</span>
      </div>

      {/* State details */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <MapPin className="h-4 w-4 text-[#F97316] shrink-0" />
          <span>{s.districts}</span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#F97316] shrink-0" />
            <div>
              <p className="text-lg font-bold text-white">{s.participants}</p>
              <p className="text-xs text-neutral-500">Participants</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#F97316] shrink-0" />
            <div>
              <p className="text-lg font-bold text-white">{s.shgs}</p>
              <p className="text-xs text-neutral-500">SHGs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReachMap() {
  return (
    <section id="map" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">Project Footprint</span>
          <h2 className="text-4xl font-bold text-white mt-2">Reaching Across Northern India</h2>
          <p className="text-neutral-400 mt-3 max-w-xl mx-auto">
            10 districts across 5 states — trained through IIT Delhi’s action research program
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {states.map((s) => <StateCard key={s.name} s={s} />)}
        </div>
        <p className="text-center text-neutral-600 text-xs mt-10">
          Total: 688 women · 224 SHGs · 10 districts · 5 states / UTs
        </p>
      </div>
    </section>
  );
}
