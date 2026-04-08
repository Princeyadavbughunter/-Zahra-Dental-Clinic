interface DoctorProfileProps {
  onBookAppointment: () => void;
}

interface Doctor {
  name: string;
  qualification: string;
  description: string;
  experience?: string;
  specialization?: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Mohammad Abbas Noorani",
    qualification: "Specialist in Implantology",
    experience: "14+ Years Experience",
    specialization: "Lead Implantologist",
    description: "With over 14 years of clinical experience and 11,000+ happy patients, Dr. Abbas Noorani is one of Ahmedabad's most trusted implantologists. His expertise in dental implants has earned Zahra Dental Clinic 600+ genuine 5-star Google reviews."
  }
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Meet Your <span className="text-gradient-gold">Implant Expert</span></h2>
          <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A dedicated implantologist trusted by over 11,000 patients in Ahmedabad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative pt-8 pb-4 bg-gradient-to-b from-gray-50 to-white flex justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-gray-50 group-hover:ring-brandTeal/20">
                  <div className="w-full h-full relative rounded-full overflow-hidden bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-gold)] flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">AN</span>
                  </div>
                  {doctor.experience && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[var(--brand-gold)] text-white text-xs font-bold py-1 px-4 rounded-full shadow-lg whitespace-nowrap z-10">
                      {doctor.experience}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex-grow flex flex-col text-center relative">
                <div className="absolute top-4 right-6 text-4xl text-gray-100 font-serif opacity-50 group-hover:text-brandTeal/10 transition-colors">&quot;</div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--brand-gold)] transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-[var(--brand-dark)] font-semibold text-sm uppercase tracking-wider mb-4">
                  {doctor.qualification}
                </p>
                <div className="w-12 h-0.5 bg-gray-100 mx-auto mb-5 group-hover:bg-[var(--brand-gold)]/30 transition-colors"></div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {doctor.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-[var(--brand-gold)]">14+</p>
                    <p className="text-xs text-gray-500">Years Exp.</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--brand-gold)]">11K+</p>
                    <p className="text-xs text-gray-500">Patients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--brand-gold)]">600+</p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-dark)] text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-[var(--brand-gold)] hover:text-white transition-all duration-300 shadow-lg border-2 border-[var(--brand-dark)] hover:border-transparent hover:shadow-yellow-500/30"
          >
            Schedule Your Implant Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
