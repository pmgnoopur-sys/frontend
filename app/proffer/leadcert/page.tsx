'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, AudioLines, Building2, Check, CheckCheck, CircleAlert, Crosshair, Database, Globe2, MailCheck, Phone, Radio, ShieldCheck, Target, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const validationChecks = [
  { label: 'SMTP Ping', category: 'Email reachability', icon: MailCheck, status: 'pass', detail: 'Check the receiving mail server before your outreach begins.', result: 'Mail server responded', description: 'SMTP checks help identify whether the destination server can accept email, bringing more confidence to every send.' },
  { label: 'MX / DNS Check', category: 'Domain integrity', icon: Globe2, status: 'pass', detail: 'Make sure there is a real destination behind every address.', result: 'Mail records found', description: 'Domain and mail-exchange checks look for the records needed to route email, helping catch invalid or misconfigured domains.' },
  { label: 'Bounce Simulation', category: 'Delivery risk', icon: AudioLines, status: 'pass', detail: 'Spot delivery risks before they become campaign rejections.', result: 'No bounce risk detected', description: 'Bounce simulation screens for potential delivery failures so risky records can be reviewed before they reach your outreach team.' },
  { label: 'Carrier Lookup', category: 'Phone intelligence', icon: Phone, status: 'pass', detail: 'Give your calling team a clearer picture of each number.', result: 'Carrier identified', description: 'Carrier lookup checks the network associated with a phone number, adding another layer of validation to your contact data.' },
  { label: 'DNC Screening', category: 'Contact screening', icon: ShieldCheck, status: 'pass', detail: 'Identify do-not-call matches before a number enters outreach.', result: 'No screening match', description: 'DNC screening helps flag restricted numbers for review. Screening supports your compliance process; it does not replace consent or legal requirements.' },
  { label: 'Disposable Detection', category: 'Data quality', icon: CircleAlert, status: 'flag', detail: 'Keep temporary inboxes from becoming permanent problems.', result: 'Temporary inbox flagged', description: 'Disposable address detection identifies temporary email services, helping your team separate short-lived inboxes from useful business contacts.' },
];

const focusStyle = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FECB0F]';

