'use client';

import Link from 'next/link';
import { useState } from 'react';
import RobotRunner from '@/components/RobotRunner';
import SocialMediaFloating from '@/components/SocialMediaFloating';

const servicesLinks = [
  { href: '/services/prospect-pinnacle', label: 'Prospect Pinnacle' },
  { href: '/services/impact-sphere', label: 'Impact Sphere' },
  { href: '/services/inbox-oracle', label: 'Inbox Oracle' },
  { href: '/services/data-dynamo', label: 'Data Dynamo' },
];

const aboutMenu = {
  sidebar: [
    { label: 'Our Story', href: '/about#story' },
    { label: 'Leadership Team', href: '/about#leadership' },
    { label: 'Culture & Values', href: '/about#culture' },
    { label: 'Careers', href: '/career' },
  ],
  highlights: [
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 11.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z"/></svg>,
      label: 'Our Mission',
      description: 'Why PMG exists',
      href: '/about#mission',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>,
      label: 'Leadership Team',
      description: 'Meet the people behind PMG',
      href: '/about#leadership',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.181-.389.907-.673 2.142-.766 3.557h3.936c-.093-1.415-.377-2.65-.766-3.557-.24-.558-.499-.947-.737-1.181C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.415.377 2.65.766 3.557.24.558.499.947.737 1.181.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.181.389-.907.673-2.142.766-3.557zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-8.268 0A6.004 6.004 0 012.083 11h1.946c.089 1.546.383 2.97.837 4.118z" clipRule="evenodd"/></svg>,
      label: 'Global Reach',
      description: 'Serving clients worldwide',
      href: '/about#global',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>,
      label: 'Careers',
      description: 'Join our growing team',
      href: '/career',
    },
  ],
};

