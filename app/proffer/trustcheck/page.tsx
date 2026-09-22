'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, AudioLines, BadgeCheck, BriefcaseBusiness, Building2, Check, CheckCheck, ChevronDown, CircleAlert, Download, FileCheck2, Fingerprint, GitBranch, MessageSquareText, ScanLine, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Signal = 'authority' | 'consent' | 'risk';
type Scenario = 'complete' | 'flagged';

const signals: { id: Signal; label: string; icon: typeof ShieldCheck }[] = [
  { id: 'authority', label: 'Job authority', icon: BriefcaseBusiness },
  { id: 'consent', label: 'Consent', icon: MessageSquareText },
  { id: 'risk', label: 'Compliance gaps', icon: ShieldCheck },
];

const scenarios = {
  complete: {
    label: 'Complete lead', record: 'TC-DEMO-001', status: 'Ready for delivery review',
    transcript: [
      { time: '00:12', speaker: 'Agent', text: 'Could you confirm your role and involvement in selecting a vendor?', signal: 'authority' },
      { time: '00:19', speaker: 'Prospect', text: 'I’m the VP of Procurement. I approve vendor spend and make the final selection.', signal: 'authority' },
      { time: '00:34', speaker: 'Agent', text: 'May our team contact you by email about the solution we discussed?', signal: 'consent' },
      { time: '00:41', speaker: 'Prospect', text: 'Yes, you may email me about this solution at my work address.', signal: 'consent' },
    ],
    findings: {
      authority: { status: 'Authority identified', evidence: '“I approve vendor spend and make the final selection.”', detail: 'The prospect states both their job role and decision-making responsibility.', action: 'Retain the role and decision-making statement in the lead record.', time: '00:19' },
      consent: { status: 'Consent language found', evidence: '“You may email me about this solution at my work address.”', detail: 'The response names a contact channel and ties permission to the solution discussed.', action: 'Preserve the wording and scope for your team’s consent review.', time: '00:41' },
      risk: { status: 'No gaps in this example', evidence: 'Authority and contact permission are both present in the sample.', detail: 'Neither of the two illustrated checks is missing. This is not a complete legal compliance assessment.', action: 'Proceed to your delivery review with the supporting evidence attached.', time: '00:19 / 00:41' },
    },
  },
  flagged: {
    label: 'Needs follow-up', record: 'TC-DEMO-002', status: 'Hold for clarification',
    transcript: [
      { time: '00:12', speaker: 'Agent', text: 'Could you confirm your role and involvement in selecting a vendor?', signal: 'authority' },
      { time: '00:19', speaker: 'Prospect', text: 'I collect information for the team. My director handles the budget and final decision.', signal: 'authority' },
      { time: '00:34', speaker: 'Agent', text: 'May our team contact you by email about the solution we discussed?', signal: 'consent' },
      { time: '00:41', speaker: 'Prospect', text: 'I need to check internally first. Please wait until I get back to you.', signal: 'consent' },
    ],
    findings: {
      authority: { status: 'Decision authority unclear', evidence: '“My director handles the budget and final decision.”', detail: 'The contact gathers information but does not claim budget or purchasing authority.', action: 'Clarify the contact’s role and identify the decision-maker before delivery.', time: '00:19' },
      consent: { status: 'Permission not established', evidence: '“Please wait until I get back to you.”', detail: 'The prospect has asked the team to wait rather than granting permission for email follow-up.', action: 'Hold outreach and resolve the permission gap through your approved process.', time: '00:41' },
      risk: { status: 'Two gaps need review', evidence: 'Decision authority is unconfirmed and contact permission is not established.', detail: 'An incomplete lead should not be treated as delivery-ready simply because a conversation took place.', action: 'Flag the lead for clarification and retain both findings in its record.', time: '00:19 / 00:41' },
    },
  },
};