export default function LeadCertAI() {
  const [selectedCheck, setSelectedCheck] = useState(0);
  const activeCheck = validationChecks[selectedCheck];
  const ActiveIcon = activeCheck.icon;

  return (
    <div className="flex min-h-screen flex-col bg-[#080909] text-[#f5f5ee]">
      <Header />
      <main className="flex-1">
        {/* Hero: bullseye visual */}
        <section className="relative isolate overflow-hidden border-b border-white/10 pb-16 pt-28 md:pb-24 md:pt-36">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_25%,rgba(254,203,15,0.09),transparent_55%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
              <Link href="/proffer" className={`inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-[#FECB0F] ${focusStyle}`}>
                <ArrowLeft aria-hidden="true" size={15} /> Proffer.ai <span className="mx-2 text-zinc-600">/</span> <span className="text-zinc-200">LeadCert AI</span>
              </Link>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">The intelligence suite / 01</span>
            </div>
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
              <div>
                <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#FECB0F]/25 bg-[#FECB0F]/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FECB0F]">
                  <Crosshair aria-hidden="true" size={14} /> LeadCert AI · Validation engine
                </div>
                <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
                  Better leads.<br />Less guesswork.<br /><span className="text-[#FECB0F]">More possibility.</span>
                </h1>
                <p className="mt-7 max-w-md text-base leading-8 text-zinc-400 md:text-lg">
                  Turn questionable contacts into confident outreach. Six layers of validation. One cleaner path to your next conversation.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className={`inline-flex items-center justify-center gap-3 rounded-lg bg-[#FECB0F] px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-[#ffdc59] ${focusStyle}`}>
                    Talk to our team <ArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                  <a href="#validation-engine" className={`inline-flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.02] px-6 py-4 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5 ${focusStyle}`}>
                    Explore the engine <ArrowDown aria-hidden="true" size={16} />
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-2"><Check aria-hidden="true" size={14} className="text-[#FECB0F]" /> Cleaner data</span>
                  <span className="inline-flex items-center gap-2"><Check aria-hidden="true" size={14} className="text-[#FECB0F]" /> Fewer rejections</span>
                  <span className="inline-flex items-center gap-2"><Check aria-hidden="true" size={14} className="text-[#FECB0F]" /> Better outreach</span>
                </div>
              </div>

              {/* Bullseye graphic */}
              <div className="relative min-w-0 rounded-2xl border border-white/15 bg-[#111313] p-4 shadow-[0_30px_100px_-30px_rgba(254,203,15,0.12)] sm:p-6">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <span className="flex items-center gap-2 text-sm font-medium"><Crosshair aria-hidden="true" size={18} className="text-[#FECB0F]" /> LeadCert <span className="text-zinc-500">/ overview</span></span>
                  <span className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">Sample data</span>
                </div>
                <div className="relative flex h-[290px] items-center justify-center overflow-hidden sm:h-[330px]">
                  <div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-white/5 sm:h-80 sm:w-80" />
                  <div aria-hidden="true" className="absolute h-56 w-56 rounded-full border border-dashed border-[#FECB0F]/20 motion-safe:animate-[spin_60s_linear_infinite] sm:h-64 sm:w-64" />
                  <div aria-hidden="true" className="absolute h-px w-full bg-white/5" />
                  <div aria-hidden="true" className="absolute h-full w-px bg-white/5" />
                  <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border border-[#FECB0F]/40 bg-[#191b13] shadow-[0_0_60px_rgba(254,203,15,0.08)] sm:h-48 sm:w-48">
                    <ShieldCheck aria-hidden="true" size={21} className="mb-2 text-[#FECB0F]" />
                    <span className="text-6xl font-semibold tracking-[-0.06em]">96<span className="ml-1 text-lg font-normal tracking-normal text-zinc-500">/100</span></span>
                    <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">Lead accuracy score</span>
                  </div>
                  {/* darts */}
                  <span aria-hidden="true" className="absolute left-[14%] top-[26%] h-2 w-2 rounded-full bg-[#FECB0F] shadow-[0_0_16px_#FECB0F]" />
                  <span aria-hidden="true" className="absolute bottom-[22%] right-[16%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399]" />
                  <span className="absolute bottom-3 left-0 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-[#102019] px-3 py-2 text-[11px] text-emerald-300"><CheckCheck aria-hidden="true" size={14} /> 5 checks passed</span>
                  <span className="absolute right-0 top-4 flex items-center gap-2 rounded-lg border border-amber-400/20 bg-[#211c10] px-3 py-2 text-[11px] text-amber-300"><CircleAlert aria-hidden="true" size={14} /> 1 needs review</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {[{ icon: MailCheck, label: 'Email', value: 'Checked' }, { icon: Phone, label: 'Phone', value: 'Screened' }, { icon: ShieldCheck, label: 'DNC', value: 'Reviewed' }].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-lg bg-white/[0.025] p-3">
                      <Icon aria-hidden="true" size={16} className="mb-3 text-zinc-400" />
                      <p className="text-[11px] text-zinc-500">{label}</p>
                      <p className="mt-1 text-xs font-medium text-zinc-200">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] leading-relaxed text-zinc-500">Illustrative product preview. No contact data is being processed.</p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-24">
              {[
                { value: '25%', label: 'fewer lead rejections', prefix: 'Up to' },
                { value: '06', label: 'layers of validation', prefix: 'Built in' },
                { value: '100%', label: 'contacts screened', prefix: 'Every contact' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-5 px-4 py-7 md:px-8">
                  <span className="text-4xl font-semibold tracking-tight text-[#FECB0F] md:text-5xl">{stat.value}</span>
                  <div><p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">{stat.prefix}</p><p className="text-sm text-zinc-300">{stat.label}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live validation checklist */}
        <section id="validation-engine" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FECB0F]">01 / Under the hood</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Every detail checked.<br /><span className="text-zinc-500">Every opportunity counts.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-zinc-400">Go beyond a name and an email. Explore the six checks that help keep bad data out of your pipeline.</p>
            </div>
            <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#101212] lg:grid-cols-[1fr_1.1fr]">
              <div className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r sm:p-5" role="group" aria-label="Explore validation checks">
                {validationChecks.map((check, i) => {
                  const Icon = check.icon;
                  return (
                    <button key={check.label} type="button" onClick={() => setSelectedCheck(i)} aria-pressed={selectedCheck === i} aria-controls="validation-detail" className={`my-1 flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-colors ${focusStyle} ${selectedCheck === i ? 'border-[#FECB0F]/30 bg-[#FECB0F]/[0.07]' : 'border-transparent hover:bg-white/[0.04]'}`}>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${selectedCheck === i ? 'bg-[#FECB0F] text-black' : 'bg-white/5 text-zinc-400'}`}><Icon aria-hidden="true" size={19} /></span>
                      <span className="flex-1"><span className="block text-sm font-medium">{check.label}</span><span className="mt-1 block text-xs text-zinc-400">{check.category}</span></span>
                      <ArrowUpRight aria-hidden="true" size={17} className={selectedCheck === i ? 'text-[#FECB0F]' : 'text-zinc-600'} />
                    </button>
                  );
                })}
              </div>
              <div id="validation-detail" aria-live="polite" aria-atomic="true" className="flex flex-col justify-between gap-8 bg-[radial-gradient(ellipse_at_top_right,rgba(254,203,15,0.05),transparent_70%)] p-6 sm:p-10 lg:p-12">
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <ActiveIcon aria-hidden="true" size={36} strokeWidth={1.25} className="text-[#FECB0F]" />
                    <span className="font-mono text-xs text-zinc-500">CHECK 0{selectedCheck + 1} / 06</span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{activeCheck.detail}</h3>
                  <p className="mt-5 text-sm leading-7 text-zinc-400">{activeCheck.description}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-5 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500"><span>Validation output</span><span>Illustrative result</span></div>
                  <div className={`flex items-center gap-3 text-sm ${activeCheck.status === 'pass' ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {activeCheck.status === 'pass' ? <CheckCheck aria-hidden="true" size={20} /> : <CircleAlert aria-hidden="true" size={20} />}
                    <span>{activeCheck.result}</span>
                  </div>
                  <div aria-hidden="true" className="mt-5 flex gap-1">
                    {Array.from({ length: 24 }, (_, i) => <span key={i} className={`h-5 flex-1 rounded-sm ${activeCheck.status === 'pass' ? 'bg-emerald-400/30' : i < 18 ? 'bg-amber-400/30' : 'bg-white/5'}`} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { icon: Database, title: 'Start with your contacts', text: 'Put your lead data through a consistent validation process.' },
                { icon: Radio, title: 'Check the signals', text: 'Screen email, domain, phone, and contact-quality signals.' },
                { icon: Target, title: 'Reach out with clarity', text: 'Review flagged records and focus on better-quality leads.' },
              ].map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="flex gap-4 px-2 py-4">
                  <Icon aria-hidden="true" size={20} className="mt-1 shrink-0 text-[#FECB0F]" />
                  <div><p className="mb-2 text-sm font-medium"><span className="mr-2 font-mono text-zinc-500">0{i + 1}.</span>{title}</p><p className="text-xs leading-6 text-zinc-400">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters split */}
        <section className="border-y border-white/10 bg-[#0d0f0f] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FECB0F]">02 / Built for your side of the table</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Better data. Shared advantage.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { icon: Users, audience: 'For agencies', title: 'Deliver leads. Not replacements.', text: 'Protect your client relationships with contact data that stands up to scrutiny.', benefits: ['Fewer rejected leads', 'Reduced replacement costs', 'Stronger SLA performance'] },
                { icon: Building2, audience: 'For enterprises', title: 'More conversations. Less chasing.', text: 'Give your sales team a cleaner starting point, so their effort goes into the right opportunities.', benefits: ['Focus on reachable contacts', 'Less time lost to bad data', 'More confident outreach'] },
              ].map(({ icon: Icon, audience, title, text, benefits }) => (
                <article key={audience} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141616] p-7 transition-colors hover:border-[#FECB0F]/30 md:p-10">
                  <Icon aria-hidden="true" size={130} strokeWidth={0.7} className="pointer-events-none absolute -right-6 -top-4 text-white/[0.035] transition-colors group-hover:text-[#FECB0F]/[0.07]" />
                  <span className="mb-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#FECB0F]"><Icon aria-hidden="true" size={17} />{audience}</span>
                  <h3 className="relative max-w-sm text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">{text}</p>
                  <ul className="mt-8 space-y-4 border-t border-white/10 pt-6">
                    {benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 text-sm text-zinc-300"><Check aria-hidden="true" size={16} className="text-[#FECB0F]" />{benefit}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome banner */}
        <section className="px-6 py-20 md:py-24 lg:px-8">
          <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-2xl bg-[#FECB0F] p-8 text-[#12130b] md:grid-cols-[1fr_auto] md:items-center md:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 h-[480px] w-[480px] rounded-full border-[60px] border-black/[0.04]" />
            <div className="relative">
              <p className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em]"><Zap aria-hidden="true" size={16} /> Less friction. More forward.</p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Your next great campaign<br />starts with better data.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-black/70">Up to 25% fewer lead rejections. Higher acceptance rates. A clearer path to ROI.</p>
            </div>
            <Link href="/contact" className="relative inline-flex w-fit items-center gap-5 rounded-lg bg-[#12130b] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#303124] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Let&apos;s talk LeadCert <ArrowUpRight aria-hidden="true" size={19} /></Link>
          </div>
        </section>

        {/* Nav */}
        <section className="border-t border-white/10 py-10">
          <nav aria-label="Proffer modules" className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-8">
            <Link href="/proffer/predictwise" className={`group flex items-center gap-4 transition-colors hover:text-[#FECB0F] ${focusStyle}`}>
              <ArrowLeft aria-hidden="true" size={20} /><span><span className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Previous module</span><span className="text-sm font-medium">PredictWise AI</span></span>
            </Link>
            <Link href="/proffer" className={`rounded-full border border-white/15 px-6 py-3 text-xs font-medium text-zinc-300 transition-colors hover:border-[#FECB0F]/40 hover:text-[#FECB0F] ${focusStyle}`}>Explore all modules</Link>
            <Link href="/proffer/verifysure" className={`group flex items-center gap-4 transition-colors hover:text-[#FECB0F] ${focusStyle}`}>
              <span className="text-right"><span className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Up next / Module 02</span><span className="text-sm font-medium">VerifySure AI</span></span><ArrowRight aria-hidden="true" size={20} />
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
    </div>
  );
}
