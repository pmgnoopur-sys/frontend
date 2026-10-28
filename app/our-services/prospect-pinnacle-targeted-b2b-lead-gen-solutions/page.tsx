'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProcess from '@/components/BusinessProcess';
import Demo from '@/components/Demo';
import StickyScrollSection from '@/components/StickyScrollSection';
import Head from 'next/head';

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

const prospectPinnacleOfferings = [
  {
    id: 'demand-generation',
    title: 'Demand Generation',
    description: 'Build interest with buyers before they&apos;re ready to talk.',
    points: [
      'Full-funnel campaigns from awareness to intent',
      'Audience targeting by industry, role, and company size',
      'Intent-signal driven prospect prioritisation',
      'Ongoing optimisation based on engagement data',
    ],
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    id: 'content-syndication',
    title: 'Content Syndication',
    description: 'Turn whitepaper and eBook downloads into qualified leads.',
    points: [
      'Distribution across a targeted B2B publisher network',
      'Opt-in, consent-compliant lead capture',
      'Custom qualification questions per asset',
      'Lead data verified before every delivery',
    ],
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
  },
  {
    id: 'mql-sql-generation',
    title: 'MQL & SQL Generation',
    description: 'Leads scored on intent and fit, confirmed for sales.',
    points: [
      'Lead scoring aligned to your ideal customer profile',
      'BANT and custom qualification frameworks',
      'Clear MQL-to-SQL handoff definitions',
      'Human-verified contact and intent details',
    ],
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    image: {
      src: '/images/services/mql-sql-funnel.png',
      alt: 'MQL to SQL lead funnel illustration',
    },
  },
  {
    id: 'appointment-setting',
    title: 'Appointment Setting',
    description: 'Qualified meetings booked on your sales calendar.',
    points: [
      'Meetings booked with confirmed decision-makers',
      'Multi-touch outreach across email and phone',
      'Calendar integration and meeting confirmations',
      'Prospect briefing notes before every call',
    ],
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
];

export default function ProspectPinnacle() {
  return (
    <>
      <Head>
        <title>B2B Lead Generation Services | Prospect Pinnacle™ | PMG B2B</title>
        <meta name="description" content="Qualified B2B leads and meetings for agencies and tech companies, built from 25M+ US contacts and verified by Proffer.ai. First leads in 48 hours." />
        <meta name="keywords" content="B2B lead generation services, outsourced lead generation, lead generation for tech companies, MQL generation, B2B lead generation company" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 text-center py-20">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-[#FECB0F]/10 text-[#FECB0F] text-sm font-bold tracking-wider uppercase mb-6 rounded-full">
                    Prospect Pinnacle™
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    B2B lead generation services that deliver to spec
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                    We find the right buyers among 25M+ verified US contacts, qualify them against your campaign criteria, and deliver leads and meetings that pass review. First leads within 48 hours.
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

          {/* Four Ways Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Four ways we generate qualified leads</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {prospectPinnacleOfferings.map((offering) => {
                  const pointsList = (
                    <ul className="space-y-3">
                      {offering.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-gray-700">
                          <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FECB0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  );

                  return (
                    <div
                      key={offering.id}
                      id={offering.id}
                      className="group scroll-mt-28 bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={offering.icon} />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">
                        {offering.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{offering.description}</p>
                      {'image' in offering && offering.image ? (
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                          <div className="flex-1">{pointsList}</div>
                          <img
                            src={offering.image.src}
                            alt={offering.image.alt}
                            className="w-full sm:w-2/5 max-w-[220px] object-contain flex-shrink-0"
                          />
                        </div>
                      ) : (
                        pointsList
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How a lead campaign runs with PMG</h2>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">You share the specs, TAL and targets</h3>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">We build the audience from verified data, down to tech stack and install base</h3>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Our in-house team reaches and qualifies buyers, in US business hours</h3>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Proffer.ai validates every lead and records consent</h3>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Two human audits check contact accuracy, specs and intent</h3>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-2xl">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">Delivery in the format your campaign needs, with live pacing on ClearBoard</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Leads Hold Up Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why our leads hold up after delivery</h2>
                  <p className="text-gray-600 text-lg">
                    Most rejections come from bad data, missing consent or the wrong person. We stop all three before delivery.
                  </p>
                </div>
                <div className="bg-[#FECB0F]/10 rounded-2xl p-8 md:p-12 text-center">
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-6">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">Under 12%</div>
                      <div className="text-gray-700 font-medium">Rejections</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">200+</div>
                      <div className="text-gray-700 font-medium">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">94%</div>
                      <div className="text-gray-700 font-medium">Delivery Satisfaction</div>
                    </div>
                  </div>
                  <a href="/our-services/proffer-ai" className="inline-block text-[#FECB0F] font-bold hover:underline">
                    Learn more about Proffer.ai →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Outsourced Lead Generation Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Outsourced lead generation, without losing control</h2>
                  <p className="text-gray-600 text-lg">
                    You get a dedicated center of excellence with 3X reserved bandwidth, in-house callers, and a live view of every campaign. Agencies can run it all white-label under their own brand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">What&apos;s included in your B2B lead generation services?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Audience building, outreach, qualification, Proffer.ai verification, two human audits and delivery, with live pacing throughout.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Do you work to our campaign specs and TAL?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Yes. Every program is built on your filters, TAL and custom questions, including tech stack and install base.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">How fast do leads start?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      First high-potential leads arrive within 48 hours of launch.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">What happens if a lead is rejected?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our checks are designed to stop bad leads before delivery. If one is rejected, we review why and replace it under the agreed campaign terms.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Do you only work with tech companies?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Most of our programs are for technology brands, reaching buyers in tech, financial services, healthcare, manufacturing and retail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing CTA Section */}
          <section className="py-20 bg-[#FECB0F]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Share your next campaign brief</h2>
                <p className="text-black text-lg mb-8">
                  We&apos;ll reply within 24 hours with how we&apos;d run it.
                </p>
                <a href="/contact-us" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
                  Get Started
                </a>
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
    </>
  );
}
