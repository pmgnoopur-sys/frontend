'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HologramNetwork from '@/components/HologramNetwork';
import TypewriterText from '@/components/TypewriterText';
import { SingleTrendGraph3D } from '@/components/TrendComparison3D';
import { TrendingDown, RefreshCw, AlertTriangle, BarChart3 } from 'lucide-react';
import StickyScrollSection from '@/components/StickyScrollSection';

const profferStickyContent = [
  {
    title: 'AI-Powered Validation',
    description:
      'LeadCert AI runs real-time email and phone verification on every contact, cutting lead rejections by up to 25% before they ever reach your sales team.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        alt="AI-powered data validation"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Compliance Built In',
    description:
      'VerifySure AI and TrustCheck AI generate tamper-proof consent and authority records automatically, so every lead ships audit-ready.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
        alt="AI compliance automation"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Live Delivery Visibility',
    description:
      'ClearBoard AI replaces static reports with real-time dashboards, giving you full visibility into pacing, quality, and compliance as it happens.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        alt="Real-time analytics dashboard"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Predictive Campaign Optimization',
    description:
      'PredictWise AI analyzes historical performance to identify top-converting segments and auto-retarget mid-campaign, driving a 10-20% acceptance uplift.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Predictive campaign optimization"
        className="h-full w-full object-cover"
      />
    ),
  },
];

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
      name: 'ClearBoard AI',
      tagline: 'Real-Time Transparency',
      whatItDoes: 'Live dashboards for pacing/validation/verification/compliance, predictive risk alerts, drill-down logs, exportable reports',
      whyItMatters: 'Builds client trust with live visibility; monitor quality without waiting on reports',
      outcome: 'Eliminates the "black box" in demand gen'
    },
    {
      id: 3,
      name: 'TrustCheck AI',
      tagline: 'Quality You Can Trust',
      whatItDoes: 'Automatically reviews call transcripts, flags job authority/consent/compliance gaps, creates a compliance record per lead',
      whyItMatters: 'Fewer client disputes; audit-proof evidence of authority & consent',
      outcome: 'Delivery confidence with compliance built in'
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
          className="py-16 md:py-24 bg-gray-900"
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
                { icon: <TrendingDown className="w-12 h-12" />, text: '20–35% lead rejection rates eating into ROI and sales time' },
                { icon: <RefreshCw className="w-12 h-12" />, text: 'Manual, inconsistent verification leading to client escalations' },
                { icon: <AlertTriangle className="w-12 h-12" />, text: 'Compliance as a checkbox, not a certainty — limited proof of consent' },
                { icon: <BarChart3 className="w-12 h-12" />, text: 'Enterprises expect scale & accountability, get opaque reporting instead' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-black/60 backdrop-blur-md p-5 sm:p-8 rounded-xl border-2 border-[#FECB0F] hover:bg-[#FECB0F]/10 transition-all duration-300 ${isVisible['problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 text-[#FECB0F] filter drop-shadow-[0_0_10px_rgba(254,203,15,0.5)]">{item.icon}</div>
                  <p className="text-[#FECB0F] font-medium">{item.text}</p>
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
          className="py-16 md:py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Introducing Proffer.ai
              </h2>
            </div>

            {/* System Architecture Diagram */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="max-w-md bg-black rounded-2xl p-4 border border-gray-800">
                  <img
                    src="/www.pmg-b2b.com-2-1.gif"
                    alt="Proffer AI System Architecture"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8 flex-1 max-w-xl">
                  {[
                    { title: 'Built by PMG B2B', desc: 'Transform how agencies & enterprises approach demand generation' },
                    { title: 'AI Integration', desc: 'Embeds AI automation and intelligence across every stage of the lead lifecycle' },
                    { title: 'Predictable Results', desc: 'Delivers cleaner data, verified consent, transparent reporting, and predictive outcomes' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-6 p-5 sm:p-8 transition-all duration-1000 ${isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="w-16 h-16 bg-[#FECB0F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-8 h-8 bg-[#FECB0F] rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section 
          ref={(el) => { sectionRefs.current['capabilities'] = el; }}
          id="capabilities"
          className="py-16 md:py-24 bg-gray-900"
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

            {/* Hologram Network + Capability Details (merged) */}
            <div className={`transition-all duration-1000 ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-[1600px] mx-auto">
                {/* Left: Interactive Hologram */}
                <div className="w-full lg:w-3/5">
                  <HologramNetwork activeIndex={activeTab} onNodeClick={setActiveTab} />
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Click a node to explore each AI module
                  </p>
                </div>

                {/* Right: Capability Details */}
                <div className="w-full lg:w-2/5">
                  {capabilities.map((cap, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${activeTab === index ? 'block' : 'hidden'}`}
                    >
                      <div className="bg-gray-800 p-5 sm:p-8 md:p-10 rounded-2xl border border-gray-700">
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
                            <TypewriterText text={cap.whatItDoes} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-white">Why It Matters</h4>
                            <TypewriterText text={cap.whyItMatters} />
                          </div>
                          <div className="bg-[#FECB0F]/10 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2 text-[#FECB0F]">Outcome</h4>
                            <TypewriterText text={cap.outcome} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Mobile-friendly tab buttons as fallback selector */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6 lg:hidden">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantage Section */}
        <section 
          ref={(el) => { sectionRefs.current['advantage'] = el; }}
          id="advantage"
          className="py-16 md:py-24 bg-black"
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
          className="py-16 md:py-24 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Proffer.ai in Action
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className={`bg-gray-800 p-5 sm:p-8 rounded-xl border border-red-900/50 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-xl font-bold mb-6 text-red-400">Before Proffer.ai</h3>
                <ul className="space-y-4 mb-6">
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
                {/* Red Downward Graph */}
                <div className="bg-black rounded-lg overflow-hidden">
                  <SingleTrendGraph3D
                    values={[90, 70, 78, 60, 40]}
                    color="#EF4444"
                    direction="down"
                    height={220}
                  />
                </div>
              </div>

              <div className={`bg-gray-800 p-5 sm:p-8 rounded-xl border border-[#FECB0F]/50 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <h3 className="text-xl font-bold mb-6 text-[#FECB0F]">With Proffer.ai</h3>
                <ul className="space-y-4 mb-6">
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
                {/* Yellow Upward Graph */}
                <div className="bg-black rounded-lg overflow-hidden">
                  <SingleTrendGraph3D
                    values={[40, 60, 78, 70, 90]}
                    color="#FECB0F"
                    direction="up"
                    height={220}
                  />
                </div>
              </div>
            </div>

            <div className={`text-center max-w-3xl mx-auto bg-[#FECB0F]/10 p-5 sm:p-8 rounded-xl border border-[#FECB0F]/30 ${isVisible['proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
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
          className="py-16 md:py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The Bigger Picture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { from: 'Reactive reporting', to: 'Real-time accountability', hasImage: true, imageUrl: 'https://res.cloudinary.com/vobojthd/image/upload/v1786086083/Time_Management_Presentation_pfcpru.jpg' },
                { from: 'Manual patchwork', to: 'AI-enabled precision', hasImage: true, imageUrl: 'https://res.cloudinary.com/vobojthd/image/upload/v1786086231/Time_Management_Presentation_1_w19vjw.jpg' },
                { from: 'Uncertain outcomes', to: 'Predictable growth', hasImage: true, imageUrl: 'https://res.cloudinary.com/vobojthd/image/upload/v1786972512/Screenshot_2026-08-17_184440_t27rie.png' },
                { from: 'Transactional delivery', to: 'Strategic partnership', hasImage: true, imageUrl: 'https://res.cloudinary.com/vobojthd/image/upload/v1786088034/Untitled_design_2_ewnnkz.png' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-xl relative overflow-hidden ${isVisible['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.hasImage && (
                    <div className="w-full h-48">
                      <img
                        src={item.imageUrl}
                        alt={item.to}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 p-6">
                    <div className="flex-1">
                      <p className="text-gray-500 line-through">{item.from}</p>
                    </div>
                    <div className="text-[#FECB0F]">→</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">{item.to}</p>
                    </div>
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
          className="py-16 md:py-24 bg-black"
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

        {/* ClearBoard AI Feature Section */}
        <section 
          ref={(el) => { sectionRefs.current['clearboard'] = el; }}
          id="clearboard"
          className="py-16 md:py-24 bg-black"
        >
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['clearboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ClearBoard AI - Real-Time Transparency
              </h2>
              <p className="text-xl text-[#FECB0F] font-semibold">
                See campaign health as it happens.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-[1700px] mx-auto items-start">
              {/* Left: Information */}
              <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${isVisible['clearboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-gray-800 p-5 sm:p-8 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-[#FECB0F]">What It Does</h3>
                  <ul className="space-y-4">
                    {[
                      'Provides live dashboards showing pacing, validation, verification, and compliance status.',
                      'Sends predictive alerts when delivery risks or slowdowns appear.',
                      'Tracks lead acceptance, rejection, and quality scores in real time.',
                      'Offers drill-down views into validation and verification logs.',
                      'Generates exportable reports for client, procurement, and legal teams.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FECB0F] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FECB0F]/10 p-5 sm:p-8 rounded-xl border border-[#FECB0F]/30">
                  <h3 className="text-2xl font-bold mb-6 text-[#FECB0F]">Outcome</h3>
                  <ul className="space-y-4">
                    {[
                      'Eliminates the "black box" in demand gen.',
                      'Campaigns run with clarity, predictability, and accountability.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FECB0F] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800 p-5 sm:p-8 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-[#FECB0F]">Why It Matters</h3>
                  <ul className="space-y-4">
                    {[
                      'For Agencies → build client trust with live visibility.',
                      'For Enterprises → monitor campaign quality and compliance without waiting for reports.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FECB0F] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Visual Dashboard */}
              <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible['clearboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] border-2 border-[#FECB0F]/60 p-4 sm:p-6 shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr_110px] gap-5">

                    {/* Far Left Icon Rail */}
                    <div className="flex flex-row sm:flex-col items-center justify-center gap-5 bg-black/40 rounded-2xl sm:rounded-3xl py-3 sm:py-6 order-2 sm:order-1">
                      {[BarChart3, TrendingDown, RefreshCw, AlertTriangle].map((Icon, i) => (
                        <div
                          key={i}
                          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${i === 0 ? 'bg-[#FECB0F] text-black' : 'text-gray-400 hover:text-[#FECB0F] transition-colors'}`}
                        >
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                      ))}
                    </div>

                    {/* Center Content */}
                    <div className="flex flex-col gap-5 min-w-0 order-1 sm:order-2">
                      {/* Top Tabs */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <span className="text-white font-semibold border-b-2 border-[#FECB0F] pb-1">Overview</span>
                          <span className="text-gray-500">Validation</span>
                          <span className="text-gray-500">Verification</span>
                          <span className="text-gray-500 hidden sm:inline">Compliance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-gray-400 text-xs">+</div>
                          <div className="w-8 h-8 rounded-full bg-[#FECB0F] flex items-center justify-center text-black text-xs font-bold">A</div>
                        </div>
                      </div>

                      {/* Team + Score + Gauge row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-black/40 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-xs">Team</span>
                            <span className="text-[#FECB0F] text-xs">+</span>
                          </div>
                          <div className="flex -space-x-2">
                            {['A', 'B', 'C', 'D'].map((l, i) => (
                              <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs text-white">
                                {l}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/40 rounded-2xl p-5">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">94.2<span className="text-sm text-gray-400">%</span></span>
                            <span className="text-[#FECB0F] text-xs bg-[#FECB0F]/10 px-2 py-1 rounded-full">Live</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-1">Validation Rate</p>
                          <div className="flex items-center gap-1.5 mt-3">
                            {[24, 26, 22, 28, 25].map((v, i) => (
                              <div key={i} className="w-1.5 h-5 bg-gray-700 rounded-full overflow-hidden flex items-end">
                                <div className="w-full bg-[#FECB0F]" style={{ height: `${(v / 28) * 100}%` }}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Circular Gauge */}
                        <div className="bg-black/40 rounded-2xl p-5 flex flex-col items-center justify-center">
                          <div
                            className="relative w-20 h-20 rounded-full flex items-center justify-center"
                            style={{ background: `conic-gradient(#FECB0F ${98.1 * 3.6}deg, #374151 0deg)` }}
                          >
                            <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                              <span className="text-base font-bold text-white">98.1%</span>
                            </div>
                          </div>
                          <p className="text-gray-500 text-xs mt-4 text-center">Compliance</p>
                        </div>
                      </div>

                      {/* Device Cards + Bar Chart row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {/* Stacked device-style cards */}
                        <div className="flex flex-col gap-5">
                          <div className="bg-black/40 rounded-2xl p-5 flex items-center justify-between">
                            <div>
                              <p className="text-white text-sm font-medium">New Leads</p>
                              <p className="text-gray-500 text-xs">1,234 today</p>
                            </div>
                            <div className="w-9 h-5 rounded-full bg-[#FECB0F] flex items-center px-0.5">
                              <div className="w-4 h-4 rounded-full bg-black ml-auto"></div>
                            </div>
                          </div>
                          <div className="bg-black/40 rounded-2xl p-5 flex items-center justify-between">
                            <div>
                              <p className="text-white text-sm font-medium">Flagged</p>
                              <p className="text-gray-500 text-xs">18 pending</p>
                            </div>
                            <div className="w-9 h-5 rounded-full bg-gray-700 flex items-center px-0.5">
                              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                            </div>
                          </div>
                        </div>

                        {/* Bar Chart */}
                        <div className="sm:col-span-2 bg-black/40 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-400 text-xs">Leads Processed (Weekly)</p>
                            <span className="text-[#FECB0F] text-xs">View</span>
                          </div>
                          <div className="flex items-end justify-between gap-2 h-24">
                            {[
                              { day: 'M', v: 40 },
                              { day: 'T', v: 65 },
                              { day: 'W', v: 50 },
                              { day: 'T', v: 90 },
                              { day: 'F', v: 60 },
                              { day: 'S', v: 35 },
                            ].map((item, i) => (
                              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                                <div className="w-full bg-gray-700 rounded-md overflow-hidden flex items-end h-16">
                                  <div
                                    className={`w-full rounded-md ${i === 3 ? 'bg-[#FECB0F]' : 'bg-gray-600'}`}
                                    style={{ height: `${item.v}%` }}
                                  ></div>
                                </div>
                                <span className="text-gray-500 text-xs">{item.day}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom "Report" Player Bar */}
                      <div className="bg-black/40 rounded-2xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FECB0F]/20 flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-5 h-5 text-[#FECB0F]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white text-sm font-medium truncate">Compliance Report — Q3 Export</p>
                          <p className="text-gray-500 text-xs truncate">Auto-generated · PDF</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 flex-shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                          <div className="w-8 h-8 rounded-full bg-[#FECB0F] flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 6l8.5 6L6 18z"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Far Right Toggle Panel */}
                    <div className="grid grid-cols-4 sm:flex sm:flex-col gap-3 sm:gap-5 order-3">
                      {[
                        { label: 'Alerts', on: true },
                        { label: 'Reports', on: true },
                        { label: 'Monitoring', on: false },
                        { label: 'Exports', on: false },
                      ].map((item, i) => (
                        <div key={i} className="bg-black/40 rounded-2xl p-2 sm:p-4 flex flex-col items-center gap-2">
                          <span className="text-gray-400 text-[10px] sm:text-xs text-center">{item.label}</span>
                          <div className={`w-9 h-5 rounded-full flex items-center px-0.5 ${item.on ? 'bg-[#FECB0F] justify-end' : 'bg-gray-700 justify-start'}`}>
                            <div className={`w-4 h-4 rounded-full ${item.on ? 'bg-black' : 'bg-gray-400'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Scroll Reveal Section */}
        <StickyScrollSection
          eyebrow="Proffer.ai"
          title="How Our AI Modules Work Together"
          description="A closer look at the technology powering cleaner leads and transparent delivery."
          items={profferStickyContent}
        />

        {/* CTA Section */}
        <section 
          ref={(el) => { sectionRefs.current['cta'] = el; }}
          id="contact"
          className="py-16 md:py-24 bg-gray-900"
        >
        </section>
      </main>
      <Footer />
    </div>
  );
}
