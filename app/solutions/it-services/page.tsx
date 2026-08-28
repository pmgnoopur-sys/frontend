'use client';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1 text-left">
                <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-widest uppercase mb-4">By Industry</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  IT <span className="text-[#FECB0F]">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-4">
                  Lead Generation for IT &amp; MSPs
                </p>
                <p className="text-gray-600 max-w-2xl">
                  We help IT service providers and MSPs connect with businesses actively searching for support, security, and infrastructure partners, backed by data on contract timing and technology needs.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80"
                  alt="IT services professional at server rack"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Lead Generation Built for IT &amp; Managed Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                IT and managed service providers win business by being in the right place at the right time, when a prospect's current provider is falling short or a contract is up for renewal. We surface those moments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From security-conscious enterprises to multi-location businesses needing consistent support, we identify the accounts most likely to need what you offer, and connect you with the person who signs the contract.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key <span className="text-[#FECB0F]">Features</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Purpose-built capabilities for IT &amp; MSP pipelines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">MSP Client Acquisition</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify businesses outgrowing internal IT or unhappy with their current provider and open the door for you.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Compliance-First Messaging</h3>
                <p className="text-gray-600 leading-relaxed">
                  Outreach speaks directly to security, uptime, and compliance concerns that IT decision makers prioritize.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Managed Security Positioning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We lead with the security outcomes buyers need most, from endpoint protection to 24/7 monitoring.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Multi-Location Buyer Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We map technology decision makers across every site for organizations with multiple locations.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Contract Renewal Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track contract end-dates and vendor dissatisfaction signals to time outreach perfectly.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Vendor Partnership Leads</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify referral and reseller partnership opportunities with complementary technology vendors.
                </p>
              </div>
            </div>
          </div>
        </section>


        <StickyScrollSection
          eyebrow="IT Services"
          title="Pipeline Built for Managed Service Providers"
          description="See how we turn contract timing and technology signals into a steady stream of qualified IT opportunities."
          items={itServicesStickyContent}
        />

        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
