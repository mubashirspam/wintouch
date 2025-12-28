"use client";

import { UNIQUE_FEATURES } from "@/app/data/constants";
import { ArrowRight } from "lucide-react";

export default function UniqueFeatures() {
  return (
    <section className="py-24 bg-[#2D1B2E] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#E8A86C]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8C4B58]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#E8A86C]/5 to-[#8C4B58]/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#E8A86C]/20 backdrop-blur-sm rounded-full text-[#E8A86C] text-sm font-semibold tracking-wider uppercase mb-6">
            Campus Excellence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#E8A86C] bg-clip-text text-transparent">
            More Than Just Academics
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            We build strong bodies and strong minds. Our unique campus
            facilities are designed to foster confidence and well-being.
          </p>
        </div>

        {/* Features Grid - Icon Based Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {UNIQUE_FEATURES.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-[#E8A86C]/30 hover:shadow-2xl hover:shadow-[#E8A86C]/10"
            >
              {/* Floating Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-[#2D1B2E] rounded-2xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#E8A86C] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-[#E8A86C] font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-tr-3xl rounded-bl-[100px]`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E8A86C]/50 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
