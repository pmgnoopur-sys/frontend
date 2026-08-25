'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProcess from '@/components/BusinessProcess';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const inboxOracleStickyContent = [
  {
    title: 'Copy That Converts',
    description:
      'Our copywriters craft subject lines and email bodies that stand out in crowded inboxes, driving opens, replies, and booked meetings.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=800&q=80"
        alt="Email copywriting"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Automated Nurture Sequences',
    description:
      'Behavior-triggered drip campaigns keep prospects engaged with the right message at the right time, moving them steadily toward a decision.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
        alt="Automated email sequences"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Deliverability & Performance',
    description:
      'We monitor deliverability, run continuous A/B tests, and optimize send times to make sure your campaigns consistently land in the inbox and perform.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        alt="Email performance analytics"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Segmentation That Scales',
    description:
      'We segment your audience by industry, behavior, and buying stage so every email feels personal, even when sent to thousands of prospects.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
        alt="Email audience segmentation"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function InboxOracle() {
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
                  Inbox <span className="text-[#FECB0F]">Oracle</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                  Email Marketing Solutions
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Drive engagement and conversions with strategic email marketing campaigns. From cold outreach to nurturing sequences, we craft compelling emails that get results.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1784817801/B2B-appointment-setting_ks0wwp.png"
                  alt="Email Marketing Illustration"
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
              <h2 className="text-4xl font-bold mb-8 text-gray-900">What is Inbox Oracle?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Inbox Oracle is our comprehensive email marketing service designed to help B2B businesses connect with prospects, nurture leads, and drive conversions through strategic email campaigns. We combine data-driven targeting with compelling copywriting to deliver emails that get opened, read, and acted upon.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need cold outreach to generate new leads, drip campaigns to nurture existing prospects, or newsletter strategies to engage your audience, our email marketing experts deliver measurable results with every campaign.
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
                Comprehensive email marketing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Cold Email Outreach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic cold email campaigns to generate new leads and start conversations with potential customers who match your ideal profile.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Drip Campaigns</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated email sequences that nurture leads through the sales funnel with relevant, timely content based on prospect behavior.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Copywriting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional copywriters craft compelling subject lines and email body copy that captures attention and drives action.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">A/B Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Test different subject lines, copy variations, and sending times to optimize campaign performance and maximize engagement.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Deliverability Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure your emails reach the inbox with proper authentication, domain warming, and deliverability best practices.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Analytics & Reporting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive tracking of open rates, click-through rates, conversions, and other key metrics to measure campaign success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Email <span className="text-[#FECB0F]">Types</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Campaigns for every stage of the customer journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Cold Outreach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Introduce your brand to new prospects with personalized cold emails that start conversations and generate interest in your solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Lead Nurturing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Keep prospects engaged with automated drip sequences that deliver relevant content based on their interests and behavior.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Follow-Up Sequences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic follow-up emails to re-engage unresponsive prospects and move them further down the sales funnel.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Newsletters</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular newsletters to keep your audience informed about industry insights, company updates, and valuable content.
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
                A systematic approach to email marketing success
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
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Strategy & Planning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We define your email marketing goals, target audience, and campaign objectives. This includes segmentation, messaging strategy, and success metrics.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">List Building & Segmentation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build and segment your email lists based on demographics, behavior, and engagement levels to ensure relevant messaging for each audience.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Content Creation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our copywriters craft compelling email content including subject lines, preview text, body copy, and calls-to-action that drive engagement.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Testing & Deployment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conduct A/B tests on subject lines and content variations. Deploy campaigns with optimized sending schedules for maximum impact.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Analysis & Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monitor campaign performance, analyze key metrics, and continuously optimize strategies to improve open rates, click-through rates, and conversions.
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
          eyebrow="Inbox Oracle"
          title="Email Campaigns That Actually Get Read"
          description="From copywriting to deliverability, here's how we turn your inbox into a revenue channel."
          items={inboxOracleStickyContent}
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