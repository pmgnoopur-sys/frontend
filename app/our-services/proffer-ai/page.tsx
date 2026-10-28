import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Check, ChevronDown, FileSearch, LayoutDashboard, PhoneCall, ShieldCheck, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Proffer.ai: AI Lead Generation & Lead Verification Services | PMG B2B',
  description: 'AI lead generation with built-in lead verification services. Proffer.ai validates contacts, records consent and checks authority on every PMG lead, so fewer leads get rejected.',
};

const modules = [
  {
    id: 'leadcert',
    name: 'LeadCert AI',
    icon: ShieldCheck,
    does: 'Validates every contact and removes risky, invalid and disposable records.',
    matters: 'Bad data is the most common reason leads get rejected.',
    get: 'Clean contacts before outreach starts.',
  },
  {
    id: 'verifysure',
    name: 'VerifySure AI',
    icon: PhoneCall,
    does: 'Confirms on a call that the buyer remembers the content and records their consent.',
    matters: 'Clients now ask for proof, not a form fill.',
    get: 'Audit-ready consent on every lead.',
  },
  {
    id: 'trustcheck',
    name: 'TrustCheck AI',
    icon: FileSearch,
    does: 'Reviews each call transcript for authority and compliance.',
    matters: "A lead from someone who can't buy is a wasted lead.",
    get: 'Only qualified, compliant leads move forward.',
  },
  {
    id: 'clearboard',
    name: 'ClearBoard AI',
    icon: LayoutDashboard,
    does: 'Live dashboards for pacing, validation and quality.',
    matters: 'Surprises at the end of a campaign are expensive.',
    get: 'You see where every campaign stands, any day.',
  },
  {
    id: 'predictwise',
    name: 'PredictWise AI',
    icon: TrendingUp,
    does: 'Predictive targeting that learns while the campaign runs.',
    matters: 'Early signals show which profiles get accepted.',
    get: 'Acceptance rates climb as the campaign goes on.',
  },
];

const problems = [
  { problem: 'Contacts that were never valid.', fix: 'LeadCert AI', href: '#leadcert' },
  { problem: "Buyers who don't remember the content, and no proof of consent.", fix: 'VerifySure AI', href: '#verifysure' },
  { problem: 'No view of any of it until the delivery file lands.', fix: 'ClearBoard AI', href: '#clearboard' },
];

const results = [
  { value: 'Under 12%', label: 'Final rejection rate' },
  { value: '40%', label: 'Faster verification cycles' },
  { value: '25+ hours', label: 'Manual QA saved every month' },
];

const audiences = [
  {
    title: 'For agencies',
    points: [
      'Fewer replacements eating your margin',
      'Consent proof you can pass straight to your client',
      'Live pacing for your client updates',
    ],
  },
  {
    title: 'For enterprise teams',
    points: [
      'Leads your sales team accepts',
      'A compliance trail for every lead',
      'Visibility without chasing a vendor for status',
    ],
  },
];

const services = [
  { label: 'B2B Lead Generation', href: '/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions' },
  { label: 'ABM', href: '/services/impact-sphere' },
  { label: 'Email Marketing', href: '/services/inbox-oracle-email-marketing-solutions' },
  { label: 'Data Solutions', href: '/services/data-dynamo' },
  { label: 'CQL', href: '/services/conversational-qualified-leads' },
];

