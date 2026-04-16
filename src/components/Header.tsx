'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[var(--brand-dark)] text-white py-2 px-4 text-xs md:text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Mon–Sat: 9:00 AM–1:00 PM & 4:00 PM–8:00 PM</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+919638787144" className="hover:text-[var(--brand-gold)] transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (+91) 9638787144
            </a>
            <span className="opacity-30">|</span>
            <a href="mailto:drabbas@ezahradental.com" className="hover:text-[var(--brand-gold)] transition-colors">drabbas@ezahradental.com</a>
            <span className="opacity-30">|</span>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/DrMohammadAbbasNoorani/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-gold)] transition-colors">Facebook</a>
              <a href="https://www.instagram.com/zahra_dental_clinic/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-gold)] transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@zahradentalclinic1939" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-gold)] transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'py-2 shadow-lg' : 'py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Left - Logo + Address */}
          <div className="flex items-center gap-6">
            <Image
              src="/zdc_logo.png"
              alt="Zahra Dental Clinic & Implant Centre"
              width={200}
              height={50}
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
            />
            <div className="hidden lg:flex flex-col">
              <a
                href="https://maps.app.goo.gl/pfWfskwLcVwez9bw9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-[var(--brand-gold)] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                B/20, Below APMC Clock Tower, Nr SBI Bank Vasna, Ahmedabad
              </a>
            </div>
          </div>

          {/* Right - Phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919638787144"
              className="hidden md:flex items-center gap-2 text-[var(--brand-dark)] font-semibold hover:text-[var(--brand-gold)] transition-colors"
            >
              <div className="w-9 h-9 bg-[var(--brand-gold)]/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="text-sm leading-tight">
                <span className="block text-xs text-gray-400">Call Us</span>
                <span>9638787144</span>
              </div>
            </a>
            <button
              onClick={onBookAppointment}
              className={`bg-[var(--brand-gold)] text-white rounded-full font-bold shadow-md hover:shadow-lg hover:bg-[#0097a7] transition-all duration-300 tracking-wide uppercase ${scrolled ? 'px-5 py-2.5 text-xs' : 'px-7 py-3 text-sm'}`}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
