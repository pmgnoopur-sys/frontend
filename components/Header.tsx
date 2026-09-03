'use client';

import Link from 'next/link';
import { useState } from 'react';
import RobotRunner from '@/components/RobotRunner';
import SocialMediaFloating from '@/components/SocialMediaFloating';

const servicesMenu = [
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>,
    label: 'Prospect Pinnacle',
    description: 'Targeted B2B lead generation',
    href: '/services/prospect-pinnacle',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A4.001 4.001 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>,
    label: 'Impact Sphere',
    description: 'Account-based engagement',
    href: '/services/impact-sphere',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>,
    label: 'Inbox Oracle',
    description: 'Email marketing solutions',
    href: '/services/inbox-oracle',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>,
    label: 'Data Dynamo',
    description: 'Data & analytics',
    href: '/services/data-dynamo',
  },
];

const aboutMenu = [
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>,
    label: 'Our Story',
    description: 'How PMG was founded',
    href: '/about/story',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>,
    label: 'Leadership Team',
    description: 'Meet the people behind PMG',
    href: '/about',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.181-.389.907-.673 2.142-.766 3.557h3.936c-.093-1.415-.377-2.65-.766-3.557-.24-.558-.499-.947-.737-1.181C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.415.377 2.65.766 3.557.24.558.499.947.737 1.181.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.181.389-.907.673-2.142.766-3.557zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-8.268 0A6.004 6.004 0 012.083 11h1.946c.089 1.546.383 2.97.837 4.118z" clipRule="evenodd"/></svg>,
    label: 'Culture & Values',
    description: 'What drives us every day',
    href: '/about/culture',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15a24.98 24.98 0 01-8-1.308z"/></svg>,
    label: 'Careers',
    description: 'Join our growing team',
    href: '/career',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>,
    label: 'Our Mission',
    description: 'Why PMG exists',
    href: '/about/mission',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/></svg>,
    label: 'Global Reach',
    description: 'Serving clients worldwide',
    href: '/about/global',
  },
];

const profferMenu = [
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.925-3.087 9.123-7.488 10.74L10 18l-.512-.259C5.087 16.123 2 11.925 2 7.001c0-.681.056-1.35.166-2.002zM10 9a1 1 0 100-2 1 1 0 000 2zm-1 2a1 1 0 100 2h2a1 1 0 100-2H9z" clipRule="evenodd"/></svg>,
    label: 'LeadCert AI',
    description: 'Real-time lead validation',
    href: '/proffer#leadcert',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>,
    label: 'VerifySure AI',
    description: 'AI-powered consent calls',
    href: '/proffer#verifysure',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>,
    label: 'ClearBoard AI',
    description: 'Live delivery visibility',
    href: '/proffer#clearboard',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>,
    label: 'TrustCheck AI',
    description: 'Quality you can trust',
    href: '/proffer#trustcheck',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>,
    label: 'PredictWise AI',
    description: 'Better campaign results',
    href: '/proffer#predictwise',
  },
];

