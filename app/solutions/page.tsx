'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';

const industrySolutions = [
  {
    label: 'IT Services',
    description: 'Lead generation for MSPs, system integrators, and cloud providers.',
    href: '/solutions/it-services',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Healthcare & Pharma',
    description: 'Reach hospitals, clinics, and life-science decision makers.',
    href: '/solutions/healthcare',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: 'Manufacturing',
    description: 'Connect with plant heads, procurement, and supply-chain leaders.',
    href: '/solutions/manufacturing',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    label: 'Financial Services',
    description: 'Engage banking, insurance, and fintech buying committees.',
    href: '/solutions/financial-services',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Retail',
    description: 'Target chains, distributors, and e-commerce operators.',
    href: '/solutions/retail',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    label: 'Construction',
    description: 'Reach contractors, developers, and project stakeholders.',
    href: '/solutions/construction',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const companySizeSolutions = [
  {
    label: 'Small Business',
    description: 'Cost-effective lead programs designed for growing teams.',
    href: '/solutions/small-business',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Enterprise',
    description: 'Scalable ABM and demand-gen for large organizations.',
    href: '/solutions/enterprise',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'Global Companies',
    description: 'Multi-region campaigns with localized messaging.',
    href: '/solutions/global-companies',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          {/* animated background blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FECB0F]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FECB0F]/5 rounded-full blur-[120px] animate-pulse delay-700" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FECB0F]/30 bg-[#FECB0F]/5 text-[#FECB0F] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F] animate-ping" />
              Strategic B2B Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Precision Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FECB0F] via-[#FFD54F] to-[#FECB0F]">Your Growth</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-12 font-medium">
              We don't just find leads; we architect industry-specific pipelines that align with your unique buying cycles and market challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#industries"
                className="group relative inline-flex items-center gap-2 bg-[#FECB0F] text-black px-10 py-4 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Explore Industries</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              <Link
                href="#company-size"
                className="text-white font-bold hover:text-[#FECB0F] transition-colors flex items-center gap-2"
              >
                View by Scale
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section id="industries" className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4">Market Verticals</div>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                  Tailored Intelligence <br />
                  <span className="text-gray-500 italic font-serif">by Sector</span>
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                Our sector-specific playbooks leverage deep data and pre-mapped buying committees to eliminate cold starts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {industrySolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0A0A0A] p-10 hover:border-[#FECB0F]/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECB0F]/5 rounded-full blur-3xl group-hover:bg-[#FECB0F]/10 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/5 text-[#FECB0F] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#FECB0F] group-hover:text-black transition-all duration-500 shadow-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FECB0F] transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-tighter group-hover:gap-4 transition-all duration-300">
                      View Playbook
                      <svg className="w-5 h-5 text-[#FECB0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Company Size */}
        <section id="company-size" className="py-32 bg-[#050505] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto mb-20">
              <div className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4">Scalability</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Architected for <span className="text-[#FECB0F]">Every Scale</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {companySizeSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-[2rem] p-12 border border-white/5 bg-black hover:bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-20 h-20 rounded-full bg-[#111] text-[#FECB0F] flex items-center justify-center mx-auto mb-8 group-hover:ring-4 group-hover:ring-[#FECB0F]/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center px-6 py-2 rounded-full border border-white/10 text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#FECB0F] group-hover:text-black group-hover:border-[#FECB0F] transition-all duration-500">
                    Explore Strategy
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why tailored */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(254,203,15,0.05)_0%,transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Why Industry-Focused?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                One-size-fits-all campaigns fail in B2B. We do not.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                A healthcare buyer worries about HIPAA. A manufacturing buyer cares about downtime. A fintech buyer needs compliance proof. We craft every message around the concerns that actually drive decisions in your sector.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
                {[
                  { num: '01', title: 'Buyer Mapping', desc: 'We identify the exact titles and committees that approve purchases in your industry.' },
                  { num: '02', title: 'Compliance Ready', desc: 'Messaging pre-aligned with sector regulations so legal never slows you down.' },
                  { num: '03', title: 'Timing Intelligence', desc: 'Contract renewals, budget cycles, and expansion signals tracked per sector.' },
                ].map((s) => (
                  <div key={s.num} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                    <span className="text-[#FECB0F] text-xs font-bold tracking-wider">{s.num}</span>
                    <h4 className="text-white font-bold mt-2 mb-2">{s.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-3xl border border-[#FECB0F]/20 bg-gradient-to-br from-[#FECB0F]/10 to-transparent p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not sure which solution fits you?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Tell us about your industry and goals. We will recommend the exact playbook and pricing tier for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#FECB0F] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#FFD54F] transition"
              >
                Talk to a Strategist
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
