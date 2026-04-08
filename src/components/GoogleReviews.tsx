import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      initials: "RS",
      date: "2 months ago",
      review: "I got my dental implant done at Zahra Dental Clinic by Dr. Abbas Noorani and I'm extremely happy with the results. The entire procedure was painless and the staff was very caring. The pricing is very affordable compared to other clinics in Ahmedabad. Highly recommended for anyone looking for dental implants!"
    },
    {
      name: "Fatima Patel",
      initials: "FP",
      date: "1 month ago",
      review: "Dr. Abbas Noorani is an excellent implantologist. I was very nervous about getting implants but his calm and professional approach put me at ease. The clinic is well-equipped and hygienic. Got my implant done for just ₹18,000 — best value in Ahmedabad. Thank you Zahra Dental Clinic!"
    },
    {
      name: "Mehul Desai",
      initials: "MD",
      date: "3 months ago",
      review: "After visiting multiple dental clinics in Ahmedabad, I chose Zahra Dental Clinic for my implants based on their 600+ Google reviews. Dr. Noorani's 14+ years of experience really shows in his work. The implant feels completely natural. Absolutely worth it!"
    },
    {
      name: "Priya Joshi",
      initials: "PJ",
      date: "2 months ago",
      review: "I had two implants done at Zahra Dental Clinic and the experience was wonderful. Dr. Abbas Noorani explained everything clearly and the procedure was much more comfortable than I expected. The clinic near Vishala Circle is easy to find. I can see why they have 11,000+ happy patients!"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">600+ Patients Recommend Us</h2>
          <p className="text-gray-600 mt-2">Genuine 5-star reviews from real patients</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--brand-dark)] text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