const faqs = [
  {
    q: 'What is AI lead generation at PMG?',
    a: 'It is how we run every program. Proffer.ai validates, verifies, checks and monitors each lead, then our team confirms its work with two audits.',
  },
  {
    q: 'Do we need to change our workflow?',
    a: 'No. Proffer.ai runs on our side and fits around your existing campaign process.',
  },
  {
    q: 'Can we see pacing in real time?',
    a: 'Yes. ClearBoard AI shows pacing, validation and quality scores live throughout the campaign.',
  },
  {
    q: 'How does Proffer.ai improve lead quality?',
    a: 'It removes bad contacts before outreach, confirms recall and consent on a call, and checks authority on every transcript. Then two human audits confirm it.',
  },
  {
    q: 'How is GDPR consent recorded?',
    a: 'VerifySure AI records consent on the verification call, so you receive consent verified leads, each with an audit-ready consent log.',
  },
  {
    q: 'Is every lead still checked by a person?',
    a: 'Yes. Every lead goes through two human audit rounds after the AI checks.',
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

const eyebrow = 'text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4';
const h2 = 'text-3xl md:text-5xl font-bold text-white tracking-tight';

export default function ProfferAI() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#FECB0F]/10 to-transparent opacity-50" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FECB0F]/5 rounded-full blur-[100px] animate-pulse" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FECB0F]/30 bg-[#FECB0F]/5 text-[#FECB0F] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F]" />
                Built in-house by PMG B2B
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                Proffer.ai: <span className="text-[#FECB0F]">AI lead generation</span> that stops bad leads before delivery
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Five AI modules check every lead for accuracy, consent and authority. Then our team audits it twice. You see pacing and quality live, not at the end of the campaign.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Talk to our team
                </Link>
                <Link href="/contact-us" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                  See it on your next campaign
                </Link>
              </div>
            </div>

            {/* Pipeline visual: a lead travelling through the five modules */}
            <div className="relative max-w-6xl mx-auto mt-20" aria-label="The Proffer.ai pipeline">
              <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-gradient-to-r from-[#FECB0F]/10 via-[#FECB0F]/60 to-[#FECB0F]/10" />
              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-2">
                <li className="flex lg:flex-col items-center gap-4 lg:gap-3 text-left lg:text-center">
                  <span className="relative z-10 w-16 h-16 shrink-0 rounded-full border border-white/15 bg-[#050505] flex items-center justify-center text-[10px] font-bold tracking-widest uppercase text-gray-400">
                    Lead
                  </span>
                  <span className="text-sm text-gray-500">Enters the pipeline</span>
                </li>
                {modules.map((m) => (
                  <li key={m.id}>
                    <a href={`#${m.id}`} className="group flex lg:flex-col items-center gap-4 lg:gap-3 text-left lg:text-center">
                      <span className="relative z-10 w-16 h-16 shrink-0 rounded-full border border-[#FECB0F]/40 bg-black text-[#FECB0F] flex items-center justify-center group-hover:bg-[#FECB0F] group-hover:text-black transition-colors duration-300">
                        <m.icon className="w-6 h-6" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-[#FECB0F] transition-colors">{m.name}</span>
                    </a>
                  </li>
                ))}
                <li className="flex lg:flex-col items-center gap-4 lg:gap-3 text-left lg:text-center">
                  <span className="relative z-10 w-16 h-16 shrink-0 rounded-full bg-[#FECB0F] text-black flex items-center justify-center">
                    <Check className="w-7 h-7" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-gray-300">Two human audits, then delivery</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className={eyebrow}>The problem</div>
              <h2 className={`${h2} mb-6`}>Why good campaigns still deliver rejected leads</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                The campaign hits its numbers, then the rejections arrive. Proffer.ai was built to reduce lead rejection rate at the source, closing each of these gaps before a lead leaves PMG.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {problems.map((p) => (
                <div key={p.fix} className="flex flex-col p-8 rounded-[2rem] bg-black border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-300">
                  <p className="text-xl font-semibold text-white leading-snug mb-8 flex-1">{p.problem}</p>
                  <a href={p.href} className="inline-flex items-center gap-2 text-sm font-bold text-[#FECB0F] hover:underline">
                    Fixed by {p.fix}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className={eyebrow}>The modules</div>
              <h2 className={h2}>
                Five modules, one job: <span className="text-[#FECB0F]">leads that get accepted</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mt-6">
                From AI lead validation to live reporting, each module covers one step of AI lead generation.
              </p>
            </div>
            <div className="max-w-6xl mx-auto space-y-6">
              {modules.map((m, i) => (
                <article
                  key={m.id}
                  id={m.id}
                  className="scroll-mt-28 group grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 p-8 md:p-10 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-300"
                >
                  <div className="flex items-center lg:items-start lg:flex-col gap-4">
                    <span className="w-14 h-14 rounded-2xl bg-[#111] text-[#FECB0F] flex items-center justify-center group-hover:bg-[#FECB0F] group-hover:text-black transition-all duration-300">
                      <m.icon className="w-7 h-7" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Module 0{i + 1}</div>
                      <h3 className="text-2xl font-bold text-white">{m.name}</h3>
                    </div>
                  </div>
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <dt className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">What it does</dt>
                      <dd className="text-gray-300 leading-relaxed">{m.does}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Why it matters</dt>
                      <dd className="text-gray-300 leading-relaxed">{m.matters}</dd>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FECB0F]/10 border border-[#FECB0F]/20">
                      <dt className="text-xs font-bold tracking-widest uppercase text-[#FECB0F] mb-2">What you get</dt>
                      <dd className="text-white font-medium leading-relaxed">{m.get}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI + People Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={eyebrow}>AI + people</div>
                <h2 className={h2}>
                  AI does the screening. <span className="text-[#FECB0F]">People make the final call.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-400 leading-relaxed">
                  AI is fast, but it isn&apos;t accountable on its own. That&apos;s why our lead verification services don&apos;t stop at the AI: every lead that passes Proffer.ai is then audited twice by PMG&apos;s in-house team.
                </p>
                <ol className="space-y-4">
                  {['Audit one: contact accuracy', "Audit two: the campaign specs and the buyer's intent"].map((step, i) => (
                    <li key={step} className="flex items-center gap-4 p-5 rounded-2xl bg-black border border-white/5">
                      <span className="w-9 h-9 shrink-0 rounded-full bg-[#FECB0F] text-black font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="text-white font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-white font-semibold">Speed from the AI, accountability from the people.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className={eyebrow}>Results</div>
              <h2 className={h2}>What it changed for one agency</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((r) => (
                <div key={r.label} className="p-10 rounded-[2rem] bg-[#050505] border border-white/5 text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#FECB0F] mb-3">{r.value}</div>
                  <p className="text-gray-400">{r.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 italic mt-8">
              Results for an agency partner running enterprise tech campaigns.
            </p>
          </div>
        </section>

        {/* What It Means Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className={eyebrow}>Who it&apos;s for</div>
              <h2 className={h2}>What Proffer.ai means for you</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {audiences.map((a) => (
                <div key={a.title} className="p-10 rounded-[2rem] bg-black border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">{a.title}</h3>
                  <ul className="space-y-4">
                    {a.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#FECB0F]" aria-hidden="true" />
                        <span className="text-gray-300">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inside Every Service Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className={eyebrow}>No add-on</div>
              <h2 className={`${h2} mb-6`}>It runs inside every PMG service</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                You don&apos;t buy Proffer.ai separately. It&apos;s switched on in every program we run, bringing AI demand generation to each one.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-[#FECB0F] hover:text-black hover:border-[#FECB0F] transition-all duration-300"
                  >
                    {s.label}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <div className={eyebrow}>FAQ</div>
                <h2 className={h2}>Frequently asked questions</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl bg-black border border-white/5 open:border-[#FECB0F]/30 transition-colors">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="text-lg font-semibold text-white">{f.q}</span>
                      <ChevronDown className="w-5 h-5 shrink-0 text-[#FECB0F] transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="px-6 pb-5 text-gray-400 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto px-6 py-16 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                See Proffer.ai on your <span className="text-[#FECB0F]">next campaign</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Bring us a campaign and we&apos;ll show you what Proffer.ai catches. We reply within 24 hours.
              </p>
              <Link href="/contact-us" className="bg-[#FECB0F] text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
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
