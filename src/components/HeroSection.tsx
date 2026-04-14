'use client';

import { useState, useRef } from "react";
import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-dark)]/5 via-transparent to-[var(--brand-gold)]/5 pointer-events-none" />

      <div className="relative p-4 md:p-10 lg:p-16 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 text-[var(--brand-gold)] px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-[var(--brand-gold)] rounded-full animate-pulse" />
            Globally Trusted by 11,000+ Patients — India, Canada, Iraq, Kenya & More
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 leading-tight tracking-tight text-[var(--brand-dark)]">
          Get the Smile You&apos;ve<br />
          Always Wanted with <span className="text-gradient-gold">Dental Implants</span>
        </h1>
        <p className="text-center text-gray-500 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          1800+ implants placed by a certified implantologist. World-class dental care at affordable prices starting at just <strong className="text-[var(--brand-dark)]">&#8377;18,000</strong>.
        </p>

        {/* Hero Cards */}
        <div className="md:flex md:items-stretch md:gap-6 md:mb-14">
          {/* Video Card */}
          <div className="relative rounded-2xl h-72 md:h-[460px] mb-6 md:mb-0 md:flex-[1.2] overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/videos/A Space created for comfort, and care trusted by our patients. Zahra Dental  Clinic & Implant C.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2.5 rounded-full transition-all duration-300 border border-white/30"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
              )}
            </button>

            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-white/80 text-xs font-medium">Zahra Dental Clinic & Implant Centre</p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="md:flex-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-dark)] rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition duration-700" />
            <div className="relative h-full bg-gradient-to-br from-[#0a2540] to-[#0f3460] text-white p-8 rounded-2xl text-center shadow-2xl border border-white/10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-medium mx-auto mb-5 border border-white/10">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Limited Time Offer
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide">Dental Implants</h2>
              <div className="w-12 h-0.5 bg-[var(--brand-gold)] mx-auto rounded-full mb-5 opacity-60" />
              <p className="text-4xl md:text-6xl font-extrabold mb-1 text-white">
                &#8377;18,000
              </p>
              <p className="text-base font-light mb-2 text-gray-300">per implant</p>
              <p className="text-xs mb-8 text-gray-400 border-t border-white/10 pt-4 mt-2">
                World-class care at affordable prices. Certified Implantologist.
              </p>

              <button
                onClick={onBookAppointment}
                className="w-full bg-[var(--brand-gold)] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-[var(--brand-gold)]/30 hover:scale-[1.02] transition-all duration-300"
              >
                Book Free Consultation
              </button>
              <p className="text-xs mt-3 text-gray-400">No hidden charges. Transparent pricing.</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mb-14 md:flex-row md:justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-gold)] text-white py-3.5 px-10 rounded-full font-bold text-base shadow-lg hover:shadow-[var(--brand-gold)]/30 hover:-translate-y-0.5 transition-all md:min-w-[220px]"
          >
            Book Consultation
          </button>
          <a
            href="tel:+919638787144"
            className="bg-white text-[var(--brand-dark)] border-2 border-gray-200 py-3.5 px-10 rounded-full font-bold text-base text-center shadow-sm hover:border-[var(--brand-gold)] hover:-translate-y-0.5 transition-all md:min-w-[220px]"
          >
            Call: +91 9638787144
          </a>
        </div>

        {/* Stats Grid */}
        <div className="mb-14">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[var(--brand-dark)] mb-8">
            Why Patients Choose <span className="text-gradient-gold">Zahra Dental</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              { icon: "/images/heroicons/Experience.png", title: "14+ Years", desc: "Clinical experience" },
              { icon: "/images/heroicons/premium.png", title: "1,800+", desc: "Dental implants" },
              { icon: "/images/heroicons/team.png", title: "3,000+", desc: "Root canals" },
              { icon: "/images/heroicons/sterilization.png", title: "11,000+", desc: "Smiling patients" },
              { icon: "/images/heroicons/painless.png", title: "500+", desc: "Improved smiles" }
            ].map((usp, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group border border-gray-100"
              >
                <div className="bg-[var(--brand-gold)]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform duration-300">
                  <Image src={usp.icon} alt={usp.title} width={24} height={24} className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[var(--brand-dark)] mb-0.5">{usp.title}</h4>
                <p className="text-[11px] text-gray-400">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dental Tourism CTA */}
        <div className="bg-gradient-to-r from-[var(--brand-dark)] to-[#102a4a] p-6 md:p-10 rounded-2xl shadow-lg md:max-w-4xl md:mx-auto mb-14">
          <div className="text-center">
            <p className="text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-widest mb-2">Dental Tourism</p>
            <h3 className="font-bold text-white mb-3 text-xl md:text-2xl">World-Class Dental Care at Affordable Prices</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
              Patients from Canada, Iraq, Kenya and across the globe trust Zahra Dental for implant dentistry. Advanced technology, international standards, and savings of up to 70% compared to Western countries.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["India", "Canada", "Iraq", "Kenya", "& More"].map((country, i) => (
                <span key={i} className="bg-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/10">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 md:max-w-4xl md:mx-auto">
          <h3 className="font-bold text-[var(--brand-dark)] mb-6 text-xl md:text-2xl text-center">Our Commitment to Your Smile</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              { text: "Certified Implantologist trained by Dr. Palo Malo." },
              { text: "1,800+ dental implants successfully placed over 14+ years." },
              { text: "Most affordable implant pricing starting at ₹18,000." },
              { text: "Globally trusted — patients from India, Canada, Iraq, Kenya." },
              { text: "Certified by International Implant Foundation." },
              { text: "Morning 9:00 AM–1:00 PM & Evening 4:00 PM–8:00 PM, Mon–Sat." }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="w-5 h-5 bg-[var(--brand-gold)]/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-sm text-gray-600">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <button
              onClick={onBookAppointment}
              className="bg-[var(--brand-dark)] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[var(--brand-gold)] transition-all w-full md:w-auto"
            >
              Request a Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
