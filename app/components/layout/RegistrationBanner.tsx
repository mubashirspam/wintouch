"use client";

import { Sparkles, GraduationCap, ArrowRight, Star } from "lucide-react";

interface RegistrationBannerProps {
  onNavigate?: (id: string) => void;
}

const BannerContent = () => (
  <div className="flex items-center gap-8 px-4">
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4 text-[#E8A86C]" />
      <span className="text-sm font-bold tracking-wider uppercase">
        Admissions Open for 2025-2026
      </span>
    </div>

    <span className="text-[#E8A86C] text-lg">•</span>

    <div className="flex items-center gap-2">
      <GraduationCap className="w-4 h-4 text-[#E8A86C]" />
      <span className="text-sm font-medium tracking-wide uppercase">
        NEET Coaching + Islamic Studies
      </span>
    </div>

    <span className="text-[#E8A86C] text-lg">•</span>

    <div className="flex items-center gap-2">
      <Star className="w-4 h-4 text-[#E8A86C]" />
      <span className="text-sm font-medium tracking-wide uppercase">
        Premier Girls Residential Academy
      </span>
    </div>

    <span className="text-[#E8A86C] text-lg">•</span>

    <div className="flex items-center gap-2 text-[#E8A86C] font-bold">
      <span className="text-sm tracking-wider uppercase text-[#FFFBF0]">
        Register Now
      </span>
      <ArrowRight className="w-4 h-4" />
    </div>

    <span className="text-[#E8A86C] text-lg">•</span>
  </div>
);

export default function RegistrationBanner({
  onNavigate,
}: RegistrationBannerProps) {
  return (
    <div
      className="bg-[#8C4B58] text-[#FFFBF0] py-2.5 overflow-hidden relative z-[60] cursor-pointer border-b border-[#E8A86C]/20"
      onClick={() => onNavigate?.("admissions")}
    >
      <div className="flex w-fit">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <BannerContent />
        </div>
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <BannerContent />
        </div>
      </div>
    </div>
  );
}
