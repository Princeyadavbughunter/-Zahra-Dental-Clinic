import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Image
            src="/images/zahra.jpg"
            alt="Zahra Dental Clinic & Implant Centre"
            width={240}
            height={60}
            className="mx-auto mb-6 h-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-light mt-4">
            Specialty: Implantology | Trusted by 11,000+ patients | 600+ 5-Star Google Reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-12">
          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-[var(--brand-gold)] transition-colors">Contact Us</h3>
            <a href="tel:+919277756167" className="block text-[var(--brand-gold)] font-bold text-xl md:text-2xl hover:text-black transition-colors mb-1">+91 9277756167</a>
            <a href="tel:+919638787144" className="block text-[var(--brand-gold)] font-bold text-lg md:text-xl hover:text-black transition-colors mb-2">+91 9638787144</a>
            <a href="mailto:drabbasnoorani@gmail.com" className="block text-gray-600 hover:text-[var(--brand-gold)] transition-colors">drabbasnoorani@gmail.com</a>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-[var(--brand-gold)] transition-colors">Open Hours</h3>
            <div className="text-gray-600 text-lg flex flex-col gap-1">
              <p className="font-medium text-gray-800">Monday – Saturday</p>
              <p><span className="text-[var(--brand-gold)]">Morning:</span> 9:00 AM – 1:00 PM</p>
              <p><span className="text-[var(--brand-gold)]">Evening:</span> 4:00 PM – 8:30 PM</p>
            </div>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-[var(--brand-gold)] transition-colors">Location</h3>
            <a
              href="https://maps.app.goo.gl/zahra-dental-ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--brand-gold)] transition-colors cursor-pointer block leading-relaxed group-hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-2xl mt-0.5">📍</span>
                <span>Zahra Dental Clinic, APMC Market, Below APMC Clock Tower, Below Sardar Patel Bank, Beside SBI Bank, Near Vishala Circle, Ahmedabad – 380055</span>
              </div>
            </a>
            <p className="text-xs text-gray-400 mt-2">Near SBI Bank, Opposite Yalla Chicken</p>
            <p className="text-xs text-gray-400 mt-1 hover:text-black transition-colors">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-8">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--brand-gold)] transition-colors text-lg font-medium">
              📘 Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--brand-gold)] transition-colors text-lg font-medium">
              📸 Instagram
            </a>
          </div>
        </div>

        {/* Google Maps Embed - Using Ahmedabad/Vishala Circle area */}
        <div className="mt-8 bg-gray-100 rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-inner border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.55!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zahra Dental Clinic Location - Ahmedabad"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Zahra Dental Clinic & Implant Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
