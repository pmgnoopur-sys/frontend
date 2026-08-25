"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const supportingCopy: Record<string, string> = {
  'Our Story': 'PMG B2B began with a focus on disciplined outreach, measurable results, and long-term client partnerships, and that same foundation still shapes how the team works today.',
  'Our People': 'Strategy, execution, and client success are handled by a collaborative team that combines experience, speed, and accountability across every campaign.',
  'Our Approach': 'Every project starts with discovery, then moves through targeting, messaging, execution, and reporting so each step is tied to a measurable business outcome.',
  'Our Vision': 'The goal is to make enterprise-grade demand generation accessible, reliable, and scalable for businesses of every size without sacrificing quality or precision.',
  'Recognized Leadership': 'The award reflects a leadership style built on persistence, operational discipline, and a clear commitment to innovation in B2B growth.',

  'End-to-End Lead Generation': 'Lead generation is handled as a complete system, from list building and qualification to delivery and handoff, so sales teams receive contacts that are ready for action.',
  'Account-Based Marketing': 'The service focuses on selected accounts, tailored messaging, and aligned execution so marketing spend stays concentrated on the highest-value opportunities.',
  'Data & Analytics': 'Reporting is used to monitor performance in real time, identify what is working, and make faster decisions based on clear, measurable campaign data.',
  'Digital Marketing': 'The work spans SEO, paid media, content, and social channels, giving your brand a wider and more consistent presence across the buyer journey.',

  'Precision Prospecting': 'Prospects are selected using firmographic fit, signal-based targeting, and qualification rules that reduce waste and improve pipeline quality.',
  'Human-Verified Qualification': 'Every contact is reviewed for role, intent, and fit before handoff, which keeps the sales pipeline focused on accounts that are more likely to convert.',
  'Pipeline You Can Trust': 'The delivery process is designed to be predictable, transparent, and directly usable by your CRM and sales workflows.',
  'Scalable Outreach': 'The process scales with volume while keeping targeting and personalization intact, so growth does not come at the cost of accuracy.',

  'Target the Right Accounts': 'Account selection is based on value potential, strategic fit, and buying likelihood, which helps focus resources where they can have the most impact.',
  'Engage Every Stakeholder': 'Messaging is tailored to the full buying committee so each stakeholder receives information that matches their role in the decision-making process.',
  'Marketing and Sales, Aligned': 'Marketing and sales stay coordinated through shared account plans, ensuring fewer handoff gaps and a smoother path to revenue.',
  'Measurable Account Impact': 'Performance is measured at the account level, making it easier to see which companies are progressing and where engagement needs to improve.',

  'Copy That Converts': 'The copy is written to earn attention quickly, create clarity, and prompt prospects to move from reading to responding.',
  'Automated Nurture Sequences': 'Automated sequences keep leads warm with relevant follow-ups based on behavior, timing, and stage in the buyer journey.',
  'Deliverability & Performance': 'Deliverability checks, testing, and sending optimization help keep campaigns landing in the inbox and performing consistently.',
  'Segmentation That Scales': 'Audience segmentation keeps messaging relevant even at high volume, so large campaigns still feel targeted and personal.',

  'Verified Contact Databases': 'The database is maintained to reduce bounce rates and outdated records, giving outreach teams a more reliable starting point.',
  'Company & Technographic Intelligence': 'Company profiles are enriched with technology and firmographic details so you know who you are targeting and what tools they already use.',
  'Custom Data Research': 'Custom research fills the gaps in standard databases and builds lists around the exact market conditions you want to reach.',
  'Continuous Data Hygiene': 'Regular refresh cycles help keep your database accurate, compliant, and usable for day-to-day outreach.',

  'AI-Powered Validation': 'Validation runs before leads reach the sales team, helping reduce bad records and keep the pipeline clean from the start.',
  'Compliance Built In': 'Consent and authority records are generated automatically, giving every lead a stronger compliance trail and clearer audit evidence.',
  'Live Delivery Visibility': 'Dashboards replace static reports, making pacing, quality, and compliance visible while campaigns are still in motion.',
  'Predictive Campaign Optimization': 'Historical performance data is used to refine targeting and retargeting so campaigns improve while they are still running.',

  'Grow Beyond Your Role': 'Internal mobility and mentorship create a path for people to take on more responsibility and grow their skills over time.',
  'Work That Rewards Ambition': 'Performance is recognized through incentives and advancement opportunities, keeping effort aligned with clear reward.',
  'A Team That Has Your Back': 'Supportive policies, open communication, and a strong team culture help people do their best work with confidence.',
  'Diverse Career Paths': 'Multiple function tracks allow candidates to find a role that matches their strengths while still building long-term growth inside the company.',

  'Celebrating Together': 'Shared celebrations strengthen relationships across the team and make the workplace feel more connected and collaborative.',
  'Fun Fridays & Team Bonding': 'Informal activities and team time help employees recharge and build the trust that improves day-to-day collaboration.',
  'A Workplace That Supports You': 'Flexible policies and a focus on wellbeing make it easier for people to stay productive without losing balance.',
  'Celebrating Every Milestone': 'Recognition is built into the culture, so achievements are visible and valued instead of going unnoticed.',

  'Leading From Experience': 'Leadership is shaped by firsthand experience in sales and delivery, which keeps decisions practical, grounded, and focused on results.',
  'Building a People-First Company': 'Growth is designed to happen through mentorship, accountability, and a culture that helps people succeed together.',
  'A Vision for the Future': 'The company vision combines AI-driven innovation with a long-term commitment to scalable, people-centered growth.',

  'Talk to a Real Strategist': 'Every inquiry is handled by a team member who understands B2B growth, so your first conversation is already moving toward a useful solution.',
  'Offices in Mumbai & Pune': 'With teams in both cities, support is grounded in local presence, faster coordination, and direct access to the right people.',
  'A Response You Can Count On': 'Replies are managed promptly so you can move from first contact to a clear next step without unnecessary delay.',
  'Tell Us About Your Goals': 'Sharing your goals early helps the team tailor a solution that matches your current challenges, timelines, and target outcomes.',

  'Insights Backed by Experience': 'Articles are written from real campaign work, so the advice is practical, tested, and immediately useful.',
  'Trends That Matter': 'The blog focuses on changes that affect revenue, pipeline quality, and buyer behavior rather than surface-level marketing news.',
  'Actionable Playbooks': 'Each guide is structured to help you move from insight to execution with concrete steps you can apply right away.',
  'A Growing Library': 'New posts continue to expand the library with fresh examples, frameworks, and lessons for modern B2B teams.',
};