const capabilities = [
  { icon: ScanLine, step: '01', title: 'Read the conversation', text: 'AI reviews call transcripts automatically, turning unstructured dialogue into a focused quality review.', footer: 'From conversation to context' },
  { icon: Fingerprint, step: '02', title: 'Find the evidence', text: 'Identify job authority, consent keywords, and potential compliance gaps in what was actually said.', footer: 'Authority · Consent · Gaps' },
  { icon: GitBranch, step: '03', title: 'Catch the exceptions', text: 'Flag risky or incomplete leads before delivery, so missing information becomes a follow-up—not a client dispute.', footer: 'Review before release' },
  { icon: FileCheck2, step: '04', title: 'Keep a clear record', text: 'Create a simple compliance record for every lead, bringing the findings and supporting evidence together.', footer: 'One lead. One evidence trail.' },
];

const faqs = [
  { question: 'What does TrustCheck look for in a call?', answer: 'TrustCheck reviews the transcript for job role and decision authority, consent language, and missing or risky information. The goal is to make important evidence easier to find before a lead is delivered.' },
  { question: 'What happens when a lead is incomplete?', answer: 'Risky or incomplete leads are flagged for review before delivery. Your team can use the findings to clarify authority, resolve consent gaps, and decide the appropriate next step.' },
  { question: 'What belongs in a compliance record?', answer: 'A useful record connects the lead to its review findings and supporting transcript evidence. The interactive example above shows authority, consent, identified gaps, and a recommended next step in one place.' },
  { question: 'Does an AI review guarantee compliance?', answer: 'No. Identifying keywords or statements is not a legal determination. TrustCheck supports evidence-based review; your team remains responsible for applicable laws, consent requirements, and delivery policies.' },
];

const focusStyle = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300';

