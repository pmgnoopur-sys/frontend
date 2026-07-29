'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import PopupForm from '@/components/PopupForm';
import TeamCarousel, { TeamMember } from '@/components/TeamCarousel';
import '@/components/TeamCarousel.css';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Shrish C Mishra",
      role: "CEO & Founder",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784806502/1000938160-removebg-preview_ladj4x.png",
      description: "Visionary leader with 15+ years in B2B lead generation. Passionate about helping businesses scale through data-driven strategies.",
    },
    {
      name: "Jay shinde",
      role: "Client Success manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784561719/copy_of_jjk_5116_1_lb2wmz1.jpg",
      description: "Growth-focused marketer crafting campaigns that connect PMG B2B with the right audiences.",
    },
        {
      name: "Vikas Thakur",
      role: "Client Success manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784207767/user-original_tppgrb.jpg",
      description: "Tech wizard building robust solutions. Believes clean code is the foundation of scalable B2B platforms.",
    },
    {
      name: "Pranav Kumar",
      role: "Client Success manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784211329/1781807276051_pcpbcz.png",
      description: "Operations expert ensuring seamless delivery and client satisfaction. Masters the art of balancing efficiency with quality.",
    },

    {
      name: "Subodh kadam",
      role: "Delivery Manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784294727/1754814540026_samkqo.png",
      description: "Strategic thinker driving revenue growth. Expert in B2B sales methodologies and pipeline management.",
    },
    {
      name: "Sushant Bangad",
      role: "Operations Manager",
      imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784796324/sushant.jpg",
      description: "Client advocate ensuring exceptional experiences. Dedicated to building long-term partnerships and driving retention.",
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

        {/* Our Clients Marquee Section */}
        <section className="py-0 bg-white overflow-hidden">
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
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784904965/images_rtzzlm.png"
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

        <Services />
        <Stats />

        {/* Team Section */}
        <section className="team">
          <div className="team__head">
            <div>
              <p className="team__eyebrow">Leadership</p>
              <h2 className="team__title">CEO & <em>Founder</em></h2>
            </div>
          </div>

          {/* CEO Card - Separate */}
          <div className="flex justify-center mb-16 px-5vw  ">
            <Link href="/founders-word" className="ceo-card w-full max-w-4xl cursor-pointer relative overflow-hidden rounded-2xl shadow-2xl flex flex-row">
              <div className="w-1/2 h-[700px] bg-black p-8 flex flex-col justify-center text-white">
                <h3 className="text-3xl font-bold mb-2">{teamMembers[0].name}</h3>
                <p className="text-[#FECB0F] text-lg mb-4">{teamMembers[0].role}</p>
                <p className="text-gray-300 mb-6">{teamMembers[0].description}</p>
                <button className="bg-[#FECB0F] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F5A623] transition w-fit">
                  Learn More
                </button>
              </div>
              <div className="w-1/2 h-[700px] bg-black flex items-center justify-center p-0 ">
                <img
                  src={teamMembers[0].imageUrl}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Team Carousel for remaining members */}
          <TeamCarousel
            members={teamMembers.slice(1)}
            eyebrow={`The collective — ${teamMembers.slice(1).length.toString().padStart(2, '0')} people`}
            title={<>Our <em>Team</em></>}
          />
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Have questions about our B2B lead generation services? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors resize-none"
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
