'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const financialStickyContent = [
  {
    title: 'Risk & Compliance Buyer Mapping',
    description:
      'We identify the risk, compliance, and audit stakeholders who influence purchasing decisions across BFSI organizations.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
        alt="Financial services team reviewing reports"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Fintech Partnership Leads',
    description:
      'We surface banks, insurers, and financial institutions actively exploring fintech partnerships and integrations.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        alt="Fintech partnership meeting"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Wealth Management Targeting',
    description:
      'We map advisors, RIAs, and wealth management firms evaluating new tools and service providers.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80"
        alt="Wealth management advisor with client"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Committee-Based Approval Mapping',
    description:
      'Financial services purchases often require committee sign-off. We map every stakeholder in that approval chain.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        alt="Finance committee meeting"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function FinancialServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1 text-left">
                <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-widest uppercase mb-4">By Industry</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Financial <span className="text-[#FECB0F]">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-4">
                  Lead Generation for BFSI
                </p>
                <p className="text-gray-600 max-w-2xl">
                  We help banks, insurers, fintechs, and wealth management firms reach risk, compliance, and executive stakeholders through data-driven, regulation-aware outreach.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                  alt="Financial services professionals at work"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Lead Generation Built for BFSI</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Financial services sales cycles involve layered approval chains, strict compliance oversight, and cautious decision makers. We help you navigate that complexity with precision.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From regional banks to fintech disruptors, we connect you with the risk, compliance, and executive stakeholders who ultimately sign off on new vendors and partnerships.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key <span className="text-[#FECB0F]">Features</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Purpose-built capabilities for BFSI pipelines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">BFSI Compliance Messaging</h3>
                <p className="text-gray-600 leading-relaxed">
                  Outreach is crafted with financial regulations in mind, so your messaging builds trust, not risk.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Fintech Partnership Leads</h3>
                <p className="text-gray-600 leading-relaxed">
                  We surface institutions actively evaluating fintech partnerships and integration opportunities.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Risk &amp; Compliance Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify the risk officers and compliance leaders who influence vendor purchasing decisions.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M4 3h16v18H4V3zM9 8h1m0 4h1m4-4h1m-1 4h1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Wealth Management Targeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect you with advisors and RIAs evaluating new tools, platforms, and service providers.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">RegTech Intent Signals</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track regulatory technology adoption signals to identify institutions ready to modernize.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Committee Approval Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We map multi-stakeholder approval committees so no decision maker is missed.
                </p>
              </div>
            </div>
          </div>
        </section>


        <StickyScrollSection
          eyebrow="Financial Services"
          title="Pipeline Built for BFSI Organizations"
          description="See how we help financial institutions reach the right compliance and executive stakeholders."
          items={financialStickyContent}
        />

        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
