interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--brand-dark)]/95 backdrop-blur-md text-white py-3 px-4 z-40 border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="hidden sm:block">
          <p className="font-bold text-sm">Dental Implants from ₹18,000</p>
          <p className="text-[10px] text-gray-400">1,800+ implants | 11,000+ patients | Globally trusted</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button onClick={onBookAppointment} className="bg-[var(--brand-gold)] text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-[#0097a7] transition-colors flex-1 sm:flex-none">
            BOOK NOW
          </button>
          <a href="tel:+919638787144" className="bg-white/10 text-white px-5 py-2 rounded-full font-bold text-xs border border-white/20 hover:bg-white/20 transition-colors flex-1 sm:flex-none text-center">
            CALL
          </a>
        </div>
      </div>
    </div>
  );
}
