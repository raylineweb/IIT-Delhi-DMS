"use client";
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then(mod => mod.Legend), { ssr: false });

const metrics = [
  { label: "E-Commerce Awareness", before: 25, after: 94 },
  { label: "E-Commerce Adoption", before: 14, after: 90 },
  { label: "Digital Payments Awareness", before: 48, after: 91 },
  { label: "Digital Payments Adoption", before: 36, after: 89 },
  { label: "Bookkeeping & Financial Literacy", before: 33, after: 93 },
  { label: "Entrepreneurial Confidence", before: 49, after: 97 },
  { label: "Social Media for Business", before: 19, after: 89 },
];

function MetricCard({ label, before, after }: { label: string; before: number; after: number }) {
  const gain = after - before;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start gap-2">
        <p className="text-sm font-semibold text-gray-800 leading-snug">{label}</p>
        <span className="shrink-0 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+{gain}%</span>
      </div>
      {/* After bar */}
      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span className="font-medium text-[#E8821A]">After Training</span>
          <span className="font-bold text-[#E8821A]">{after}%</span>
        </div>
        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-[#E8821A] transition-all duration-700"
            style={{ width: `${after}%` }}
          />
        </div>
      </div>
      {/* Before bar */}
      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Before Training</span>
          <span className="font-semibold">{before}%</span>
        </div>
        <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gray-300 transition-all duration-700"
            style={{ width: `${before}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ImpactCharts() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">Measured Outcomes</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            Before & After Training
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Baseline vs Endline data across all 688 participants in 10 districts
          </p>
        </div>

        {/* Metric cards grid — works great on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Bar chart — hidden on mobile, visible on md+ */}
        <div className="hidden md:block mt-14 h-[360px]">
          <p className="text-center text-sm text-gray-400 mb-4">Overview Chart</p>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={metrics.map(m => ({ metric: m.label.split(' ').slice(0,2).join(' '), before: m.before, after: m.after }))}
              margin={{ top: 10, right: 20, left: 0, bottom: 60 }}
            >
              <XAxis
                dataKey="metric"
                type="category"
                tick={{ fontSize: 11, fill: '#6B7280' }}
                angle={-25}
                textAnchor="end"
                interval={0}
              />
              <YAxis
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 11, fill: '#6B7280' }}
                width={40}
              />
              <Tooltip formatter={(value: any) => `${value}%`} />
              <Legend verticalAlign="top" />
              <Bar dataKey="before" name="Before Training" fill="#CBD5E1" radius={[4,4,0,0]} />
              <Bar dataKey="after" name="After Training" fill="#E8821A" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
