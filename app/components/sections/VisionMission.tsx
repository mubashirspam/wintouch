"use client";

import {
  Target,
  Eye,
  Compass,
  Sparkles,
  // Core Values Icons
  Award,
  Diamond,
  Moon,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/app/components/ui";

// Core Values Data
const CORE_VALUES: { label: string; icon: LucideIcon; gradient: string }[] = [
  {
    label: "Excellence",
    icon: Award,
    gradient: "from-amber-400 to-orange-500",
  },
  { label: "Integrity", icon: Diamond, gradient: "from-cyan-400 to-blue-500" },
  { label: "Faith", icon: Moon, gradient: "from-violet-400 to-purple-500" },
  { label: "Empowerment", icon: Zap, gradient: "from-rose-400 to-pink-500" },
];

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
            {CORE_VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <div
                    className={`relative z-10 w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-[#2D1B2E] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <span className="relative z-10 text-white font-semibold">
                    {value.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
