"use client";
export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image / Logo Card */}
          <div className="flex flex-col items-center justify-center gap-6 p-10 bg-[#FAF9F6] rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
            <img 
              src="/IIT-Delhi-DMS/images/iitd-logo.png"
              alt="IIT Delhi Logo"
              className="h-32 w-auto object-contain relative z-10"
              onError={(e: any) => { e.target.style.display='none' }}
            />
            <div className="text-center relative z-10">
              <p className="text-2xl font-bold text-[#003580]">IIT Delhi</p>
              <p className="text-sm text-gray-500 mt-1">
                Established 1961 · NIRF Rank #2
              </p>
              <div className="flex gap-3 mt-4 justify-center flex-wrap">
                <span className="px-3 py-1 bg-[#003580]/10 text-[#003580] rounded-full text-xs font-medium">Premier Research Institution</span>
                <span className="px-3 py-1 bg-[#E8821A]/10 text-[#E8821A] rounded-full text-xs font-medium">Action Research</span>
                <span className="px-3 py-1 bg-[#003580]/10 text-[#003580] rounded-full text-xs font-medium">Social Impact</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-saffron/10 rounded-bl-full z-0"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-navy/5 rounded-tr-full z-0"></div>
          </div>

          {/* Right: Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
                About IIT Delhi
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The Indian Institute of Technology Delhi is one of India's premier institutions for engineering, technology, and innovation. Renowned for its cutting-edge research and commitment to societal impact, IIT Delhi fosters initiatives that address real-world challenges and drive sustainable development.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-brand-navy tracking-tight">
                Department of Management Studies
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                DMS bridges academic research with social impact. Through action research and partnerships with government and corporate partners, DMS faculty drive evidence-based livelihood development for underserved communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
