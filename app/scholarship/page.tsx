import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import { ExamForm } from "@/app/components/sections";

export const metadata = {
  title: "NEET Scholarship Exam - Wintouch Academy",
  description:
    "Register for the NEET Scholarship Exam and win up to ₹50 Lakhs in scholarships. Join Kerala's premier girls-only residential NEET coaching academy.",
};

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#FFFBF0] via-[#FFF8E8] to-[#FFFBF0]">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#8C4B58]/10 text-[#8C4B58] rounded-full text-sm font-bold mb-6">
              ✨ WET - Wintouch Excellency Test
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2D1B2E] mb-4">
              NEET സ്കോളർഷിപ് പരീക്ഷ
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Register for our online excellence test from home and win
              scholarships worth up to{" "}
              <span className="text-[#E8A86C] font-bold">₹50 Lakhs!</span>
            </p>

            {/* Scholarship Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-6 py-3 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-2xl font-bold">
                80%+ Score = Free Tuition + Hostel
              </div>
              <div className="px-6 py-3 bg-white border-2 border-[#E8A86C] text-[#2D1B2E] rounded-2xl font-bold">
                70%+ Score = Free Tuition
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Form */}
        <ExamForm variant="embedded" />
      </main>

      <Footer />
    </div>
  );
}
