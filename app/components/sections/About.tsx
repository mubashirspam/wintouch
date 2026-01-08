"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Target, Award, Diamond, Moon, Zap } from "lucide-react";

const CORE_VALUES = [
  {
    label: "Excellence",
    description:
      "Striving for the highest standards in academics and character.",
    icon: Award,
  },
  {
    label: "Integrity",
    description:
      "Upholding honesty and strong moral principles in all actions.",
    icon: Diamond,
  },
  {
    label: "Faith",
    description: "Nurturing spiritual growth and connection with the Creator.",
    icon: Moon,
  },
  {
    label: "Empowerment",
    description:
      "Equipping students with confidence to face future challenges.",
    icon: Zap,
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

export default function About() {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#FFFBF0] relative overflow-hidden"
      id="about"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8A86C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8C4B58]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C4B58]/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#8C4B58] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#8C4B58] uppercase tracking-widest">
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D1B2E] mb-4">
            Nurturing Minds,{" "}
            <span className="text-[#8C4B58]">Enriching Souls</span>
          </h2>
          <p className="text-[#2D1B2E]/60 max-w-2xl mx-auto text-lg">
            Where academic excellence meets spiritual growth and holistic
            development
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#E8A86C] rounded-full" />
            <div className="w-3 h-3 border-2 border-[#8C4B58] rounded-full" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#E8A86C] rounded-full" />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* Vision - Large Feature Card */}
          <div
            className={`lg:col-span-7 group transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative h-full bg-gradient-to-br from-[#2D1B2E] to-[#4A2F4A] rounded-3xl p-8 md:p-10 overflow-hidden min-h-[400px] flex flex-col justify-between">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <Eye className="w-4 h-4 text-[#E8A86C]" />
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Our Vision
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Moulding young leaders who enlighten the world
                </h2>

                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                  We don&apos;t merely prepare students for an examination; we
                  nurture future healers, leaders, and changemakers. Our vision
                  extends beyond NEET ranks — we aspire to shape compassionate
                  physicians who serve humanity with competence and conscience.
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-3">
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#E8A86C] to-transparent rounded-full" />
                <span className="text-[#E8A86C] text-sm font-medium">
                  Knowledge • Skills • Values
                </span>
              </div>
            </div>
          </div>

          {/* Mission - Accent Card */}
          <div
            className={`lg:col-span-5 group transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative h-full bg-gradient-to-br from-[#8C4B58] to-[#6E3A47] rounded-3xl p-8 md:p-10 overflow-hidden min-h-[400px] flex flex-col justify-between">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <Target className="w-4 h-4 text-[#E8A86C]" />
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                  Holistic learning that inspires dreams
                </h3>

                <p className="text-white/70 leading-relaxed">
                  To create a holistic and individualized learning environment
                  that inspires students to dream, design, and develop
                  respectable lives.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Nurturing academic rigor with Islamic values and cultural
                  identity
                </p>
              </div>
            </div>
          </div>

          {/* Core Values - Grid of 4 */}
          {CORE_VALUES.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className={`lg:col-span-3 group transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + idx * 75}ms` }}
              >
                <div className="relative h-full bg-[#E8A86C]/10 rounded-2xl p-6 border border-[#8C4B58]/10 hover:border-[#8C4B58]/30 hover:shadow-xl hover:shadow-[#8C4B58]/10 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#8C4B58]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#8C4B58] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#8C4B58] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-lg font-bold text-[#2D1B2E] mb-2 group-hover:text-[#8C4B58] transition-colors duration-300">
                    {value.label}
                  </h4>

                  <p className="text-sm text-[#2D1B2E]/70 leading-relaxed font-medium">
                    {value.description}
                  </p>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#8C4B58] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