const insightsMenu = [
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/></svg>,
    label: 'Blog',
    description: 'Latest industry insights',
    href: '/blog',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>,
    label: 'Founders Word',
    description: 'Vision from our leadership',
    href: '/founders-word',
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>,
    label: 'Life at PMG',
    description: 'Our culture and environment',
    href: '/life-at-pmg',
  },
];

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
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileProfferOpen, setIsMobileProfferOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 border-b-2 border-yellow-500">
      <nav className="w-full px-4 py-4 relative" aria-label="Main">
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
            <div className="group">
              <button className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                About Us
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-full opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div>
                        <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">ABOUT PMG</h3>
                        <div className="space-y-1">
                          {aboutMenu.map((item) => (
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
                      <div className="flex items-center">
                        <div className="relative rounded-xl overflow-hidden w-full h-full min-h-[240px]">
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
            <div className="group">
              <button className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                Solutions
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-full opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            <div className="group">
              <button className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-full opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div>
                        <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">OUR SERVICES</h3>
                        <div className="space-y-1">
                          {servicesMenu.map((item) => (
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
                      <div className="flex items-center">
                        <div className="relative rounded-xl overflow-hidden w-full h-full min-h-[240px]">
                          <img
                            src="https://res.cloudinary.com/vobojthd/image/upload/v1788441562/ChatGPT_Image_Sep_3_2026_06_48_55_PM_k6ty1q.png"
                            alt="Our Services"
                            className="w-full h-full object-cover absolute inset-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[#FECB0F] text-[10px] font-bold tracking-widest uppercase">What We Do</div>
                            <div className="text-white font-bold text-lg mt-1">Growth Engine</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <button className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                Proffer.ai
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-full opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div>
                        <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">AI CAPABILITIES</h3>
                        <div className="space-y-1">
                          {profferMenu.map((item) => (
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
                      <div className="flex items-center">
                        <div className="relative rounded-xl overflow-hidden w-full h-full min-h-[240px]">
                          <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                            alt="Proffer AI"
                            className="w-full h-full object-cover absolute inset-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[#FECB0F] text-[10px] font-bold tracking-widest uppercase">The Future of Demand Gen</div>
                            <div className="text-white font-bold text-lg mt-1">AI-Powered Precision</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <button className="text-white hover:text-[#FECB0F] transition px-2 lg:px-4 py-2 rounded-full flex items-center gap-1">
                Insights
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-full opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="bg-black border-b border-yellow-500/30 shadow-2xl overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div>
                        <h3 className="text-[#FECB0F] text-xs font-bold mb-4 tracking-wider">LATEST UPDATES</h3>
                        <div className="space-y-1">
                          {insightsMenu.map((item) => (
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
                      <div className="flex items-center">
                        <div className="relative rounded-xl overflow-hidden w-full h-full min-h-[240px]">
                          <img
                            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
                            alt="Insights"
                            className="w-full h-full object-cover absolute inset-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-[#FECB0F] text-[10px] font-bold tracking-widest uppercase">Stay Informed</div>
                            <div className="text-white font-bold text-lg mt-1">Growth Strategies</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div>
              <div className="flex items-center justify-between">
                <span className="block text-white">About Us</span>
                <button
                  type="button"
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="text-white p-1"
                  aria-label="Toggle about submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isMobileAboutOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l border-yellow-500/30 pl-4">
                  {aboutMenu.map((item) => (
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
            <div>
              <div className="flex items-center justify-between">
                <span className="block text-white">Solutions</span>
                <button
                  type="button"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="text-white p-1"
                  aria-label="Toggle solutions submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isMobileSolutionsOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l border-yellow-500/30 pl-4">
                  <div className="text-xs text-[#FECB0F] font-bold tracking-wider mb-1">BY INDUSTRY</div>
                  {solutionsMenu.byIndustry.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-300 hover:text-[#FECB0F] transition text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="text-xs text-[#FECB0F] font-bold tracking-wider mt-3 mb-1">BY COMPANY SIZE</div>
                  {solutionsMenu.byCompanySize.map((item) => (
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
                  {servicesMenu.map((item) => (
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
            <div>
              <div className="flex items-center justify-between">
                <span className="block text-white">Insights</span>
                <button
                  type="button"
                  onClick={() => setIsMobileInsightsOpen(!isMobileInsightsOpen)}
                  className="text-white p-1"
                  aria-label="Toggle insights submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${isMobileInsightsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isMobileInsightsOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l border-yellow-500/30 pl-4">
                  {insightsMenu.map((item) => (
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
            <div>
              <div className="flex items-center justify-between">
                <span className="block text-white">Proffer.ai</span>
                <button
                  type="button"
                  onClick={() => setIsMobileProfferOpen(!isMobileProfferOpen)}
                  className="text-white p-1"
                  aria-label="Toggle proffer submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${isMobileProfferOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isMobileProfferOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l border-yellow-500/30 pl-4">
                  {profferMenu.map((item) => (
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
