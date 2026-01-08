import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import { Programs, PageHeader, } from "@/app/components/sections";

export const metadata = {
  title: "Programs - Wintouch Academy",
  description:
    "Explore our academic programs structured for success and designed for focus.",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main className="animate-fade-in-up">
        <PageHeader
          title="Academic Programs"
          subtitle="Structured for success. Designed for focus."
          variant="primary"
        />
        <Programs />
        {/* <Testimonials /> */}
      </main>

      <Footer />
    </div>
  );
}
