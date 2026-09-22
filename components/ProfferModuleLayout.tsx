'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface WhyItem {
  audience: string;
  text: string;
}

interface ModuleNav {
  label: string;
  href: string;
}

interface ProfferModuleLayoutProps {
  index: string; // e.g. "01"
  name: string; // "LeadCert AI"
  tagline: string; // "Higher Lead Accuracy"
  description: string; // one-liner subtitle
  whatItDoes: string[];
  whyItMatters: WhyItem[];
  outcome: string[];
  heroImage: string;
  icon: React.ReactNode;
  prev: ModuleNav;
  next: ModuleNav;
}

export default function ProfferModuleLayout({
  index,
  name,
  tagline,
  description,
  whatItDoes,
  whyItMatters,
  outcome,
  heroImage,
  icon,
  prev,
  next,
}: ProfferModuleLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#FECB0F]/10 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/proffer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FECB0F] text-sm font-semibold mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Proffer.ai
            </Link>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FECB0F]/10 border border-[#FECB0F]/30 flex items-center justify-center text-[#FECB0F]">
                    {icon}
                  </div>
                  <span className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase">
                    Module {index} · Proffer.ai
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {name} &mdash; <span className="text-[#FECB0F]">{tagline}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">{description}</p>
              </div>

              <div className="flex-1 max-w-md w-full">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img src={heroImage} alt={name} className="w-full h-full object-cover aspect-[4/3]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Does */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What It Does</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whatItDoes.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FECB0F] mt-2 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyItMatters.map((item, i) => (
                <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                  <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    {item.audience}
                  </span>
                  <p className="text-gray-300 leading-relaxed text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-[2.5rem] bg-[#FECB0F]/10 border border-[#FECB0F]/30 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FECB0F]">Outcome</h2>
              <div className="space-y-4">
                {outcome.map((item, i) => (
                  <p key={i} className="text-white text-lg font-medium">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Module Navigation */}
        <section className="py-12 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <Link
                href={prev.href}
                className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-semibold">{prev.label}</span>
              </Link>
              <Link
                href="/proffer"
                className="bg-[#FECB0F] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                All Modules
              </Link>
              <Link
                href={next.href}
                className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group"
              >
                <span className="font-semibold">{next.label}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
