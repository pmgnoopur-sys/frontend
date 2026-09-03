'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurMission() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Split editorial hero */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
              <div>
                <span className="text-[#FECB0F] text-xs font-bold tracking-[0.35em] uppercase">Our Mission</span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-[1.1]">
                  We exist to close the gap between{' '}
                  <span className="text-[#FECB0F]">great products</span> and the customers who need them.
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Every business deserves a pipeline it can trust &mdash; not one built on guesswork,
                  cold lists, and hope.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-[#FECB0F] pl-6 py-2">
                  <div className="text-4xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Clients Served</div>
                </div>
                <div className="border-l-4 border-[#FECB0F] pl-6 py-2">
                  <div className="text-4xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Client Retention</div>
                </div>
                <div className="border-l-4 border-black pl-6 py-2">
                  <div className="text-4xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Assumptions Made</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission narrative + image */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1788440026/ChatGPT_Image_Sep_3_2026_06_23_24_PM_riarjh.png"
                  alt="PMG B2B mission - team collaboration"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Enterprise-Grade Growth, For Every Business
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Too many businesses struggle with inconsistent pipelines and generic outreach that fails to
                  convert. We built PMG B2B to close that gap.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our mission is to give every client, regardless of size or industry, access to enterprise-grade
                  lead generation powered by data, technology, and genuine human expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PMG Trust Framework */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <span className="text-[#FECB0F] text-xs font-bold tracking-[0.35em] uppercase">The Trust Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Built On Evidence, Not Assumptions
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Demand generation has evolved dramatically over the past decade. Organizations have access to
                more technology, more data, and more automation than ever before. Yet despite these advancements,
                one challenge continues to grow &mdash; trust.
              </p>
              <p>
                Today, campaigns are often judged not by the number of leads they generate, but by the confidence
                they inspire. Sales teams question whether prospects genuinely expressed interest. Marketing
                leaders scrutinize lead quality and conversion rates. Procurement teams seek greater transparency,
                while legal and compliance functions expect documented proof that every interaction meets
                regulatory standards.
              </p>
              <p>
                The result is an industry where volume alone is no longer enough. Every lead must be backed by
                evidence, every qualification must be verifiable, and every stage of the buyer journey must
                withstand scrutiny.
              </p>
              <p>
                Several factors have contributed to this shift. Global privacy regulations have raised
                expectations around consent and data governance. Buyers have become more selective about the
                communications they engage with. At the same time, enterprises demand complete visibility into
                how their campaigns are executed &mdash; from data sourcing and qualification to verification,
                quality assurance, and final delivery.
              </p>
              <p>
                Unfortunately, many demand generation programs still rely on fragmented processes, manual
                verification, inconsistent qualification standards, and limited documentation. When questions
                arise, there is often little evidence available beyond assumptions or isolated records. This
                creates uncertainty for clients, delays for sales teams, and unnecessary risk for everyone
                involved.
              </p>
            </div>

            <div className="mt-16 bg-black rounded-2xl p-10 md:p-14 text-center">
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                At PMG, we believe trust should never depend on assumptions. It should be built into the delivery
                process from the very beginning. Every interaction should be transparent, every decision should
                be supported by evidence, and every campaign should leave behind a complete, auditable record.
              </p>
              <div className="w-16 h-px bg-[#FECB0F] mx-auto my-8" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The PMG Trust Framework&trade;
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                A structured approach that combines people, processes, technology, and governance to ensure
                every lead is qualified, compliant, verifiable, and delivered with complete accountability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
