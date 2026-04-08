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
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-[var(--brand-gold)] text-sm md:text-base font-medium mb-2 uppercase tracking-widest">
            Real Patient Transformations
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After <span className="text-gradient-gold">Implant Results</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--brand-dark)] mx-auto rounded-full opacity-80"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See the incredible transformations achieved by Dr. Abbas Noorani at Zahra Dental Clinic. Every smile tells a story of trust and expertise.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {results.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-[350px] md:h-[400px]">
                <Image
                  src={item.src}
                  alt={`Before & After - ${item.label}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[var(--brand-gold)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Before & After
                </div>
              </div>
              <div className="p-3 text-center">
                <span className="text-sm font-medium text-gray-600">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-xl mt-8 border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your Own <span className="text-gradient-gold">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join 11,000+ happy patients who trust Zahra Dental Clinic for their dental implants. Get your smile back with affordable, painless implant procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[var(--brand-dark)] text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
            >
              Book Implant Consultation
            </button>
            <a
              href="tel:+919277756167"
              className="bg-[var(--brand-gold)] text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors text-center"
            >
              Call Now: +91 9277756167
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Implants starting at just ₹18,000
          </p>
        </div>
      </div>
    </section>
  );
}
