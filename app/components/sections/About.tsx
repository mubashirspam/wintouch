"use client";

import {
  Eye,
  Target,
  Sparkles,
  Compass,
  Award,
  Diamond,
  Moon,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/app/components/ui";

const CORE_VALUES = [
  {
    label: "Excellence",
    description:
      "Striving for the highest standards in academics and character.",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    label: "Integrity",
    description:
      "Upholding honesty and strong moral principles in all actions.",
    icon: Diamond,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Faith",
    description: "Nurturing spiritual growth and connection with the Creator.",
    icon: Moon,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    label: "Empowerment",
    description:
      "Equipping students with confidence to face future challenges.",
    icon: Zap,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-[#FFFBF0] relative overflow-hidden" id="about">
      {/* Decorative Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D1B2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8A86C]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Who We Are"
          title="Nurturing Minds, Enriching Souls"
          align="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Vision Card */}
          <div className="group relative animate-fade-in-up h-full">
            {/* Hover Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-[#E8A86C] via-[#E8A86C] to-[#8C4B58] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Card Content */}
            <div className="relative h-full bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl shadow-[#E8A86C]/5 hover:shadow-2xl hover:shadow-[#E8A86C]/10 transition-all duration-500 overflow-hidden">
              {/* Gradient Mesh Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8A86C]/5 via-transparent to-[#8C4B58]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E8A86C]/10 rounded-full blur-2xl group-hover:bg-[#E8A86C]/20 transition-colors duration-500" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#8C4B58]/5 rounded-full blur-2xl group-hover:bg-[#8C4B58]/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#E8A86C]/10 rounded-2xl group-hover:bg-[#E8A86C]/20 transition-colors">
                    <Eye className="w-8 h-8 text-[#E8A86C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D1B2E]">
                    Our Vision
                  </h3>
                </div>

                <blockquote className="text-xl font-medium text-[#2D1B2E] mb-6 leading-relaxed italic border-l-4 border-[#E8A86C] pl-4">
                  &ldquo;To mould young leaders who enlighten the world with
                  knowledge, skills, and values.&rdquo;
                </blockquote>

                <p className="text-[#2D1B2E]/70 leading-relaxed mb-6">
                  We don&apos;t merely prepare students for an examination; we
                  nurture future healers, leaders, and changemakers. Our vision
                  extends beyond NEET ranks — we aspire to shape compassionate
                  physicians who serve humanity with competence and conscience.
                </p>

                <div className="flex items-center gap-2 text-[#E8A86C] font-semibold group-hover:translate-x-2 transition-transform">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">
                    Inspiring Future Leaders
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative animate-fade-in-up delay-200 h-full">
            {/* Hover Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-[#8C4B58] via-[#8C4B58] to-[#E8A86C] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Card Content */}
            <div className="relative h-full bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl shadow-[#8C4B58]/5 hover:shadow-2xl hover:shadow-[#8C4B58]/10 transition-all duration-500 overflow-hidden">
              {/* Gradient Mesh Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8C4B58]/5 via-transparent to-[#E8A86C]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8C4B58]/10 rounded-full blur-2xl group-hover:bg-[#8C4B58]/20 transition-colors duration-500" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#E8A86C]/5 rounded-full blur-2xl group-hover:bg-[#E8A86C]/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#8C4B58]/10 rounded-2xl group-hover:bg-[#8C4B58]/20 transition-colors">
                    <Target className="w-8 h-8 text-[#8C4B58]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D1B2E]">
                    Our Mission
                  </h3>
                </div>

                <blockquote className="text-xl font-medium text-[#2D1B2E] mb-6 leading-relaxed italic border-l-4 border-[#8C4B58] pl-4">
                  &ldquo;To create a holistic and individualized learning
                  environment that inspires students to dream, design, and
                  develop respectable lives.&rdquo;
                </blockquote>

                <p className="text-[#2D1B2E]/70 leading-relaxed mb-6">
                  We are committed to providing a safe, nurturing, and
                  academically rigorous environment where girls can excel in
                  NEET preparation while staying true to their Islamic values
                  and cultural identity.
                </p>

                <div className="flex items-center gap-2 text-[#8C4B58] font-semibold group-hover:translate-x-2 transition-transform">
                  <Compass className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">
                    Guided by Faith
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section - Added for more content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#2D1B2E]">
              Our Core Values
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-[#2D1B2E] mb-2">
                    {value.label}
                  </h4>
                  <p className="text-sm text-[#2D1B2E]/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
