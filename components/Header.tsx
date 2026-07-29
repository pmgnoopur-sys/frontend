'use client';

import Link from 'next/link';
import { useState } from 'react';
import RobotRunner from '@/components/RobotRunner';
import SocialMediaFloating from '@/components/SocialMediaFloating';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 border-b-4 border-yellow-500">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/vobojthd/image/upload/v1783428737/PMG_Logo_FInal-02_cbrjos.webp" 
              alt="PMG B2B" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Home</Link>
            <Link href="/about" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">About Us</Link>
            <Link href="/services" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Services</Link>
            <Link href="/proffer" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Proffer.ai</Link>
            <Link href="/blog" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Blog</Link>
            <Link href="/life-at-pmg" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Life at PMG</Link>
            <Link href="/career" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Careers</Link>
            <Link href="/founders-word" className="text-white hover:text-[#FECB0F] transition px-4 py-2 rounded-full">Founder's Word</Link>
            <Link href="/contact" className="text-black px-6 py-2 rounded-full hover:bg-gray-900 transition font-semibold" style={{backgroundColor: '#FECB0F'}}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
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
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-white hover:text-[#FECB0F] transition">Home</Link>
            <Link href="/about" className="block text-white hover:text-[#FECB0F] transition">About Us</Link>
            <Link href="/services" className="block text-white hover:text-[#FECB0F] transition">Services</Link>
            <Link href="/proffer" className="block text-white hover:text-[#FECB0F] transition">Proffer.ai</Link>
            <Link href="/blog" className="block text-white hover:text-[#FECB0F] transition">Blog</Link>
            <Link href="/life-at-pmg" className="block text-white hover:text-[#FECB0F] transition">Life at PMG</Link>
            <Link href="/career" className="block text-white hover:text-[#FECB0F] transition">Careers</Link>
            <Link href="/founders-word" className="block text-white hover:text-[#FECB0F] transition">Founder's Word</Link>
            <Link href="/contact" className="block text-black px-6 py-2 rounded-lg hover:bg-gray-900 transition text-center font-semibold" style={{backgroundColor: '#FECB0F'}}>
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
