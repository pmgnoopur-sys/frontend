'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProcess from '@/components/BusinessProcess';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const prospectPinnacleStickyContent = [
  {
    title: 'Precision Prospecting',
    description:
      'We go beyond generic contact lists, using firmographic and behavioral signals to pinpoint prospects who are genuinely in-market for your solution.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Precision prospecting analytics"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Human-Verified Qualification',
    description:
      'Every lead is reviewed by a real researcher before it reaches you, confirming role, intent, and fit so your sales team never wastes time on the wrong contact.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
        alt="Lead qualification team"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Pipeline You Can Trust',
    description:
      'Get a steady, predictable flow of sales-ready leads delivered directly into your CRM, complete with context and engagement history for faster follow-up.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        alt="Sales pipeline management"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Scalable Outreach',
    description:
      'Whether you need 50 leads a month or 5,000, our processes scale with your growth without sacrificing the accuracy or personalization your prospects expect.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        alt="Scalable outreach team"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function ProspectPinnacle() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Prospect <span className="text-[#FECB0F]">Pinnacle</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                  Targeted Lead Generation
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Identify and connect with high-potential prospects through our data-driven B2B lead generation strategies. We help you build a robust pipeline of qualified leads ready to convert.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1784817801/B2B-appointment-setting_ks0wwp.png"
                  alt="Lead Generation Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">What is Prospect Pinnacle?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Prospect Pinnacle is our flagship B2B lead generation service designed to help businesses identify, qualify, and connect with high-value prospects. Using advanced data analytics, AI-powered tools, and proven outreach strategies, we deliver qualified leads that match your ideal customer profile.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines human expertise with cutting-edge technology to ensure you receive leads that are not just contacts, but genuine opportunities ready for your sales team to convert into customers.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Key <span className="text-[#FECB0F]">Features</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Comprehensive features to accelerate your lead generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">ICP Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  We help you define and refine your Ideal Customer Profile to ensure we target the right prospects with the highest conversion potential.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Multi-Channel Sourcing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage multiple data sources and channels including LinkedIn, industry databases, and proprietary tools to find your ideal prospects.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Lead Qualification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every lead is thoroughly qualified against your criteria before delivery, ensuring your sales team only receives high-quality prospects.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Email Outreach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional email campaigns crafted to engage prospects and drive responses, with A/B testing and optimization for maximum impact.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Real-Time Reporting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track your campaign performance with detailed analytics and real-time dashboards showing lead quality, engagement metrics, and conversion rates.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Custom Campaigns</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored lead generation campaigns designed around your specific industry, target market, and business objectives for maximum relevance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our <span className="text-[#FECB0F]">Process</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A systematic approach to delivering quality leads
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Discovery & Strategy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We begin by understanding your business, target market, and ideal customer profile. This discovery phase forms the foundation of our lead generation strategy.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Data Sourcing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team sources potential leads from multiple verified channels, ensuring a diverse and comprehensive pool of prospects that match your criteria.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Qualification & Verification</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Each prospect is thoroughly qualified and verified to ensure they meet your requirements, including job title, company size, industry, and buying intent.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Outreach & Engagement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We execute personalized outreach campaigns across multiple channels to engage prospects and generate interest in your products or services.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Handoff & Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Qualified leads are handed over to your sales team with complete context and engagement history. We provide ongoing support to optimize conversion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Process Section */}
        <BusinessProcess />

        {/* Sticky Scroll Reveal Section */}
        <StickyScrollSection
          eyebrow="Prospect Pinnacle"
          title="Precision Lead Generation, End to End"
          description="See how we turn raw market data into a pipeline of qualified, sales-ready leads."
          items={prospectPinnacleStickyContent}
        />

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}