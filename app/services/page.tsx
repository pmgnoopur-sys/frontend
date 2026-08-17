'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessProcess from '@/components/BusinessProcess';
import Demo from '@/components/Demo';


export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Simple Services Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-white to-[#FFF8E7] text-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 text-center py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our <span className="text-[#FECB0F]">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive B2B lead generation and marketing solutions to drive your business growth.
                </p>
              </div>
              <div className="flex-1 flex justify-end h-full">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1784817801/B2B-appointment-setting_ks0wwp.png"
                  alt="Services Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our <span className="text-[#FECB0F]">Services</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Comprehensive solutions to accelerate your B2B growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Lead Generation Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Lead Generation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in B2B lead generation, helping you identify and connect with high-potential prospects. Our data-driven approach ensures you get qualified leads that convert.
                </p>
              </div>

              {/* Account-Based Marketing Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Account-Based Marketing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Target high-value accounts with personalized marketing strategies. We help you engage decision-makers at key accounts to drive revenue growth.
                </p>
              </div>

              {/* Demand Generation Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Demand Generation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create awareness and interest in your products or services. Our demand generation programs nurture prospects through the funnel to drive conversions.
                </p>
              </div>

              {/* Digital Marketing Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Digital Marketing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive digital marketing solutions including SEO, PPC, content marketing, and social media to amplify your brand presence.
                </p>
              </div>

              {/* Account Management Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Account Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated account management to ensure smooth execution of your campaigns and maximize ROI from your marketing investments.
                </p>
              </div>

              {/* Database Management Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FECB0F] transition-colors">Database Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintain clean, accurate, and compliant databases. Our database management services ensure your data is always up-to-date and ready for marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Process Section */}
        <BusinessProcess />

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <Demo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
