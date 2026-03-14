"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/cnippet-button";

// Basic Avatar implementations since `@/demos/ui/avatar` was not provided fully in prompt instructions.
const Avatar = ({ children, className }: any) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
    {children}
  </div>
);
const AvatarImage = ({ src }: any) => (
  <img className="aspect-square h-full w-full object-cover" src={src} />
);
const AvatarFallback = ({ children }: any) => (
  <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
    {children}
  </div>
);

// Basic Marquee implementation
const Marquee = ({ children, className }: any) => (
  <div className={`flex w-full overflow-hidden ${className}`}>
    <div className="animate-marquee flex flex-row">
      {children}
    </div>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-0 text-black dark:bg-white">
      <div className="relative z-10 mx-auto h-full w-full max-w-full">
        <div className="grid grid-cols-1 md:h-screen md:grid-cols-12">
          {/* Left image panel */}
          <div className="h-64 w-full md:col-span-6 md:h-full">
            <img
              alt="Group training session"
              className="h-full w-full overflow-hidden object-cover object-center"
              src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=1200&auto=format&fit=crop"
            />
          </div>

          <div className="flex w-full items-center justify-between px-6 pt-8 pb-10 text-left md:col-span-6 md:pt-20 md:pr-6 md:pb-0 md:pl-10">
            <div className="w-full max-w-3xl space-y-6">
              <h1 className="font-sans font-bold text-4xl tracking-tighter md:text-5xl lg:text-6xl text-brand-navy">
                Empowering Women Entrepreneurs Through Knowledge
              </h1>

              <p className="max-w-2xl font-light text-base md:text-lg lg:text-xl text-gray-700">
                IIT Delhi's Department of Management Studies in partnership with EXL — training 688 SHG women across 10 districts in Northern India through financial and digital literacy.
              </p>
              
              <div className="mt-auto space-y-7">
                <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar
                        className="size-12 border-2 border-white transition-all duration-300 hover:grayscale-0"
                        key={i}
                      >
                        <AvatarImage
                          src={`https://images.cnippet.dev/image/upload/v1770400411/a${i}.jpg`}
                        />
                        <AvatarFallback>W{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex flex-col font-medium text-sm text-brand-navy ml-2">
                    <span className="text-base sm:text-lg font-bold text-brand-saffron">688+</span>
                    <span className="">Women Trained</span>
                  </div>
                </div>
                <div className="flex w-fit gap-6">
                  <Button 
                    render={<a href="#impact" />}
                    className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent"
                  >
                    <span className="rounded-full bg-brand-navy px-6 py-3 text-white duration-500 ease-in-out group-hover:bg-brand-saffron transition-colors font-semibold">
                      Explore Our Impact
                    </span>
                    <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-brand-navy p-5 text-white duration-500 ease-in-out group-hover:bg-brand-saffron transition-colors ml-[-1px]">
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                    </div>
                  </Button>
                </div>
              </div>

              {/* Bottom Marquee logos */}
              <div className="relative -mx-4 mt-8 sm:-mx-6 lg:-mx-8 border-t border-gray-100 pt-6">
                <div className="absolute left-0 z-40 h-full w-20 bg-gradient-to-r from-white" />
                <div className="absolute right-0 z-40 h-full w-20 bg-gradient-to-l from-white" />

                <Marquee className="[--duration:30s]">
                  <div className="flex items-center space-x-6 whitespace-nowrap px-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    <span>IIT Delhi</span>
                    <span className="text-brand-saffron">•</span>
                    <span>EXL</span>
                    <span className="text-brand-saffron">•</span>
                    <span>Delhi SULM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>Haryana SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>UP SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>Uttarakhand SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>HP SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    {/* Duplicate for seamless infinite marquee effect */}
                    <span>IIT Delhi</span>
                    <span className="text-brand-saffron">•</span>
                    <span>EXL</span>
                    <span className="text-brand-saffron">•</span>
                    <span>Delhi SULM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>Haryana SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>UP SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>Uttarakhand SRLM</span>
                    <span className="text-brand-saffron">•</span>
                    <span>HP SRLM</span>
                    <span className="text-brand-saffron">•</span>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
