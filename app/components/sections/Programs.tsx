"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Clock,
  Users,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/app/data/constants";

const PROGRAMS_DATA = [
  {
    title: "NEET Coaching",
    subtitle: "Repeaters Batch",
    description:
      "Intensive preparation for medical aspirants with a focus on conceptual clarity and rigorous practice.",
    features: [
      "Daily Mock Tests",
      "AI-Driven Analysis",
      "Expert Faculty",
      "Doubt Clearing",
    ],
    duration: "1 Year",
    icon: Heart,
    accent: "#8C4B58",
    highlight: true,
  },
  {
    title: "Integrated +1 / +2",
    subtitle: "Foundation Program",
    description:
      "A seamless blend of Higher Secondary curriculum and competitive exam preparation under one roof.",
    features: [
      "Science Stream",
      "Board Focus",
      "Entrance Coaching",
      "Holistic Growth",
    ],
    duration: "2 Years",
    icon: BookOpen,
    accent: "#E8A86C",
    highlight: false,
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Programs() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#FFFBF0] relative overflow-hidden"
      id="programs"
    >
      {/* Subtle Background */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E8A86C]/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8C4B58]/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C4B58]/10 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#E8A86C] rounded-full animate-pulse" />
              <span className="text-xs font-bold text-[#8C4B58] uppercase tracking-widest">
                Academic Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D1B2E] mb-4">
              Programs{" "}
              <span className="text-[#8C4B58]">Designed for Success</span>
            </h2>
            <p className="text-[#2D1B2E]/60 max-w-2xl mx-auto text-lg">
              Choose your path to medical excellence with our structured
              programs
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#E8A86C] rounded-full" />
              <div className="w-3 h-3 border-2 border-[#8C4B58] rounded-full" />
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#E8A86C] rounded-full" />
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROGRAMS_DATA.map((program, idx) => {
              const Icon = program.icon;
              return (
                <div
                  key={idx}
                  className={`group relative transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`relative h-full rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 ${
                      program.highlight
                        ? "bg-gradient-to-br from-[#2D1B2E] to-[#4A2F4A] text-white"
                        : "bg-white border border-[#2D1B2E]/5 hover:border-[#E8A86C]/20"
                    } hover:shadow-2xl hover:shadow-[#2D1B2E]/10 group-hover:-translate-y-1`}
                  >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="absolute top-0 right-0 w-40 h-40 border border-current rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 border border-current rounded-full translate-y-1/2 -translate-x-1/2" />
                    </div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
                            program.highlight
                              ? "bg-white/10 text-white/80"
                              : "bg-[#E8A86C]/10 text-[#8C4B58]"
                          }`}
                        >
                          <Sparkles className="w-3 h-3" />
                          {program.subtitle}
                        </div>
                        <h3
                          className={`text-2xl md:text-3xl font-bold ${
                            program.highlight ? "text-white" : "text-[#2D1B2E]"
                          }`}
                        >
                          {program.title}
                        </h3>
                      </div>
                      <div
                        className={`p-3 rounded-2xl ${
                          program.highlight
                            ? "bg-white/10"
                            : "bg-gradient-to-br from-[#E8A86C]/10 to-[#8C4B58]/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            program.highlight
                              ? "text-[#E8A86C]"
                              : "text-[#8C4B58]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-8 leading-relaxed ${
                        program.highlight
                          ? "text-white/70"
                          : "text-[#2D1B2E]/60"
                      }`}
                    >
                      {program.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {program.features.map((feat, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 text-sm font-medium ${
                            program.highlight
                              ? "text-white/80"
                              : "text-[#2D1B2E]/70"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              program.highlight
                                ? "bg-[#E8A86C]"
                                : "bg-[#8C4B58]"
                            }`}
                          />
                          {feat}
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div
                      className={`flex items-center justify-between pt-6 border-t ${
                        program.highlight
                          ? "border-white/10"
                          : "border-[#2D1B2E]/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock
                          className={`w-4 h-4 ${
                            program.highlight
                              ? "text-[#E8A86C]"
                              : "text-[#8C4B58]"
                          }`}
                        />
                        <span
                          className={`text-sm font-bold ${
                            program.highlight ? "text-white" : "text-[#2D1B2E]"
                          }`}
                        >
                          {program.duration}
                        </span>
                      </div>

                      <Link
                        href="/admissions"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${
                          program.highlight
                            ? "text-[#E8A86C] hover:text-[#E8A86C]"
                            : "text-[#8C4B58] hover:text-[#8C4B58]"
                        }`}
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-12 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#2D1B2E] to-[#4A2F4A] rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A86C]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8C4B58]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <Users className="w-4 h-4 text-[#E8A86C]" />
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                    Get Expert Guidance
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Not sure which program is right for you?
                </h3>

                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Our experienced counselors are here to help you choose the
                  perfect program based on your goals and current academic
                  level.
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8A86C] hover:bg-[#d6965c] text-white rounded-full text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with Counselor
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
