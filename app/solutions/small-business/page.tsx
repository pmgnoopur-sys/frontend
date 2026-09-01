import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';

export default function SmallBusiness() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#FECB0F]/10 to-transparent opacity-50" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FECB0F]/5 rounded-full blur-[100px] animate-pulse" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FECB0F]/30 bg-[#FECB0F]/5 text-[#FECB0F] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F]" />
              Growth Scale
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
              Small <br />
              <span className="text-[#FECB0F]">Business</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
              We architect high-impact pipelines for growing teams that need enterprise-level results without the corporate complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-[#FECB0F] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">
                Start Growing
              </Link>
              <a href="#features" className="text-white font-bold hover:text-[#FECB0F] transition-colors">
                Explore Features
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32 bg-[#050505] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <div className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4">Why PMG?</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Built for <span className="text-[#FECB0F]">Lean Teams</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Pay-as-You-Grow',
                  desc: 'Flexible pricing tiers that scale with your revenue, not your headcount. No expensive upfront commitments.',
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                },
                {
                  title: 'Fast Deployment',
                  desc: 'Campaigns live in days, not months. We skip the lengthy procurement cycles to get you into the market now.',
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                },
                {
                  title: 'High-Touch Support',
                  desc: 'Direct access to senior strategists who understand the constraints and agility required for small-business success.',
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" /></svg>
                }
              ].map((f, i) => (
                <div key={i} className="group p-10 rounded-[2.5rem] bg-black border border-white/5 hover:border-[#FECB0F]/30 transition-all duration-500 shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#111] text-[#FECB0F] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#FECB0F] group-hover:text-black transition-all duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FECB0F] transition-colors">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Demo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

