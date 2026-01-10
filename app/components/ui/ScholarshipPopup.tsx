"use client";

import { useState, useEffect, useCallback } from "react";
import {
  X,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Trophy,
  BookOpen,
  Users,
  Moon,
  Home,
  UserCheck,
  Monitor,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SCHOLARSHIP_TIERS = [
  {
    score: "80%+",
    malayalam: "പഠനവും താമസവും സൗജന്യം",
    english: "Free tuition and accommodation",
    forStudents: "For 5 students",
    isBest: true,
  },
  {
    score: "70%+",
    malayalam: "പഠനം സൗജന്യം",
    english: "Free tuition fee",
    forStudents: "For 10 students",
    isBest: false,
  },
];

const FEATURES = [
  { icon: Users, label: "Girls Only" },
  { icon: Moon, label: "Islamic Values" },
  { icon: Home, label: "Boarding" },
  { icon: UserCheck, label: "Expert Faculty" },
  { icon: Monitor, label: "Smart Class" },
  { icon: FileText, label: "Complete Syllabus" },
];

const POPUP_DELAY = 3000;

export default function ScholarshipPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    // Show popup after delay on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible, handleClose]);

  // Prevent body scroll when popup is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#2D1B2E]/30 backdrop-blur-sm" />

      {/* Popup Container */}
      <div
        className={`relative w-full max-w-[460px] md:max-w-2xl lg:max-w-3xl transform transition-all duration-500 ${
          isClosing
            ? "scale-95 opacity-0 translate-y-4"
            : "scale-100 opacity-100 translate-y-0"
        }`}
      >
        {/* Main Card */}
        <div className="relative bg-[#FFFBF0] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-1.5 md:p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Close popup"
          >
            <X className="w-4 h-4 md:w-5 md:h-5 text-[#2D1B2E] group-hover:text-[#8C4B58] transition-colors" />
          </button>

          {/* Layout */}
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image (Desktop only) */}
            <div className="hidden md:block relative w-2/5 min-h-[480px]">
              <Image
                src="/0635.JPG"
                alt="Scholarship Program"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/90 via-[#2D1B2E]/20 to-transparent" />

              <div className="absolute top-6 left-6">
                <Image
                  src="/logo.svg"
                  alt="Wintouch Academy"
                  width={150}
                  height={60}
                  className="w-24 md:w-28 opacity-90"
                />
              </div>

              <div className="absolute bottom-6 left-4 right-4 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {FEATURES.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-white/10  backdrop-blur-sm rounded-xl shadow-sm"
                    >
                      <feature.icon className="w-4 h-4 text-white" />
                      <span className="text-xs font-medium text-white">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 p-5 md:p-8">
              {/* Header */}
              <div className="text-center mb-4 md:mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] text-white rounded-full text-xs font-bold mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>WET 2026 Registration Open!</span>
                </div>

                <p className="text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wider mb-1">
                  Total Scholarship Worth
                </p>
                <h2 className="text-3xl md:text-4xl  lg:text-5xl font-black bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] bg-clip-text text-transparent">
                  ₹50 LAKHS
                </h2>
              </div>

              {/* Scholarship Tiers */}
              <div className="space-y-3 mb-5">
                {SCHOLARSHIP_TIERS.map((tier, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl border-2 transition-all ${
                      tier.isBest
                        ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300 shadow-md"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    {/* Shine Effect Container (Clipped) */}
                    {tier.isBest && (
                      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                        <div className="absolute inset-0 animate-shimmer" />
                      </div>
                    )}

                    {/* Badge (Not Clipped) */}
                    {tier.isBest && (
                      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[10px] font-bold rounded-full shadow-sm z-20">
                        Best Value
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="relative z-10 p-4 flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${
                          tier.isBest
                            ? "bg-gradient-to-br from-amber-400 to-yellow-500"
                            : "bg-gradient-to-br from-[#8C4B58] to-[#E8A86C]"
                        }`}
                      >
                        {tier.isBest ? (
                          <Trophy className="w-5 h-5 text-white" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-white" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-lg font-black ${
                              tier.isBest ? "text-amber-600" : "text-[#8C4B58]"
                            }`}
                          >
                            {tier.score}
                          </span>
                          <span className="text-[10px] text-gray-500 font-medium">
                            {tier.forStudents}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-[#2D1B2E] font-malayalam">
                          {tier.malayalam}
                        </p>
                        <p className="text-xs text-gray-500">{tier.english}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Features */}
              <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
                {FEATURES.slice(0, 6).map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 p-2 bg-[#8C4B58]/5 rounded-xl"
                  >
                    <feature.icon className="w-4 h-4 text-[#8C4B58]" />
                    <span className="text-[10px] font-medium text-[#2D1B2E] text-center">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <Link
                  href="/scholarship"
                  onClick={handleClose}
                  className="group flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] text-white font-bold text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/admissions"
                  onClick={handleClose}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-[#8C4B58] text-[#8C4B58] font-bold text-sm md:text-base rounded-xl hover:bg-[#8C4B58] hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Indicator */}
              <p className="text-center text-xs text-gray-500 mt-4">
                🎓 3,000+ students applied • 📍 Kerala&apos;s Premier Girls
                Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
