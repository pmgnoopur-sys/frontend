'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const paths = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Identify',
    description: 'We pinpoint the right companies and decision-makers for your ideal customer profile.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Research & Build Data',
    description: 'Our analysts verify and enrich contact and firmographic data before any outreach begins.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Reach Out',
    description: 'Email, calls, and multi-channel sequences designed around how your buyers actually respond.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Qualify',
    description: 'Every interested prospect is vetted against your criteria before it ever reaches your team.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
    title: 'Hand Off',
    description: 'Qualified leads are passed to your team, ready for a real sales conversation.',
  },
];

const puneRoles = [
  'Research Analysts',
  'Quality Analysts',
  'MIS',
  'Email Marketing',
  'Content',
  'PHP Development',
  'Team Leaders',
];

export default function OurStory() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Typography-driven quote hero */}
        <section className="relative bg-black text-white py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(254,203,15,0.10)_0%,transparent_60%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#FECB0F] text-xs font-bold tracking-[0.35em] uppercase">Our Story</span>
              <p className="mt-8 text-2xl md:text-4xl font-bold leading-snug">
                We replaced <span className="text-gray-500 line-through">&ldquo;we&apos;ll manage&rdquo;</span>{' '}
                with{' '}
                <span className="text-[#FECB0F]">&ldquo;show me where it broke.&rdquo;</span>
              </p>
              <p className="mt-6 text-gray-400 text-lg">
                — Shrish C. Mishra, Founder &amp; CEO
              </p>
            </div>
          </div>
        </section>

        {/* The moment everything changed - editorial narrative */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[#FECB0F] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                The Moment Everything Changed
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="float-left text-6xl font-bold text-gray-900 mr-3 mt-1 leading-none">W</span>
                  hen I started PMG B2B, I noticed something early on. Whenever something went off track, a missed
                  handoff, a delayed delivery, a miscommunication, the default response was always &ldquo;we&apos;ll manage.&rdquo;
                </p>
                <p>
                  It came from a good place. Everyone wanted to keep things moving, to stay positive. But over time,
                  that one phrase started hiding real problems. Small cracks became bigger gaps because no one stopped
                  to ask why it happened in the first place.
                </p>
                <p>So, we made a simple change. We replaced &ldquo;we&apos;ll manage&rdquo; with &ldquo;show me where it broke.&rdquo;</p>
                <p>
                  That one shift changed everything. It opened up honest conversations, built accountability, and made
                  problem-solving part of our culture.
                </p>
                <p className="font-semibold text-gray-900">
                  Because growth doesn&apos;t come from managing around issues, it comes from facing them head-on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who we are - company facts */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-[#FECB0F] text-sm font-bold tracking-[0.3em] uppercase mb-4">Who We Are</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Proffer Media Group — PMG B2B
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  PMG B2B operates in B2B lead generation and marketing, with services spanning lead generation,
                  demand generation, account-based marketing, email marketing, database management, and sales support.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our LinkedIn profile currently lists <strong className="text-white">2019</strong> as the founding
                  year, with headquarters in <strong className="text-white">Boston</strong> and a delivery operation
                  in <strong className="text-white">Pune, Kharadi</strong>.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-white font-bold text-lg mb-4">Built From The Ground Up</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  By 2022–2023, PMG was already hiring substantial teams in Pune, a sign that the delivery center
                  was already functioning as a well-established B2B operation:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {puneRoles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-2 bg-black/40 border border-gray-800 rounded-lg px-3 py-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F]" />
                      <span className="text-gray-300 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What PMG actually does - process strip */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#FECB0F] text-sm font-bold tracking-[0.3em] uppercase mb-4">What We Actually Do</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Turning Target Accounts Into Real Pipeline
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                PMG isn&apos;t primarily selling its own software or product. We sell B2B marketing, lead-generation, and
                sales-development services to other businesses, which is why roles like Research Analyst, Lead
                Generation Executive, QA, MIS, Email Marketing, and Client Success sit at the core of the company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {paths.map((item, index) => (
                <div key={item.title} className="relative text-center">
                  {index < paths.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gray-200" />
                  )}
                  <div className="relative z-10 w-14 h-14 mx-auto rounded-full bg-black text-[#FECB0F] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
