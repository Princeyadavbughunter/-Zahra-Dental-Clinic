'use client';

import Image from "next/image";

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

const images = [
  { src: "/images/results/b-1.JPG", label: "Before" },
  { src: "/images/results/a-1.JPG", label: "After" },
  { src: "/images/results/b-2.JPG", label: "Before" },
  { src: "/images/results/a-2.JPG", label: "After" },
  { src: "/images/results/b-3.jpg", label: "Before" },
  { src: "/images/results/A-3.jpg", label: "After" },
  { src: "/images/results/b-4.jpg", label: "Before" },
  { src: "/images/results/a-4.jpg", label: "After" },
];

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  // Duplicate for seamless infinite loop
  const allImages = [...images, ...images];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-orange-50/80 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">
            Before & After <span className="text-gradient-gold">Transformations</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real results from real patients at Zahra Dental Clinic. See the life-changing difference dental treatment can make.
          </p>
        </div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative">
        <div className="flex marquee-scroll gap-5 w-max">
          {allImages.map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-[280px] md:w-[350px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src={img.src}
                alt={`${img.label} dental treatment`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                img.label === "Before" ? "bg-black/60 backdrop-blur-sm" : "bg-[var(--brand-gold)] backdrop-blur-sm"
              }`}>
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-14">
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

      <style jsx>{`
        .marquee-scroll {
          animation: marquee 25s linear infinite;
        }
        .marquee-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
