'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const constructionStickyContent = [
  {
    title: 'GC & Subcontractor Mapping',
    description:
      'We identify general contractors, subcontractors, and specialty trade leads with active or upcoming project pipelines.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
        alt="Construction workers reviewing plans"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Project Bid Intent Signals',
    description:
      'We track permitting, bid, and project-award signals so your team reaches contractors before the final bid deadline.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
        alt="Construction site with crane"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Trade-Specific Targeting',
    description:
      'From electrical and HVAC to concrete and plumbing, we target the exact trades that need your products and services.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735c?auto=format&fit=crop&w=800&q=80"
        alt="Construction trade worker on site"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Project Timeline Intelligence',
    description:
      'We align outreach with project phases, so suppliers and service providers connect when demand is highest.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1581579404250-49af236c7c65?auto=format&fit=crop&w=800&q=80"
        alt="Construction project planning"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function Construction() {
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
                  Industrial Vertical
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
                  Construction & <br />
                  <span className="text-[#FECB0F]">Real Estate</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
                  We navigate the multi-layered decision hierarchies of the built environment to connect your solutions with developers, contractors, and project leads.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Explore Playbook
                  </a>
                  <Link href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                    Request Construction Deck
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative max-w-lg mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80"
                    alt="Modern Architecture Construction"
                    className="w-full h-full object-cover aspect-square scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-lg mb-1">Bid-Ready Intelligence</p>
                    <p className="text-gray-400 text-sm">Tracking active project awarded signals daily.</p>
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
                    Timing is <br />
                    <span className="text-gray-500 italic font-serif underline decoration-[#FECB0F]/30">Everything</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    Construction lead generation isn't about casting a wide net. It's about catching the bid window before it closes.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    By combining public project data, trade associations, and bid-board signals, we connect you with the right crew at the exact stage of the build where your solution is needed.
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
                Built for <span className="text-[#FECB0F]">Project Crews</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
                  title: 'GC & Subcontractor Mapping',
                  desc: 'We identify general contractors and specialty trade leads with active or upcoming project pipelines.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
                  title: 'Project Bid Intent',
                  desc: 'We track permitting and bid-award signals so your team reaches contractors before final deadlines.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                  title: 'Trade-Specific Targeting',
                  desc: 'We target electrical, HVAC, plumbing, and concrete trades that exactly match your product offering.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Timeline Intelligence',
                  desc: 'We align outreach with project phases, ensuring connections happen when demand is at its peak.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>,
                  title: 'Regional Mapping',
                  desc: 'We focus outreach by geography so your team concentrates only on the regions you can realistically serve.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Material Supplier Leads',
                  desc: 'Connecting equipment suppliers with contractors actively sourcing for new multi-unit builds.'
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
            eyebrow="On-Site Impact"
            title="Strategic Build"
            description="Deep mapping of the construction landscape to ensure your message hits the right foreman."
            items={constructionStickyContent}
          />
        </section>

        {/* CTA Area */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto p-20 rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Secure <br />
                <span className="text-[#FECB0F]">More Project Bids?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                Talk to our industrial strategists to see how we track upcoming projects in your service area.
              </p>
              <Link href="/contact" className="bg-[#FECB0F] text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                Start Project Mapping
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

