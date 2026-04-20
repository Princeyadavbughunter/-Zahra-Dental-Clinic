'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

const images = [
  { src: "/images/results/b-1.JPG", label: "Before" },
  { src: "/images/results/a-1.JPG", label: "After" },
  { src: "/images/results/b-2.JPG", label: "Before" },
  { src: "/images/results/a-2.JPG", label: "After" },
  { src: "/images/results/b-3.jpg", label: "Before" },
  { src: "/images/results/A-3.jpg", label: "After" },
  { src: "/images/results/b-4.jpg", label: "Before" },
  { src: "/images/results/a-4.jpg", label: "After" },
  { src: "/images/results/B-5.jpg", label: "Before" },
  { src: "/images/results/a-5.jpg", label: "After" },
  { src: "/images/results/B-6.jpg", label: "Before" },
  { src: "/images/results/a-6.jpg", label: "After" },
  { src: "/images/results/b-7.jpg", label: "Before" },
  { src: "/images/results/a-7.jpg", label: "After" },
];

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const userInteractingRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let raf = 0;
    const tick = () => {
      if (!userInteractingRef.current && container) {
        container.scrollLeft += 0.8;
        const half = container.scrollWidth / 2;
        if (container.scrollLeft >= half) {
          container.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pauseAutoScroll = () => {
      userInteractingRef.current = true;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => {
        userInteractingRef.current = false;
      }, 1800);
    };

    container.addEventListener('wheel', pauseAutoScroll, { passive: true });
    container.addEventListener('touchstart', pauseAutoScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      container.removeEventListener('wheel', pauseAutoScroll);
      container.removeEventListener('touchstart', pauseAutoScroll);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    userInteractingRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current.scrollLeft };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      userInteractingRef.current = false;
    }, 1800);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-orange-50/80 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-gold)] text-sm font-semibold uppercase tracking-widest mb-3">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">
            Before & After <span className="text-gradient-gold">Transformations</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real results from real patients at Zahra Dental Clinic. Drag or scroll horizontally to view all.
          </p>
        </div>
      </div>

      {/* Auto-scrolling gallery with manual horizontal scroll */}
      <div
        ref={scrollRef}
        className={`flex gap-5 overflow-x-auto no-scrollbar px-4 md:px-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {allImages.map((img, i) => (
          <div key={i} className="relative flex-shrink-0 w-[280px] md:w-[350px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={img.src}
              alt={`${img.label} dental treatment`}
              fill
              sizes="(max-width: 768px) 280px, 350px"
              className="object-cover pointer-events-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider pointer-events-none ${
              img.label === "Before" ? "bg-black/60 backdrop-blur-sm" : "bg-[var(--brand-gold)] backdrop-blur-sm"
            }`}>
              {img.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-14">
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

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
