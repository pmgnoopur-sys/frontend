'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="text-black py-20" style={{ backgroundColor: '#FECB0F' }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connect with a Trusted B2B Lead Generation Agency
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              No query can be resolved if you never ask! Reach out to us today.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-8 h-fit">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black py-3 rounded-lg font-semibold transition" style={{backgroundColor: '#FECB0F'}}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Image and Contact Information */}
              <div className="space-y-6">
                {/* Image */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1783944509/Banner-InboxOracle-Email-Marketing-Solutions.jpg_xhv3xv.webp"
                    alt="Email Marketing Solutions"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Call us</h3>
                  <p className="text-gray-700 text-lg">+91 7972722487</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Email US</h3>
                  <p className="text-gray-700 text-lg">hr@pmg-b2b.com</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Mumbai Office</h3>
                  <p className="text-gray-700">
                    PMG B2B – Headquarters (Navi Mumbai)<br />
                    Block A, Millennium Business Park,<br />
                    TTC Industrial Area Sector 3 Mahape,<br />
                    Navi Mumbai, Maharashtra, India 400710
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Pune Office</h3>
                  <p className="text-gray-700">
                    PMG B2B – PUNE OFFICE<br />
                    Office No. 708, Seventh Floor,<br />
                    Pride-Icon, Thite Nagar, Kharadi,<br />
                    Pune, Maharashtra India 411014
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'How to find your office?',
                  'What is digital marketing?',
                  'How does SEO affect your sales?',
                  'How to start web-development?',
                  'When will I be billed?',
                  'What is SEO?',
                  'What is UI design?',
                  'How does UI/UX affect your sales?',
                  'How to get a refund?'
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                    <p className="text-gray-700 font-medium">{faq}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
