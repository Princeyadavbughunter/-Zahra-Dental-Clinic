interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 transition-transform duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg">Get Dental Implants Starting ₹18,000</h3>
          <p className="text-sm">Trusted by 11,000+ patients | 600+ 5-star reviews</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onBookAppointment} className="bg-[var(--brand-gold)] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#0097a7] transition-colors">
            BOOK CONSULTATION
          </button>
          <a href="tel:+919277756167" className="bg-[var(--brand-dark)] text-white px-4 py-2 rounded-lg font-bold text-sm border border-gray-700">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </div>
  );
}
