'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const healthcareStickyContent = [
  {
    title: 'Clinical Decision-Maker Targeting',
    description:
      'We identify and reach the specific clinical and administrative leaders responsible for purchasing decisions, from department heads to procurement teams.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        alt="Healthcare decision maker in hospital"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'HIPAA-Compliant Outreach',
    description:
      'Every campaign is designed with healthcare compliance in mind, so your outreach builds trust instead of raising red flags.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80"
        alt="Medical compliance documentation"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Hospital System Account Mapping',
    description:
      'For complex health systems, we map every facility, department, and stakeholder involved in a purchasing decision.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
        alt="Hospital corridor and staff"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Medical Device & Pharma Intent',
    description:
      'We track buying signals specific to medical devices and pharmaceutical procurement cycles to time outreach with precision.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
        alt="Pharmaceutical research lab"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function Healthcare() {
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
                  Clinical Vertical
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
                  Health & <br />
                  <span className="text-[#FECB0F]">Life Sciences</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
                  We bridge the gap between technical healthcare solutions and clinical decision-makers, navigating HIPAA-sensitive markets with precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    Explore Healthcare Solutions
                  </a>
                  <Link href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                    Request Health Playbook
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative max-w-lg mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                    alt="Clinical Research Environment"
                    className="w-full h-full object-cover aspect-square scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-lg mb-1">HIPAA-Ready Outreach</p>
                    <p className="text-gray-400 text-sm">Building trust within clinical environments.</p>
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
                    Compliance <br />
                    <span className="text-gray-500 italic font-serif underline decoration-[#FECB0F]/30">Meets Precision</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    Healthcare buying isn't just about the "who," it's about the "how." Compliance is the baseline, not an afterthought.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Whether you sell to national hospital systems or specialized clinics, we map every stakeholder from clinical department heads to administrative procurement teams.
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
                Built for <span className="text-[#FECB0F]">Life Sciences</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                  title: 'HIPAA-Compliant Outreach',
                  desc: 'Every campaign is built with healthcare compliance standards baked in, protecting your brand\'s credibility.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" /></svg>,
                  title: 'Clinical Decision-Makers',
                  desc: 'We identify department heads, administrators, and procurement leads who drive purchasing decisions.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21h2m4-10h2m-2 4h2m4-4h2m-2 4h2M9 7h6" /></svg>,
                  title: 'Hospital System Mapping',
                  desc: 'We map complex health systems facility by facility to reach every relevant administrative stakeholder.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Medical Device Intent',
                  desc: 'We track procurement cycles and budget windows specific to medical device and capital equipment buying.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Regulatory-Aware Messaging',
                  desc: 'Messaging is reviewed against regulatory sensitivities so your outreach stays compliant and professional.'
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M4 3h16v18H4V3zM9 8h1m0 4h1m4-4h1m-1 4h1" /></svg>,
                  title: 'Territory Target Lists',
                  desc: 'Building high-density target lists for pharmaceutical and device reps calling on specific provider networks.'
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
            eyebrow="Clinical Impact"
            title="Strategic Reach"
            description="Navigating hospital systems with research-backed precision to ensure your solution lands with authority."
            items={healthcareStickyContent}
          />
        </section>

        {/* CTA Area */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto p-20 rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Navigate the <br />
                <span className="text-[#FECB0F]">Healthcare Market?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                Connect with our life-science strategists to review a compliant outreach plan for your organization.
              </p>
              <Link href="/contact" className="bg-[#FECB0F] text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                Start Clinical Mapping
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

