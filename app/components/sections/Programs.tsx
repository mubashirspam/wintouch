"use client";

import { Card, SectionHeading } from "@/app/components/ui";
import { PROGRAMS } from "@/app/data/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Programs() {
  return (
    <section
      className="py-24 bg-[#FFFBF0] relative overflow-hidden"
      id="programs"
    >
      {/* Decorative Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D1B2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Blobs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#8C4B58]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#E8A86C]/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Academic Excellence"
          title="Our Programs"
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROGRAMS.map((program, idx) => (
            <Card key={idx} className="relative overflow-hidden group">
              {/* Background Icon */}
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity bg-[#2D1B2E]/50 backdrop-blur-sm rounded-bl-3xl">
                {program.icon}
              </div>

              {/* Icon Badge */}
              <div className="mb-6 inline-flex p-3 rounded-xl bg-[#2D1B2E]/80 backdrop-blur-md shadow-lg shadow-[#2D1B2E]/30 border border-white/10">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {program.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8A86C]" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <span className="text-sm font-bold text-[#8C4B58]">
                  {program.duration}
                </span>
                <button className="text-sm font-bold underline decoration-[#E8A86C] underline-offset-4 hover:text-[#8C4B58] transition-colors">
                  View Syllabus
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up delay-300">
          <p className="text-[#2D1B2E]/60 mb-6 max-w-2xl mx-auto">
            Not sure which program is right for you? Our academic counselors are
            here to help you make the best choice for your future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#E8A86C] text-white rounded-full font-semibold hover:bg-[#d6965c] transition-colors shadow-lg shadow-[#E8A86C]/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Academic Counseling
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
