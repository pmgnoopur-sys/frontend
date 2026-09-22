'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const segments = [
  { name: 'VP Procurement', score: 92 },
  { name: 'IT Directors', score: 87 },
  { name: 'Healthcare Ops', score: 78 },
  { name: 'Retail Chains', score: 64 },
  { name: 'SMB Founders', score: 51 },
];

export default function PredictWiseAI() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero: robot + spreadsheet */}
        <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#1f1300] via-black to-black">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(251,146,60,0.25), transparent 60%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/proffer" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FECB0F] text-sm font-semibold mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Proffer.ai
            </Link>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <span className="inline-block text-orange-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Module 05 · Predictive Engine</span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[0.95] tracking-tight">
                  PredictWise AI<br /><span className="text-[#FECB0F]">Better Campaign Results</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  AI that learns what works and makes campaigns perform better.
                </p>
              </div>

              {/* Segment scoring visual */}
              <div className="flex-1 w-full max-w-md">
                <div className="bg-gray-900 rounded-2xl border border-orange-500/30 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs text-gray-400 font-mono">segment_performance.ai</span>
                    <span className="flex items-center gap-1 text-xs text-orange-400"><span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />Scoring</span>
                  </div>
                  <div className="space-y-4">
                    {segments.map((s, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-gray-300">{s.name}</span>
                          <span className="text-orange-400 font-bold">{s.score}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-[#FECB0F]" style={{ width: `${s.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What it does */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What It Does</h2>
              <p className="text-gray-400">Every campaign feeds the model, so targeting sharpens with every batch of leads.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'Analyzes historical acceptance and rejection data across campaigns.',
                'Identifies top-performing job titles, industries, regions, and segments.',
                'Runs predictive scoring to prioritize high-probability leads.',
                'Auto-adjusts targeting mid-campaign based on live performance.',
                'Provides a segment performance dashboard for marketers.',
              ].map((item, i) => (
                <div key={i} className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-orange-500/40 transition-colors">
                  <span className="text-orange-400 text-2xl font-black">0{i + 1}</span>
                  <p className="text-gray-300 mt-3 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl border-l-4 border-orange-500 bg-gray-900">
                <h3 className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">For Agencies</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Deliver measurable improvements and retain clients longer.</p>
              </div>
              <div className="p-8 rounded-2xl border-l-4 border-[#FECB0F] bg-gray-900">
                <h3 className="text-[#FECB0F] text-xs font-bold tracking-[0.2em] uppercase mb-4">For Enterprises</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Get higher-quality leads and faster pipeline velocity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-950 via-black to-black">
          <div className="container mx-auto px-4 text-center">
            <span className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase">Outcome</span>
            <p className="text-2xl md:text-3xl font-bold text-white mt-4 max-w-2xl mx-auto">
              Delivers an acceptance uplift of <span className="text-[#FECB0F]">10&ndash;20%</span> through optimized targeting.
            </p>
          </div>
        </section>

        {/* Nav */}
        <section className="py-12 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <Link href="/proffer/clearboard" className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <span className="font-semibold">ClearBoard AI</span>
              </Link>
              <Link href="/proffer" className="bg-[#FECB0F] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">All Modules</Link>
              <Link href="/proffer/leadcert" className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group">
                <span className="font-semibold">LeadCert AI</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
