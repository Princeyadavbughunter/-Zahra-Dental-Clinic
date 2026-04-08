'use client';

import Image from "next/image";

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const results = [
    { src: "/images/results/Zhar1.jpg", label: "Smile Restoration" },
    { src: "/images/results/Zhar2.jpg", label: "Full Implant Case" },
    { src: "/images/results/zahar3.jpg", label: "Complete Transformation" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">
            Before & After <span className="text-gradient-gold">Transformations</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real results from real patients at Zahra Dental Clinic. See the life-changing difference dental implants can make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 max-w-5xl mx-auto">
          {results.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-[380px] md:h-[420px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Before & After - ${item.label}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[var(--brand-gold)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Before & After
                  </span>
                </div>
              </div>
              <div className="p-4 text-center border-t border-gray-50">
                <span className="text-sm font-semibold text-[var(--brand-dark)]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-3">
            Ready for Your <span className="text-gradient-gold">Transformation?</span>
          </h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto text-sm">
            Join 11,000+ happy patients. Affordable, painless implant procedures by Dr. Abbas Noorani.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[var(--brand-dark)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--brand-gold)] transition-all"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919277756167"
              className="bg-[var(--brand-gold)] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0097a7] transition-all text-center"
            >
              Call: +91 9277756167
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
