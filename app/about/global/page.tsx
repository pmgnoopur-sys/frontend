'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const regions = [
  { region: 'North America', clients: '220+' },
  { region: 'Europe', clients: '140+' },
  { region: 'Asia-Pacific', clients: '95+' },
  { region: 'Middle East', clients: '45+' },
];

export default function GlobalReach() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Dotted-map style hero */}
        <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(254,203,15,0.6) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
          <div className="container mx-auto px-4 relative text-center">
            <span className="text-[#FECB0F] text-xs font-bold tracking-[0.35em] uppercase">Global Reach</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 max-w-3xl mx-auto leading-tight">
              Serving Clients Worldwide
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              From North America to Asia-Pacific, we help businesses across the globe build predictable,
              scalable pipelines.
            </p>
          </div>
        </section>

        {/* Region stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {regions.map((item) => (
                <div
                  key={item.region}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-[#FECB0F] transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.clients}</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">{item.region}</div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Global network map"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
                <div className="text-white font-bold text-xl">One Team, Every Time Zone</div>
                <div className="text-[#FECB0F] text-xs font-semibold tracking-widest uppercase mt-1">
                  Always On &bull; Always Reachable
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
