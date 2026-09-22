'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import TimelineHero from '@/components/TimelineHero';
import PopupForm from '@/components/PopupForm';
import { API_BASE_URL } from '@/lib/api';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
  linkedin?: string;
}

export default function Home() {
  const teamMembers: TeamMember[] = [
    {
      name: "Shrish C Mishra",
      role: "CEO & Founder",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1787653060/FMW07278_BW_snlvvd.jpg",
      description: "Visionary leader with 15+ years in B2B lead generation. Passionate about helping businesses scale through data-driven strategies.",
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
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
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const [circlesVisible, setCirclesVisible] = useState(false);
  const orbitSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = orbitSectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCirclesVisible(true);
          observer.unobserve(target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const orbitLogos = [
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784890111/kisspng-microsoft-office-365-business-company-computer-sof-microsoft-5ab6ffad7ea365.7460510615219424455187-removebg-preview_1_tnxzfn.png",
      alt: "Microsoft",
      style: { top: '2%', left: '8%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784890244/IBM_logo_in-removebg-preview_flydwu.png",
      alt: "IBM",
      style: { top: '10%', left: '85%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784891168/images-removebg-preview_xdoyyv.png",
      alt: "Zendesk",
      style: { top: '50%', left: '2%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784891257/images-removebg-preview_1_h8jxze.png",
      alt: "HP",
      style: { top: '48%', left: '92%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784904422/zscaler-logo-24_i2f7pu.jpg",
      alt: "Zscaler",
      style: { top: '90%', left: '10%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784889908/redhat-logo-png_seeklogo-300344_elfch5.png",
      alt: "Redhat",
      style: { top: '92%', left: '85%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784904516/LogoLockup-RGB-PurpleBlack_kunr2l.png",
      alt: "Lenovo",
      style: { top: '-4%', left: '48%' },
    },
    {
      src: "https://res.cloudinary.com/vobojthd/image/upload/v1784905234/images_lsbbrd.png",
      alt: "Intel",
      style: { top: '98%', left: '48%' },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header />
      <main className="flex-1">
        <Hero
          title="Fuel Your Growth with B2B Lead Generation Services"
          description="Comprehensive solutions designed to drive results"
        />

        <Services />
        <Stats />

        {/* Our Clients Marquee Section */}
        <section className="py-0 bg-black overflow-hidden">
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(1)].map((_, i) => (
                <div key={i} className="flex items-center gap-24 px-8">
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784891881/download-removebg-preview_cvolk3.png"
                    alt="AWS"
                    className="h-12 md:h-16 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784890449/255-2554398_insight-logo-png-insight-technology-solutions-gmbh-removebg-preview_ebzgqe.png"
                    alt="Insight"
                    className="h-12 md:h-16 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784890111/kisspng-microsoft-office-365-business-company-computer-sof-microsoft-5ab6ffad7ea365.7460510615219424455187-removebg-preview_1_tnxzfn.png"
                    alt="Microsoft"
                    className="h-24 md:h-32 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784890244/IBM_logo_in-removebg-preview_flydwu.png"
                    alt="IBM"
                    className="h-12 md:h-16 w-auto"
                  />

                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784891168/images-removebg-preview_xdoyyv.png"
                    alt="Zendesk"
                    className="h-24 md:h-32 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784891257/images-removebg-preview_1_h8jxze.png"
                    alt="HP"
                    className="h-12 md:h-16 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784891341/kisspng-bmc-software-remedy-corporation-it-service-managem-cygilant-5b27487f018a35.1364200615293011190063-removebg-preview_bipdbx.png"
                    alt="BMC"
                    className="h-14 md:h-20 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784904422/zscaler-logo-24_i2f7pu.jpg"
                    alt="Zscaler"
                    className="h-14 md:h-16 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784889908/redhat-logo-png_seeklogo-300344_elfch5.png"
                    alt="Redhat"
                    className="h-24 md:h-32 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784904516/LogoLockup-RGB-PurpleBlack_kunr2l.png"
                    alt="Lenovo"
                    className="h-12 md:h-15 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784904844/images_kbphoe.png"
                    alt="Nvidia"
                    className="h-12 md:h-16 w-auto"
                  />
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784905234/images_lsbbrd.png"
                    alt="Intel"
                    className="h-12 md:h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* CEO Leadership Section */}
        <section className="py-20 bg-black overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-[#FECB0F] text-sm font-bold tracking-[0.3em] uppercase mb-4">Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Visionary Leader</h3>
            </div>
          </div>

          <div className="flex justify-center mb-16 px-4 sm:px-8 lg:px-20">
            <Link href="/founders-word" className="ceo-card w-full max-w-6xl cursor-pointer relative overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row group border border-white/10 hover:border-[#FECB0F]/30 transition-all duration-500">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80 z-0"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FECB0F]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent z-10"></div>
              
              <div className="relative z-10 w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white lg:border-r border-white/10 bg-black/40 backdrop-blur-md">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FECB0F]/10 border border-[#FECB0F]/30 rounded-full px-5 py-2 mb-8 w-fit">
                  <div className="w-2 h-2 bg-[#FECB0F] rounded-full animate-pulse"></div>
                  <span className="text-[#FECB0F] text-[10px] font-bold tracking-[0.2em] uppercase">Founder & CEO</span>
                </div>
                
                {/* Name */}
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tighter leading-tight">
                  {teamMembers[0].name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-md font-medium">
                  {teamMembers[0].description}
                </p>
                
                {/* Stats/Highlights */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm group-hover:border-[#FECB0F]/20 transition-colors">
                    <div className="text-3xl sm:text-4xl font-black text-[#FECB0F] mb-1">15+</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm group-hover:border-[#FECB0F]/20 transition-colors">
                    <div className="text-3xl sm:text-4xl font-black text-[#FECB0F] mb-1">120+</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Strategic Wins</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="group/btn relative w-fit">
                  <div className="absolute -inset-1 bg-[#FECB0F] rounded-full blur opacity-20 group-hover/btn:opacity-40 transition-opacity"></div>
                  <div className="relative bg-[#FECB0F] text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 transform group-hover/btn:scale-105 flex items-center gap-3">
                    <span>Read Founder's Story</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 w-full lg:w-1/2 min-h-[400px] sm:min-h-[500px] lg:min-h-0 flex items-center justify-center p-8 lg:p-12 overflow-hidden bg-black/20">
                {/* Image container with decorative frame */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute -inset-12 bg-[#FECB0F]/5 rounded-full blur-[100px] animate-pulse"></div>
                  <img
                    src={teamMembers[0].imageUrl}
                    alt={teamMembers[0].name}
                    className="relative w-full max-w-[450px] object-contain drop-shadow-[0_20px_50px_rgba(254,203,15,0.15)] group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
 <TimelineHero />
        {/* Contact Form Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">Send Us a Message</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Have questions about our B2B lead generation services? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
                </p>
              </div>

              <div className="bg-black rounded-2xl p-8 md:p-12 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FECB0F] text-black font-bold rounded-lg hover:bg-[#FFD54F] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
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
      <PopupForm />
    </div>
  );
}
