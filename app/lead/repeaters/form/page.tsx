"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowLeft, Phone } from "lucide-react";
import ExamForm from "@/app/components/sections/ExamForm";

export default function RepeatersFormPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/lead/repeaters"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="w-28 h-10 relative">
              <Image
                src="/logo_white.svg"
                alt="Wintouch Logo"
                fill
                className="object-contain"
              />
            </div>

            <a
              href="tel:+919330500400"
              className="flex items-center gap-1 text-white text-sm font-bold"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 9330 500 400</span>
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#8C4B58]/10 rounded-full text-[#8C4B58] text-sm font-bold mb-4">
            <Award className="w-4 h-4" />
            WET - Wintouch Excellency Test
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#2D1B2E] mb-2">
            Scholarship Registration
          </h1>
          <p className="text-gray-600">
            NEET Repeaters Batch 2026-27
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#8C4B58]/20 p-6 md:p-8">
          <ExamForm
            variant="standalone"
            defaultCourseType="exam_twelfth"
          />
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Need help?{" "}
          <a
            href="tel:+919330500400"
            className="text-[#8C4B58] font-semibold hover:underline"
          >
            Call +91 9330 500 400
          </a>
        </p>
      </div>
    </div>
  );
}
