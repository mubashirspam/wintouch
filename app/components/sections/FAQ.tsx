"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/app/components/ui";
import { FAQ_QUESTIONS } from "@/app/data/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-[#FFFBF0]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFBF0] via-[#f8f4eb] to-[#FFFBF0]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#E8A86C]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8C4B58]/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-[#E8A86C]/10 rounded-2xl mb-6 animate-fade-in-up">
            <HelpCircle className="w-8 h-8 text-[#E8A86C]" />
          </div>
          <SectionHeading
            subtitle="Common Questions"
            title="Everything You Need to Know"
            align="center"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_QUESTIONS.map((item, i) => (
            <div
              key={i}
              className={`group transition-all duration-300 ${
                openIndex === i
                  ? "bg-white shadow-xl shadow-[#8C4B58]/10 scale-[1.02]"
                  : "bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-[#2D1B2E]/5"
              } rounded-2xl border border-white/50 backdrop-blur-sm overflow-hidden`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 flex justify-between items-center cursor-pointer gap-4 text-left"
              >
                <span
                  className={`font-bold text-lg transition-colors duration-300 ${
                    openIndex === i ? "text-[#8C4B58]" : "text-[#2D1B2E]"
                  }`}
                >
                  {item.question}
                </span>
                <div
                  className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#8C4B58] rotate-180"
                      : "bg-[#2D1B2E]/5 group-hover:bg-[#2D1B2E]/10"
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#2D1B2E]" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D1B2E] text-white rounded-xl font-semibold hover:bg-[#452c46] transition-colors shadow-lg shadow-[#2D1B2E]/20">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
