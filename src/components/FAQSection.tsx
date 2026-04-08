'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are dental implants?",
      answer: "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. They provide a strong foundation for fixed or removable replacement teeth that look, feel, and function like natural teeth. At Zahra Dental Clinic, Dr. Abbas Noorani has placed thousands of successful implants over 14+ years."
    },
    {
      question: "How much do dental implants cost at Zahra Dental Clinic?",
      answer: "At Zahra Dental Clinic, dental implants start at just ₹18,000 per implant — one of the most affordable options in Ahmedabad. The final cost depends on the type of implant and crown selected. Book a free consultation with Dr. Abbas Noorani to get an accurate quote."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and regular dental checkups, dental implants can last 15 years or more, and in many cases, they last a lifetime. Good oral hygiene and healthy gums are key to long-term success."
    },
    {
      question: "Are dental implants painful?",
      answer: "Most patients experience minimal discomfort during and after the procedure. At Zahra Dental Clinic, we use advanced techniques and local anesthesia to ensure your comfort. Most patients are surprised by how painless the procedure actually is."
    },
    {
      question: "Who is a good candidate for dental implants?",
      answer: "Ideal candidates are individuals with healthy gums, sufficient bone density, and good overall health. Even if you've experienced bone loss, advanced options like bone grafting can make implants possible. Dr. Abbas Noorani will assess your suitability during your free consultation."
    },
    {
      question: "How long does the implant procedure take?",
      answer: "The implant placement itself typically takes 30-60 minutes per implant. After placement, a healing period of 3-6 months is needed for the implant to fuse with the bone. The final crown is then placed. Dr. Noorani will explain the complete timeline during your consultation."
    },
    {
      question: "What are the clinic timings?",
      answer: "Zahra Dental Clinic is open Monday to Saturday. Morning: 9:00 AM – 1:00 PM, Evening: 4:00 PM – 8:30 PM. You can call us at +91 9277756167 or +91 9638787144 to book an appointment."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
          Frequently Asked Questions about Dental Implants
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left font-bold hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="flex-grow pr-4 md:text-lg">{faq.question}</span>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''} flex-shrink-0`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-4 md:p-6 border-t bg-gray-50">
                  <p className="text-gray-700 italic md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
