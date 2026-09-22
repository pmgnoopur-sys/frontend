'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, TrendingDown, RefreshCw, AlertTriangle } from 'lucide-react';

export default function ClearBoardAI() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#0b0620] via-black to-black">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(129,90,238,0.3), transparent 60%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/proffer" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FECB0F] text-sm font-semibold mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Proffer.ai
            </Link>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Module 04 · Live Delivery Dashboard</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[0.95] tracking-tight">
                ClearBoard AI<br /><span className="text-[#FECB0F]">Real-Time Transparency</span>
              </h1>
              <p className="text-lg text-gray-400">See campaign health as it happens.</p>
            </div>

            {/* Dashboard mockup */}
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] border-2 border-violet-500/40 p-4 sm:p-6 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr_110px] gap-5">
                <div className="flex flex-row sm:flex-col items-center justify-center gap-5 bg-black/40 rounded-2xl sm:rounded-3xl py-3 sm:py-6 order-2 sm:order-1">
                  {[BarChart3, TrendingDown, RefreshCw, AlertTriangle].map((Icon, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${i === 0 ? 'bg-violet-500 text-black' : 'text-gray-400'}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-5 min-w-0 order-1 sm:order-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
                      <span className="text-white font-semibold border-b-2 border-violet-500 pb-1">Overview</span>
                      <span className="text-gray-500">Validation</span>
                      <span className="text-gray-500">Verification</span>
                      <span className="text-gray-500 hidden sm:inline">Compliance</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="bg-black/40 rounded-2xl p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">94.2<span className="text-sm text-gray-400">%</span></span>
                        <span className="text-violet-400 text-xs bg-violet-500/10 px-2 py-1 rounded-full">Live</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Validation Rate</p>
                    </div>
                    <div className="bg-black/40 rounded-2xl p-5 flex flex-col items-center justify-center">
                      <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ background: `conic-gradient(#8b5cf6 ${98.1 * 3.6}deg, #374151 0deg)` }}>
                        <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-base font-bold text-white">98.1%</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs mt-4">Compliance</p>
                    </div>
                    <div className="bg-black/40 rounded-2xl p-5">
                      <p className="text-gray-400 text-xs mb-3">Leads Processed</p>
                      <div className="flex items-end justify-between gap-1.5 h-16">
                        {[40, 65, 50, 90, 60, 35].map((v, i) => (
                          <div key={i} className="w-full bg-gray-700 rounded-md overflow-hidden flex items-end h-full">
                            <div className={`w-full ${i === 3 ? 'bg-violet-500' : 'bg-gray-600'}`} style={{ height: `${v}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white text-sm font-medium truncate">Compliance Report — Q3 Export</p>
                      <p className="text-gray-500 text-xs truncate">Auto-generated · PDF</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 sm:flex sm:flex-col gap-3 sm:gap-5 order-3">
                  {[{ label: 'Alerts', on: true }, { label: 'Reports', on: true }, { label: 'Monitoring', on: false }, { label: 'Exports', on: false }].map((item, i) => (
                    <div key={i} className="bg-black/40 rounded-2xl p-2 sm:p-4 flex flex-col items-center gap-2">
                      <span className="text-gray-400 text-[10px] sm:text-xs text-center">{item.label}</span>
                      <div className={`w-9 h-5 rounded-full flex items-center px-0.5 ${item.on ? 'bg-violet-500 justify-end' : 'bg-gray-700 justify-start'}`}>
                        <div className={`w-4 h-4 rounded-full ${item.on ? 'bg-black' : 'bg-gray-400'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What it does list */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What It Does</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Provides live dashboards showing pacing, validation, verification, and compliance status.',
                'Sends predictive alerts when delivery risks or slowdowns appear.',
                'Tracks lead acceptance, rejection, and quality scores in real time.',
                'Offers drill-down views into validation and verification logs.',
                'Generates exportable reports for client, procurement, and legal teams.',
              ].map((item, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl border-l-4 border-violet-500 bg-gray-900">
                <h3 className="text-violet-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">For Agencies</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Build client trust with live visibility.</p>
              </div>
              <div className="p-8 rounded-2xl border-l-4 border-[#FECB0F] bg-gray-900">
                <h3 className="text-[#FECB0F] text-xs font-bold tracking-[0.2em] uppercase mb-4">For Enterprises</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Monitor campaign quality and compliance without waiting for reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-violet-950 via-black to-black">
          <div className="container mx-auto px-4 text-center">
            <span className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase">Outcome</span>
            <p className="text-2xl md:text-3xl font-bold text-white mt-4 max-w-2xl mx-auto">
              Eliminates the <span className="text-[#FECB0F]">&quot;black box&quot;</span> in demand gen &mdash; campaigns run with clarity, predictability, and accountability.
            </p>
          </div>
        </section>

        {/* Nav */}
        <section className="py-12 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <Link href="/proffer/trustcheck" className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <span className="font-semibold">TrustCheck AI</span>
              </Link>
              <Link href="/proffer" className="bg-[#FECB0F] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">All Modules</Link>
              <Link href="/proffer/predictwise" className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group">
                <span className="font-semibold">PredictWise AI</span>
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
