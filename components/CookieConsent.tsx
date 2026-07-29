"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
      // Add animation after a small delay
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsAnimating(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsAnimating(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  if (!showConsent) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 md:p-6 transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <button
              onClick={() => window.open("/privacy", "_blank")}
              className="text-blue-400 hover:text-blue-300 underline ml-2"
            >
              Learn more
            </button>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
