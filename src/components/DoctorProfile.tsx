interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Your Doctor</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">Meet Your <span className="text-gradient-gold">Implant Expert</span></h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 md:flex">
          {/* Left - Avatar */}
          <div className="md:w-1/3 bg-gradient-to-br from-[var(--brand-dark)] to-[#102a4a] flex items-center justify-center py-12 md:py-0">
            <div className="text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-5xl md:text-6xl font-bold">AN</span>
              </div>
              <div className="bg-[var(--brand-gold)] text-white text-xs font-bold py-1.5 px-5 rounded-full inline-block">
                14+ Years Experience
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="md:w-2/3 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-1">Dr. Mohammad Abbas Noorani</h3>
            <p className="text-[var(--brand-gold)] font-semibold text-sm uppercase tracking-wider mb-4">Specialist in Implantology</p>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              With over 14 years of clinical experience and 11,000+ happy patients, Dr. Abbas Noorani is one of Ahmedabad&apos;s most trusted implantologists. His expertise in dental implants has earned Zahra Dental Clinic 600+ genuine 5-star Google reviews — a testament to precision, care, and trust.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 py-5 border-y border-gray-100">
              {[
                { num: "14+", label: "Years" },
                { num: "11K+", label: "Patients" },
                { num: "600+", label: "Reviews" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-extrabold text-[var(--brand-gold)]">{stat.num}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://www.facebook.com/DrMohammadAbbasNoorani/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors text-xs font-bold">f</a>
              <a href="https://www.instagram.com/zahra_dental_clinic/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-100 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>

            <button
              onClick={onBookAppointment}
              className="bg-[var(--brand-dark)] text-white py-3 px-8 rounded-full font-bold hover:bg-[var(--brand-gold)] transition-all w-full md:w-auto"
            >
              Book Consultation with Dr. Noorani
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
