"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#003580] py-12 px-4 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">IIT Delhi</span>
              <span className="text-[#E8821A] font-bold text-xl">|</span>
              <span className="text-xl font-bold text-white">DMS</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Digital Market Shiksha — Empowering women SHG entrepreneurs
              through financial and digital literacy across Northern India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {["About", "Project", "Impact", "Partners"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-[#E8821A] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-xs tracking-widest">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p>Department of Management Studies</p>
              <p>IIT Delhi, Hauz Khas</p>
              <p>New Delhi — 110016</p>
              <a
                href="https://dms.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8821A] hover:underline mt-2 inline-block"
              >
                dms.iitd.ac.in ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© 2025 IIT Delhi — Department of Management Studies. All rights reserved.</span>
          <span>In partnership with EXL & State Rural Livelihoods Missions</span>
        </div>
      </div>
    </footer>
  );
}
