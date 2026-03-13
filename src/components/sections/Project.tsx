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
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: UsersIcon,
      name: "Who We Trained",
      description: "688 SHG women entrepreneurs across 224 Self-Help Groups in 10 districts across Delhi, Haryana, UP, Uttarakhand & Himachal Pradesh.",
      href: "#impact",
      cta: "See Reach",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: FlaskConicalIcon,
      name: "Research Method",
      description: "3-day structured training · 15 Focus Group Discussions · Baseline & Endline surveys · Training of Trainers (ToT) sessions · Self-learning handbook developed",
      href: "#about",
      cta: "Learn More",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "SDG Alignment",
      description: "SDG 5: Gender Equality · SDG 8: Decent Work & Economic Growth · SDG 9: Industry, Innovation & Infrastructure",
      href: "#partners",
      cta: "About EXL Partnership",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: TrendingUpIcon,
      name: "Measured Impact",
      description: "E-Commerce awareness rose from 25% to 94%. Entrepreneurial confidence went from 49% to 97% across all districts.",
      href: "#impact",
      cta: "View Full Data",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <section id="project" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight">
            The Project
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Empowering Micro-Level Women Entrepreneurs through Financial and Digital Literacy
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
