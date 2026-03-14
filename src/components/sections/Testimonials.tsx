import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    quote: "After the training, we started an Integrated Farmer Center. I want more sessions on marketing dairy products.",
    name: "Manju Devi",
    role: "Sai SHG · Hamirpur, HP",
  },
  {
    quote: "I now sell school bags to local shops and taught another SHG member to use UPI. I plan to start selling on ONDC.",
    name: "Rajni",
    role: "Bhole Baba SHG · Palwal, Haryana",
  },
  {
    quote: "I registered for a GST number and am preparing to start my own business. I now use UPI and maintain my Cashbook.",
    name: "Beena Devi",
    role: "Lakshmi SHG · Shimla, HP",
  },
  {
    quote: "Learning UPI and digital banking made me fully confident in handling all my transactions without depending on my husband.",
    name: "Sangeeta Devi",
    role: "SHG Member · Prayagraj, UP",
  },
  {
    quote: "I gained confidence in digital transactions. It was a sense of fear earlier — now it is completely gone.",
    name: "Sunita",
    role: "SHG Member · South Delhi",
  },
  {
    quote: "Training on cashbook and balance sheet helped me understand my profit and expenses clearly for the first time.",
    name: "Rekha",
    role: "SHG Member · Dehradun, Uttarakhand",
  },
  {
    quote: "I struggled with pricing but the training on capital planning helped me fix my prices and run my work confidently.",
    name: "Satya Devi",
    role: "SHG Member · Hamirpur, HP",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 7).concat(testimonials.slice(0, 2));


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        <div className="text-center mb-12 flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8821A]">Real Stories</span>
          <h2 className="text-4xl font-bold text-[#003580] mt-2">
            Voices of Change
          </h2>
          <p className="text-center mt-4 text-gray-600 max-w-xl mx-auto">
            "From learning UPI to listing on ONDC — this training transformed how I run my business."
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </div>
    </section>
  );
}