const solutionsMenu = {
  byIndustry: [
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>,
      label: 'IT Services', 
      description: 'For IT & MSS', 
      href: '/solutions/it-services' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>,
      label: 'Healthcare & Pharma', 
      description: 'For life sciences & care providers', 
      href: '/solutions/healthcare' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/></svg>,
      label: 'Manufacturing', 
      description: 'For plants & shop floors', 
      href: '/solutions/manufacturing' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>,
      label: 'Financial Services', 
      description: 'For BFSI', 
      href: '/solutions/financial-services' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/></svg>,
      label: 'Retail', 
      description: 'For stores & chains', 
      href: '/solutions/retail' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/></svg>,
      label: 'Construction', 
      description: 'For project crews', 
      href: '/solutions/construction' 
    },
  ],
  byCompanySize: [
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/></svg>,
      label: 'Small Business', 
      description: 'Growing businesses', 
      href: '/solutions/small-business' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd"/><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"/></svg>,
      label: 'Enterprise', 
      description: 'Large organizations', 
      href: '/solutions/enterprise' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/></svg>,
      label: 'Global Companies', 
      description: 'Worldwide operations', 
      href: '/solutions/global-companies' 
    },
  ],
  
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 border-b-2 border-yellow-500">
      <nav className="w-full px-4 py-4" aria-label="Main">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/vobojthd/image/upload/v1783428737/PMG_Logo_FInal-02_cbrjos.webp" 
              alt="PMG B2B" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4">
            <div className="relative group">
              <Link href="/about" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                About Us
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-screen opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-12 gap-6">
                      {/* Sidebar */}
                      <div className="col-span-3 border-r border-yellow-500/20 pr-6">
                        <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">ABOUT PMG</h3>
                        <div className="space-y-1">
                          {aboutMenu.sidebar.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2.5 rounded-lg text-white text-sm font-medium hover:bg-white/5 hover:text-[#FECB0F] transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="col-span-5 border-r border-yellow-500/20 pr-6">
                        <div className="bg-[#FECB0F]/10 rounded-xl p-4 mb-4">
                          <div className="text-[#FECB0F] text-xs font-bold tracking-wider">WHO WE ARE</div>
                          <div className="text-white text-sm mt-1">Engineering digital ecosystems that drive growth, inspire action, and define culture.</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {aboutMenu.highlights.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition group/item"
                            >
                              <span className="w-9 h-9 rounded-lg bg-[#FECB0F]/10 text-[#FECB0F] flex items-center justify-center shrink-0">{item.icon}</span>
                              <div>
                                <div className="text-white text-sm font-medium group-hover/item:text-[#FECB0F] transition">{item.label}</div>
                                <div className="text-gray-400 text-xs">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="col-span-4">
                        <div className="relative rounded-xl overflow-hidden h-full min-h-[280px]">
                          <img
                            src="https://res.cloudinary.com/vobojthd/image/upload/v1787839431/Gemini_Generated_Image_8pvdun8pvdun8pvd_vbbutx.png"
                            alt="About PMG"
                            className="w-full h-full object-cover absolute inset-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[#FECB0F] text-[10px] font-bold tracking-widest uppercase">Our Journey</div>
                            <div className="text-white font-bold text-lg mt-1">Beyond The Surface</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                Solutions
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-screen opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 gap-6">
                    {/* BY INDUSTRY */}
                    <div>
                      <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">BY INDUSTRY</h3>
                      <div className="space-y-1">
                        {solutionsMenu.byIndustry.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition group/item"
                          >
                            <span className="w-9 h-9 rounded-lg bg-[#FECB0F]/10 text-[#FECB0F] flex items-center justify-center shrink-0">{item.icon}</span>
                            <div>
                              <div className="text-white text-sm font-medium group-hover/item:text-[#FECB0F] transition">{item.label}</div>
                              <div className="text-gray-400 text-xs">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* BY COMPANY SIZE */}
                    <div>
                      <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">BY COMPANY SIZE</h3>
                      <div className="space-y-1">
                        {solutionsMenu.byCompanySize.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition group/item"
                          >
                            <span className="w-9 h-9 rounded-lg bg-[#FECB0F]/10 text-[#FECB0F] flex items-center justify-center shrink-0">{item.icon}</span>
                            <div>
                              <div className="text-white text-sm font-medium group-hover/item:text-[#FECB0F] transition">{item.label}</div>
                              <div className="text-gray-400 text-xs">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="relative group">
              <Link href="/services" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border border-yellow-500/30 rounded-xl shadow-xl overflow-hidden">
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-white hover:text-[#FECB0F] hover:bg-white/5 transition text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/proffer" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full">Proffer.ai</Link>
            <Link href="/blog" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full">Blog</Link>
            <Link href="/life-at-pmg" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full">Life at PMG</Link>
            <Link href="/career" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full">Careers</Link>
            <Link href="/founders-word" className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full">Founder's Word</Link>
            <Link href="/contact" className="text-black px-4 py-2 rounded-full hover:bg-gray-900 transition font-semibold" style={{backgroundColor: '#FECB0F'}}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 pb-4">
            <Link href="/about" className="block text-white hover:text-[#FECB0F] transition">About Us</Link>
            <div>
              <div className="flex items-center justify-between">
                <Link href="/services" className="block text-white hover:text-[#FECB0F] transition">Services</Link>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-white p-1"
                  aria-label="Toggle services submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isMobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l border-yellow-500/30 pl-4">
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-300 hover:text-[#FECB0F] transition text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/proffer" className="block text-white hover:text-[#FECB0F] transition">Proffer.ai</Link>
            <Link href="/blog" className="block text-white hover:text-[#FECB0F] transition">Blog</Link>
            <Link href="/life-at-pmg" className="block text-white hover:text-[#FECB0F] transition">Life at PMG</Link>
            <Link href="/career" className="block text-white hover:text-[#FECB0F] transition">Careers</Link>
            <Link href="/founders-word" className="block text-white hover:text-[#FECB0F] transition">Founder's Word</Link>
            <Link href="/contact" className="block text-black px-4 py-2 rounded-lg hover:bg-gray-900 transition text-center font-semibold" style={{backgroundColor: '#FECB0F'}}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
      <RobotRunner />
      <SocialMediaFloating />
    </header>
  );
}
