"use client";
export default function Partners() {
  return (
    <section id="partners" className="w-full bg-brand-ivory py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">Collaboration</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            Partners in Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: EXL */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-brand-saffron/10 px-3 py-1 text-xs font-semibold text-brand-saffron uppercase tracking-wider">
                CSR Partner
              </span>
            </div>
            
            <img 
              src="/IIT-Delhi-DMS/images/exl-logo.png" 
              alt="EXL" 
              className="h-10 w-auto object-contain mb-4"
              onError={(e: any) => { 
                e.target.style.display='none' 
              }}
            />

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              EXL (NASDAQ: EXLS)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A leading data analytics and digital operations company with 57,000+ employees across six continents. EXL partnered with IIT Delhi under its CSR initiative to build capacity among women SHG entrepreneurs.
            </p>
          </div>

          {/* Card 2: Government */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-semibold text-brand-navy uppercase tracking-wider">
                Government Partner
              </span>
            </div>
            
            <img 
              src="/IIT-Delhi-DMS/images/arsrlm-logo.png" 
              alt="ArSRLM" 
              className="h-10 w-auto object-contain mb-4"
              onError={(e: any) => { 
                e.target.style.display='none' 
              }}
            />

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              State Rural Livelihoods Missions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Implementation partners: Delhi SULM, Haryana SRLM, Uttarakhand SRLM, Uttar Pradesh SRLM, and Himachal Pradesh SRLM — nodal agencies for NRLM/Aajeevika implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
