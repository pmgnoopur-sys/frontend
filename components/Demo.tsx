import React from 'react';

export default function Demo() {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to <span className="text-[#FECB0F]">Get Started</span>?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to learn how our B2B lead generation services can help your business grow.
        </p>
        <button className="bg-[#FECB0F] text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F5A623] transition-colors">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}
