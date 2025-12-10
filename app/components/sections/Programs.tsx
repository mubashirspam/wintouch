"use client";

import { SectionHeading, Card } from "@/app/components/ui";
import { PROGRAMS } from "@/app/data/constants";

export default function Programs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF0] via-[#f8f4eb] to-[#FFFBF0]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#8C4B58]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#E8A86C]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Academic Excellence" title="Our Programs" />

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
      </div>
    </section>
  );
}
