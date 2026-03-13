export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image / Logo Placeholder */}
          <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
            {/* If there was a real image, it would go here. For now, a styled placeholder */}
            <div className="text-center">
              <div className="mx-auto w-32 h-32 md:w-48 md:h-48 border-[6px] border-brand-navy rounded-full flex items-center justify-center bg-white shadow-xl">
                <span className="text-brand-navy font-bold text-2xl md:text-3xl text-center leading-tight">
                  IIT<br />Delhi
                </span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-saffron/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-navy/5 rounded-tr-full"></div>
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
