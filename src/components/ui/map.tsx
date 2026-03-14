"use client";

import React, { useEffect, useRef, memo } from "react";
import DottedMap from "dotted-map";
import { motion } from "motion/react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgMap = new DottedMap({ height: 100, grid: "diagonal" });
  
  // Create solid dark points for the base map
  const svgOptions = {
    bgColor: "transparent",
    color: "black",
    radius: 0.25,
  };

  const svgString = svgMap.getSVG(svgOptions);
  
  // Pre-calculate project points on the SVG coordinate system
  const projectPoints = dots.map((dot) => {
    // Math logic based on dotted-map internal conversion:
    // x = (lng + 180) * (width / 360)
    // y = (90 - lat) * (height / 180)
    const width = svgMap.image.width;
    const height = svgMap.image.height;
    
    return {
      start: { 
        x: (dot.start.lng + 180) * (width / 360), 
        y: (90 - dot.start.lat) * (height / 180), 
        ...dot.start 
      },
      end: { 
        x: (dot.end.lng + 180) * (width / 360), 
        y: (90 - dot.end.lat) * (height / 180), 
        ...dot.end 
      }
    };
  });

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center p-4">
      <div className="w-full max-w-4xl relative aspect-[2/1] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-[#c7cfdb]/20">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
          alt="World Map"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
          draggable={false}
        />
        <svg
          viewBox={`0 0 ${svgMap.image.width} ${svgMap.image.height}`}
          className="w-full h-full relative z-10 pointer-events-none"
        >
          {projectPoints.map((point, i) => (
            <g key={i}>
              <circle
                cx={point.start.x}
                cy={point.start.y}
                r={0.8}
                fill={lineColor}
                opacity={1}
              />
              <circle
                cx={point.end.x}
                cy={point.end.y}
                r={0.8}
                fill={lineColor}
                opacity={1}
              />
              <path
                d={`M ${point.start.x} ${point.start.y} Q ${
                  (point.start.x + point.end.x) / 2
                } ${(point.start.y + point.end.y) / 2 - 5} ${point.end.x} ${
                  point.end.y
                }`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth={0.5}
                strokeDasharray="1 1"
                opacity={0.6}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={lineColor} stopOpacity="0.2" />
              <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor={lineColor} stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
