import { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact PMG B2B | Talk to Our Team',
  description: 'Tell us about your next lead generation campaign. We reply within 24 hours. Call +1 781 750 1320 or email info@pmg-b2b.com.',
};

const linkedInPath =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

const directContact = [
  { label: '+1 781 750 1320', href: 'tel:+17817501320', icon: <Phone className="w-5 h-5" aria-hidden="true" /> },
  { label: 'info@pmg-b2b.com', href: 'mailto:info@pmg-b2b.com', icon: <Mail className="w-5 h-5" aria-hidden="true" /> },
  { label: '311 Metropolitan Ave, Boston, MA', icon: <MapPin className="w-5 h-5" aria-hidden="true" /> },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pmg-b2b/posts/',
    external: true,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={linkedInPath} />
      </svg>
    ),
  },
];

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-24">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(254,203,15,0.5) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FECB0F]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FECB0F]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />

          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left lg:pl-16">
                <div className="inline-flex items-center gap-2 bg-[#FECB0F]/10 border border-[#FECB0F]/30 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 bg-[#FECB0F] rounded-full animate-pulse" />
                  <span className="text-[#FECB0F] text-xs font-semibold tracking-wider uppercase">Contact PMG B2B</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                  Talk to our <span className="text-[#FECB0F]">team</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                  Tell us about your campaign and we&apos;ll come back within 24 hours with how we&apos;d run it.
                </p>
              </div>

              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-[#FECB0F]/15 rounded-full blur-3xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1787134842/PMG-transformed-our-marketing_kqpcsi.webp"
                  alt="Talk to the PMG B2B team"
                  className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Form + Direct Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Form */}
              <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
                <ContactForm />
              </div>

              {/* Direct contact, animation and next steps */}
              <aside className="lg:col-span-2 space-y-6">
                <div className="rounded-3xl bg-black text-white p-8 border-t-4 border-[#FECB0F]">
                  <h2 className="text-xl font-bold mb-6">Or reach us directly</h2>
                  <ul className="space-y-4">
                    {directContact.map((c) => {
                      const content = (
                        <>
                          <span className="w-10 h-10 shrink-0 rounded-full bg-[#FECB0F]/10 text-[#FECB0F] flex items-center justify-center">{c.icon}</span>
                          <span>{c.label}</span>
                        </>
                      );
                      return (
                        <li key={c.label}>
                          {c.href ? (
                            <a
                              href={c.href}
                              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              className="flex items-center gap-4 text-gray-200 hover:text-[#FECB0F] transition"
                            >
                              {content}
                            </a>
                          ) : (
                            <div className="flex items-center gap-4 text-gray-200">{content}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm h-72 sm:h-80">
                  <iframe
                    src="https://lottie.host/embed/4ce9974f-29ac-4b78-998f-feed47d001b7/GX32KxTs1i.lottie"
                    title="Contact animation"
                    className="w-full h-full border-0"
                    loading="lazy"
                    aria-hidden="true"
                    tabIndex={-1}
                  />
                </div>

                <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-[#FECB0F] text-black flex items-center justify-center">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <h2 className="text-xl font-bold text-gray-900">What happens next</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    A member of our team replies within 24 hours, usually with a few questions about your audience and targets.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
