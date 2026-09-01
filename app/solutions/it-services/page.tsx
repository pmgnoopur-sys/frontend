'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const itServicesStickyContent = [
  {
    title: 'MSP Client Acquisition',
    description:
      'We help managed service providers identify businesses outgrowing their in-house IT or actively shopping for a new provider, before your competitors reach them.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        alt="IT services data center"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Security & Compliance Positioning',
    description:
      'Every message is framed around the compliance and security outcomes IT buyers care about most, from uptime guarantees to audit readiness.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
        alt="IT security operations center"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Contract Renewal Intelligence',
    description:
      'We track signals around contract end-dates and vendor dissatisfaction, giving you the perfect window to introduce your services.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
        alt="IT team reviewing contracts"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Multi-Location Buyer Mapping',
    description:
      'For IT providers serving multi-site organizations, we map every location and the decision maker responsible for technology at each one.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        alt="IT network infrastructure"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function ItServices() {
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
                  Technology Vertical
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
                  IT & <br />
                  <span className="text-[#FECB0F]">Managed Services</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
                  We turn contract timing and technical triggers into high-intent opportunities for MSPs and infrastructure partners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Explore MSP Features
                  </a>
                  <Link href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                    Request Tech Playbook
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative max-w-lg mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1788193386/Untitled_design_4_yjd1s7.png"
                    alt="Managed Services Operations"
                    className="w-full h-full object-cover aspect-square scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-lg mb-1">Contract Intelligence</p>
                    <p className="text-gray-400 text-sm">Mapping renewal windows for key accounts.</p>
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
                    Win by <br />
                    <span className="text-gray-500 italic font-serif underline decoration-[#FECB0F]/30">Being First</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    IT buyers don't switch providers on a whim. They switch when downtime occurs, when security fails, or when a renewal is 6 months away. 
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    We track these critical signals to ensure your team is the first professional voice they hear when they decide to evaluate new infrastructure partners.
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
                Built for <span className="text-[#FECB0F]">MSPs & IT</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2(002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  title: 'MSP Client Acquisition',
                  desc: 'We identify businesses outgrowing internal IT or unhappy with their current provider and open the door for you.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" /></svg>,
                  title: 'Compliance-First Outreach',
                  desc: 'Outreach speaks directly to security, uptime, and HIPAA/SOC2 concerns that IT decision makers prioritize.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                  title: 'MSSP Positioning',
                  desc: 'We lead with the high-end security outcomes modern buyers need, from endpoint protection to 24/7 monitoring.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>,
                  title: 'Multi-Site Mapping',
                  desc: 'We map technology decision makers across every site for complex organizations with distributed footprints.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                  title: 'Renewal Intelligence',
                  desc: 'We track IT contract end-dates and vendor dissatisfaction signals to time your outreach with precision.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" /></svg>,
                  title: 'Vendor Partnerships',
                  desc: 'We identify referral and reseller partnership opportunities with complementary technical vendors.'
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
            eyebrow="Tech Impact"
            title="Strategic Infrastructure"
            description="Navigating the IT landscape to ensure your managed services reach the right technical lead."
            items={itServicesStickyContent}
          />
        </section>

        {/* CTA Area */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto p-20 rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Grow Your <br />
                <span className="text-[#FECB0F]">Managed Services?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                Connect with our technical strategists to build a custom pipeline mapping your ideal MSP clients.
              </p>
              <Link href="/contact" className="bg-[#FECB0F] text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                Build Your Tech Pipeline
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
