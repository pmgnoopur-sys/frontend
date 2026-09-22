'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const marketingStickyContent = [
  {
    title: 'Agency & Brand Prospecting',
    description:
      'We identify brands actively searching for a new agency partner and agencies looking to expand their client roster, putting you in front of active buyers.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80"
        alt="Marketing agency team collaborating"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Media Buyer Targeting',
    description:
      'We map media planners and buyers evaluating new channels or vendors, positioning your offering exactly when budgets are being allocated.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        alt="Media planning dashboard"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Campaign Cycle Timing',
    description:
      'We track budget cycles and RFP windows so your outreach lands right as marketing teams are scoping new vendors and partners.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Team reviewing campaign calendar"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Creative & Martech Mapping',
    description:
      'We identify the specific stakeholders responsible for creative, martech stack, and vendor decisions across complex marketing orgs.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        alt="Marketing technology stack"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function MarketingAdvertising() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#FECB0F]/10 to-transparent opacity-50" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FECB0F]/5 rounded-full blur-[100px] animate-pulse" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FECB0F]/30 bg-[#FECB0F]/5 text-[#FECB0F] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F]" />
                  Creative Vertical
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
                  Marketing & <br />
                  <span className="text-[#FECB0F]">Advertising</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
                  We connect you with agencies, brands, and media buyers exactly when budgets open and vendor searches begin.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Explore Capabilities
                  </a>
                  <Link href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                    Request Media Playbook
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative max-w-lg mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                    alt="Marketing and Advertising Strategy"
                    className="w-full h-full object-cover aspect-square scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-lg mb-1">Budget Cycle Intelligence</p>
                    <p className="text-gray-400 text-sm">Timing outreach to active RFPs and vendor searches.</p>
                  </div>
                </div>
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
                    Win Before <br />
                    <span className="text-gray-500 italic font-serif underline decoration-[#FECB0F]/30">The RFP Drops</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    Marketing and advertising budgets move fast, and vendor searches often close before a formal RFP is even issued.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    We track team growth, martech changes, and campaign cycles to put your pitch in front of decision makers at the earliest possible moment.
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
                Built for <span className="text-[#FECB0F]">Agencies & Brands</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
                  title: 'Agency Prospecting',
                  desc: 'We identify brands actively evaluating new agency partners and agencies expanding their client base.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                  title: 'Media Buyer Targeting',
                  desc: 'Outreach reaches media planners and buyers exactly when channel and vendor budgets open up.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                  title: 'Campaign Cycle Timing',
                  desc: 'We track budget cycles and RFP windows to time outreach with precision.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                  title: 'Martech Stack Mapping',
                  desc: 'We identify the specific stakeholders responsible for creative, martech, and vendor decisions.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>,
                  title: 'Brand & Client Growth Signals',
                  desc: 'We surface hiring, funding, and launch signals that indicate a brand is ready to scale its marketing spend.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" /></svg>,
                  title: 'Partnership Pipeline',
                  desc: 'We identify co-marketing and reseller partnership opportunities with complementary creative vendors.'
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
            eyebrow="Creative Impact"
            title="Marketing & Advertising Reach"
            description="Connecting your team with agencies, brands, and media buyers at the moments that matter most."
            items={marketingStickyContent}
          />
        </section>

        {/* CTA Area */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto p-20 rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Grow Your <br />
                <span className="text-[#FECB0F]">Marketing Pipeline?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                Connect with our strategists to build a custom pipeline mapping your ideal agency and brand clients.
              </p>
              <Link href="/contact" className="bg-[#FECB0F] text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                Build Your Pipeline
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
