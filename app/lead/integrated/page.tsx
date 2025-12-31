"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  Star,
  Heart,
  Stethoscope,
  Users,
  Play,
} from "lucide-react";

export default function IntegratedLeadPage() {
  const [seatsLeft] = useState(18);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: GraduationCap,
      text: "10 വർഷത്തെ പഠന പരിചയമുള്ള അദ്ധ്യാപകർ",
      english: "Experienced Faculty",
    },
    {
      icon: Snowflake,
      text: "AC ക്ലാസ്സ്‌റൂം & ഹോസ്റ്റൽ",
      english: "AC Classrooms & Hostel",
    },
    { icon: Utensils, text: "ഗുണമേന്മയുള്ള ഭക്ഷണം", english: "Quality Food" },
    {
      icon: Moon,
      text: "ഇസ്ലാമിക മൂല്യങ്ങളിൽ പരിശീലനം",
      english: "Islamic Values Based Training",
    },
    {
      icon: Shield,
      text: "പെൺകുട്ടികൾക്ക് സുരക്ഷിതമായ ക്യാമ്പസ്",
      english: "Safe Campus for Girls",
    },
  ];

  const highlights = [
    { icon: BookOpen, label: "Science Stream", desc: "Bio-Math / Bio-Psych" },
    { icon: GraduationCap, label: "Board Exam", desc: "Focused Preparation" },
    { icon: Stethoscope, label: "NEET Coaching", desc: "Integrated Program" },
    { icon: Users, label: "Holistic", desc: "Development" },
  ];

  return (
    <div className="min-h-screen bg-[#2D1B2E] overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E8A86C]/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#8C4B58]/20 to-transparent rounded-full blur-3xl animate-float" />
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#E8A86C]/40 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#8C4B58]/50 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#E8A86C]/30 rounded-full animate-bounce-slow" />
      </div>

      {/* Hero Section - Poster Style */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/0294.JPG"
            alt="Wintouch Academy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B2E]/95 via-[#2D1B2E]/80 to-[#2D1B2E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E] via-transparent to-[#2D1B2E]/30" />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Top Bar - Logo & Urgency */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4 mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 relative">
                <Image
                  src="/logo.svg"
                  alt="Wintouch Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white">
                <p className="font-bold text-lg md:text-xl">WINTOUCH</p>
                <p className="text-xs text-white/70">ACADEMY</p>
              </div>
            </div>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-full shadow-xl animate-heartbeat touch-target">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-bold text-sm md:text-base">
                +1 Integrated Batch
              </span>
              <div className="flex items-center gap-1 bg-white/20 px-2 py-1 md:px-3 rounded-full">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-bold text-xs md:text-sm">
                  {seatsLeft} Seats Left
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div
              className={`space-y-6 text-center lg:text-left transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              {/* Malayalam Main Heading */}
              <div className="space-y-2">
                <p className="text-[#E8A86C] text-sm md:text-base font-medium tracking-wider uppercase animate-slide-in-up">
                  ★ #1 Kerala&apos;s Best Girls Residential Campus ★
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                  <span className="block gradient-text">പാലായിലോ</span>
                  <span className="block text-white/90">കോട്ടയിലോ</span>
                  <span className="block text-[#E8A86C]">പോകേണ്ട!</span>
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-4">
                  ഇനി <span className="text-[#E8A86C]">കാസർഗോഡ്</span> തന്നെ
                  പഠിക്കാം
                </p>
              </div>

              {/* English Subtitle */}
              <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
                No need to travel far! Get{" "}
                <span className="text-[#E8A86C] font-semibold">
                  Plus One & Plus Two + NEET Coaching
                </span>{" "}
                right here in Kasaragod
              </p>

              {/* NEET Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#E8A86C] text-[#2D1B2E] rounded-2xl font-bold text-lg animate-wiggle">
                <Stethoscope className="w-6 h-6" />
                NEET COACHING @ KASARGOD
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 bg-white/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#E8A86C]" />
                </div>
                <p className="text-white/90">
                  <span className="font-bold">Wintouch Palm Meadows</span>,
                  Manya, Kasaragod
                </p>
              </div>

              {/* CTA Buttons - Mobile Friendly */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="https://forms.gle/XgYEkRzpyecCQV4e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#E8A86C] to-[#c88f5a] text-[#2D1B2E] rounded-2xl font-bold text-lg shadow-2xl shadow-[#E8A86C]/30 hover:shadow-[#E8A86C]/50 transition-all duration-300 hover:scale-105 active:scale-95 touch-target animate-glow"
                >
                  <span className="flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="tel:+919330500400"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 glass-card text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 active:scale-95 touch-target"
                >
                  <Phone className="w-5 h-5 animate-wiggle" />
                  +91 9330 500 400
                </a>
              </div>
            </div>

            {/* Right - Highlight Cards */}
            <div
              className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer stagger-${
                    index + 1
                  } animate-scale-up`}
                >
                  <div className="p-3 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] rounded-xl w-fit mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">{item.label}</p>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <p className="text-white/60 text-sm">Scroll Down</p>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-[#E8A86C] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Info Strip */}
      <section className="relative py-6 bg-gradient-to-r from-[#E8A86C] via-[#c88f5a] to-[#8C4B58] overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#2D1B2E]" />
              <span className="font-bold text-[#2D1B2E] text-lg">
                Admission Open for 2025-2026
              </span>
            </div>
            <div className="h-6 w-px bg-[#2D1B2E]/30 hidden md:block" />
            <a
              href="tel:+919330500400"
              className="flex items-center gap-2 text-[#2D1B2E] font-bold text-xl hover:scale-105 transition-transform touch-target"
            >
              <Phone className="w-5 h-5" />
              +91 9330 500 400
            </a>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-16 md:py-24 bg-[#FFFBF0] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A86C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C4B58]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#8C4B58]/10 rounded-full text-[#8C4B58] text-sm font-bold mb-4 animate-bounce-slow">
              <Award className="w-4 h-4" />
              WET - Wintouch Excellency Test
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#2D1B2E] mb-4">
              സ്കോളർഷിപ് അവസരം
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take our online excellence test from home and win exciting
              scholarships!
            </p>

            {/* Total Scholarship Value Badge */}
            <div className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-2xl shadow-xl animate-heartbeat">
              <Sparkles className="w-6 h-6" />
              <div className="text-left">
                <p className="text-sm font-medium text-white/80">
                  Total Scholarship Worth
                </p>
                <p className="text-3xl md:text-4xl font-black">₹50 LAKHS</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Scholarship Card 1 - Best Value */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] text-white shadow-2xl shadow-[#8C4B58]/30 hover:scale-105 transition-all duration-300 touch-target animate-glow">
              <div className="absolute -top-4 -right-4 bg-[#2D1B2E] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Best Value
              </div>
              <div className="text-6xl md:text-7xl font-black mb-3">80%+</div>
              <p className="text-2xl font-bold mb-2">പഠനവും താമസവും സൗജന്യം</p>
              <p className="text-white/80 mb-4">
                Free tuition and accommodation
              </p>
              <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full w-fit">
                <Users className="w-4 h-4" />
                For 5 students
              </div>
            </div>

            {/* Scholarship Card 2 */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-white border-2 border-[#E8A86C]/30 hover:border-[#E8A86C] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 touch-target">
              <div className="text-6xl md:text-7xl font-black text-[#8C4B58] mb-3">
                70%+
              </div>
              <p className="text-2xl font-bold text-[#2D1B2E] mb-2">
                പഠനം സൗജന്യം
              </p>
              <p className="text-gray-600 mb-4">Free tuition fee</p>
              <div className="flex items-center gap-2 text-sm bg-[#E8A86C]/10 text-[#8C4B58] px-4 py-2 rounded-full w-fit">
                <Users className="w-4 h-4" />
                For 10 students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-16 md:py-24 relative bg-[#FFFBF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 animate-slide-in-up">
              <h2 className="text-3xl md:text-5xl font-black text-[#2D1B2E] mb-4">
                ആർക്കൊക്കെ അപേക്ഷിക്കാം?
              </h2>
              <p className="text-gray-600 text-lg">
                Who can apply for this program?
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] mx-auto rounded-full mt-4" />
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-[#2D1B2E]/10 border border-[#E8A86C]/20 hover:shadow-[#E8A86C]/20 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] rounded-2xl shrink-0">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl md:text-3xl text-[#2D1B2E] mb-3">
                    Plus One ഇന്റഗ്രേറ്റഡ് ബാച്ച്
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Girls currently studying in{" "}
                    <span className="font-bold text-[#E8A86C]">Class 10</span>{" "}
                    (SSLC/CBSE/ICSE)
                  </p>

                  {/* Program Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-[#FFFBF0] rounded-2xl hover:bg-[#E8A86C]/10 transition-colors touch-target"
                      >
                        <item.icon className="w-5 h-5 text-[#E8A86C] shrink-0" />
                        <div>
                          <span className="text-[#2D1B2E] font-bold text-sm">
                            {item.label}
                          </span>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Interactive Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#2D1B2E] via-[#452c46] to-[#8C4B58] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A86C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C4B58]/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              വിൻടച്ച് അക്കാദമിയുടെ പ്രത്യേകതകൾ
            </h2>
            <p className="text-white/70 text-lg">
              What makes Wintouch Academy special?
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#E8A86C] to-white mx-auto rounded-full mt-4" />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-pointer touch-target ${
                  activeFeature === index
                    ? "bg-[#E8A86C] text-[#2D1B2E] scale-105 shadow-2xl shadow-[#E8A86C]/30"
                    : "glass-card hover:bg-white/10"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`p-4 rounded-2xl w-fit mb-4 transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-[#2D1B2E]"
                      : "bg-gradient-to-br from-[#E8A86C] to-[#8C4B58]"
                  }`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${
                      activeFeature === index ? "text-[#E8A86C]" : "text-white"
                    }`}
                  />
                </div>
                <p
                  className={`font-bold text-xl mb-2 ${
                    activeFeature === index ? "text-[#2D1B2E]" : "text-white"
                  }`}
                >
                  {feature.text}
                </p>
                <p
                  className={`text-sm ${
                    activeFeature === index
                      ? "text-[#2D1B2E]/70"
                      : "text-white/60"
                  }`}
                >
                  {feature.english}
                </p>

                {/* Active indicator */}
                {activeFeature === index && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#E8A86C] rotate-45" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/0635.JPG"
            alt="Wintouch Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B2E]/95 via-[#2D1B2E]/90 to-[#2D1B2E]/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#E8A86C] text-[#2D1B2E] rounded-full font-bold animate-heartbeat">
              <Heart className="w-5 h-5" />
              Limited Seats Available
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              നിങ്ങളുടെ <span className="text-[#E8A86C]">NEET സ്വപ്നം</span>
              <br />
              യാഥാർത്ഥ്യമാക്കൂ
            </h2>
            <p className="text-xl text-white/80">
              Start your NEET preparation right after Class 10! Join Wintouch
              Academy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://forms.gle/XgYEkRzpyecCQV4e8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-6 bg-[#E8A86C] text-[#2D1B2E] rounded-2xl font-bold text-xl shadow-2xl shadow-[#E8A86C]/30 hover:shadow-[#E8A86C]/50 transition-all duration-300 hover:scale-105 active:scale-95 touch-target animate-glow"
              >
                <CheckCircle2 className="w-6 h-6" />
                Apply Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                href="tel:+919330500400"
                className="flex items-center gap-2 text-white hover:text-[#E8A86C] transition-colors touch-target text-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">+91 9330 500 400</span>
              </a>
              <span className="text-white/30 hidden sm:block">|</span>
              <a
                href="https://www.wintouchacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-[#E8A86C] transition-colors"
              >
                www.wintouchacademy.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#2D1B2E] via-[#2D1B2E]/95 to-transparent md:hidden z-50">
        <div className="flex gap-3">
          <a
            href="tel:+919330500400"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-4 glass-card text-white rounded-xl font-bold touch-target"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://forms.gle/XgYEkRzpyecCQV4e8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-4 bg-[#E8A86C] text-[#2D1B2E] rounded-xl font-bold touch-target animate-glow"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Floating Apply Button - Desktop Right Side */}
      <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50 animate-slide-in-right">
        <a
          href="https://forms.gle/XgYEkRzpyecCQV4e8"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] rounded-2xl shadow-2xl hover:shadow-[#E8A86C]/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
            <div className="relative p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-white font-black text-sm tracking-wider rotate-0 group-hover:rotate-3 transition-transform">
              APPLY
            </p>
            <p className="text-white font-black text-sm tracking-wider rotate-0 group-hover:rotate-3 transition-transform">
              NOW
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-white animate-bounce-horizontal" />
        </a>
      </div>
    </div>
  );
}
