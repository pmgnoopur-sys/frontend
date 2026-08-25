'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RobotRunner from "@/components/RobotRunner";
import AboutHero from "@/components/AboutHero";
import HeroAutomation from "@/components/AutomationHero";
import TimelineHero from "@/components/TimelineHero";
import StickyScrollSection from "@/components/StickyScrollSection";

const aboutStickyContent = [
  {
    title: 'Our Story',
    description:
      "Founded with a vision to transform B2B growth, PMG B2B has grown from a small team into a full-service lead generation agency trusted by companies across industries. Our journey has always been driven by one goal: helping businesses connect with the right customers.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        alt="PMG B2B company story"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Our People',
    description:
      "Behind every successful campaign is a dedicated team of strategists, analysts, and client success managers. We invest in our people because we know exceptional results start with exceptional talent.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
        alt="PMG B2B team"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Our Approach',
    description:
      "We combine data science, proven outreach strategies, and deep industry expertise to deliver measurable results. Every engagement starts with understanding your business and ends with a pipeline full of qualified opportunities.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        alt="Strategic approach meeting"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Our Vision',
    description:
      "We're building toward a future where every business, regardless of size, has access to enterprise-grade demand generation. Innovation and client success guide every decision we make.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
        alt="PMG B2B vision for the future"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function About() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <RobotRunner />
        <HeroAutomation />
<TimelineHero/>
        <StickyScrollSection
          eyebrow="About PMG B2B"
          title="The People and Principles Behind Our Growth"
          description="Get to know the story, team, and philosophy driving every campaign we run."
          items={aboutStickyContent}
        />
      </main>
      <Footer />
    </div>
  );
}
