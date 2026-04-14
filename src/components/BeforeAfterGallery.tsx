'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

const images = [
  "/images/results/IMG_4382.JPG.jpeg",
  "/images/results/IMG_4383.JPG.jpeg",
  "/images/results/IMG_4384.JPG.jpeg",
  "/images/results/IMG_4385.JPG.jpeg",
  "/images/results/IMG_4386.JPG.jpeg",
  "/images/results/IMG_4387.JPG.jpeg",
  "/images/results/IMG_4388.JPG (1).jpeg",
  "/images/results/IMG_4388.JPG.jpeg",
  "/images/results/IMG_4389.JPG.jpeg",
  "/images/results/IMG_4390.JPG.jpeg",
  "/images/results/IMG_4391.JPG.jpeg",
  "/images/results/IMG_4392.JPG.jpeg",
  "/images/results/IMG_4393.JPG.jpeg",
  "/images/results/IMG_4394.JPG.jpeg",
  "/images/results/IMG_4395.JPG.jpeg",
  "/images/results/IMG_4396.JPG.jpeg",
  "/images/results/IMG_4397.JPG.jpeg",
  "/images/results/IMG_4398.JPG.jpeg",
  "/images/results/IMG_4399.JPG.jpeg",
  "/images/results/IMG_4400.JPG.jpeg",
  "/images/results/IMG_4401.JPG.jpeg",
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + images.length) % images.length);
    startAutoSlide(); // reset timer on manual nav
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startAutoSlide();
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">
            Before & After <span className="text-gradient-gold">Transformations</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real results from real patients at Zahra Dental Clinic. See the life-changing difference dental implants can make.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto mb-14">
          <div className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`Dental Implant Result ${current + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <span className="bg-[var(--brand-gold)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Dental Implant
                  </span>
                  <p className="text-white font-semibold mt-2 text-lg">Dental Implant Result {current + 1} of {images.length}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[var(--brand-dark)] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[var(--brand-dark)] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-[var(--brand-gold)]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-dark)] mb-3">
            Ready for Your <span className="text-gradient-gold">Transformation?</span>
          </h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto text-sm">
            Join 11,000+ happy patients. Affordable, painless implant procedures by Dr. Abbas Noorani.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[var(--brand-dark)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--brand-gold)] transition-all"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919277756167"
              className="bg-[var(--brand-gold)] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0097a7] transition-all text-center"
            >
              Call: +91 9277756167
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
