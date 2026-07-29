'use client';

import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const content = [
  {
    title: "Targeted Lead Generation",
    description:
      "We identify and qualify high-value prospects that match your ideal customer profile. Our data-driven approach ensures you connect with decision-makers who are actively looking for solutions like yours. Transform your sales pipeline with qualified leads that convert.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#FECB0F,#FFA726)] text-black">
        <div className="text-center p-8">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-2xl font-bold">Targeted Leads</p>
        </div>
      </div>
    ),
  },
  {
    title: "Email Marketing Automation",
    description:
      "Automate your email campaigns with personalized sequences that nurture prospects through the sales funnel. Our intelligent automation ensures timely follow-ups, increased engagement, and higher conversion rates. Scale your outreach without sacrificing personalization.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#7255F6,#5a3ad8)] text-white">
        <div className="text-center p-8">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-2xl font-bold">Email Automation</p>
        </div>
      </div>
    ),
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage advanced analytics to understand your audience better. Our comprehensive reporting provides actionable insights into campaign performance, prospect behavior, and ROI. Make informed decisions with real-time data that drives continuous improvement.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#3fc7e8,#2b2a9e)] text-white">
        <div className="text-center p-8">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p className="text-2xl font-bold">Analytics Dashboard</p>
        </div>
      </div>
    ),
  },
  {
    title: "Multi-Channel Outreach",
    description:
      "Reach your prospects where they are with integrated multi-channel campaigns. Combine email, LinkedIn, phone, and social media for maximum impact. Our coordinated approach ensures consistent messaging across all touchpoints for higher engagement rates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#e0d4ff,#7255F6)] text-black">
        <div className="text-center p-8">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-2xl font-bold">Multi-Channel</p>
        </div>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
