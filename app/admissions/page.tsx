import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import { Admissions, FAQ, ScholarshipForm } from "@/app/components/sections";

export const metadata = {
  title: "Admissions - Wintouch Academy",
  description:
    "Apply to Wintouch Academy and start your journey towards excellence.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main className="animate-fade-in-up">
        <div className="bg-[#FFFBF0] pt-12">
          <Admissions />
        </div>
        <ScholarshipForm />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
