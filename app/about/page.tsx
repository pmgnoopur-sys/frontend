'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RobotRunner from "@/components/RobotRunner";
import HeroAutomation from "@/components/AutomationHero";
import TimelineHero from "@/components/TimelineHero";

export default function About() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Simple About Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#FECB0F]">PMG B2B</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in B2B lead generation and sustainable growth.
            </p>
          </div>
        </section>
        <RobotRunner />
        <HeroAutomation />
<TimelineHero/>
        <section className="py-0 bg-white">

        </section>
      </main>
      <Footer />
    </div>
  );
}
