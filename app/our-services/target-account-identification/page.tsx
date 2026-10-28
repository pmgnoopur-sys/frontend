import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, BrainCircuit, ChevronDown, ListChecks, Radar, Target, TrendingUp, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { serviceParents, subpageHref } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Target Account List Building | ICP Account Identification | PMG B2B',
  description:
    'Target account list building that picks the accounts worth chasing. We combine ICP fit, intent signals and market signals with AI-led account prioritisation to deliver a scored target account list.',
};

const parent = serviceParents['impact-sphere'];
const siblings = parent.subpages.filter((s) => s.slug !== 'target-account-identification');

const inputs = [
  { icon: Users, title: 'Your ICP', desc: 'The firmographic profile of the accounts that fit what you sell.' },
  { icon: Radar, title: 'Intent signals', desc: 'Evidence that an account is actively researching your category.' },
  { icon: TrendingUp, title: 'Market signals', desc: 'Changes in the market that make an account more likely to buy now.' },
];

const steps = [
  {
    icon: ListChecks,
    label: 'Step 1',
    title: 'Inputs',
    desc: 'We start from your ICP and layer in intent and market signals, so every account is judged on both fit and timing.',
  },
  {
    icon: BrainCircuit,
    label: 'Step 2',
    title: 'AI-led prioritisation',
    desc: 'AI weighs fit and intent together and ranks accounts, so the ones most worth chasing rise to the top.',
  },
  {
    icon: Target,
    label: 'Step 3',
    title: 'What you receive',
    desc: 'A scored target account list, ready to power your ABM and outbound programs.',
  },
];

const faqs = [
  {
    q: 'What is target account list building?',
    a: 'It is the process of picking the accounts worth chasing. We combine fit data from your ICP with intent and market signals to decide which accounts belong on your list.',
  },
  {
    q: 'How does ICP account identification work?',
    a: 'We start from your ideal customer profile and find the accounts that match it. Fit alone is not enough, so each account is then checked against intent and market signals.',
  },
  {
    q: 'How are accounts prioritised?',
    a: 'Account prioritisation is AI-led. Fit and intent are weighed together so the accounts showing the strongest combination are ranked highest.',
  },
  {
    q: 'What role do intent signals play?',
    a: 'Intent signals show which accounts are actively researching your category, so your team can focus on accounts that are more likely to be in market.',
  },
  {
    q: 'What do we receive at the end?',
    a: 'A scored target account list that your team can use to run ABM campaigns, outbound outreach or both.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function TargetAccountIdentification() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FECB0F]/20 rounded-full blur-3xl" />
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/services" className="hover:text-black">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href={parent.href} className="hover:text-black">{parent.name}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900 font-medium">Target Account Identification</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-[#FECB0F]/15 text-black text-xs font-bold tracking-wider uppercase mb-6 rounded-full">
                {parent.category} · {parent.name}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Target account list building, <span className="text-[#FECB0F]">driven by fit and intent</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                Picking the accounts worth chasing, using fit and intent data. We combine ICP account identification with intent signals and AI-led account prioritisation, so your team works the right accounts first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="bg-black text-white px-8 py-4 rounded-full font-bold text-center hover:bg-gray-800 transition-colors">
                  Talk to our team
                </Link>
                <a href="#how-it-works" className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-center hover:bg-black hover:text-white transition-colors">
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What It Means Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">What it means</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Picking the accounts worth chasing</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Not every account that fits your ICP is ready to buy, and not every account showing interest is a fit. Target account identification uses fit and intent data together, so your list is built from accounts that match your profile and are showing signs they are in market.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {inputs.map((i) => (
                  <div key={i.title} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-gray-50">
                    <span className="w-12 h-12 shrink-0 rounded-xl bg-[#FECB0F] text-black flex items-center justify-center">
                      <i.icon className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{i.title}</h3>
                      <p className="text-gray-600">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-black scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4">How it comes through</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">From signals to a scored target account list</h2>
            </div>
            <div className="relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#FECB0F]/20 via-[#FECB0F]/70 to-[#FECB0F]/20" aria-hidden="true" />
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <li key={s.title} className="relative p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-[#FECB0F]/40 transition-colors">
                  <span className="relative z-10 w-12 h-12 mb-6 rounded-xl bg-[#FECB0F] text-black flex items-center justify-center">
                    <s.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-1">{s.label}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">FAQ</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Frequently asked questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl bg-white border border-gray-200 open:border-[#FECB0F] transition-colors">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="text-lg font-semibold text-gray-900">{f.q}</span>
                      <ChevronDown className="w-5 h-5 shrink-0 text-[#FECB0F] transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <Link href={parent.href} className="inline-flex items-center gap-2 font-bold text-black hover:underline">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                {parent.name} overview
              </Link>
              <ul className="flex flex-wrap gap-3">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={subpageHref(parent, s)}
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#FECB0F] hover:text-black transition"
                    >
                      {s.label}
                      <ArrowRight className="w-4 h-4 text-[#FECB0F] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto px-6 py-14 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#111] to-black border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Build a target account list <span className="text-[#FECB0F]">worth chasing</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Share your ICP and we&apos;ll show you how we&apos;d prioritise your accounts. We reply within 24 hours.
              </p>
              <Link href="/contact-us" className="inline-block bg-[#FECB0F] text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Talk to our team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
