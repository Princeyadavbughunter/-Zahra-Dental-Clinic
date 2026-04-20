'use client';

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImplantTypes from "@/components/ImplantTypes";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CTABox from "@/components/CTABox";
import GoogleReviews from "@/components/GoogleReviews";
import DoctorProfile from "@/components/DoctorProfile";
import ClinicPhotos from "@/components/ClinicPhotos";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import StickyCTA from "@/components/StickyCTA";
import AboutSection from "@/components/AboutSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [minutes, setMinutes] = useState(19);
  const [seconds, setSeconds] = useState(49);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setMinutes(19);
        setSeconds(49);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    const handleScroll = () => setShowStickyCta(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = '';
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Subtle mesh background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-mesh" />

      {/* Main Content */}
      <div className="relative z-10">
        <Header onBookAppointment={openPopup} />
        <HeroSection onBookAppointment={openPopup} />
        <AboutSection />
        <BeforeAfterGallery onBookAppointment={openPopup} />
        <ImplantTypes />
        <CTABox onBookAppointment={openPopup} />
        <GoogleReviews />
        <DoctorProfile onBookAppointment={openPopup} />
        <ClinicPhotos onBookAppointment={openPopup} />
        <FAQSection />
        <Footer />
      </div>

      {/* Interactive Components */}
      <WhatsAppButton />
      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <PopupForm isOpen={showPopup} onClose={closePopup} minutes={minutes} seconds={seconds} />
    </div>
  );
}
