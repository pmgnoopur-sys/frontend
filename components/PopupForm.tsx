'use client';

import { useState, useEffect } from 'react';

interface PopupFormProps {
  onClose?: () => void;
}

export default function PopupForm({ onClose }: PopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCookieConsent, setHasCookieConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Check cookie consent
    const consent = localStorage.getItem('cookieConsent');
    setHasCookieConsent(consent === 'accepted');

    // Don't show again if the user already dismissed the popup
    if (localStorage.getItem('popupDismissed') === 'true') return;

    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem('popupDismissed', 'true');
    setIsOpen(false);
    onClose?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  // Show cookie consent required message if user hasn't accepted cookies
  if (!hasCookieConsent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent Required</h2>
          <p className="text-gray-600 mb-6">
            To access our contact form and services, please accept cookies. This helps us provide you with a better experience and personalized services.
          </p>
          <button
            onClick={handleClose}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold transition hover:bg-gray-800"
          >
            I Understand
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-black/90 backdrop-blur-xl rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src="https://res.cloudinary.com/vobojthd/image/upload/v1783944509/Banner-InboxOracle-Email-Marketing-Solutions.jpg_xhv3xv.webp"
              alt="Email Marketing Solutions"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Form */}
          <div className="p-6">
            <p className="text-gray-300 mb-6">
              Have questions? Fill out the form below and we'll get back to you shortly.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="popup-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="popup-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your message *
                </label>
                <textarea
                  id="popup-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-black py-3 rounded-lg font-semibold transition hover:opacity-90"
                style={{ backgroundColor: '#FECB0F' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-b-lg">
          <button
            onClick={handleClose}
            className="text-sm text-gray-400 hover:text-white transition-colors w-full"
          >
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
