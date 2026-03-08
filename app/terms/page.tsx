import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="w-28 h-10 relative">
              <Image
                src="/logo_white.svg"
                alt="Wintouch Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-24" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl border border-[#8C4B58]/20 p-8 md:p-12">
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#8C4B58]/10 rounded-full">
              <FileText className="w-6 h-6 text-[#8C4B58]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[#2D1B2E]">
              Terms and Conditions
            </h1>
          </div>

          <p className="text-gray-500 text-sm mb-8">
            Last Updated: March 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the Wintouch Academy website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                2. Services Provided
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wintouch Academy provides educational services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>NEET coaching and preparation programs</li>
                <li>Integrated Plus One and Plus Two courses</li>
                <li>Repeaters courses for Class 12 students</li>
                <li>Scholarship examinations (WET - Wintouch Excellency Test)</li>
                <li>Hostel facilities (where applicable)</li>
                <li>Online and offline educational resources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                3. Registration and Admission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>3.1 Eligibility:</strong> Students must meet the eligibility criteria for their chosen course as specified by Wintouch Academy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>3.2 Accurate Information:</strong> You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>3.3 Admission Confirmation:</strong> Admission is subject to availability and final confirmation by Wintouch Academy. Registration does not guarantee admission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                4. Fees and Payment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.1 Course Fees:</strong> All course fees are as published on our website or communicated during the admission process.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.2 Payment Terms:</strong> Fees must be paid according to the payment schedule provided. Late payments may result in penalties or suspension of services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.3 Refund Policy:</strong> Refunds, if applicable, will be processed according to our refund policy. Please contact our administration for specific details.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.4 Scholarships:</strong> Scholarship awards are based on performance in the WET exam and are subject to terms and conditions specified at the time of the exam.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                5. Student Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students are expected to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain discipline and decorum on campus and in online classes</li>
                <li>Respect faculty, staff, and fellow students</li>
                <li>Attend classes regularly and complete assignments on time</li>
                <li>Follow all rules and regulations of the academy</li>
                <li>Not engage in any form of misconduct, cheating, or plagiarism</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Violation of conduct rules may result in disciplinary action, including suspension or expulsion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content provided by Wintouch Academy, including but not limited to study materials, videos, notes, test papers, and online resources, are the intellectual property of Wintouch Academy and are protected by copyright laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                7. Attendance and Performance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>7.1 Attendance:</strong> Students are required to maintain minimum attendance as specified by the academy. Poor attendance may affect eligibility for examinations and scholarships.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>7.2 Academic Performance:</strong> While we strive to provide the best education, Wintouch Academy does not guarantee specific exam results or admission to specific institutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                8. Hostel Facilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For students availing hostel facilities:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hostel rules and regulations must be strictly followed</li>
                <li>Hostel fees are separate from course fees and must be paid as per schedule</li>
                <li>The academy is not responsible for personal belongings</li>
                <li>Students must maintain cleanliness and discipline in hostel premises</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wintouch Academy shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of data or interruption of services due to technical issues</li>
                <li>Actions or omissions of third-party service providers</li>
                <li>Personal injury or property damage on premises, except in cases of gross negligence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                10. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your use of our services is also governed by our Privacy Policy. Please review our <Link href="/privacy-policy" className="text-[#8C4B58] font-semibold hover:underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                11. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>11.1 By Student:</strong> Students may withdraw from courses by providing written notice. Refunds, if any, will be processed according to our refund policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>11.2 By Academy:</strong> Wintouch Academy reserves the right to terminate a student&apos;s enrollment for violation of terms, non-payment of fees, or misconduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                12. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wintouch Academy reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                13. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kerala, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                14. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions or concerns regarding these terms and conditions, please contact us:
              </p>
              <div className="bg-[#8C4B58]/5 rounded-xl p-6 mt-4">
                <p className="text-gray-700 mb-2">
                  <strong>Wintouch Academy</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Phone: <a href="tel:+919330500400" className="text-[#8C4B58] font-semibold hover:underline">+91 9330 500 400</a>
                </p>
                <p className="text-gray-700">
                  Website: <a href="https://www.wintouchacademy.com" className="text-[#8C4B58] font-semibold hover:underline">www.wintouchacademy.com</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                15. Acknowledgment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By registering for any course or service at Wintouch Academy, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
