'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are dental implants?",
      answer: "Dental implants are titanium-based prosthetics surgically placed into the jawbone to replace missing tooth roots. They provide a strong foundation for replacement teeth that look, feel, and function like natural teeth. Dr. Abbas Noorani has placed 1,800+ implants successfully."
    },
    {
      question: "How much do implants cost at Zahra Dental?",
      answer: "Dental implants start at just ₹18,000 per implant — one of the most affordable options in Ahmedabad with world-class quality. We use trusted brands like Straumann, Nobel Biocare, and Ostem. Book a free consultation with Dr. Abbas Noorani for an accurate quote."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and regular checkups, dental implants can last 15+ years, often a lifetime. Good oral hygiene is key to long-term success."
    },
    {
      question: "Are dental implants painful?",
      answer: "Most patients experience minimal discomfort. We use advanced techniques and local anesthesia for your comfort. Most patients are surprised by how painless it is."
    },
    {
      question: "Who is a good candidate for implants?",
      answer: "Ideal candidates have healthy gums and sufficient bone density. Even with bone loss, options like bone grafting or basal implants can make it possible. Dr. Noorani is certified in both conventional and basal implants for complex cases."
    },
    {
      question: "How long does the procedure take?",
      answer: "Implant placement takes 30-60 minutes per implant. A healing period of 3-6 months follows for bone fusion, then the final crown is placed."
    },
    {
      question: "Do you treat international patients?",
      answer: "Yes! We are globally trusted by patients from Canada, Iraq, Kenya, and many other countries. We offer dental tourism packages with world-class care at affordable Indian prices. Contact us at drabbas@ezahradental.com for international patient inquiries."
    },
    {
      question: "What other services do you offer?",
      answer: "Besides dental implants, we offer Smile Design with Veneers, E-Max Inlays/Onlays/Overlays, Invisalign Aligners, Biomimetic Composite Restorations, Kids Dentistry, Root Canal treatments, and more — all under one roof."
    },
    {
      question: "What are the clinic timings?",
      answer: "Monday to Saturday. Morning: 9:00 AM – 1:00 PM, Evening: 4:00 PM – 8:00 PM. Call (+91) 9638787144 or email drabbas@ezahradental.com to book."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
            Common Questions About Implants
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                openFAQ === index ? 'border-[var(--brand-gold)]/30 shadow-md bg-white' : 'border-gray-100 bg-gray-50/50 hover:bg-white'
              }`}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-5 text-left flex justify-between items-center gap-4"
              >
                <span className={`font-semibold text-sm md:text-base transition-colors ${openFAQ === index ? 'text-[var(--brand-gold)]' : 'text-[var(--brand-dark)]'}`}>
                  {faq.question}
                </span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openFAQ === index ? 'bg-[var(--brand-gold)] text-white rotate-180' : 'bg-gray-100 text-gray-400'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-5 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
