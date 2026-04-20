import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Syed Rizvi",
      initials: "SR",
      date: "Google Review",
      review: "I had an excellent experience at Zahra Dental Clinic, Ahmedabad. I got my dental implant and fixing done here, and I am extremely satisfied with the results. Dr. Mohammad Abbas Noorani and Dr. Patel are highly skilled, professional, and very patient. They explained the entire procedure clearly and made sure I was comfortable throughout the treatment. The clinic is clean, well-organized, and equipped with modern technology. The staff is polite, supportive, and punctual. I would highly recommend Zahra Dental Clinic to anyone looking for reliable and quality dental implant treatment."
    },
    {
      name: "Hasamali Momin",
      initials: "HM",
      date: "Google Review",
      review: "The treatment was very comfortable, all hygiene protocols were followed, and I feel very satisfied having my treatment of implants done at Zahra Dental Clinic. Everyone at the clinic was very welcoming."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/images/google.png" alt="Google" width={90} height={30} className="object-contain" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm font-medium">4.9/5</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">Implant Reviews from Real Patients</h2>
          <p className="text-gray-400 mt-1 text-sm">Genuine Google reviews from our implant patients</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[var(--bg-medical-light)] rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand-gold)] to-[#0097a7] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[var(--brand-dark)]">{review.name}</h3>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
