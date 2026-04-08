import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-gold)] mb-6">About Zahra Dental Clinic & Implant Centre</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Zahra Dental Clinic & Implant Centre is a <strong>trusted name in dental implants</strong> led by <strong>Dr. Mohammad Abbas Noorani</strong>, a specialist in Implantology.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
                        With <strong>14+ years of clinical experience</strong> and <strong>11,000+ happy patients</strong>, we specialize in <strong>affordable, high-quality dental implants</strong>. Our clinic boasts <strong>600+ genuine 5-star Google reviews</strong> — a testament to the trust our patients place in us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-4">Why Choose Us for Implants</h3>
                        <ul className="space-y-3">
                            {[
                                "14+ Years of Implant Expertise",
                                "11,000+ Happy Patients Served",
                                "600+ Genuine 5-Star Google Reviews",
                                "Most Affordable Implants — Starting ₹18,000",
                                "3 Doctors & 4 Assistants In-House",
                                "Painless & Comfortable Procedures"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[var(--brand-gold)] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-4">Our Lead Implantologist</h3>
                        <ul className="space-y-3">
                            {[
                                "Dr. Mohammad Abbas Noorani",
                                "Specialist in Implantology",
                                "14+ Years of Clinical Experience",
                                "11,000+ Successful Patient Treatments",
                                "Team: 3 Doctors, 4 Assistants, 1 Receptionist"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[var(--brand-gold)] text-xl">👨‍⚕️</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Proof Banner */}
                <div className="bg-gradient-to-r from-[var(--brand-dark)] to-[#4a4a3d] text-white p-8 rounded-2xl text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[var(--brand-gold)]">14+</p>
                            <p className="text-lg mt-1">Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[var(--brand-gold)]">11,000+</p>
                            <p className="text-lg mt-1">Happy Patients</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[var(--brand-gold)]">600+</p>
                            <p className="text-lg mt-1">5-Star Google Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
