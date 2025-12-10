"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui";
import { CONTACT_INFO } from "@/app/data/constants";

export default function Admissions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#FFFBF0]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#2D1B2E]/10 border border-white/50 overflow-hidden flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="md:w-2/5 bg-[#2D1B2E] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8C4B58] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Admissions Open</h3>
              <p className="text-white/80 mb-8">
                Join the batch of 2025. Limited seats available for the
                residential program.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8A86C]" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E8A86C]" />
                  <span>{CONTACT_INFO.admissionEmail}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#E8A86C]" />
                  <span>{CONTACT_INFO.campus}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">
                  Deadline
                </p>
                <p className="text-xl font-bold">August 30, 2025</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="md:w-3/5 p-10">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-[#2D1B2E]">
                  Application Received!
                </h4>
                <p className="text-gray-600">
                  Our admissions team will contact you shortly to schedule an
                  interview.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-2xl font-bold text-[#2D1B2E] mb-2">
                  Apply Now
                </h4>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Student Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-white/50 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Parent Phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-white/50 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-white/50 backdrop-blur-sm"
                      placeholder="+91"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Course
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-white/50 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-white/50 backdrop-blur-sm">
                      <option>NEET Coaching</option>
                      <option>Integrated +1</option>
                      <option>Integrated +2</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-white/50 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="student@email.com"
                  />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    className="mt-1 accent-[#8C4B58]"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-500">
                    I consent to the processing of my personal data for
                    admission purposes and agree to the academy&apos;s privacy
                    policy.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
