"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Heart,
  BookOpen,
  ArrowRight,
  Sparkles,
  Clock,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/app/components/ui";
import { CONTACT_INFO } from "@/app/data/constants";

export default function Admissions() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      id: "repeaters",
      title: "NEET റിപീറ്റേഴ്‌സ് ബാച്ച്",
      subtitle: "NEET Coaching Repeaters",
      description:
        "Plus Two Science കഴിഞ്ഞ വിദ്യാർഥിനികൾക്ക് intensive NEET preparation",
      duration: "1 Year",
      forWhom: "Plus Two Science Students",
      icon: Heart,
      gradient: "from-[#8C4B58] to-[#E8A86C]",
      shadowColor: "shadow-[#8C4B58]/30",
      link: "/lead/repeaters",
      features: ["Daily Mock Tests", "Expert Faculty", "Doubt Clearing"],
    },
    {
      id: "integrated",
      title: "ഇന്റഗ്രേറ്റഡ് +1/+2 ബാച്ച്",
      subtitle: "Integrated +1/+2 with NEET",
      description:
        "പത്താം ക്ലാസ്സ് കഴിഞ്ഞ് Plus One/Two + NEET coaching ഒരുമിച്ച്",
      duration: "2 Years",
      forWhom: "Class 10 Students",
      icon: BookOpen,
      gradient: "from-[#E8A86C] to-[#8C4B58]",
      shadowColor: "shadow-[#E8A86C]/30",
      link: "/lead/integrated",
      features: ["Board + NEET", "Science Stream", "Holistic Development"],
    },
  ];

  return (
    <section className="py-24 bg-[#FFFBF0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#8C4B58]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#E8A86C]/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] text-white rounded-full shadow-xl mb-6 transition-transform duration-300 ${
              isAnimating ? "scale-110" : "scale-100"
            }`}
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-bold">2026-27 അഡ്മിഷൻ തുറന്നു!</span>
            <Clock className="w-4 h-4" />
          </div>
          <SectionHeading
            subtitle="Choose Your Program"
            title="നിങ്ങളുടെ NEET യാത്ര ആരംഭിക്കൂ"
            align="center"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            കാസറഗോഡ് ആദ്യമായി പെൺകുട്ടികൾക്ക് സുരക്ഷിതമായി ഇസ്ലാമിക മൂല്യങ്ങളോടെ
            നീറ്റ് കോച്ചിംഗ് അവസരം
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              href={program.link}
              className={`group relative bg-[#E8A86C]/10 rounded-3xl overflow-hidden border-2 border-[#E8A86C]/20 hover:border-[#E8A86C]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${program.shadowColor}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Header Gradient */}
              <div
                className={`relative h-48 bg-gradient-to-br ${program.gradient} p-6 flex flex-col justify-between overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      {program.duration}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {program.title}
                  </h3>
                  <p className="text-white/80 text-sm">{program.subtitle}</p>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white text-[#2D1B2E] px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-slow">
                  Limited Seats
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600">{program.description}</p>

                {/* For Whom Badge */}
                <div className="flex items-center gap-2 p-3 bg-[#FFFBF0] rounded-xl">
                  <GraduationCap className="w-5 h-5 text-[#8C4B58]" />
                  <span className="text-sm font-medium text-[#2D1B2E]">
                    {program.forWhom}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2D1B2E]/5 text-[#2D1B2E] text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div
                  className={`flex items-center justify-between p-4 bg-gradient-to-r ${program.gradient} rounded-2xl text-white group-hover:shadow-lg transition-all`}
                >
                  <span className="font-bold">
                    കൂടുതൽ അറിയാൻ ക്ലിക്ക് ചെയ്യൂ
                  </span>
                  <div className="p-2 bg-white/20 rounded-full group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8C4B58]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Contact Info CTA */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#2D1B2E] to-[#4A2F4A] rounded-3xl p-8 md:p-10 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#E8A86C]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8C4B58]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-white/70">
                Contact us today for admissions or any queries
              </p>
            </div>
            {/* Contact Options Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 hover:border-[#E8A86C]/30 transition-all duration-300"
              >
                <div className="p-3 bg-[#E8A86C]/20 rounded-full group-hover:bg-[#E8A86C]/30 transition-colors">
                  <Phone className="w-6 h-6 text-[#E8A86C]" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Call Us
                  </p>
                  <p className="text-white font-semibold">
                    {CONTACT_INFO.phone}
                  </p>
                  {CONTACT_INFO.phoneAlt && (
                    <p className="text-white/80 text-sm">
                      {CONTACT_INFO.phoneAlt}
                    </p>
                  )}
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.admissionEmail}`}
                className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 hover:border-[#E8A86C]/30 transition-all duration-300"
              >
                <div className="p-3 bg-[#E8A86C]/20 rounded-full group-hover:bg-[#E8A86C]/30 transition-colors">
                  <Mail className="w-6 h-6 text-[#E8A86C]" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Email Us
                  </p>
                  <p className="text-white font-semibold text-sm break-all">
                    {CONTACT_INFO.admissionEmail}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="p-3 bg-[#E8A86C]/20 rounded-full">
                  <MapPin className="w-6 h-6 text-[#E8A86C]" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Visit Us
                  </p>
                  <p className="text-white/90 text-sm">{CONTACT_INFO.campus}</p>
                </div>
              </div>
            </div>{" "}
            {/* Additional Info */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-white/60 text-sm">📍 {CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
