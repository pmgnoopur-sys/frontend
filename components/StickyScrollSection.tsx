'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

interface StickyScrollItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StickyScrollSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  items: StickyScrollItem[];
  gradientColors?: string[];
}

export default function StickyScrollSection({
  eyebrow = 'How It Works',
  title,
  description,
  items,
  gradientColors,
}: StickyScrollSectionProps) {
  return (
    <section className="py-20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="text-center mb-14 max-w-5xl mx-auto">
          <span className="inline-block text-[#FECB0F] text-xs font-semibold tracking-widest uppercase mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">{title}</h2>
          {description && (
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="w-full mx-auto">
          <StickyScroll content={items} gradientColors={gradientColors} />
        </div>
      </div>
    </section>
  );
}
