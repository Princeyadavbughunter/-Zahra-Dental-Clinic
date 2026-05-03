import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const photos = [
    '/clinic/Screenshot_2026-04-22-16-51-34-15_92460851df6f172a4592fca41cc2d2e6.jpg',
    '/clinic/Screenshot_2026-04-22-16-51-57-27_92460851df6f172a4592fca41cc2d2e6.jpg',
    '/clinic/Screenshot_2026-04-22-16-52-18-49_92460851df6f172a4592fca41cc2d2e6.jpg',
    '/clinic/Screenshot_2026-04-22-16-53-00-23_92460851df6f172a4592fca41cc2d2e6.jpg',
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Our Space</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">Our <span className="text-gradient-gold">Modern Clinic</span></h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            State-of-the-art facility equipped with the latest technology for safe and comfortable implant procedures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {photos.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2 h-64 md:h-full' : 'h-48 md:h-56'
              }`}
            >
              <Image
                src={img}
                alt={`Zahra Dental Clinic ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-dark)] text-white py-3.5 px-10 rounded-full font-bold hover:bg-[var(--brand-gold)] hover:shadow-lg transition-all shadow-md"
          >
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