export const StickyScroll = ({
  content,
  contentClassName,
  gradientColors,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  /** CSS gradients used behind each screenshot/mockup, cycled per card */
  gradientColors?: string[];
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const defaultGradients = [
    "linear-gradient(135deg, #FECB0F1a, #FECB0F0d)",
    "linear-gradient(135deg, #F5A6231a, #F5A6230d)",
    "linear-gradient(135deg, #FFD54F1a, #FFD54F0d)",
    "linear-gradient(135deg, #FECB0F1a, #F5A6230d)",
  ];
  const gradients = gradientColors && gradientColors.length > 0 ? gradientColors : defaultGradients;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveCard(index);
          }
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content.length]);

  const scrollToIndex = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col xl:flex-row gap-10 xl:gap-16 w-full">
      {/* Sidebar nav */}
      <div className="xl:w-80 flex-shrink-0">
        <div className="xl:sticky xl:top-28 flex xl:flex-col gap-1 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {content.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <button
                key={item.title + index}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "group flex items-center justify-between gap-3 whitespace-nowrap xl:whitespace-normal text-left px-5 py-4 border-l-2 transition-all duration-300 flex-shrink-0",
                  isActive
                    ? "border-[#FECB0F] bg-[#FECB0F]/5 text-white font-semibold"
                    : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5",
                )}
              >
                <span className="text-sm md:text-base">{item.title}</span>
                <svg
                  className={cn(
                    "w-3.5 h-3.5 flex-shrink-0 transition-all duration-300",
                    isActive ? "text-[#FECB0F] opacity-100" : "opacity-0 group-hover:opacity-50",
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stacked content cards */}
      <div className="flex-1 space-y-8 w-full">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={cn(
              "border border-white/10 bg-[#0a0a0a] p-8 md:p-12 shadow-xl scroll-mt-28 transition-opacity duration-500 w-full",
              activeCard === index ? "opacity-100" : "opacity-75",
            )}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-5xl text-base md:text-lg">{item.description}</p>
            {supportingCopy[item.title] && (
              <p className="text-gray-400 leading-relaxed mb-10 max-w-6xl text-sm md:text-lg">
                {supportingCopy[item.title]}
              </p>
            )}

            {item.content && (
              <div
                style={{ background: gradients[index % gradients.length] }}
                className={cn(
                  "p-5 md:p-10 overflow-hidden w-full",
                  contentClassName,
                )}
              >
                <div className="overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white h-72 md:h-[30rem] w-full">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
