import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass shadow-sm py-2 px-4 transition-all duration-300">
      <div className="text-center max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/zahra.jpg"
            alt="Zahra Dental Clinic & Implant Centre"
            width={150}
            height={38}
            className="h-9 w-auto hover:scale-105 transition-transform duration-300"
          />
          <a
            href="https://maps.app.goo.gl/zahra-dental-ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-600 hover:text-[var(--brand-gold)] transition-colors cursor-pointer hidden md:block"
          >
            <span className="mr-1">📍</span>
            <span className="border-b border-transparent hover:border-[var(--brand-gold)] transition-all">
              APMC Market, Near Vishala Circle, Ahmedabad
            </span>
          </a>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onBookAppointment}
            className="bg-gradient-to-r from-[var(--brand-gold)] to-[#0097a7] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs tracking-wider uppercase"
          >
            Book Now
          </button>
          <a
            href="tel:+919277756167"
            className="bg-white text-[var(--brand-dark)] border-2 border-[var(--brand-dark)] px-5 py-2 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 text-xs tracking-wider uppercase text-center hidden sm:inline-flex"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
