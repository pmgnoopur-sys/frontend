'use client';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1 text-left">
                <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-widest uppercase mb-4">By Industry</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Healthcare <span className="text-[#FECB0F]">&amp; Pharma</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-4">
                  Lead Generation for Life Sciences &amp; Care Providers
                </p>
                <p className="text-gray-600 max-w-2xl">
                  We help healthcare, medical device, and pharmaceutical companies reach clinical and administrative decision makers through compliant, research-backed outreach.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80"
                  alt="Healthcare professionals reviewing data"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Lead Generation Built for Healthcare &amp; Pharma</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Healthcare buying decisions involve strict compliance requirements and multiple stakeholders across clinical, administrative, and procurement teams. We help you navigate that complexity with precision targeting and compliant messaging.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you sell to hospital systems, clinics, or pharmaceutical researchers, we connect you with the right decision maker at the right point in their evaluation process.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key <span className="text-[#FECB0F]">Features</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Purpose-built capabilities for healthcare &amp; life sciences pipelines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">HIPAA-Compliant Outreach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every campaign is built with healthcare compliance standards baked in, protecting your brand's credibility.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Clinical Decision-Maker Targeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify department heads, administrators, and procurement leads who drive purchasing decisions.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21h2m4-10h2m-2 4h2m4-4h2m-2 4h2M9 7h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Hospital System Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We map complex health systems facility by facility to reach every relevant stakeholder.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Medical Device Buyer Intent</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track procurement cycles and budget windows specific to medical device and equipment buying.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Regulatory-Aware Messaging</h3>
                <p className="text-gray-600 leading-relaxed">
                  Messaging is reviewed against regulatory sensitivities so your outreach stays compliant and credible.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M4 3h16v18H4V3zM9 8h1m0 4h1m4-4h1m-1 4h1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Pharma Territory Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build territory-level target lists for pharmaceutical reps calling on providers and health systems.
                </p>
              </div>
            </div>
          </div>
        </section>


        <StickyScrollSection
          eyebrow="Healthcare & Pharma"
          title="Pipeline Built for Life Sciences &amp; Care Providers"
          description="See how we connect healthcare and pharma companies with the right clinical decision makers, compliantly."
          items={healthcareStickyContent}
        />

        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
