'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const retailStickyContent = [
  {
    title: 'Multi-Location Retail Mapping',
    description:
      'We map decision makers across every store location, region, and franchise group so no buying influence is missed.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
        alt="Retail store interior"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'POS & Tech Stack Targeting',
    description:
      'We identify retailers using specific point-of-sale and commerce platforms, opening the door for tech-fit conversations.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
        alt="Retail point of sale system"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Seasonal Campaign Timing',
    description:
      'We time outreach around seasonal buying cycles and peak retail planning windows to maximize response rates.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=800&q=80"
        alt="Retail seasonal display"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Franchise Decision-Maker ID',
    description:
      'We identify franchise owners and corporate buyers who control purchasing across multi-unit retail brands.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80"
        alt="Franchise retail storefront"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function Retail() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          {/* background elements */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#FECB0F]/10 to-transparent opacity-50" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FECB0F]/5 rounded-full blur-[100px] animate-pulse" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FECB0F]/30 bg-[#FECB0F]/5 text-[#FECB0F] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F]" />
                  Sector Vertical
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
                  Retail & <br />
                  <span className="text-[#FECB0F]">Franchise</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
                  We architect high-performance pipelines for retail tech, store suppliers, and franchise consultants, mapping influence from the storefront to the C-suite.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    View Features
                  </a>
                  <Link href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                    Request Retail Playbook
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative max-w-lg mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80"
                    alt="Modern Retail Environment"
                    className="w-full h-full object-cover aspect-square scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-lg mb-1">Omnichannel Intelligence</p>
                    <p className="text-gray-400 text-sm">Identifying retailers in peak buying cycles.</p>
                  </div>
                </div>
                {/* floating accent */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FECB0F] rounded-full mix-blend-overlay blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    Why Retail <br />
                    <span className="text-gray-500 italic font-serif underline decoration-[#FECB0F]/30">is Different</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    Retail purchasing isn't just one office. It's store managers, regional directors, and corporate committees. 
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    We bridge the gap by identifying the accounts most likely to be sourcing new tech, fixtures, or e-commerce services during their specific planning windows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32 bg-[#050505] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <div className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4">Core Capabilities</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Purpose-Built for <span className="text-[#FECB0F]">Retail</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  title: 'Multi-Location Mapping',
                  desc: 'We map decision makers across every store, region, and franchise so no location is overlooked.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                  title: 'Seasonal Campaign Timing',
                  desc: 'We time outreach around peak retail planning cycles for maximum relevance and response.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  title: 'POS & Tech Stack Targeting',
                  desc: 'We identify retailers on specific POS and commerce platforms for tech-fit conversations.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" /></svg>,
                  title: 'Franchise Decision-Maker ID',
                  desc: 'We identify franchise owners and corporate buyers who control multi-unit purchasing.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  title: 'Omnichannel Intent',
                  desc: 'We track signals across online and in-store channels to spot retailers ready to invest.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
                  title: 'Supplier Outreach',
                  desc: 'We connect vendors and suppliers with retail buyers actively sourcing new partners.'
                }
              ].map((f, i) => (
                <div key={i} className="group p-10 rounded-[2.5rem] bg-black border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-500 shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#111] text-[#FECB0F] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#FECB0F] group-hover:text-black transition-all duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FECB0F] transition-colors">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll Content Section */}
        <section className="bg-black">
          <StickyScrollSection
            eyebrow="Retail Insights"
            title="Strategic Alignment"
            description="Deep mapping of the retail landscape to ensure your message hits the right desk."
            items={retailStickyContent}
          />
        </section>

        {/* CTA Area */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto p-20 rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Scale Your <br />
                <span className="text-[#FECB0F]">Retail Pipeline?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                Connect with our strategists to see a custom buyer map for your specific retail niche.
              </p>
              <Link href="/contact" className="bg-[#FECB0F] text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                Schedule a Strategy Call
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

