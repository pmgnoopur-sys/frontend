'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    title: 'Integrity First',
    description: 'We do what we say we will do. Transparent reporting and honest communication, always.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Relentless Curiosity',
    description: 'We question, test, and refine constantly, never settling for "good enough" results.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3a8 8 0 100 16 8 8 0 000-16zM21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Ownership Mindset',
    description: 'Every team member treats client goals as their own. No handoffs, no excuses.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-9m3-3l3 3-3 3M4 17h9m-3 3l-3-3 3-3" />
      </svg>
    ),
  },
  {
    title: 'Collaborative Growth',
    description: 'We win as a team. Knowledge sharing and mentorship are built into how we work.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-4-4 4 4 0 014 4zm6 0a4 4 0 11-4-4 4 4 0 014 4z" />
      </svg>
    ),
  },
];

export default function CultureAndValues() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Asymmetric bento hero */}
        <section className="relative bg-black text-white overflow-hidden py-24 md:py-32">
          <span className="absolute -top-10 right-0 text-[220px] md:text-[320px] font-black text-white/[0.03] leading-none select-none">
            C&amp;V
          </span>
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              <div className="lg:col-span-2">
                <span className="text-[#FECB0F] text-xs font-bold tracking-[0.35em] uppercase">Culture &amp; Values</span>
                <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                  What Drives Us <span className="text-[#FECB0F]">Every Day</span>
                </h1>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed lg:border-l lg:border-gray-800 lg:pl-8">
                Our culture is built on a simple idea: do right by our clients, and the results will follow. These
                values guide every decision we make, from the smallest email to the biggest campaign.
              </p>
            </div>
          </div>
        </section>

        {/* Alternating value rows */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto divide-y divide-gray-200">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 py-10"
                >
                  <span className="text-5xl font-black text-gray-200 w-20 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-full bg-black text-[#FECB0F] flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                  </div>
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
