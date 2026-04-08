import Image from "next/image";

export default function ImplantTypes() {
  const implantData = [
    {
      title: "Single Tooth Implant",
      description: "Replace a single missing tooth with a natural-looking, permanent implant. No need to grind adjacent teeth.",
      icon: "/images/implant/single.png",
      price: "Starting ₹18,000"
    },
    {
      title: "Multiple Teeth Implants",
      description: "Replace several missing teeth with implant-supported bridges. Restore your ability to eat and speak confidently.",
      icon: "/images/implant/Multiple.png",
      price: "Custom Quote"
    },
    {
      title: "All-on-4 / All-on-6 Implants",
      description: "Full arch restoration with just 4 or 6 implants. Get a complete set of fixed teeth in minimal visits.",
      icon: "/images/implant/all_in.png",
      price: "Custom Quote"
    },
    {
      title: "Implant-Supported Dentures",
      description: "Say goodbye to loose dentures. Implant-supported dentures snap securely onto implants for stability.",
      icon: "/images/implant/supported.png",
      price: "Custom Quote"
    }
  ];

  return (
    <section className="relative bg-[#0b1120] text-white p-4 md:p-12 lg:p-16 pb-24 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-dark)]/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-gold)]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Our <span className="text-gradient-gold">Implant Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-center text-gray-400 mb-8 md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            At Zahra Dental Clinic, we offer a full range of dental implant solutions to restore your smile. All implants placed by our specialist implantologist with 14+ years of experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {implantData.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative group-hover:scale-110 transition-transform duration-300">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="font-bold text-center mb-2 text-xl text-white group-hover:text-[var(--brand-gold)] transition-colors">{item.title}</h3>
              <p className="text-center text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
              <p className="text-center text-[var(--brand-gold)] font-bold text-lg">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Why Implants Section */}
        <div className="mt-16 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose <span className="text-gradient-gold">Dental Implants?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Look Natural", desc: "Implants look and feel like your own teeth" },
              { title: "Last a Lifetime", desc: "With proper care, implants can last 15+ years" },
              { title: "Eat Anything", desc: "Enjoy all your favorite foods without worry" },
              { title: "Preserve Bone", desc: "Implants prevent jawbone deterioration" },
              { title: "No Adhesives", desc: "Unlike dentures, implants stay fixed permanently" },
              { title: "Boost Confidence", desc: "Smile freely without worrying about your teeth" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[var(--brand-gold)] text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
