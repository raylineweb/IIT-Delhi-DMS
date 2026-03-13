export default function Partners() {
  return (
    <section id="partners" className="w-full bg-brand-ivory py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight">
            Partners in Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: EXL */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-brand-saffron/10 px-3 py-1 text-xs font-semibold text-brand-saffron uppercase tracking-wider">
                CSR Partner
              </span>
            </div>
            
            {/* Logo Placeholder */}
            <div className="mb-8 w-full max-w-[200px] aspect-[2/1] bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
              <span className="font-bold text-brand-navy tracking-widest text-2xl">EXL</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              EXL (NASDAQ: EXLS)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A leading data analytics and digital operations company with 57,000+ employees across six continents. EXL partnered with IIT Delhi under its CSR initiative to build capacity among women SHG entrepreneurs.
            </p>
          </div>

          {/* Card 2: Government */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-semibold text-brand-navy uppercase tracking-wider">
                Government Partner
              </span>
            </div>
            
            {/* Logo Placeholder */}
            <div className="mb-8 w-full max-w-[200px] aspect-[2/1] bg-gray-50 border border-gray-100 rounded-lg flex flex-col items-center justify-center gap-1">
              <span className="font-bold text-gray-700 tracking-widest text-sm uppercase">ArSRLM</span>
              <span className="text-gray-400 text-xs">+ SRLMs</span>
            </div>

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
