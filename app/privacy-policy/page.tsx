import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <Shield className="w-6 h-6 text-[#8C4B58]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[#2D1B2E]">
              Privacy Policy
            </h1>
          </div>

          <p className="text-gray-500 text-sm mb-8">
            Last Updated: March 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Wintouch Academy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services and tell you about your privacy rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Identity Data:</strong> Name, date of birth, student information</li>
                <li><strong>Contact Data:</strong> Email address, phone numbers, WhatsApp number, address, district, state</li>
                <li><strong>Educational Data:</strong> School name, board, stream, course preferences, ambitions, academic history</li>
                <li><strong>Parent/Guardian Data:</strong> Parent name, occupation</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To process your admission and exam registrations</li>
                <li>To communicate with you about courses, programs, and services</li>
                <li>To provide educational services and support</li>
                <li>To send you important updates and notifications</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                5. Data Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Service providers who assist in delivering our services</li>
                <li>Educational partners and affiliated institutions</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal data to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies to distinguish you from other users and to provide you with a good experience. By continuing to browse the site, you are agreeing to our use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                8. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                9. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may include links to third-party websites. We do not have control over these websites and are not responsible for their privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D1B2E] mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
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
          </div>
        </div>
      </div>
    </div>
  );
}
