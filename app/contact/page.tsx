'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import StickyScrollSection from '@/components/StickyScrollSection';

const contactStickyContent = [
  {
    title: 'Talk to a Real Strategist',
    description:
      "No chatbots, no scripts. When you reach out, you'll speak directly with a member of our team who understands B2B growth and can point you in the right direction.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=800&q=80"
        alt="Customer support conversation"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Offices in Mumbai & Pune',
    description:
      "With teams based in Navi Mumbai and Pune, we're well positioned to support clients across India and beyond with responsive, local expertise.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        alt="Modern office space"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'A Response You Can Count On',
    description:
      "Every inquiry is reviewed promptly by our team so you're never left waiting. Reach out today and let's start building your pipeline together.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=800&q=80"
        alt="Quick and reliable response"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Tell Us About Your Goals',
    description:
      "Whether you're exploring lead generation, ABM, or data solutions, share your goals with us and we'll tailor a plan built around your business.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
        alt="Discussing business goals"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://backend-2-81do.onrender.com/api'}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'contact'
        }),
      });
      
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-28">
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(254,203,15,0.5) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FECB0F]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FECB0F]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent" />

          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text content */}
              <div className="text-center lg:text-left lg:pl-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FECB0F]/10 border border-[#FECB0F]/30 rounded-full px-9 py-2 mb-6">
                  <div className="w-2 h-2 bg-[#FECB0F] rounded-full animate-pulse" />
                  <span className="text-[#FECB0F] text-xs font-semibold tracking-wider uppercase">We're here to help</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                  Let's Start a <span className="text-[#FECB0F]">Conversation</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10">
                  Whether you have a question about our services or you're ready to scale your pipeline, our team is ready to answer.
                </p>

                {/* Quick contact chips */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="tel:+917972722487"
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FECB0F]/40 rounded-full px-5 py-3 text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm font-medium">+91 79727 22487</span>
                  </a>
                  <a
                    href="mailto:info@pmg-b2b.com"
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FECB0F]/40 rounded-full px-5 py-3 text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-[#FECB0F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.94 6.94a2 2 0 012-2h10.12a2 2 0 012 2L10 11.06 2.94 6.94z" />
                      <path d="M18 8.118V13a2 2 0 01-2 2H4a2 2 0 01-2-2V8.118l8 4.706 8-4.706z" />
                    </svg>
                    <span className="text-sm font-medium">info@pmg-b2b.com</span>
                  </a>
                </div>
              </div>

              {/* Themed illustration */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-[#FECB0F]/15 rounded-full blur-3xl" />
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1787134842/PMG-transformed-our-marketing_kqpcsi.webp"
                  alt="Get in touch with PMG B2B"
                  className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-8 h-fit">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black py-3 rounded-lg font-semibold transition" style={{backgroundColor: '#FECB0F'}}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Lottie Animation */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{height: '600px'}}>
                <iframe
                  src="https://lottie.host/embed/4ce9974f-29ac-4b78-998f-feed47d001b7/GX32KxTs1i.lottie"
                  style={{width: '100%', height: '100%', border: 'none'}}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Call us</h3>
                <p className="text-gray-700 text-lg">+91 7972722487</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Email US</h3>
                <p className="text-gray-700 text-lg">info@pmg-b2b.com</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Mumbai Office</h3>
                <p className="text-gray-700">
                  Navi Mumbai, Maharashtra, India 400710
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Pune Office</h3>
                <p className="text-gray-700">
                  PMG B2B – PUNE OFFICE<br />
                  14, Second Floor, A wing, City Vista, Kharadi, Pune, Maharashtra 411014
                </p>
              </div>
            </div>

            
          </div>
        </section>

        {/* Sticky Scroll Reveal Section */}
        <StickyScrollSection
          eyebrow="Get In Touch"
          title="Why Reaching Out Is Worth It"
          description="Here's what you can expect when you contact PMG B2B."
          items={contactStickyContent}
        />
      </main>
      <Footer />
    </div>
  );
}
