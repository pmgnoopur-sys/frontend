'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';
import Head from 'next/head';

export default function ConversationalQualifiedLeads() {
  return (
    <>
      <Head>
        <title>Conversational Qualified Leads (CQL) | PMG B2B</title>
        <meta name="description" content="CQLs combine an interactive buyer assessment with a live verification call, BANT and callback consent. More than a content download." />
        <meta name="keywords" content="conversational qualified leads, verified B2B leads, BANT qualified leads, lead verification" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 text-center py-20">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="inline-block px-3 py-1 bg-[#FECB0F] text-black text-xs font-bold tracking-wider uppercase rounded-full">
                      New
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Conversational Qualified Leads: buyers who&apos;ve already started the conversation
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Each CQL completes a short assessment, then confirms their answers, BANT and a callback time with our team on a live call.
                  </p>
                  <a href="/contact-us" className="inline-block bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:bg-[#FFD54F] transition-colors">
                    Talk to us about a CQL pilot
                  </a>
                </div>
                <div className="flex-1 flex justify-end h-full">
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1788441562/ChatGPT_Image_Sep_3_2026_06_48_55_PM_k6ty1q.png"
                    alt="Conversational Qualified Leads Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Downloads vs CQLs Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Downloads tell you who clicked. CQLs tell you who&apos;s ready.</h2>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
                  <p className="text-xl text-gray-700 leading-relaxed text-center">
                    A download tells you someone was curious. It doesn&apos;t tell you what they need, whether they can buy, or if they want to talk. A CQL answers all three before it reaches you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Two Layers Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Two layers in every CQL</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Layer 1 */}
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Layer 1: Interactive assessment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The buyer answers about five questions in around two minutes and instantly gets a score, a maturity stage and a short report. They get value; you get their answers.
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13 2.257a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.684-.949V5a2 2 0 012-2h3.28zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Layer 2: Live verification call</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our in-house team calls in US business hours, confirms who they are, validates their answers, captures BANT and agrees a callback date and time with them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When a Lead Counts Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">When a lead counts as a CQL</h2>
                </div>
                <div className="bg-[#FECB0F]/10 rounded-2xl p-8 md:p-12 border border-[#FECB0F]/20">
                  <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                    Only when all three are done: the verification call, BANT, and explicit consent to a sales callback. Anything less isn&apos;t delivered as a CQL.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FECB0F] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Verification call</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FECB0F] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">BANT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FECB0F] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Callback consent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conversation Intelligence Report Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What you receive: the Conversation Intelligence Report</h2>
                </div>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                  <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                    Your sales team walks into the callback knowing what the buyer said, where they stand and what to talk about.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                      <span className="text-gray-700 font-medium">Prospect profile</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                      <span className="text-gray-700 font-medium">Company intelligence</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                      <span className="text-gray-700 font-medium">Assessment and strategic fit</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                      <span className="text-gray-700 font-medium">Enriched diagnostic and BANT</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                      <span className="text-gray-700 font-medium">Sales action and follow-up</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                      <span className="text-gray-700 font-medium">Touchpoint log</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Example Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">An example</h2>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
                  <p className="text-xl text-gray-700 leading-relaxed text-center">
                    For example, an infrastructure readiness assessment that places each buyer in one of four maturity stages, from just getting started to future-ready.
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                      Illustration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pilot Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Start with a pilot</h2>
                </div>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                  <p className="text-xl text-gray-700 leading-relaxed text-center">
                    We build a CQL pilot around one of your campaigns. Together we agree the assessment, the audience and how leads are delivered, then run it and review the results with you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">What is a conversational qualified lead?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A buyer who has completed an interactive assessment and then confirmed their answers, BANT and a callback time on a live call with our team.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">How is a CQL different from an MQL or a syndication lead?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Those leads show interest. A CQL adds a verified conversation: confirmed needs, BANT and agreement to talk to sales.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Who makes the verification calls?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      PMG&apos;s own in-house team, in US business hours.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">What does the buyer get?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      An instant score, a maturity stage and a short report based on their answers.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">How do we start?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      With a pilot built around one of your campaigns.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Talk to us about a CQL pilot</h2>
                <p className="text-black text-lg mb-8">
                  We&apos;ll reply within 24 hours.
                </p>
                <a href="/contact-us" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </section>

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
