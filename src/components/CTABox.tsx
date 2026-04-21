interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[var(--brand-dark)] to-[#102a4a] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full animate-pulse" />
            Limited Availability
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Free Implant Consultation
          </h2>
          <p className="text-gray-300 mb-2 text-lg">
            with <strong className="text-white">Dr. Mohammad Abbas Noorani</strong>
          </p>
          <p className="text-gray-400 text-sm mb-2">B.D.S & Certified Implantologist | 14+ Years Experience</p>
          <p className="text-[var(--brand-gold)] font-bold text-sm mb-8">
            ONLY VALID FOR FIRST 10 PATIENTS
          </p>

          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-gold)] text-white py-3.5 px-10 rounded-full font-bold text-lg hover:bg-[#0097a7] transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Claim Your Free Consultation
          </button>
          <p className="text-gray-400 text-xs mt-4">Implants from ₹18,000 (Root) to ₹40,000 (Straumann) | No hidden charges</p>
        </div>
      </div>
    </section>
  );
}
