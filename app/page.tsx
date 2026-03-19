import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import {
  Hero,
  About,
  Programs,
  Admissions,
  FAQ,
  ImageGallery,
  Team,
  AdmissionForm,
} from "@/app/components/sections";
import { ScholarshipPopup } from "@/app/components/ui";

export const metadata = {
  title: "Wintouch Academy - Empowering Young Women Through Excellence",
  description:
    "Premier girls-only residential academy in Kerala offering NEET coaching and integrated higher secondary education with Islamic values.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main>
        <Hero />
        <About />
        <ImageGallery />
        <Programs />
        {/* <UniqueFeatures /> */}
        <Team />
        {/* <Testimonials /> */}

        <Admissions />
        <AdmissionForm />
        <FAQ />
      </main>

      <Footer />
      <ScholarshipPopup />
    </div>
  );
}
