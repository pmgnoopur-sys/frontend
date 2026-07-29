'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HologramNetwork from '@/components/HologramNetwork';

export default function Proffer() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({ cta: true });
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isCounting) {
            setIsCounting(true);
            let startTime: number | null = null;
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              setCount(Math.floor(progress * end));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [end, duration, isCounting]);

    return { count, ref };
  };

  const capabilities = [
    {
      id: 0,
      name: 'LeadCert AI',
      tagline: 'Higher Lead Accuracy',
      whatItDoes: 'Real-time email validation (SMTP/MX/DNS/bounce simulation), phone verification (carrier lookup, DNC screening), disposable-contact detection, lead accuracy scoring',
      whyItMatters: 'Fewer rejected leads & stronger SLAs (agencies); sales focuses only on reachable leads (enterprises)',
      outcome: 'Up to 25% reduction in lead rejections, faster ROI'
    },
    {
      id: 1,
      name: 'VerifySure AI',
      tagline: 'Smarter Verification',
      whatItDoes: 'AI voicebots run recall/consent calls in real time using NLU across accents/phrasing; standardized compliant scripts; auto-escalates ambiguous cases to humans; tamper-proof audio/transcript/consent logs',
      whyItMatters: 'Scale verification without extra staff; every contact ships with compliance documentation',
      outcome: 'Faster verification cycles, audit-ready proof'
    },
    {
      id: 2,
      name: 'TrustCheck AI',
      tagline: 'Quality You Can Trust',
      whatItDoes: 'Automatically reviews call transcripts, flags job authority/consent/compliance gaps, creates a compliance record per lead',
      whyItMatters: 'Fewer client disputes; audit-proof evidence of authority & consent',
      outcome: 'Delivery confidence with compliance built in'
    },
    {
      id: 3,
      name: 'ClearBoard AI',
      tagline: 'Real-Time Transparency',
      whatItDoes: 'Live dashboards for pacing/validation/verification/compliance, predictive risk alerts, drill-down logs, exportable reports',
      whyItMatters: 'Builds client trust with live visibility; monitor quality without waiting on reports',
      outcome: 'Eliminates the "black box" in demand gen'
    },
    {
      id: 4,
      name: 'PredictWise AI',
      tagline: 'Better Campaign Results',
      whatItDoes: 'Analyzes historical accept/reject data, identifies top-performing segments, predictive lead scoring, mid-campaign auto-retargeting',
      whyItMatters: 'Measurable improvements & longer client retention; higher-quality leads, faster pipeline velocity',
      outcome: '10–20% acceptance uplift'
    }
  ];

  const Counter = ({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) => {
    const { count, ref } = useCounter(end);
    return <span ref={ref}>{prefix}{count}{suffix}</span>;
  };

  const faqs = [
    {
      question: 'What does Proffer.ai do?',
      answer: 'Proffer.ai is an AI-powered demand generation engine that transforms how agencies and enterprises approach lead generation. It uses five AI modules—LeadCert AI, VerifySure AI, TrustCheck AI, ClearBoard AI, and PredictWise AI—to automate lead validation, verification, compliance, and reporting, delivering cleaner leads with real-time transparency and predictable results.'
    },
    {
      question: 'How does LeadCert AI improve lead accuracy?',
      answer: 'LeadCert AI performs real-time email validation (SMTP/MX/DNS/bounce simulation), phone verification (carrier lookup, DNC screening), disposable-contact detection, and lead accuracy scoring. This reduces lead rejections by up to 25% and ensures sales teams only focus on reachable leads.'
    },
    {
      question: 'What is VerifySure AI and how does it work?',
      answer: 'VerifySure AI uses AI voicebots to run recall and consent calls in real time using Natural Language Understanding (NLU) across different accents and phrasing. It uses standardized compliant scripts, auto-escalates ambiguous cases to human reviewers, and provides tamper-proof audio, transcript, and consent logs for every contact.'
    },
    {
      question: 'How does TrustCheck AI ensure compliance?',
      answer: 'TrustCheck AI automatically reviews call transcripts to flag job authority, consent, and compliance gaps. It creates a compliance record per lead, providing audit-proof evidence of authority and consent, which reduces client disputes and builds delivery confidence.'
    },
    {
      question: 'What does ClearBoard AI provide?',
      answer: 'ClearBoard AI offers live dashboards for pacing, validation, verification, and compliance metrics. It provides predictive risk alerts, drill-down logs, and exportable reports, giving clients real-time visibility into delivery health and eliminating the "black box" in demand generation.'
    },
    {
      question: 'How does PredictWise AI improve campaign results?',
      answer: 'PredictWise AI analyzes historical accept/reject data to identify top-performing segments. It provides predictive lead scoring and mid-campaign auto-retargeting, resulting in 10–20% acceptance uplift and measurable improvements in client retention.'
    },
    {
      question: 'Is Proffer.ai suitable for both agencies and enterprises?',
      answer: 'Yes, Proffer.ai is designed for both media agencies and enterprises. For agencies, it means fewer rejected leads, stronger SLAs, and automated verification without extra staff. For enterprises, it provides scale with accuracy, compliance by design, and real-time accountability.'
    },
    {
      question: 'How can I get started with Proffer.ai?',
      answer: 'You can get started by booking a pilot campaign. Contact us at shrim@pmg-b2b.com or call +91 994 041 4034. We work with you to co-create a pilot campaign that demonstrates the value of Proffer.ai for your specific needs.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={(el) => { sectionRefs.current['hero'] = el; }}
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-sm md:text-base text-[#FECB0F] mb-6 tracking-wider uppercase">
                Built by PMG B2B · Designed for Media Agencies & Enterprises
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                AI-Powered Demand<br />Generation Engine
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                Cleaner Leads. Smarter Verification. Real-Time Transparency. Predictable Results.
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                AI + human intervention at every stage of lead validation, verification & delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#FECB0F] text-black font-semibold rounded-lg hover:bg-[#E5B80D] transition-all transform hover:scale-105">
                  Book a Pilot Campaign
                </button>
                <button className="px-8 py-4 border border-[#FECB0F] text-[#FECB0F] font-semibold rounded-lg hover:bg-[#FECB0F]/10 transition-all">
                  See How It Works
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section 
          ref={(el) => { sectionRefs.current['problem'] = el; }}
          id="problem"
          className="py-24 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible['problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What's Broken in Today's Demand Generation?
              </h2>
              <p className="text-lg text-gray-400">
                It's a familiar story… campaigns launch with promise, but somewhere along the way:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                { icon: '📉', text: '20–35% lead rejection rates eating into ROI and sales time' },
                { icon: '🔄', text: 'Manual, inconsistent verification leading to client escalations' },
                { icon: '⚠️', text: 'Compliance as a checkbox, not a certainty — limited proof of consent' },
                { icon: '📊', text: 'Enterprises expect scale & accountability, get opaque reporting instead' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#FECB0F]/50 transition-all duration-300 ${isVisible['problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>

            <div className={`mt-12 text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible['problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl text-[#FECB0F] font-semibold">
                Agencies struggle to meet expectations. Enterprises lose trust. Demand gen feels reactive, not reliable.
              </p>
            </div>
          </div>
        </section>

        {/* Introducing Proffer.ai Section */}
        <section 
          ref={(el) => { sectionRefs.current['intro'] = el; }}
          id="intro"
          className="py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Introducing Proffer.ai
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Built by PMG B2B', desc: 'Transform how agencies & enterprises approach demand generation' },
                { title: 'AI Integration', desc: 'Embeds AI automation and intelligence across every stage of the lead lifecycle' },
                { title: 'Predictable Results', desc: 'Delivers cleaner data, verified consent, transparent reporting, and predictive outcomes' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`text-center p-8 transition-all duration-1000 ${isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#FECB0F]/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#FECB0F] rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section 
          ref={(el) => { sectionRefs.current['capabilities'] = el; }}
          id="capabilities"
          className="py-24 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Core Capabilities
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Five AI-powered modules that transform demand generation
              </p>
            </div>

            {/* Hologram Network Visualization */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <HologramNetwork />
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
              {capabilities.map((cap, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === index 
                      ? 'bg-[#FECB0F] text-black' 
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {cap.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${activeTab === index ? 'block' : 'hidden'}`}
                >
                  <div className="bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#FECB0F]/10 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#FECB0F] rounded"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{cap.name}</h3>
                        <p className="text-[#FECB0F]">{cap.tagline}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">What It Does</h4>
                        <p className="text-gray-400">{cap.whatItDoes}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Why It Matters</h4>
                        <p className="text-gray-400">{cap.whyItMatters}</p>
                      </div>
                      <div className="bg-[#FECB0F]/10 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2 text-[#FECB0F]">Outcome</h4>
                        <p className="text-white">{cap.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantage Section */}
        <section 
          ref={(el) => { sectionRefs.current['advantage'] = el; }}
          id="advantage"
          className="py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['advantage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The Proffer.ai Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Full Transparency', desc: 'Real-time dashboards replace the "black box" delivery model' },
                { title: 'Built for Scale', desc: 'Delivers at scale with accuracy and compliance for agencies & enterprises' },
                { title: 'End-to-End AI', desc: 'Validation, verification, and compliance are automated, not manual' },
                { title: 'Compliance by Design', desc: 'Every lead includes audit-ready consent and authority proof' },
                { title: 'Smarter Campaigns', desc: 'Predictive targeting adapts mid-flight to boost acceptance rates' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#FECB0F]/50 transition-all duration-300 ${isVisible['advantage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FECB0F] rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section 
          ref={(el) => { sectionRefs.current['proof'] = el; }}
          id="proof"
          className="py-24 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Proffer.ai in Action
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className={`bg-gray-800 p-8 rounded-xl border border-red-900/50 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-xl font-bold mb-6 text-red-400">Before Proffer.ai</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-red-400">~</span>
                    <span><Counter end={28} />% rejection rate</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-400">~</span>
                    <span>Manual verification adds 3–4 days</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-400">~</span>
                    <span>Clients request ad-hoc reports due to no visibility</span>
                  </li>
                </ul>
              </div>

              <div className={`bg-gray-800 p-8 rounded-xl border border-[#FECB0F]/50 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <h3 className="text-xl font-bold mb-6 text-[#FECB0F]">With Proffer.ai</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#FECB0F]">✓</span>
                    <span>Rejections under <Counter end={12} />%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#FECB0F]">✓</span>
                    <span>Verification cycle time cut <Counter end={40} />%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#FECB0F]">✓</span>
                    <span>Clients see delivery health live</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`text-center max-w-3xl mx-auto bg-[#FECB0F]/10 p-8 rounded-xl border border-[#FECB0F]/30 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <p className="text-xl text-white mb-4">
                Saved <Counter end={25} /> hours/month in manual QA effort. Faster delivery boosted client satisfaction and renewal likelihood.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section 
          ref={(el) => { sectionRefs.current['vision'] = el; }}
          id="vision"
          className="py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The Bigger Picture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { from: 'Reactive reporting', to: 'Real-time accountability' },
                { from: 'Manual patchwork', to: 'AI-enabled precision' },
                { from: 'Uncertain outcomes', to: 'Predictable growth' },
                { from: 'Transactional delivery', to: 'Strategic partnership' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 bg-gray-800 p-6 rounded-xl ${isVisible['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <p className="text-gray-500 line-through">{item.from}</p>
                  </div>
                  <div className="text-[#FECB0F]">→</div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">{item.to}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={(el) => { sectionRefs.current['faq'] = el; }}
          id="faq"
          className="py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to know about Proffer.ai
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 ${isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#FECB0F] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={(el) => { sectionRefs.current['cta'] = el; }}
          id="contact"
          className="py-24 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                This is not just AI for efficiency — it's PMG B2B's commitment to helping you deliver demand generation that clients and sales teams can finally trust.
              </h2>
              <div className="mt-8 inline-block bg-[#FECB0F] text-black px-8 py-4 rounded-lg font-semibold">
                Let's co-create a pilot campaign together!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Card */}
              <div className={`bg-gray-800 p-8 rounded-xl ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 mb-1">Shrish Mishra</p>
                    <p className="text-white font-semibold">CEO, PMG B2B</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <a href="mailto:shrim@pmg-b2b.com" className="text-[#FECB0F] hover:underline">shrim@pmg-b2b.com</a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <a href="tel:+919940414034" className="text-[#FECB0F] hover:underline">+91 994 041 4034</a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">LinkedIn</p>
                    <a href="#" className="text-[#FECB0F] hover:underline">Connect with us</a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`bg-gray-800 p-8 rounded-xl ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#FECB0F] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#FECB0F] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#FECB0F] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#FECB0F] focus:outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#FECB0F] text-black font-semibold rounded-lg hover:bg-[#E5B80D] transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
