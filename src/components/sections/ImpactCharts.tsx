"use client";
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then(mod => mod.Legend), { ssr: false });
const LabelList = dynamic(() => import('recharts').then(mod => mod.LabelList), { ssr: false });

const overallData = [
  { metric: "E-Commerce Awareness", before: 25, after: 94 },
  { metric: "E-Commerce Adoption", before: 14, after: 90 },
  { metric: "Digital Payments Awareness", before: 48, after: 91 },
  { metric: "Digital Payments Adoption", before: 36, after: 89 },
  { metric: "Bookkeeping & Financial Literacy", before: 33, after: 93 },
  { metric: "Entrepreneurial Confidence", before: 49, after: 97 },
  { metric: "Social Media for Business", before: 19, after: 89 },
];

export default function ImpactCharts() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">Measured Outcomes</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            Before & After Training
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Baseline vs Endline data across all 688 participants 
            in 10 districts
          </p>
        </div>

        <div className="w-full h-[420px] mb-12">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={overallData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="metric" type="category" width={220} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend verticalAlign="top" />
              <Bar dataKey="before" name="Before Training" fill="#CBD5E1" />
              <Bar dataKey="after" name="After Training" fill="#E8821A">
                <LabelList dataKey="after" position="right" formatter={(val: any) => `${val}%`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-[#FAF9F6] text-center">
            <div className="text-4xl font-bold text-[#E8821A] mb-2">↑ 68pp</div>
            <div className="font-semibold text-gray-900">Average improvement across all metrics</div>
            <div className="text-sm text-gray-500 mt-1">Percentage point increase</div>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-[#FAF9F6] text-center">
            <div className="text-4xl font-bold text-[#E8821A] mb-2">97%</div>
            <div className="font-semibold text-gray-900">Entrepreneurial Confidence</div>
            <div className="text-sm text-gray-500 mt-1">Highest endline score achieved</div>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-[#FAF9F6] text-center">
            <div className="text-4xl font-bold text-[#E8821A] mb-2">90%</div>
            <div className="font-semibold text-gray-900">E-Commerce Adoption</div>
            <div className="text-sm text-gray-500 mt-1">Up from just 14% at baseline</div>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-[#FAF9F6] text-center">
            <div className="text-4xl font-bold text-[#E8821A] mb-2">10</div>
            <div className="font-semibold text-gray-900">Districts Measured</div>
            <div className="text-sm text-gray-500 mt-1">Across 5 states & UTs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
