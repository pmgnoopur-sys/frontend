import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Layers,
  Plug,
  RefreshCw,
  Server,
  ShieldCheck,
  ShoppingCart,
  UserCheck,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SaaS & IT Lead Generation for Tech Companies | PMG B2B',
  description: 'SaaS and IT lead generation that reaches CIOs, CISOs and tech buyers, targeted by tech stack and install base. Verified leads in 48 hours.',
};

const roles = [
  { label: 'CIO and IT leadership', icon: Server },
  { label: 'CISO and security', icon: ShieldCheck },
  { label: 'Data and analytics', icon: Database },
  { label: 'Cloud and infrastructure', icon: Cloud },
  { label: 'DevOps and engineering', icon: Code2 },
  { label: 'IT procurement', icon: ShoppingCart },
  { label: 'Business leaders who sign off', icon: Briefcase },
];

const fits = [
  { label: 'A replacement', icon: RefreshCw },
  { label: 'An add-on', icon: Layers },
  { label: 'An integration', icon: Plug },
];

const hurdles = [
  'IT leaders get pitched all day.',
  'Buying groups are large.',
  'Cycles are long.',
  'Generic outreach is ignored.',
];

const programs = [
  { label: 'Content syndication', desc: 'For whitepapers and technical guides.', href: '/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions#content-syndication' },
  { label: 'MQL, SQL and BANT', desc: 'Programs qualified on MQL, SQL or BANT criteria.', href: '/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions#mql-sql-generation' },
  { label: 'ABM', desc: 'On named accounts.', href: '/services/impact-sphere' },
  { label: 'Appointment setting', desc: 'With IT leaders.', href: '/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions#appointment-setting' },
  { label: 'CQL assessments', desc: 'Readiness and maturity assessments.', href: '/services/conversational-qualified-leads' },
];

const stats = [
  { value: '200+', label: 'Campaigns managed, most for tech brands' },
  { value: 'Under 12%', label: 'Rejections (agency result)' },
  { value: '25M+', label: 'US contacts' },
  { value: '48h', label: 'To first leads' },
];

const trust = ['ISO 27001', 'GDPR', 'CCPA', 'Two audits per lead', 'In-house callers in US business hours'];

const useCases = [
  { label: 'Reach the full buying group', href: '/services/impact-sphere' },
  { label: 'Turn gated content into sales conversations', href: '/services/conversational-qualified-leads' },
  { label: 'Bring lead rejections down', href: '/our-services/proffer-ai' },
];

const faqs = [
  {
    q: 'Which tech roles can you reach?',
    a: 'CIOs, CISOs, IT, security, data, cloud, infrastructure and engineering leaders, plus the business leaders who approve purchases.',
  },
  {
    q: 'Can you target by tech stack or install base?',
    a: 'Yes. We can target companies by the technology they already use.',
  },
  {
    q: 'Do you run programs for cybersecurity and cloud brands?',
    a: 'Yes. Security, cloud, data and infrastructure brands are a large part of our work.',
  },
  {
    q: 'How do you verify IT decision makers?',
    a: 'Our in-house team confirms role and authority on a call, and TrustCheck AI reviews the transcript.',
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

export default function TechnologySaaS() {
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
                Technology &amp; SaaS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                <span className="text-[#FECB0F]">SaaS and IT lead generation</span> that reaches real tech buyers
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                We run lead programs for software, cloud, security and infrastructure brands, reaching the IT and business leaders who choose them, down to the tech they already run.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Talk to our team
                </Link>
                <a href="#tech-stack" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                  Target by tech stack
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Reach Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className={eyebrow}>Target audience</div>
              <h2 className={h2}>Who we reach</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {roles.map((r) => (
                <div key={r.label} className="group flex items-center gap-4 p-6 rounded-2xl bg-black border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-300">
                  <span className="w-12 h-12 shrink-0 rounded-xl bg-[#111] text-[#FECB0F] flex items-center justify-center group-hover:bg-[#FECB0F] group-hover:text-black transition-all duration-300">
                    <r.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <span className="text-white font-medium">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Targeting Section */}
        <section id="tech-stack" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-[#FECB0F]/30 bg-gradient-to-br from-[#FECB0F]/10 via-[#050505] to-black p-8 md:p-16">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FECB0F]/10 rounded-full blur-[100px]" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={eyebrow}>Tech stack &amp; install base</div>
                  <h2 className={`${h2} mb-6`}>
                    Target by the tech <span className="text-[#FECB0F]">they already run</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Selling a replacement, an add-on or an integration? We can target buyers by tech stack and install base, so your campaign reaches companies already running the technology that makes them a fit.
                  </p>
                </div>
                <div className="space-y-4">
                  {fits.map((f) => (
                    <div key={f.label} className="flex items-center gap-5 p-6 rounded-2xl bg-black/70 border border-white/10">
                      <span className="w-12 h-12 shrink-0 rounded-xl bg-[#FECB0F] text-black flex items-center justify-center">
                        <f.icon className="w-6 h-6" aria-hidden="true" />
                      </span>
                      <div>
                        <div className="text-xs font-bold tracking-widest uppercase text-gray-500">Selling</div>
                        <div className="text-xl font-bold text-white">{f.label}</div>
                      </div>
                    </div>
                  ))}
                  <p className="flex items-center gap-2 pt-2 text-sm text-gray-400">
                    <UserCheck className="w-4 h-4 text-[#FECB0F]" aria-hidden="true" />
                    Reach companies already running the tech that makes them a fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={eyebrow}>Challenge</div>
                <h2 className={`${h2} mb-6`}>Why tech buyers are hard to reach</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Reaching them takes precise targeting, relevant content and follow-up across email, phone and LinkedIn.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hurdles.map((h) => (
                  <li key={h} className="p-6 rounded-2xl bg-black border border-white/5 text-white font-medium leading-snug">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className={eyebrow}>Programs</div>
              <h2 className={h2}>Programs that work for tech brands</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="group flex flex-col p-8 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FECB0F] transition-colors">{p.label}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FECB0F]">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className={eyebrow}>Proof</div>
              <h2 className={`${h2} mb-6`}>Proof built into every lead</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Every lead passes{' '}
                <Link href="/our-services/proffer-ai" className="text-[#FECB0F] hover:underline">Proffer.ai</Link>{' '}
                and two audits before it reaches you.
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="p-8 rounded-[2rem] bg-black border border-white/5 text-center">
                  <div className="text-3xl md:text-4xl font-black text-[#FECB0F] mb-2">{s.value}</div>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4 mt-12 pt-8 border-t border-white/10">
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-2 text-gray-400">
                  <Check className="w-5 h-5 text-[#FECB0F]" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Use Cases Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className={eyebrow}>Use cases</div>
              <h2 className={h2}>Related use cases</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <Link
                  key={u.label}
                  href={u.href}
                  className="group flex items-center justify-between gap-4 p-8 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-white group-hover:text-[#FECB0F] transition-colors">{u.label}</span>
                  <ArrowRight className="w-5 h-5 shrink-0 text-[#FECB0F] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
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
                Reach the <span className="text-[#FECB0F]">tech buyers</span> your campaign needs
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">We&apos;ll reply within 24 hours.</p>
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
