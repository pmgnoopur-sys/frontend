'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    yearsOfExperience: '',
    currentCompany: '',
    expectedSalary: '',
    noticePeriod: '',
    howDidYouHear: '',
    coverLetter: '',
    dataPermission: false
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('yearsOfExperience', formData.yearsOfExperience);
      formDataToSend.append('currentCompany', formData.currentCompany);
      formDataToSend.append('expectedSalary', formData.expectedSalary);
      formDataToSend.append('noticePeriod', formData.noticePeriod);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('howDidYouHear', formData.howDidYouHear);
      formDataToSend.append('type', 'career');
      
      if (resume) {
        formDataToSend.append('resume', resume);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://backend-2-81do.onrender.com/api'}/contacts`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          position: '',
          yearsOfExperience: '',
          currentCompany: '',
          expectedSalary: '',
          noticePeriod: '',
          howDidYouHear: '',
          coverLetter: '',
          dataPermission: false
        });
        setResume(null);
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-end pb-7 pt-24">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/vobojthd/image/upload/v1784132255/38a23c3d76185a38984f2ff6608e2a25_xvz7ks.jpg"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Build your career with PMG B2B and be part of a forward-thinking team that's revolutionizing B2B lead generation.
            </p>
          </div>
        </section>

        {/* Career Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Apply for a Position</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
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

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors bg-white"
                    >
                      <option value="">Select a position</option>
                      <option value="sales-development-representative">Sales Development Representative</option>
                      <option value="business-development-executive">Business Development Executive</option>
                      <option value="marketing-specialist">Marketing Specialist</option>
                      <option value="data-analyst">Data Analyst</option>
                      <option value="content-writer">Content Writer</option>
                      <option value="account-manager">Account Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label htmlFor="yearsOfExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      required
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors bg-white"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  {/* Current Company */}
                  <div>
                    <label htmlFor="currentCompany" className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Company
                    </label>
                    <input
                      type="text"
                      id="currentCompany"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your current company (if applicable)"
                    />
                  </div>

                  {/* Expected Salary */}
                  <div>
                    <label htmlFor="expectedSalary" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Salary (Annual) *
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      required
                      value={formData.expectedSalary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors"
                      placeholder="Enter your expected salary"
                    />
                  </div>

                  {/* Notice Period */}
                  <div>
                    <label htmlFor="noticePeriod" className="block text-sm font-semibold text-gray-700 mb-2">
                      Notice Period *
                    </label>
                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      required
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors bg-white"
                    >
                      <option value="">Select notice period</option>
                      <option value="immediate">Immediate</option>
                      <option value="15-days">15 days</option>
                      <option value="30-days">30 days</option>
                      <option value="45-days">45 days</option>
                      <option value="60-days">60 days</option>
                      <option value="90-days">90 days</option>
                      <option value="3-months+">3+ months</option>
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#FECB0F] file:text-black file:font-semibold hover:file:bg-[#FFD54F]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                    {resume && (
                      <p className="text-sm text-green-600 mt-1">Selected: {resume.name}</p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  {/* How Did You Hear About Us */}
                  <div>
                    <label htmlFor="howDidYouHear" className="block text-sm font-semibold text-gray-700 mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      id="howDidYouHear"
                      name="howDidYouHear"
                      required
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="indeed">Indeed</option>
                      <option value="referral">Employee Referral</option>
                      <option value="company-website">Company Website</option>
                      <option value="social-media">Social Media</option>
                      <option value="job-fair">Job Fair/Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Data Permission Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="dataPermission"
                      name="dataPermission"
                      required
                      checked={formData.dataPermission}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#FECB0F] border-gray-300 rounded focus:ring-[#FECB0F]"
                    />
                    <label htmlFor="dataPermission" className="text-sm text-gray-700">
                      I consent to PMG B2B storing and processing my personal data for recruitment purposes. I understand that my data will be handled in accordance with the company's privacy policy and GDPR/CCPA regulations. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FECB0F] text-black font-bold rounded-lg hover:bg-[#FFD54F] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-700">
              For recruitment inquiries, contact us at: 
              <a href="mailto:recruitment@pmg-b2b.com" className="text-black font-semibold ml-2 hover:underline">
                recruitment@pmg-b2b.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
