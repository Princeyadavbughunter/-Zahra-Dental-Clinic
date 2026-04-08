interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-[var(--brand-dark)] text-white p-6 shadow-xl">
      <h2 className="text-xl font-bold text-center mb-4">
        <em>Dental Implant Specialists — Trusted by 11,000+ Patients</em>
      </h2>
      <hr className="border-[var(--brand-gold)] mb-4 w-1/2 mx-auto" />

      <p className="text-lg text-white mb-4 text-center">
        <u><strong>Free Implant Consultation with Dr. Mohammad Abbas Noorani</strong></u>
      </p>

      <p className="text-white mb-6 text-center font-bold">
        <em>&quot;ONLY VALID FOR FIRST 10 PATIENTS&quot;</em>
      </p>

      <button onClick={onBookAppointment} className="bg-[var(--brand-gold)] text-white py-3 px-6 rounded-lg font-bold w-full hover:bg-[#0097a7] transition-colors">
        Request a Call back ➤
      </button>
      <small className="block text-center mt-2">
        Implant pricing starting at just ₹18,000
      </small>
    </section>
  );
}
