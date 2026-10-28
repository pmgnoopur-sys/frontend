import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { subpageHref, type ServiceParent } from '@/lib/services';

export default function ServiceSubpage({ parent, slug }: { parent: ServiceParent; slug: string }) {
  const current = parent.subpages.find((s) => s.slug === slug)!;
  const siblings = parent.subpages.filter((s) => s.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/services" className="hover:text-black">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href={parent.href} className="hover:text-black">{parent.name}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900 font-medium">{current.label}</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-[#FECB0F]/15 text-black text-xs font-bold tracking-wider uppercase mb-6 rounded-full">
                {parent.category} · {parent.name}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{current.label}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{parent.description}</p>
            </div>
          </div>
        </section>

        {/* Related Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Part of {parent.name}</h2>
                <p className="text-gray-600 mb-6">{current.label} is one of the capabilities within our {parent.category.toLowerCase()} service.</p>
                <Link href={parent.href} className="inline-flex items-center gap-2 font-bold text-black hover:underline">
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  {parent.name} overview
                </Link>
              </div>
              {siblings.length > 0 && (
                <div className="p-8 rounded-2xl border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Also in {parent.name}</h2>
                  <ul className="space-y-3">
                    {siblings.map((s) => (
                      <li key={s.slug}>
                        <Link href={subpageHref(parent, s)} className="group inline-flex items-center gap-2 text-gray-700 hover:text-black font-medium">
                          {s.label}
                          <ArrowRight className="w-4 h-4 text-[#FECB0F] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Talk to us about <span className="text-[#FECB0F]">{current.label}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">We&apos;ll reply within 24 hours.</p>
            <Link href="/contact-us" className="inline-block bg-[#FECB0F] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Talk to our team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
