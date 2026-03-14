"use client";
import React, { useEffect, useRef } from 'react';

export const BentoItem = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };
    item.addEventListener('mousemove', handleMouseMove);
    return () => item.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={itemRef}
      className={[
        'relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl',
        'before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
        'before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(249,115,22,0.15),transparent_40%)]',
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl',
        'after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100',
        'after:bg-[radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(249,115,22,0.3),transparent_40%)]',
        'cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/20',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export const CyberneticBentoGrid = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};
