"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text?: string; quote?: string; image?: string; name?: string; role?: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-[#FAF9F6]"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, quote, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border border-gray-100 shadow-sm bg-white max-w-sm w-full" key={i}>
                  <div className="text-gray-700 font-medium">"{text || quote}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <div className="h-10 w-10 flex items-center justify-center bg-brand-navy/10 text-brand-navy rounded-full font-bold text-sm">
                        {name ? name.substring(0, 2).toUpperCase() : ""}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-semibold text-brand-navy tracking-tight leading-5">{name}</div>
                      <div className="leading-5 text-gray-500 text-sm tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
