'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const callSteps = [
  { step: '01', label: 'Call Initiated', detail: 'AI voicebot dials the contact for recall/consent verification.' },
  { step: '02', label: 'NLU Listens', detail: 'Understands responses across accents, phrasing & tone in real time.' },
  { step: '03', label: 'Script Applied', detail: 'Standardized, compliant script guides the conversation.' },
  { step: '04', label: 'Ambiguity Check', detail: 'Unclear responses auto-escalate to a human reviewer.' },
  { step: '05', label: 'Logged & Sealed', detail: 'Audio, transcript, and consent are stored tamper-proof.' },
];

export default function VerifySureAI() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero: waveform / call visual */}
        <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#001a1f] via-black to-black">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(34,211,238,0.25), transparent 60%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/proffer" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FECB0F] text-sm font-semibold mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Proffer.ai
            </Link>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Phone card visual */}
              <div className="flex-1 flex justify-center order-2 lg:order-1">
                <div className="w-64 rounded-[2.5rem] border-4 border-gray-800 bg-gray-900 p-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 px-1">
                    <span className="text-cyan-400 text-xs font-mono">00:14</span>
                    <span className="flex items-center gap-1 text-xs text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Recording</span>
                  </div>
                  <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                    <svg className="w-9 h-9 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z" /></svg>
                  </div>
                  <p className="text-center text-white font-semibold text-sm mb-1">Consent Verification</p>
                  <p className="text-center text-gray-500 text-xs mb-6">AI Voicebot · NLU Active</p>
                  {/* waveform */}
                  <div className="flex items-end justify-center gap-1 h-12">
                    {[8, 20, 14, 32, 24, 40, 18, 28, 12, 22, 10, 30, 16].map((h, i) => (
                      <div key={i} className="w-1.5 rounded-full bg-cyan-400" style={{ height: `${h}px`, opacity: 0.5 + (h / 40) * 0.5 }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 order-1 lg:order-2">
                <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Module 02 · Voice Intelligence</span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[0.95] tracking-tight">
                  VerifySure AI<br /><span className="text-[#FECB0F]">Smarter Verification</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  Automated consent. Standardized proof. Scalable delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process timeline */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What It Does</h2>
              <p className="text-gray-400">Every consent call follows a consistent, auditable path from dial to record.</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {callSteps.map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</div>
                    {i < callSteps.length - 1 && <div className="w-px flex-1 bg-gray-800 my-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-white font-bold text-lg mb-1">{s.label}</h3>
                    <p className="text-gray-400 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl border-l-4 border-cyan-500 bg-gray-900">
                <h3 className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">For Agencies</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Scale verification without adding extra staff.</p>
              </div>
              <div className="p-8 rounded-2xl border-l-4 border-[#FECB0F] bg-gray-900">
                <h3 className="text-[#FECB0F] text-xs font-bold tracking-[0.2em] uppercase mb-4">For Enterprises</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Every contact ships with compliance documentation attached.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-950 via-black to-black">
          <div className="container mx-auto px-4 text-center">
            <span className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase">Outcome</span>
            <p className="text-2xl md:text-3xl font-bold text-white mt-4 max-w-2xl mx-auto">
              <span className="text-[#FECB0F]">Faster verification cycles</span> &mdash; audit-ready proof that builds client and regulatory confidence.
            </p>
          </div>
        </section>

        {/* Nav */}
        <section className="py-12 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <Link href="/proffer/leadcert" className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <span className="font-semibold">LeadCert AI</span>
              </Link>
              <Link href="/proffer" className="bg-[#FECB0F] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">All Modules</Link>
              <Link href="/proffer/trustcheck" className="flex items-center gap-3 text-gray-400 hover:text-[#FECB0F] transition-colors group">
                <span className="font-semibold">TrustCheck AI</span>
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
