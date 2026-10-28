import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Thank You | PMG B2B',
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 flex items-center">
        <section className="relative w-full overflow-hidden py-24 md:py-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#FECB0F]/10 rounded-full blur-[120px]" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-flex w-20 h-20 mb-8 rounded-full bg-[#FECB0F] text-black items-center justify-center">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Thanks, we&apos;ve got your message.
              </h1>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                We&apos;ll reply within 24 hours. In the meantime, see how{' '}
                <Link href="/our-services/proffer-ai" className="text-[#FECB0F] hover:underline">Proffer.ai</Link>{' '}
                checks every lead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/our-services/proffer-ai" className="bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Proffer.ai
                </Link>
                <Link href="/blog" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
