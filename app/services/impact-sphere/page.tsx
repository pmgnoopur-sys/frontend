'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProcess from '@/components/BusinessProcess';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const impactSphereStickyContent = [
  {
    title: 'Target the Right Accounts',
    description:
      'We help you identify and prioritize the accounts with the highest revenue potential, so every campaign dollar is spent where it matters most.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        alt="Target account selection meeting"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Engage Every Stakeholder',
    description:
      'From champions to economic buyers, we map the full buying committee and deliver personalized messaging that resonates with each role.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
        alt="Stakeholder engagement discussion"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Marketing and Sales, Aligned',
    description:
      'Our ABM programs are built on tight coordination between marketing and sales, so accounts move through the funnel faster and win rates improve.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        alt="Sales and marketing alignment"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Measurable Account Impact',
    description:
      'Track engagement, pipeline velocity, and revenue at the account level, giving you clear visibility into which accounts are moving and why.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Account impact measurement"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function ImpactSphere() {
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
                  Impact <span className="text-[#FECB0F]">Sphere</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                  Account-Based Engagement
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Target high-value accounts with personalized marketing strategies. We help you engage decision-makers at key accounts to drive revenue growth and maximize deal value.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1784817801/B2B-appointment-setting_ks0wwp.png"
                  alt="Account-Based Marketing Illustration"
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
              <h2 className="text-4xl font-bold mb-8 text-gray-900">What is Impact Sphere?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Impact Sphere is our Account-Based Marketing (ABM) service designed to help you focus your marketing efforts on high-value accounts that matter most. Instead of casting a wide net, we create personalized campaigns targeting specific companies and decision-makers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our ABM approach aligns your marketing and sales teams to deliver coordinated, personalized experiences that resonate with key stakeholders, accelerating the sales cycle and increasing win rates for your most important deals.
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
                Comprehensive ABM solutions for high-value account targeting
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Account Selection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic identification and selection of high-value target accounts based on revenue potential, fit, and likelihood to convert.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Stakeholder Mapping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identify and map key decision-makers, influencers, and champions within each target account for precise outreach.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Personalized Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create tailored content and messaging that speaks directly to each account's pain points, challenges, and goals.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Multi-Channel Orchestration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordinate campaigns across email, LinkedIn, direct mail, and other channels for maximum impact and engagement.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Sales Alignment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Align marketing and sales teams with shared goals, coordinated outreach, and unified account strategies.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Performance Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track account-level engagement, pipeline progression, and revenue impact with comprehensive ABM analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why <span className="text-[#FECB0F]">ABM?</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                The benefits of account-based marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Higher ROI</h3>
                <p className="text-gray-600 leading-relaxed">
                  Focus resources on accounts with the highest revenue potential, resulting in better returns on your marketing investment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Shorter Sales Cycles</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized engagement accelerates decision-making and helps close deals faster with high-value accounts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Improved Win Rates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Targeted, relevant messaging increases engagement and conversion rates for your most important opportunities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Better Alignment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Marketing and sales teams work together with shared objectives, reducing friction and improving overall performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our <span className="text-[#FECB0F]">Process</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A strategic approach to account-based marketing
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
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Account Identification</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We work with you to identify and prioritize high-value target accounts based on revenue potential, strategic fit, and likelihood to convert.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Account Research</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deep research into each target account to understand their business challenges, goals, organizational structure, and key stakeholders.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Strategy Development</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create personalized account-specific strategies including messaging, content, and channel mix tailored to each target account.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Campaign Execution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Execute coordinated multi-channel campaigns with personalized outreach to engage key stakeholders at each target account.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Measurement & Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Track engagement metrics, pipeline progression, and revenue impact. Continuously optimize strategies based on performance data.
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
          eyebrow="Impact Sphere"
          title="Account-Based Marketing That Moves Deals Forward"
          description="A closer look at how we help you win your highest-value accounts."
          items={impactSphereStickyContent}
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