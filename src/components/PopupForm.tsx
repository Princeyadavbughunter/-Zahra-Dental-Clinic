'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    router.push("/thank-you");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-[var(--brand-dark)] to-[#102a4a] p-5 rounded-t-2xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white text-xl transition-colors">&times;</button>
          <h2 className="text-lg font-bold text-white">Book Free Consultation</h2>
          <p className="text-gray-300 text-xs mt-1">with Dr. Mohammad Abbas Noorani</p>
        </div>

        <div className="p-5">
          {/* Countdown */}
          <div className="bg-[var(--brand-dark)] text-white p-3 rounded-xl mb-5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Offer expires in</p>
            <div className="text-2xl font-bold font-mono">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Dental Concern</label>
              <textarea
                name="dentalConcern"
                required
                rows={2}
                placeholder="Missing teeth, loose dentures, want implants..."
                className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--brand-gold)] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#0097a7] transition-all shadow-md"
            >
              Book Free Consultation
            </button>

            <p className="text-center text-[10px] text-gray-400">
              Implants from ₹18,000 (Root) up to ₹40,000 (Straumann). No hidden charges.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
