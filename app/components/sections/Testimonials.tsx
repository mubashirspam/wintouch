"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/app/components/ui";
import { TESTIMONIALS } from "@/app/data/constants";

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF0] via-[#f5ebe0] to-[#FFFBF0]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#E8A86C]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#8C4B58]/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Success Stories"
          title="Voices of Our Community"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="group relative">
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#8C4B58]/20 to-[#E8A86C]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-[#2D1B2E]/5 border border-white/50 hover:shadow-2xl hover:shadow-[#8C4B58]/10 transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-4 -right-4 p-3 bg-[#8C4B58] rounded-2xl shadow-lg shadow-[#8C4B58]/30 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 text-[#E8A86C] fill-[#E8A86C]"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#E8A86C] ring-offset-2">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2D1B2E] text-lg">
                      {t.name}
                    </h5>
                    <span className="text-sm text-[#8C4B58] font-medium">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#2D1B2E]">500+</p>
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              Students Placed
            </p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-[#8C4B58]">98%</p>
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              Success Rate
            </p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-[#E8A86C]">4.9</p>
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              Parent Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
