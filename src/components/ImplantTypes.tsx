import Image from "next/image";

export default function ImplantTypes() {
  const implantData = [
    {
      title: "Single Tooth Implant",
      description: "Replace one missing tooth with a permanent, natural-looking titanium implant with crown restoration.",
      icon: "/images/implant/single.png",
      price: "₹18,000"
    },
    {
      title: "Multiple Teeth Implants",
      description: "Implant-supported bridges to replace several missing teeth. Eat and speak with full confidence.",
      icon: "/images/implant/Multiple.png",
      price: "Custom Quote"
    },
    {
      title: "All-on-4 / All-on-6",
      description: "Full arch restoration with just 4-6 implants. Complete fixed teeth in minimal visits.",
      icon: "/images/implant/all_in.png",
      price: "Custom Quote"
    },
    {
      title: "Implant Dentures",
      description: "No more loose dentures. Snap-on implant dentures stay secure and feel natural all day.",
      icon: "/images/implant/supported.png",
      price: "Custom Quote"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0a2540] to-[#0f3460] text-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-gold)]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Our Speciality</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Implant <span className="text-gradient-gold">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6 opacity-60" />
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto font-light">
            Complete range of implant solutions by our certified implantologist with 1,800+ successful cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {implantData.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-40 h-40 mx-auto mb-5 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Image src={item.icon} alt={item.title} width={160} height={160} className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <h3 className="font-bold text-center mb-2 text-lg text-white group-hover:text-[var(--brand-gold)] transition-colors">{item.title}</h3>
              <p className="text-center text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
              <div className="text-center">
                <span className="inline-block bg-[var(--brand-gold)]/15 text-[var(--brand-gold)] font-bold text-sm px-4 py-1.5 rounded-full border border-[var(--brand-gold)]/20">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Specialised Dental Services */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Our Specialised <span className="text-gradient-gold">Dental Services</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Dental Implants", desc: "Titanium-based prosthetics with 1,800+ successful cases" },
              { title: "Smile Design with Veneers", desc: "Digital shade, shape & size enhancement for your perfect smile" },
              { title: "E-Max Inlays / Onlays / Overlays", desc: "Premium ceramic restorations for natural-looking repairs" },
              { title: "Invisalign Aligners", desc: "Clear, discreet orthodontic treatment without metal braces" },
              { title: "Biomimetic Composite Restoration", desc: "Tooth-colored resin restorations that mimic natural teeth" },
              { title: "Kids Dentistry", desc: "Gentle, child-friendly dental care for all ages" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="w-5 h-5 bg-[var(--brand-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Dental Implants */}
        <div className="mt-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Why <span className="text-gradient-gold">Dental Implants?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Look Natural", desc: "Look and feel like your own teeth" },
              { title: "Last a Lifetime", desc: "15+ years with proper care" },
              { title: "Eat Anything", desc: "Enjoy all foods without worry" },
              { title: "Preserve Bone", desc: "Prevent jawbone deterioration" },
              { title: "No Adhesives", desc: "Fixed permanently, unlike dentures" },
              { title: "Boost Confidence", desc: "Smile freely every day" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-2">
                <span className="w-5 h-5 bg-[var(--brand-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
