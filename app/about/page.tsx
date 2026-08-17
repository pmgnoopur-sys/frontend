'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RobotRunner from "@/components/RobotRunner";
import AboutHero from "@/components/AboutHero";
import HeroAutomation from "@/components/AutomationHero";
import TimelineHero from "@/components/TimelineHero";

export default function About() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AboutHero />
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
