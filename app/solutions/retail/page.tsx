'use client';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1 text-left">
                <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-widest uppercase mb-4">By Industry</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-[#FECB0F]">Retail</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-4">
                  Lead Generation for Stores &amp; Chains
                </p>
                <p className="text-gray-600 max-w-2xl">
                  We help retail brands, franchises, and chains reach the store, regional, and corporate decision makers who control technology and vendor purchasing.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80"
                  alt="Retail store with shopping displays"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Lead Generation Built for Retail</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Retail purchasing spans store managers, regional directors, and corporate buyers, often with seasonal timing that makes or breaks a deal. We help you reach the right person at the right moment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you sell to single-location boutiques or national chains, we identify the accounts most likely to be evaluating new vendors, technology, or suppliers right now.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key <span className="text-[#FECB0F]">Features</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Purpose-built capabilities for retail pipelines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Multi-Location Retail Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We map decision makers across every store, region, and franchise so no location is overlooked.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Seasonal Campaign Timing</h3>
                <p className="text-gray-600 leading-relaxed">
                  We time outreach around peak retail planning cycles for maximum relevance and response.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">POS &amp; Tech Stack Targeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify retailers on specific POS and commerce platforms for tech-fit conversations.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Franchise Decision-Maker ID</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify franchise owners and corporate buyers who control multi-unit purchasing.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Omnichannel Buyer Intent</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track signals across online and in-store channels to spot retailers ready to invest.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Vendor &amp; Supplier Outreach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect vendors and suppliers with retail buyers actively sourcing new partners.
                </p>
              </div>
            </div>
          </div>
        </section>


        <StickyScrollSection
          eyebrow="Retail"
          title="Pipeline Built for Stores &amp; Chains"
          description="See how we help retail brands reach the right store, regional, and corporate decision makers."
          items={retailStickyContent}
        />

        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
