'use client';

// Generic reference/demo usage of <StickyScroll />.
// Actual pages use <StickyScrollSection /> with page-specific content instead.
import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const content = [
  {
    title: 'Targeted Lead Generation',
    description:
      'We identify and qualify high-value prospects that match your ideal customer profile. Our data-driven approach ensures you connect with decision-makers who are actively looking for solutions like yours.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        alt="Targeted lead generation"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Email Marketing Automation',
    description:
      'Automate your email campaigns with personalized sequences that nurture prospects through the sales funnel. Scale your outreach without sacrificing personalization.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
        alt="Email marketing automation"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Leverage advanced analytics to understand your audience better. Make informed decisions with real-time data that drives continuous improvement.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Data-driven insights"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
