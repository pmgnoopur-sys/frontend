import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Demo from '@/components/Demo';

export default function Enterprise() {
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
              Enterprise Scale
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
              Enterprise <br />
              <span className="text-[#FECB0F]">Solutions</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
              Scalable ABM and demand-generation programs for large organizations with complex buying committees and global market requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-[#FECB0F] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">
                Scale Your Pipeline
              </Link>
              <a href="#features" className="text-white font-bold hover:text-[#FECB0F] transition-colors">
                ABM Framework
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32 bg-[#050505] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <div className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase mb-4">Enterprise Capabilities</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Built for <span className="text-[#FECB0F]">Global Impact</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Account-Based Everything',
                  desc: 'Deep account intelligence, personalized messaging, and coordinated multi-channel plays for 1:1 and 1:few engagements.',
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                },
                {
                  title: 'Global Execution',
                  desc: 'Regional campaign localization with centralized governance, reporting, and a consistent brand voice across all markets.',
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Enterprise-grade data handling, rigorous SLAs, and procurement-friendly contracts designed for Tier-1 organizations.',
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.954 0 0112 2.944a11.952 11.952 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
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

