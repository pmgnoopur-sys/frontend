'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { API_BASE_URL } from '@/lib/api';

const audiences = ['Media agency', 'Enterprise team', 'Other'];

const services = [
  'B2B Lead Generation',
  'Account-Based Marketing',
  'B2B Email Marketing',
  'B2B Data Solutions',
  'CQL',
  'Not sure yet',
];

const initialForm = { name: '', email: '', company: '', audience: '', service: '', message: '', consent: false };

const inputClass =
  'w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FECB0F] focus:border-transparent transition';
const labelClass = 'block text-sm font-semibold text-gray-800 mb-2';

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact' }),
      });
      if (!response.ok) throw new Error('Request failed');
      router.push('/thank-you');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong sending your message. Please try again, or email info@pmg-b2b.com.');
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" required value={form.company} onChange={update} className={inputClass} />
      </div>

      <fieldset>
        <legend className={labelClass}>I am</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {audiences.map((a) => (
            <label key={a} className="cursor-pointer">
              <input type="radio" name="audience" value={a} required checked={form.audience === a} onChange={update} className="peer sr-only" />
              <span className="block text-center px-4 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium transition peer-checked:border-[#FECB0F] peer-checked:bg-[#FECB0F]/15 peer-checked:text-black peer-focus-visible:ring-2 peer-focus-visible:ring-[#FECB0F] hover:border-gray-400">
                {a}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="service" className={labelClass}>Service of interest</label>
        <select id="service" name="service" required value={form.service} onChange={update} className={inputClass}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your campaign <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={update} className={inputClass} />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          checked={form.consent}
          onChange={update}
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#FECB0F]"
        />
        <span className="text-sm text-gray-700">
          I agree to PMG B2B contacting me about my enquiry. See our{' '}
          <Link href="/privacy-policy" className="underline font-medium hover:text-black">Privacy Policy</Link>.
        </span>
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#FECB0F] text-black font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
      >
        {submitting ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}
