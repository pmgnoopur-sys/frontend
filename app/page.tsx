'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>B2B Lead Generation Company | Verified Leads | PMG B2B</title>
        <meta name="description" content="PMG B2B delivers verified, compliant B2B leads for media agencies and enterprise tech teams. AI validation and two human audits on every lead." />
        <meta name="keywords" content="B2B lead generation company, B2B lead generation services, B2B lead generation solutions, AI lead generation, lead generation partner for agencies" />
      </Head>
      <div className="flex flex-col min-h-screen font-poppins">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[90vh] flex items-center bg-black overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/80" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pb-8">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FECB0F] mb-6 tracking-tight">
                  B2B leads that get accepted, with proof on every one
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  PMG B2B is a B2B lead generation company for media agencies and enterprise technology teams. Proffer.ai and two human audits check every lead before it reaches you.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link href="/contact-us" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
                    Talk to our team
                  </Link>
                  <Link href="/our-services/proffer-ai" className="border-2 border-[#FECB0F] text-[#FECB0F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FECB0F] hover:text-black transition-all inline-block">
                    See how Proffer.ai works
                  </Link>
                </div>

                {/* Two Doors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <Link href="/solutions/for-media-agencies" className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all group">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FECB0F] transition-colors">I run lead programs for clients</h3>
                    <p className="text-gray-400">For Media Agencies →</p>
                  </Link>
                  <Link href="/industries/technology-saas" className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all group">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FECB0F] transition-colors">I&apos;m building pipeline for my company</h3>
                    <p className="text-gray-400">For Enterprise Teams →</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stat Band and Trust Strip */}
          <section className="py-20 bg-black border-t border-white/10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">200+</h3>
                  <p className="text-gray-400">Campaigns managed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">94%</h3>
                  <p className="text-gray-400">Delivery satisfaction</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">25M+</h3>
                  <p className="text-gray-400">US contacts</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-[#FECB0F] mb-2">48h</h3>
                  <p className="text-gray-400">First leads</p>
                </div>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>GDPR</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>CCPA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Two audits per lead</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>In-house teams</span>
                </div>
              </div>
            </div>
          </section>

          {/* Most Rejected Leads Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Most rejected leads should never have been delivered</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A rejected lead costs more than a replacement. It costs margin, time and the client&apos;s trust. Most rejections trace back to the same three gaps, and all three can be caught before delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-[#FECB0F]/10 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#FECB0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Bad data slips through</h3>
                    <p className="text-gray-600">Wrong titles, dead emails, the wrong company size.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-[#FECB0F]/10 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#FECB0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Consent nobody can prove</h3>
                    <p className="text-gray-600">The client asks for proof and there isn&apos;t any.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-[#FECB0F]/10 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[#FECB0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery you can&apos;t see</h3>
                    <p className="text-gray-600">You find out a campaign is behind when it&apos;s already late.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Proffer.ai Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proffer.ai checks every lead before you see it</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Proffer.ai is PMG&apos;s own AI validation suite. It runs inside every campaign, and a human audit confirms its work.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                    <span className="text-gray-900 text-lg">LeadCert AI validates every contact</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                    <span className="text-gray-900 text-lg">VerifySure AI records recall and consent</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                    <span className="text-gray-900 text-lg">TrustCheck AI checks authority on every call</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                    <span className="text-gray-900 text-lg">ClearBoard AI shows pacing and quality live</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="w-2 h-2 bg-[#FECB0F] rounded-full"></div>
                    <span className="text-gray-900 text-lg">PredictWise AI sharpens targeting as the campaign runs</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/our-services/proffer-ai" className="text-[#FECB0F] font-bold text-lg hover:underline">
                    How Proffer.ai works →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">B2B lead generation services built around acceptance</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">B2B Lead Generation</h3>
                    <p className="text-[#FECB0F] text-sm mb-4">Prospect Pinnacle™</p>
                    <p className="text-gray-600 mb-6">Qualified leads and meetings, delivered to your specs.</p>
                    <Link href="/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions" className="text-[#FECB0F] font-medium hover:underline">Learn more →</Link>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Account-Based Marketing</h3>
                    <p className="text-[#FECB0F] text-sm mb-4">Impact Sphere™</p>
                    <p className="text-gray-600 mb-6">Reach the whole buying group at your named accounts.</p>
                    <Link href="/services/impact-sphere" className="text-[#FECB0F] font-medium hover:underline">Learn more →</Link>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">B2B Email Marketing</h3>
                    <p className="text-[#FECB0F] text-sm mb-4">Inbox Oracle™</p>
                    <p className="text-gray-600 mb-6">Verified opt-in email programs that turn into leads.</p>
                    <Link href="/services/inbox-oracle-email-marketing-solutions" className="text-[#FECB0F] font-medium hover:underline">Learn more →</Link>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">B2B Data Solutions</h3>
                    <p className="text-[#FECB0F] text-sm mb-4">Data Dynamo™</p>
                    <p className="text-gray-600 mb-6">Data built around your ICP, enriched from 1,000+ sources.</p>
                    <Link href="/services/data-dynamo" className="text-[#FECB0F] font-medium hover:underline">Learn more →</Link>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm relative">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#FECB0F] text-black text-xs font-bold uppercase rounded-full">New</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Conversational Qualified Leads</h3>
                    <p className="text-gray-600 mb-6">Buyers who&apos;ve taken an assessment and agreed to talk.</p>
                    <Link href="/services/conversational-qualified-leads" className="text-[#FECB0F] font-medium hover:underline">Learn more →</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Agency and Enterprise Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built for agencies. Ready for enterprise teams.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#FECB0F]/10 to-transparent border border-[#FECB0F]/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">For Agencies</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We deliver your clients&apos; programs under your brand, with 3X reserved bandwidth so pacing never slips, and consent proof you can hand to your client.
                    </p>
                    <Link href="/solutions/for-media-agencies" className="text-[#FECB0F] font-bold hover:underline">
                      For Media Agencies →
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-[#FECB0F]/10 to-transparent border border-[#FECB0F]/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">For Enterprise Teams</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Leads your sales team accepts, across the full buying group, from one accountable partner instead of several vendors.
                    </p>
                    <Link href="/industries/technology-saas" className="text-[#FECB0F] font-bold hover:underline">
                      Technology & SaaS →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From your brief to accepted leads</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#FECB0F] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xl">1</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-lg">You share specs, TAL and targets.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#FECB0F] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xl">2</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-lg">We build the audience from 25M+ verified US contacts, filtered down to tech stack and install base.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#FECB0F] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xl">3</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-lg">Our in-house team reaches and qualifies buyers in US business hours.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#FECB0F] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xl">4</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-lg">Proffer.ai and two audits check every lead; you get delivery with consent proof and live pacing on ClearBoard. First leads within 48 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Agency Results Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What changed for one agency partner</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-5xl md:text-6xl font-bold text-[#FECB0F] mb-2">&lt;12%</h3>
                    <p className="text-gray-600">Final rejection rate</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl md:text-6xl font-bold text-[#FECB0F] mb-2">40%</h3>
                    <p className="text-gray-600">Faster verification cycles</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl md:text-6xl font-bold text-[#FECB0F] mb-2">25+h</h3>
                    <p className="text-gray-600">Manual QA saved every month</p>
                  </div>
                </div>

                <p className="text-center text-gray-600 italic">
                  Results for an agency partner running enterprise tech campaigns.
                </p>
              </div>
            </div>
          </section>

          {/* Industries Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industries we reach buyers in</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We reach the decision makers inside these industries for technology brands selling into them.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/industries/technology-saas" className="bg-[#FECB0F]/10 border border-[#FECB0F]/30 rounded-2xl p-8 hover:bg-[#FECB0F]/20 transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technology & SaaS</h3>
                    <p className="text-gray-600">Leads for tech brands</p>
                  </Link>

                  <Link href="/solutions/financial-services" className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
                    <p className="text-gray-600">Banks, insurers, fintechs</p>
                  </Link>

                  <Link href="/solutions/healthcare" className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare & Life Sciences</h3>
                    <p className="text-gray-600">Health systems, pharma</p>
                  </Link>

                  <Link href="/solutions/manufacturing" className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing</h3>
                    <p className="text-gray-600">Industrial, operations</p>
                  </Link>

                  <Link href="/solutions/retail" className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FECB0F]/30 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Retail & eCommerce</h3>
                    <p className="text-gray-600">Retailers, commerce platforms</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#FECB0F] text-sm font-bold tracking-[0.3em] uppercase mb-4">FAQ</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#FECB0F]/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">What does a B2B lead generation company do?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      It finds the buyers who match your campaign, engages and qualifies them, then delivers them as leads or meetings your sales team can act on. PMG also verifies every lead with Proffer.ai and two human audits before delivery.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#FECB0F]/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">How do you verify each lead?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      LeadCert AI validates the contact, VerifySure AI records recall and consent, and TrustCheck AI reviews the call for authority. Then our team audits every lead twice.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#FECB0F]/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Do you work white-label for agencies?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Yes. Most of our work is delivered behind media agencies, under their brand, to their clients&apos; specs.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#FECB0F]/30 transition-all duration-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Are your leads GDPR and CCPA compliant?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Yes. We are ISO 27001 certified, GDPR and CCPA compliant, and every lead carries a consent record.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing CTA Section */}
          <section className="relative overflow-hidden bg-white py-16 md:py-20">
            {/* Dot texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            {/* Soft glows */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-black/10 blur-3xl" />

            <div className="container relative mx-auto px-4">
              <div className="mx-auto max-w-2xl rounded-[2.5rem] border-2 border-black bg-white px-6 py-10 text-center shadow-[10px_10px_0_0_#000] md:px-16 md:py-14">
                {/* Eyebrow */}
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
                  </span>
                  Now booking campaigns
                </span>

                <h2 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-black md:text-6xl">
                  Tell us about your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">next campaign</span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 bg-[#FECB0F] md:bottom-2 md:h-4" />
                  </span>
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-lg text-black/75 md:text-xl">
                  Share the audience, the asset and the volume. We&apos;ll reply within 24 hours.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30"
                  >
                    Talk to our team
                    <svg
                      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M4 10h12m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  <a
                    href="mailto:info@pmg-b2b.com"
                    className="inline-flex items-center rounded-full border-2 border-black px-8 py-[1.125rem] text-lg font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-[#FECB0F]"
                  >
                    Email us instead
                  </a>
                </div>

                <p className="mt-8 text-sm font-medium text-black/60">
                  No commitment · Free campaign review · Response in under 24h
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
