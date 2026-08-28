'use client';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1 text-left">
                <span className="inline-block text-[#FECB0F] text-xs font-bold tracking-widest uppercase mb-4">By Industry</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-[#FECB0F]">Construction</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-4">
                  Lead Generation for Project Crews
                </p>
                <p className="text-gray-600 max-w-2xl">
                  We help construction suppliers and service providers reach general contractors, subcontractors, and project owners with project-bid and trade-specific buying signals.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                  alt="Construction site at sunset"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Lead Generation Built for Construction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Construction purchasing is project-driven, seasonal, and deadline-sensitive. We help you reach general contractors, subcontractors, and project managers when they are actively sourcing suppliers, materials, and services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By combining public project data, trade associations, and bid-board signals, we connect you with the right crew at the right stage of the build.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key <span className="text-[#FECB0F]">Features</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Purpose-built capabilities for construction pipelines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">GC &amp; Subcontractor Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We identify general contractors and specialty trade leads with active project pipelines.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Project Bid Intent Signals</h3>
                <p className="text-gray-600 leading-relaxed">
                  We track permits, bid openings, and project awards so outreach lands before the deadline.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Trade-Specific Targeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  We target electrical, HVAC, plumbing, concrete, and other trades that match your offering.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Project Timeline Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We time outreach to match project phases where demand for your product is highest.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Regional Project Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus outreach by geography so your team concentrates on the regions you can serve.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Material &amp; Supplier Leads</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect material and equipment suppliers with contractors actively sourcing for new builds.
                </p>
              </div>
            </div>
          </div>
        </section>


        <StickyScrollSection
          eyebrow="Construction"
          title="Pipeline Built for Project Crews"
          description="See how we connect construction suppliers with general contractors and subcontractors at the right project stage."
          items={constructionStickyContent}
        />

        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