export default function TrustCheckAI() {
  const [scenario, setScenario] = useState<Scenario>('complete');
  const [signal, setSignal] = useState<Signal>('authority');
  const sample = scenarios[scenario];
  const finding = sample.findings[signal];
  const isFlagged = scenario === 'flagged';
  const recordText = [
    'TRUSTCHECK AI — ILLUSTRATIVE COMPLIANCE RECORD',
    'Sample data only. Not a legal compliance certification.',
    `Record: ${sample.record}`,
    `Disposition: ${sample.status}`,
    ...signals.map(({ id, label }) => `\n${label}\nFinding: ${sample.findings[id].status}\nEvidence: ${sample.findings[id].evidence}\nTranscript time: ${sample.findings[id].time}\nNext step: ${sample.findings[id].action}`),
    '\nSAMPLE TRANSCRIPT',
    ...sample.transcript.map((line) => `${line.time} ${line.speaker}: ${line.text}`),
  ].join('\n');

  return (
    <div className="flex min-h-screen flex-col bg-[#080d0b] text-[#f0f5f1]">
      <Header />
      <main className="flex-1 selection:bg-emerald-300 selection:text-black">
        {/* Hero: checkmark seal */}
        <section className="relative isolate overflow-hidden border-b border-white/10 pb-16 pt-28 md:pb-24 md:pt-36">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(52,211,153,0.12),transparent_60%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#a7f3d0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
              <Link href="/proffer" className={`inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-emerald-300 ${focusStyle}`}><ArrowLeft aria-hidden="true" size={15} /> Proffer.ai <span className="mx-2 text-zinc-600">/</span><span className="text-white">TrustCheck AI</span></Link>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200/50">Module 03 / The compliance layer</span>
            </div>
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-200"><ShieldCheck aria-hidden="true" size={15} /> TrustCheck AI</div>
                <h1 className="text-5xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-6xl xl:text-7xl">Trust isn’t a claim.<br /><span className="text-emerald-300">It’s in the<br />conversation.</span></h1>
                <p className="mt-7 max-w-md text-base leading-8 text-zinc-400 md:text-lg">Turn call transcripts into clear evidence of authority and consent. Catch the gaps before delivery—not after the client asks.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#review-workspace" className={`inline-flex items-center gap-4 rounded-lg bg-emerald-300 px-6 py-4 text-sm font-semibold text-[#082419] transition-colors hover:bg-emerald-200 ${focusStyle}`}>Explore a sample review <ArrowDown aria-hidden="true" size={17} /></a>
                  <Link href="/contact" className={`inline-flex items-center gap-3 rounded-lg border border-white/15 px-6 py-4 text-sm font-medium transition-colors hover:bg-white/5 ${focusStyle}`}>Talk to our team <ArrowUpRight aria-hidden="true" size={17} /></Link>
                </div>
                <p className="mt-7 flex items-center gap-2 text-xs text-zinc-400"><CheckCheck aria-hidden="true" size={16} className="text-emerald-300" /> Authority identified. Consent surfaced. Risk flagged.</p>
              </div>

              {/* Seal graphic */}
              <div className="relative min-w-0 py-4 sm:px-3">
                <div aria-hidden="true" className="absolute inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative rounded-2xl border border-white/15 bg-[#101c17] p-5 shadow-2xl sm:p-7">
                  <div className="mb-7 flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-sm font-semibold"><AudioLines aria-hidden="true" size={18} className="text-emerald-300" /> Conversation intelligence</span><span className="rounded border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-400">Illustration</span></div>
                  <div aria-hidden="true" className="flex h-14 items-center justify-center gap-1 overflow-hidden rounded-lg bg-black/20 px-4">
                    {Array.from({ length: 48 }, (_, i) => <span key={i} className="w-1 shrink-0 rounded-full bg-emerald-300/60 motion-safe:animate-pulse" style={{ height: `${8 + ((i * 13 + 7) % 34)}px`, animationDelay: `${(i % 8) * 160}ms` }} />)}
                  </div>
                  <div className="my-5 space-y-3 border-l border-emerald-300/20 pl-4 text-sm leading-7 text-zinc-400">
                    <p>“I <span className="rounded bg-emerald-300/10 px-1.5 py-1 text-emerald-200">approve vendor spend</span> and make the final selection.”</p>
                    <p>“Yes, <span className="rounded bg-sky-300/10 px-1.5 py-1 text-sky-200">you may email me</span> about this solution.”</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px]"><span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/20 px-3 py-1.5 text-emerald-200"><Check aria-hidden="true" size={12} /> Authority signal</span><span className="inline-flex items-center gap-1 rounded-full border border-sky-300/20 px-3 py-1.5 text-sky-200"><Check aria-hidden="true" size={12} /> Consent language</span></div>
                  <div aria-hidden="true" className="mx-auto flex h-12 w-px items-end justify-center bg-gradient-to-b from-emerald-300/10 to-emerald-300/60"><ArrowDown size={14} className="shrink-0 text-emerald-300" /></div>
                  <div className="mt-3 flex items-center gap-4 rounded-xl bg-[#e8f0e8] p-5 text-[#163525] shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-900/20"><FileCheck2 aria-hidden="true" size={25} strokeWidth={1.5} /></div>
                    <div className="min-w-0 flex-1"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-950/60">From words to evidence</p><p className="mt-1 text-sm font-semibold">One clear compliance record</p></div>
                    <BadgeCheck aria-hidden="true" size={24} className="hidden shrink-0 sm:block" />
                  </div>
                  <p className="mt-4 text-[10px] text-zinc-500">Illustrative transcript and findings. No live call is being analyzed.</p>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-5 border-t border-white/10 pt-7 md:mt-20 md:grid-cols-4">
              {[{ icon: MessageSquareText, label: 'AI transcript review' }, { icon: BriefcaseBusiness, label: 'Authority identification' }, { icon: ShieldCheck, label: 'Pre-delivery risk flags' }, { icon: FileCheck2, label: 'Lead-level evidence' }].map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 text-xs text-zinc-300"><Icon aria-hidden="true" size={17} className="shrink-0 text-emerald-300/70" />{label}</div>)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">01 / What it does</p><h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">A quality checkpoint.<br /><span className="text-zinc-500">Not another guessing game.</span></h2></div><p className="max-w-sm text-sm leading-7 text-zinc-400">From the first review to the final handoff, every step connects a lead to the evidence behind it.</p></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(({ icon: Icon, step, title, text, footer }) => <article key={step} className="group flex flex-col rounded-xl border border-white/10 bg-[#101713] p-6 transition-colors hover:border-emerald-300/30"><div className="mb-9 flex items-center justify-between"><Icon aria-hidden="true" size={25} strokeWidth={1.5} className="text-emerald-300" /><span className="font-mono text-xs text-zinc-600">/{step}</span></div><h3 className="text-lg font-semibold tracking-tight">{title}</h3><p className="mb-8 mt-3 flex-1 text-sm leading-7 text-zinc-400">{text}</p><p className="border-t border-white/10 pt-4 font-mono text-[10px] text-emerald-200/70">{footer}</p></article>)}
            </div>
          </div>
        </section>

        {/* Transcript mockup */}
        <section id="review-workspace" className="scroll-mt-28 border-y border-white/10 bg-[#0b120e] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">02 / The evidence room</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Don’t just see a flag.<br /><span className="text-emerald-200">See the reason behind it.</span></h2></div><p className="max-w-sm text-sm leading-7 text-zinc-400">Switch between sample leads. Select a signal to trace the finding back to the conversation.</p></div>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#101713] shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 px-5 py-5 sm:px-7">
                <div><p className="flex items-center gap-2 text-sm font-semibold"><ScanLine aria-hidden="true" size={18} className="text-emerald-300" /> TrustCheck workspace</p><p className="mt-1.5 font-mono text-[10px] text-zinc-500">INTERACTIVE DEMO / FICTIONAL DATA</p></div>
                <div role="group" aria-label="Sample lead scenario" className="flex flex-wrap gap-1 rounded-lg border border-white/10 bg-black/20 p-1">
                  {(['complete', 'flagged'] as const).map((key) => <button key={key} type="button" aria-pressed={scenario === key} aria-controls="review-content" onClick={() => setScenario(key)} className={`rounded-md px-4 py-2.5 text-xs font-medium transition-colors ${focusStyle} ${scenario === key ? 'bg-[#e8f0e8] text-[#163525]' : 'text-zinc-400 hover:text-white'}`}>{scenarios[key].label}</button>)}
                </div>
              </div>
              <div role="group" aria-label="Review signal" className="flex flex-wrap gap-2 border-b border-white/10 px-5 py-4 sm:px-7">
                {signals.map(({ id, label, icon: Icon }) => <button key={id} type="button" aria-pressed={signal === id} aria-controls="review-content" onClick={() => setSignal(id)} className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs transition-colors ${focusStyle} ${signal === id ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200' : 'border-transparent text-zinc-400 hover:bg-white/5 hover:text-white'}`}><Icon aria-hidden="true" size={14} />{label}</button>)}
              </div>
              <div id="review-content" className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="min-w-0 border-b border-white/10 p-5 lg:border-b-0 lg:border-r sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500"><span>Call excerpt / {sample.record}</span><span>00:12 — 00:41</span></div>
                  <ol className="space-y-3">
                    {sample.transcript.map((line, i) => {
                      const highlighted = line.speaker === 'Prospect' && (signal === line.signal || signal === 'risk');
                      return <li key={`${scenario}-${i}`} className={`rounded-xl border p-4 transition-colors ${highlighted ? isFlagged ? 'border-amber-300/30 bg-amber-300/[0.06]' : 'border-emerald-300/30 bg-emerald-300/[0.06]' : 'border-transparent bg-white/[0.02]'}`}><div className="mb-2 flex items-center gap-3"><span className="font-mono text-[10px] text-zinc-500">{line.time}</span><span className={`text-xs font-medium ${line.speaker === 'Prospect' ? 'text-white' : 'text-zinc-400'}`}>{line.speaker}</span>{highlighted && <span className={`ml-auto text-[9px] uppercase tracking-wider ${isFlagged ? 'text-amber-200' : 'text-emerald-200'}`}>Evidence</span>}</div><p className={`text-sm leading-7 ${highlighted ? 'text-zinc-100' : 'text-zinc-400'}`}>{line.text}</p></li>;
                    })}
                  </ol>
                  <p className="mt-5 flex items-start gap-2 text-[11px] leading-5 text-zinc-500"><Sparkles aria-hidden="true" size={14} className="mt-0.5 shrink-0" />Highlighted statements support the selected finding. These examples are prewritten, not generated by a live AI service.</p>
                </div>
                <div className="flex min-w-0 flex-col justify-between gap-7 p-5 sm:p-7" aria-live="polite" aria-atomic="true">
                  <div><p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Finding / {signals.find((item) => item.id === signal)?.label}</p><div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] ${isFlagged ? 'bg-amber-300/10 text-amber-200' : 'bg-emerald-300/10 text-emerald-200'}`}>{isFlagged ? <CircleAlert aria-hidden="true" size={14} /> : <CheckCheck aria-hidden="true" size={14} />}{finding.status}</div><blockquote className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">{finding.evidence}</blockquote><p className="mt-4 text-sm leading-7 text-zinc-400">{finding.detail}</p></div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-5"><p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Recommended next step</p><p className="text-sm leading-7 text-zinc-200">{finding.action}</p><div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-[10px] text-zinc-500"><span>Source: sample transcript</span><span className="font-mono">{finding.time}</span></div></div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid items-center gap-8 rounded-2xl bg-[#e8f0e8] p-6 text-[#173425] md:grid-cols-[0.85fr_1.15fr] sm:p-8 lg:p-10">
              <div><span className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-900/70"><FileCheck2 aria-hidden="true" size={16} /> The compliance record</span><h3 className="text-3xl font-semibold leading-tight tracking-tight">The conversation ends.<br />The evidence stays.</h3><p className="mt-4 max-w-sm text-sm leading-7 text-emerald-950/70">A simple record brings authority, consent, and review findings together for every lead. This sample updates with your selected scenario.</p><a href={`data:text/plain;charset=utf-8,${encodeURIComponent(recordText)}`} download={`${sample.record}-sample.txt`} className="mt-6 inline-flex items-center gap-3 rounded-lg border border-emerald-950/25 px-5 py-3 text-xs font-semibold transition-colors hover:bg-emerald-950/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-900"><Download aria-hidden="true" size={15} />Download sample record</a></div>
              <div className="rounded-xl border border-emerald-950/15 bg-white/50 p-5 sm:p-6"><div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-950/10 pb-4"><span className="font-mono text-xs font-semibold">{sample.record}</span><span className="font-mono text-[9px] uppercase tracking-widest text-emerald-950/60">Sample / not a certification</span></div><dl className="space-y-3 text-xs">{signals.map(({ id, label }) => <div key={id} className="flex flex-wrap justify-between gap-2"><dt className="text-emerald-950/65">{label}</dt><dd className={`font-medium ${isFlagged ? 'text-amber-900' : 'text-emerald-900'}`}>{sample.findings[id].status}</dd></div>)}</dl><div className="mt-5 flex items-center gap-2 border-t border-emerald-950/10 pt-4 text-sm font-semibold">{isFlagged ? <CircleAlert aria-hidden="true" size={18} /> : <ShieldCheck aria-hidden="true" size={18} />}{sample.status}</div></div>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-10"><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">03 / Why it matters</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Different teams.<br /><span className="text-zinc-500">The same need for trust.</span></h2></div>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { icon: Users, audience: 'For agencies', title: 'Fewer disputes. Stronger delivery.', text: 'When a client questions a lead, answer with the conversation—not another round of guesswork.', benefits: ['Fewer client disputes with evidence behind each lead', 'Stronger SLA performance through pre-delivery review', 'Clearer handoffs when a lead needs follow-up'], outcome: 'Deliver confidence alongside the lead.' },
                { icon: Building2, audience: 'For enterprises', title: 'Evidence your team can stand behind.', text: 'Bring authority and consent into view with an audit-ready record that makes review easier to follow.', benefits: ['Documented evidence of role and decision authority', 'Consent language preserved for internal review', 'Visible gaps before leads enter sales conversations'], outcome: 'Make quality easier to verify.' },
              ].map(({ icon: Icon, audience, title, text, benefits, outcome }) => <article key={audience} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101713] p-7 md:p-10"><Icon aria-hidden="true" size={150} strokeWidth={0.7} className="pointer-events-none absolute -right-6 -top-5 text-emerald-100/[0.04]" /><p className="mb-7 flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-200"><Icon aria-hidden="true" size={17} />{audience}</p><h3 className="relative max-w-sm text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">{text}</p><ul className="my-8 space-y-4">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-zinc-300"><Check aria-hidden="true" size={16} className="mt-1 shrink-0 text-emerald-300" />{benefit}</li>)}</ul><p className="border-t border-white/10 pt-5 text-sm font-medium text-emerald-200">{outcome}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">A little more clarity</p><h2 className="text-3xl font-semibold tracking-tight">Good questions.<br />Clear answers.</h2></div><div className="divide-y divide-white/10 border-y border-white/10">{faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className={`flex cursor-pointer list-none items-center justify-between gap-5 rounded-sm text-sm font-medium [&::-webkit-details-marker]:hidden ${focusStyle}`}>{faq.question}<ChevronDown aria-hidden="true" size={18} className="shrink-0 text-emerald-300 transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary><p className="mt-4 max-w-2xl pr-7 text-sm leading-7 text-zinc-400">{faq.answer}</p></details>)}</div></div></section>

        {/* Outcome */}
        <section className="px-6 pb-20 pt-4 md:pb-24 lg:px-8"><div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-2xl border border-emerald-300/20 bg-[#123326] px-7 py-14 text-center md:px-14 md:py-20"><div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(52,211,153,0.2),transparent_65%)]" /><ShieldCheck aria-hidden="true" size={38} strokeWidth={1.25} className="mx-auto mb-6 text-emerald-200" /><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200/70">04 / The outcome</p><h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Compliance embedded.<br /><span className="text-emerald-200">Confidence delivered.</span></h2><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-emerald-50/65">Better-quality leads make room for smoother sales conversations. Put evidence behind every handoff, and give your team a stronger place to start.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-5 rounded-lg bg-[#FECB0F] px-7 py-4 text-sm font-bold text-black transition-colors hover:bg-[#ffdc59] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FECB0F]">Build trust into your delivery <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>

        {/* Nav */}
        <section className="border-t border-white/10 py-10"><nav aria-label="Proffer modules" className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-8"><Link href="/proffer/verifysure" className={`flex items-center gap-4 transition-colors hover:text-emerald-300 ${focusStyle}`}><ArrowLeft aria-hidden="true" size={20} /><span><span className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Previous module</span><span className="text-sm font-medium">VerifySure AI</span></span></Link><Link href="/proffer" className={`rounded-full border border-white/15 px-6 py-3 text-xs text-zinc-300 transition-colors hover:border-emerald-300/40 hover:text-emerald-300 ${focusStyle}`}>Explore all modules</Link><Link href="/proffer/clearboard" className={`flex items-center gap-4 transition-colors hover:text-emerald-300 ${focusStyle}`}><span className="text-right"><span className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Up next / Module 04</span><span className="text-sm font-medium">ClearBoard AI</span></span><ArrowRight aria-hidden="true" size={20} /></Link></nav></section>
      </main>
      <Footer />
    </div>
  );
}
