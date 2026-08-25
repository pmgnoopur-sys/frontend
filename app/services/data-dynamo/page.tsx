'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProcess from '@/components/BusinessProcess';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';

const dataDynamoStickyContent = [
  {
    title: 'Verified Contact Databases',
    description:
      'Access millions of verified B2B contacts, refreshed continuously to eliminate bounced emails and outdated job titles from your outreach lists.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
        alt="Verified contact database"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Company & Technographic Intelligence',
    description:
      'Understand exactly who you are selling to, including company size, revenue, industry, and the technology stack they already use.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        alt="Company data intelligence"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Custom Data Research',
    description:
      'Need something specific? Our research team builds custom datasets tailored to your exact target market, compliant with GDPR and CCPA.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
        alt="Custom data research team"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Continuous Data Hygiene',
    description:
      'We monitor and refresh your database on an ongoing basis, flagging outdated records so your outreach never suffers from stale or inaccurate data.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Data hygiene and refresh cycle"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function DataDynamo() {
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
                  Data <span className="text-[#FECB0F]">Dynamo</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                  B2B Data Solutions
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Access accurate, verified B2B data to power your marketing and sales efforts. We provide comprehensive contact databases, company intelligence, and data enrichment services.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1784817801/B2B-appointment-setting_ks0wwp.png"
                  alt="Data Solutions Illustration"
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
              <h2 className="text-4xl font-bold mb-8 text-gray-900">What is Data Dynamo?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Data Dynamo is our B2B data solutions service designed to provide businesses with accurate, verified, and compliant data to fuel their marketing and sales initiatives. We maintain extensive databases of business contacts, company information, and industry insights that help you reach the right prospects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our data is continuously updated, verified, and enriched to ensure you have access to the most current and reliable information. From contact databases to custom data research, we deliver data solutions that drive results.
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
                Comprehensive data solutions for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Contact Databases</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access millions of verified B2B contacts including decision-makers, executives, and professionals across industries and regions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Company Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed company profiles including revenue, employee count, industry classification, technology stack, and business insights.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Data Enrichment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhance your existing data with additional fields, verification, and updates to improve accuracy and completeness.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Custom Research</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored data research projects to find specific contacts, companies, or market intelligence based on your unique requirements.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Data Verification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular verification processes ensure data accuracy with email validation, phone number verification, and contact status updates.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Compliance Ready</h3>
                <p className="text-gray-600 leading-relaxed">
                  Data sourced and maintained in compliance with GDPR, CCPA, and other data protection regulations for safe and legal use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Data <span className="text-[#FECB0F]">Types</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Comprehensive data for every need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Names, job titles, email addresses, phone numbers, and social media profiles of business professionals and decision-makers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Company Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Company profiles including industry, size, revenue, location, technology stack, funding information, and key personnel.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Technographic Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Information about the technologies and software companies use, including CRM systems, marketing tools, and infrastructure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Firmographic Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  B2B firmographics including company size, industry classification, geographic location, and business structure information.
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
                A systematic approach to data quality and delivery
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
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Requirement Analysis</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We understand your data requirements including target industries, job titles, company sizes, geographic regions, and specific criteria.
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
                      Our team sources data from multiple verified channels including public databases, industry directories, and proprietary sources.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Verification & Validation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every data point is verified through multiple methods including email validation, phone verification, and cross-referencing with reliable sources.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Data Enrichment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We enrich the data with additional fields, update outdated information, and ensure completeness for maximum utility.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Delivery & Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Data is delivered in your preferred format with ongoing support, updates, and access to our customer service team.
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
          eyebrow="Data Dynamo"
          title="The Data Foundation Behind Every Great Campaign"
          description="Accurate, compliant, and continuously verified data that powers smarter targeting."
          items={dataDynamoStickyContent}
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