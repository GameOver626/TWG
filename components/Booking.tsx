'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send, Sparkles } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const PACKAGES: Package[] = [
  {
    id: 'editorial',
    name: 'Editorial & Fashion',
    price: '₦100,000',
    description: 'High-concept creative shoots for lookbooks, magazine features, and brand campaigns.',
    features: [
      'Up to 4 Hours Studio or Location Shoot',
      'Full Creative & Lighting Direction',
      '15 High-Resolution Retouched Retouches',
      'Full Commercial Usage License',
      'Online Private Proofing Gallery'
    ]
  },
  {
    id: 'lifestyle',
    name: 'Portrait & Lifestyle',
    price: '₦50,000',
    description: 'Intimate personal portraits, artistic branding, and lifestyle sessions.',
    recommended: true,
    features: [
      '2 Hours On-Location Shoot',
      '2 Outfit Changes Included',
      '10 High-Resolution Retouched Retouches',
      'Personal Usage Rights',
      'Online Private Proofing Gallery'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial & Corporate',
    price: '₦150,000',
    description: 'Complete visual asset creation for corporate identity, advertising, and products.',
    features: [
      'Full Day Coverage (Up to 8 Hours)',
      'Multi-Location or On-Site Studio Set',
      '35 High-Resolution Retouched Retouches',
      'Full Commercial & Global Usage Rights',
      'Raw & Color-Graded Delivery'
    ]
  }
];

export default function Booking() {
  const [selectedPackage, setSelectedPackage] = useState<string>('lifestyle');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-lavender-300 font-mono">
          Investment & Reservations
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-platinum-100 mt-2">
          Pricing & Booking
        </h2>
        <p className="mt-4 text-platinum-400 font-light max-w-lg mx-auto text-sm md:text-base">
          Select a package or request a custom quote for specialized campaigns.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {PACKAGES.map((pkg) => {
          const isSelected = selectedPackage === pkg.id;
          return (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.recommended
                  ? 'bg-mocha-800 border-2 border-lavender-300 shadow-[0_0_30px_rgba(216,180,254,0.15)]'
                  : 'bg-mocha-800/60 border border-mocha-700 hover:border-mocha-700'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-lavender-300 text-mocha-900 text-xs font-mono font-medium rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-light text-platinum-100 mb-2">{pkg.name}</h3>
                <p className="text-xs text-platinum-400 font-light mb-6 min-h-9">{pkg.description}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-light text-lavender-300">{pkg.price}</span>
                  <span className="text-xs font-mono text-platinum-400">/ session</span>
                </div>

                <ul className="space-y-3.5 mb-8 text-xs text-platinum-200">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-lavender-300 shrink-0 mt-0.5" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  const formElement = document.getElementById('booking-form');
                  formElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-lavender-300 text-mocha-900 shadow-md'
                    : 'bg-mocha-700/50 border border-mocha-700 text-platinum-200 hover:border-lavender-300/40 hover:text-lavender-300'
                }`}
              >
                {isSelected ? 'Selected Package' : 'Select Package'}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Booking Form Block */}
      <div id="booking-form" className="max-w-3xl mx-auto bg-mocha-800 border border-mocha-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-lavender-300/10 border border-lavender-300/30 rounded-full flex items-center justify-center mx-auto mb-6 text-lavender-300">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-light text-platinum-100 mb-3">Booking Request Sent</h3>
            <p className="text-platinum-400 font-light max-w-md mx-auto text-sm leading-relaxed mb-8">
              Thank you for reaching out! We will review your preferred date and session specifications and respond within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 border border-mocha-700 text-platinum-200 text-xs uppercase tracking-wider rounded-full hover:border-lavender-300/50 hover:text-lavender-300 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-lavender-300 uppercase tracking-widest">Reserve Your Date</span>
              <h3 className="text-2xl md:text-3xl font-light text-platinum-100 mt-1">Direct Consultation</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-platinum-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-mocha-900 border border-mocha-700 rounded-xl px-4 py-3 text-sm text-platinum-100 focus:outline-none focus:border-lavender-300 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-platinum-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-mocha-900 border border-mocha-700 rounded-xl px-4 py-3 text-sm text-platinum-100 focus:outline-none focus:border-lavender-300 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Selected Package Indicator */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-platinum-400 mb-2">
                  Selected Package
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full bg-mocha-900 border border-mocha-700 rounded-xl px-4 py-3 text-sm text-platinum-100 focus:outline-none focus:border-lavender-300 transition-colors"
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id} className="bg-mocha-900 text-platinum-100">
                      {pkg.name} ({pkg.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-platinum-400 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-mocha-900 border border-mocha-700 rounded-xl px-4 py-3 text-sm text-platinum-100 focus:outline-none focus:border-lavender-300 transition-colors"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-platinum-400 mb-2">
                Project Vision & Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about the location, mood, creative concepts, or specific timeline..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-mocha-900 border border-mocha-700 rounded-xl px-4 py-3 text-sm text-platinum-100 focus:outline-none focus:border-lavender-300 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-lavender-300 text-mocha-900 font-medium text-xs uppercase tracking-widest rounded-full hover:bg-lavender-400 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Reservation Request</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}