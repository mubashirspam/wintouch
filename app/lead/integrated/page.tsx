"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Shield,
  Utensils,
  Moon,
  Snowflake,
  Award,
  ArrowRight,
  Sparkles,
  Clock,
  BookOpen,
} from "lucide-react";

export default function IntegratedLeadPage() {
  const [seatsLeft] = useState(18);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: GraduationCap, text: "10 വർഷത്തെ പഠന പരിചയമുള്ള അദ്ധ്യാപകർ" },
    { icon: Snowflake, text: "AC ക്ലാസ്സ്‌റൂം & ഹോസ്റ്റൽ" },
    { icon: Utensils, text: "ഗുണമേന്മയുള്ള ഭക്ഷണം" },
    { icon: Moon, text: "ഇസ്ലാമിക മൂല്യങ്ങളിൽ പരിശീലനം" },
    { icon: Shield, text: "പെൺകുട്ടികൾക്ക് സുരക്ഷിതമായ ക്യാമ്പസ്" },
  ];

  const programHighlights = [
    "Science Stream (Bio-Math/Bio-Psych)",
    "Board Exam Focus",
    "Integrated NEET Coaching",
    "Holistic Development",
  ];

  const scholarships = [
    {
      percent: "80%+",
      benefit: "പഠനവും താമസവും സൗജന്യം",
      count: "5 വിദ്യാർഥിനികൾക്ക്",
      highlight: true,
    },
    {
      percent: "70%+",
      benefit: "പഠനം സൗജന്യം",
      count: "10 വിദ്യാർഥിനികൾക്ക്",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBF0] via-white to-[#FFFBF0]">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#E8A86C]/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Urgency Banner */}
          <div className="flex justify-center mb-6">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-full shadow-xl transition-transform duration-300 ${
                isAnimating ? "scale-110" : "scale-100"
              }`}
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-bold">
                +1 ഇന്റഗ്രേറ്റഡ് ബാച്ച് അഡ്മിഷൻ!
              </span>
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-bold">{seatsLeft} സീറ്റ് മാത്രം</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8A86C]/10 rounded-full text-[#2D1B2E] text-sm font-medium">
                <BookOpen className="w-4 h-4 text-[#E8A86C]" />
                Integrated +1/+2 with NEET Coaching
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D1B2E] leading-tight">
                <span className="bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] bg-clip-text text-transparent">
                  കാസറഗോഡിന്റെ
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">സ്വന്തം നീറ്റ് അക്കാദമി</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#8C4B58]/30 -z-0"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                പത്താം ക്ലാസ്സ് കഴിഞ്ഞ് നേരിട്ട് NEET തയ്യാറെടുപ്പ്!
                <span className="text-[#E8A86C] font-semibold">
                  {" "}
                  Plus One & Plus Two + NEET Coaching{" "}
                </span>
                ഒരേ ക്യാമ്പസിൽ
              </p>

              <div className="flex items-center gap-4 py-4 px-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#8C4B58]/20 shadow-lg">
                <div className="p-3 bg-[#E8A86C]/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#E8A86C]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">സ്ഥാപനം</p>
                  <p className="font-bold text-[#2D1B2E]">
                    മാന്യ വിൻടച്ച് ക്യാമ്പസ്, കാസറഗോഡ്
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://forms.gle/XgYEkRzpyecCQV4e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-2xl font-bold text-lg shadow-2xl shadow-[#E8A86C]/30 hover:shadow-[#E8A86C]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    ഇപ്പോൾ അപേക്ഷിക്കൂ
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="tel:9330500400"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#2D1B2E] rounded-2xl font-bold text-lg border-2 border-[#2D1B2E]/10 hover:border-[#E8A86C] hover:text-[#E8A86C] transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  9330 500 400
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#2D1B2E]/20">
                <Image
                  src="/0294.JPG"
                  alt="Wintouch Academy Students"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className="w-16 h-16 relative rounded-xl overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="Wintouch Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#2D1B2E]">
                        Wintouch Academy
                      </p>
                      <p className="text-sm text-gray-600">
                        Residential Campus for Girls
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-[#8C4B58] text-white px-6 py-3 rounded-2xl shadow-xl animate-bounce-slow">
                <p className="font-bold text-lg">2 Years</p>
                <p className="text-sm">Integrated Program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D1B2E] mb-4">
                ആർക്കൊക്കെ അപേക്ഷിക്കാം?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#8C4B58]/10">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#E8A86C]/5 to-[#8C4B58]/5 rounded-2xl">
                <div className="p-3 bg-[#E8A86C] rounded-xl shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#2D1B2E] mb-2">
                    Plus One ഇന്റഗ്രേറ്റഡ് ബാച്ച്
                  </h3>
                  <p className="text-gray-600 text-lg">
                    നിലവിൽ{" "}
                    <span className="font-semibold text-[#E8A86C]">
                      പത്താം ക്ലാസ്സിൽ
                    </span>{" "}
                    പഠിക്കുന്ന പെൺകുട്ടികൾക്ക്
                  </p>
                </div>
              </div>

              {/* Program Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {programHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[#FFFBF0] rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#E8A86C] shrink-0" />
                    <span className="text-[#2D1B2E] font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              വിൻടച്ച് അക്കാദമിയുടെ പ്രത്യേകതകൾ
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-lg">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C4B58]/10 rounded-full text-[#8C4B58] text-sm font-bold mb-4">
              <Award className="w-4 h-4" />
              WET - Wintouch Excellency Test
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D1B2E] mb-4">
              സ്കോളർഷിപ് അവസരം
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              പഠനത്തിൽ മികവ് പുലർത്തുന്ന വിദ്യാർഥിനികളെ കണ്ടെത്താൻ വിൻടച്ച്
              അക്കാദമി ഏർപ്പെടുത്തിയ ഓൺലൈൻ പരീക്ഷയാണ് WET. വീട്ടിലിരുന്നും
              എഴുതാവുന്നതാണ്.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {scholarships.map((item, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                  item.highlight
                    ? "bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] border-transparent text-white shadow-2xl shadow-[#E8A86C]/30"
                    : "bg-white border-[#8C4B58]/20 hover:border-[#8C4B58]"
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-3 -right-3 bg-[#2D1B2E] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Best Value
                  </div>
                )}
                <div
                  className={`text-5xl font-bold mb-2 ${
                    item.highlight ? "text-white" : "text-[#E8A86C]"
                  }`}
                >
                  {item.percent}
                </div>
                <p
                  className={`text-xl font-semibold mb-2 ${
                    item.highlight ? "text-white/90" : "text-[#2D1B2E]"
                  }`}
                >
                  {item.benefit}
                </p>
                <p
                  className={`${
                    item.highlight ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E8A86C] via-[#c88f5a] to-[#8C4B58] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              നിങ്ങളുടെ NEET സ്വപ്നം
              <span className="text-[#2D1B2E]"> യാഥാർത്ഥ്യമാക്കൂ</span>
            </h2>
            <p className="text-xl text-white/90">
              പത്താം ക്ലാസ്സ് കഴിഞ്ഞ് നേരിട്ട് NEET തയ്യാറെടുപ്പ് ആരംഭിക്കൂ!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://forms.gle/XgYEkRzpyecCQV4e8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-6 bg-white text-[#8C4B58] rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle2 className="w-6 h-6" />
                ഇപ്പോൾ അപേക്ഷിക്കൂ
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <a
                href="tel:9330500400"
                className="flex items-center gap-2 text-white/90 hover:text-[#2D1B2E] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">9330 500 400</span>
              </a>
              <span className="text-white/40">|</span>
              <a
                href="https://www.wintouchacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-[#2D1B2E] transition-colors"
              >
                www.wintouchacademy.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-[#2D1B2E] rounded-full shadow-lg hover:shadow-xl transition-all text-sm font-medium hover:bg-white"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
