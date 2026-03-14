import {
  BookOpenIcon,
  UsersIcon,
  FlaskConicalIcon,
  GlobeIcon,
  TrendingUpIcon
} from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function Project() {
  const features = [
    {
      Icon: BookOpenIcon,
      name: "What We Taught",
      description: "UPI & Digital Banking · WhatsApp Business · E-Commerce (ONDC, Amazon, Flipkart, Meesho) · Bookkeeping & Balance Sheet · Cost & Pricing Strategy · Credit Score & Financial Management",
      href: "#impact",
      cta: "View Curriculum",
      className: "col-span-1 md:col-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-white/95",
      background: (
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
          alt="Women training session India"
        />
      ),
    },
    {
      Icon: UsersIcon,
      name: "Who We Trained",
      description: "688 SHG women entrepreneurs across 224 Self-Help Groups in 10 districts across Delhi, Haryana, UP, Uttarakhand & Himachal Pradesh.",
      href: "#map",
      cta: "See Reach",
      className: "col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 bg-white/95",
      background: (
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=800&auto=format&fit=crop"
          alt="Indian women group SHG"
        />
      ),
    },
    {
      Icon: FlaskConicalIcon,
      name: "Research Method",
      description: "3-day structured training · 15 Focus Group Discussions · Baseline & Endline surveys · Training of Trainers (ToT) sessions · Self-learning handbook developed",
      href: "#about",
      cta: "Learn More",
      className: "col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 bg-white/95",
      background: (
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop"
          alt="Research and fieldwork"
        />
      ),
    },
    {
      Icon: GlobeIcon,
      name: "SDG Alignment",
      description: "SDG 5: Gender Equality · SDG 8: Decent Work & Economic Growth · SDG 9: Industry, Innovation & Infrastructure",
      href: "#about",
      cta: "Our Impact",
      className: "col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 bg-white/95",
      background: (
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop"
          alt="Global sustainable development"
        />
      ),
    },
    {
      Icon: TrendingUpIcon,
      name: "Measured Impact",
      description: "E-Commerce awareness rose from 25% to 94%. Entrepreneurial confidence went from 49% to 97% across all districts.",
      href: "#impact",
      cta: "View Data",
      className: "col-span-1 md:col-span-2 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 bg-white/95",
      background: (
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
          alt="Data analytics and growth"
        />
      ),
    },
  ];

  return (
    <section id="project" className="py-20 bg-brand-ivory">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">The Project</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            What We Did & How
          </h2>
        </div>
        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto lg:auto-rows-[200px]">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
