export default function AboutSection() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-gold)]/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="max-w-6xl mx-auto relative">
                <div className="mb-14 text-center">
                    <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">About Our Clinic</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-6">Zahra Dental Clinic & Implant Centre</h2>
                    <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-8" />
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Founded in 2011, <strong className="text-[var(--brand-dark)]">Zahra Multi Speciality Dental Clinic</strong> provides excellent dental care with a personal touch. Led by <strong className="text-[var(--brand-dark)]">Dr. Mohammad Abbas Noorani</strong>, our team of specialists ensures high-quality treatment with a gentle, patient-focused approach — committed to making dentistry accessible, convenient, and stress-free for patients from Ahmedabad and across the globe.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-14">
                    <div className="bg-[var(--bg-medical-light)] p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-5 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[var(--brand-gold)]/15 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </span>
                            Why Choose Us
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "14+ Years of Clinical Experience",
                                "1,800+ Dental Implants Successfully Placed",
                                "3,000+ Root Canal Treatments",
                                "11,000+ Smiling Patients Worldwide",
                                "Globally Trusted — 15+ Countries (U.S.A., UK, Canada, U.A.E., Saudi Arabia, Qatar & More)",
                                "Affordable, World-Class Dental Care"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[var(--bg-medical-light)] p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-5 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[var(--brand-gold)]/15 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </span>
                            Our Lead Implantologist
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Dr. Mohammad Abbas Noorani — B.D.S & Certified Implantologist",
                                "Exclusively Practicing Implant Dentistry",
                                "Trained by Dr. Palo Malo",
                                "Certified by International Implant Foundation",
                                "Certified by Immediate Implant & Loading",
                                "Expert in Conventional & Basal Implants"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats Banner */}
                <div className="bg-gradient-to-r from-[var(--brand-dark)] to-[#102a4a] text-white p-8 md:p-10 rounded-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        {[
                            { num: "14+", label: "Years Experience" },
                            { num: "1,800+", label: "Dental Implants" },
                            { num: "3,000+", label: "Root Canals" },
                            { num: "500+", label: "Improved Smiles" },
                            { num: "11,000+", label: "Smiling Patients" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-3xl md:text-4xl font-extrabold text-[var(--brand-gold)]">{stat.num}</p>
                                <p className="text-sm md:text-base mt-1 text-gray-300 font-light">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
