'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import PopupForm from '@/components/PopupForm';
import TeamCarousel, { TeamMember } from '@/components/TeamCarousel';
import '@/components/TeamCarousel.css';
import { API_BASE_URL } from '@/lib/api';

export default function Home() {
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

  const teamMembers: TeamMember[] = [
    {
      name: "Shrish C Mishra",
      role: "CEO & Founder",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1787653060/FMW07278_BW_snlvvd.jpg",
      description: "Visionary leader with 15+ years in B2B lead generation. Passionate about helping businesses scale through data-driven strategies.",
    },
    {
      name: "Jay shinde",
      role: "Sr. Client Success manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784561719/copy_of_jjk_5116_1_lb2wmz1.jpg",
      description: "Senior client success manager ensuring exceptional client relationships and driving satisfaction through strategic account management.",
    },
      {
      name: "Vikas Thakur",
      role: "Client Success manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784207767/user-original_tppgrb.jpg",
      description: "Client success manager dedicated to understanding client needs and delivering solutions that drive business growth and retention.",
    },
    {
      name: "Pranav Kumar",
      role: "Client Success manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784211329/1781807276051_pcpbcz.png",
      description: "Client success manager focused on building strong client partnerships and ensuring seamless service delivery for optimal results.",
    },

    {
      name: "Subodh kadam",
      role: " Sr. Quality Manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/c_fill,w_400,h_500,g_face,q_auto/v1786098493/file_000000003ae481fb88d5948a94273607_firlm1.png",
      description: "Quality manager ensuring high standards across all deliverables. Implements quality control processes to maintain excellence in client services.",
    },
    {
      name: "Sushant Bangad",
      role: "Operations Manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/c_fill,w_400,h_500,g_face,q_auto/v1784796324/sushant.jpg",
      description: "Operations manager optimizing workflows and processes. Ensures efficient team coordination and smooth operational execution.",
    },
    {
      name: "Amol Bade",
      role: "IT Manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1786090999/1785421776242_t1jn4m.png",
      description: "IT Team Head leading technology initiatives and infrastructure development. Ensures robust technical solutions and system reliability for PMG B2B's operations.",
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

        {/* Team Section */}
        <section className="team">
          <div className="team__head">
            <div>
              <p className="team__eyebrow">Leadership</p>
              <h2 className="team__title">Our Leader</h2>
            </div>
          </div>

          {/* CEO Card - Separate */}
          <div className="flex justify-center mb-16 px-5vw">
            <Link href="/founders-word" className="ceo-card w-full max-w-5xl cursor-pointer relative overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row group">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80 z-0"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FECB0F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FECB0F]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent z-10"></div>
              
              <div className="relative z-10 w-full md:w-1/2 min-h-0 md:min-h-[600px] bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 sm:p-10 md:p-14 flex flex-col justify-center text-white border-r-0 md:border-r border-white/10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FECB0F]/10 border border-[#FECB0F]/30 rounded-full px-4 py-2 mb-6 w-fit">
                  <div className="w-2 h-2 bg-[#FECB0F] rounded-full animate-pulse"></div>
                  <span className="text-[#FECB0F] text-xs font-semibold tracking-wider uppercase">Leadership</span>
                </div>
                
                {/* Name */}
                <h3 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  {teamMembers[0].name}
                </h3>
                
                {/* Role */}
                <p className="text-[#FECB0F] text-xl md:text-2xl font-semibold mb-6 tracking-wide">
                  {teamMembers[0].role}
                </p>
                
                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-md font-mono">
                  {teamMembers[0].description}
                </p>
                
                {/* Stats/Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold text-[#FECB0F]">15+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold text-[#FECB0F]">120+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Team Members</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="group/btn bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#FFD54F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              <div className="relative z-10 w-full md:w-1/2 min-h-[320px] md:min-h-[600px] bg-gradient-to-bl from-gray-900/30 to-black/30 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
                {/* Image container with decorative frame */}
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FECB0F]/20 to-transparent rounded-2xl blur-xl"></div>
                  <div className="absolute -inset-2 border-2 border-[#FECB0F]/30 rounded-2xl"></div>
                  
                  <img
                    src={teamMembers[0].imageUrl}
                    alt={teamMembers[0].name}
                    className="relative w-full h-[280px] md:h-[500px] object-contain drop-shadow-2xl"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-3 right-3 md:bottom-8 md:right-8 bg-black/80 backdrop-blur-md rounded-xl p-2 md:p-4 border border-[#FECB0F]/30">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FECB0F] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-xs md:text-sm font-semibold">Award Winner</div>
                      <div className="text-[#FECB0F] text-[10px] md:text-xs">ETNow 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* CEO & Founder Title */}
          <div className="text-center mb-12 px-5vw">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">CEO & Founder</h3>
            <div className="w-24 h-1 bg-[#FECB0F] mx-auto"></div>
          </div>

          {/* Team Carousel for remaining members */}
          <TeamCarousel
            members={teamMembers.slice(1)}
            eyebrow={`The collective — ${teamMembers.slice(1).length.toString().padStart(2, '0')} people`}
            title="Our Team"
          />
        </section>



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
