"use client";

import { Target, Eye, Compass, Sparkles } from "lucide-react";
import { SectionHeading } from "@/app/components/ui";

export default function VisionMission() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B2E] via-[#452c46] to-[#8C4B58] animate-gradient" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8A86C]/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C4B58]/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Our Purpose"
          title="Vision & Mission"
          align="center"
          className="text-white [&>span]:text-[#E8A86C] [&>h2]:text-white"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8A86C]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#E8A86C]/20 rounded-2xl">
                  <Eye className="w-8 h-8 text-[#E8A86C]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                To be the leading residential academy that nurtures academically
                excellent, spiritually grounded, and socially responsible young
                women who will become the healthcare leaders and changemakers of
                tomorrow.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#E8A86C]">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Inspiring Future Leaders
                </span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8C4B58]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#8C4B58]/30 rounded-2xl">
                  <Target className="w-8 h-8 text-[#E8A86C]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                To provide a safe, nurturing, and academically rigorous
                environment where girls can excel in NEET preparation while
                staying true to their Islamic values and cultural identity.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#E8A86C]">
                <Compass className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Guided by Faith
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h4 className="text-center text-white/60 uppercase tracking-widest text-sm mb-8">
            Our Core Values
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Excellence", icon: "🎯" },
              { label: "Integrity", icon: "💎" },
              { label: "Faith", icon: "🌙" },
              { label: "Empowerment", icon: "✨" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </span>
                <span className="text-white font-semibold">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
