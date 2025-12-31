import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import {
  UniqueFeatures,
  ImageGallery,
  PageHeader,
  Testimonials,
} from "@/app/components/sections";

export const metadata = {
  title: "Campus Life - Wintouch Academy",
  description: "Experience life at Wintouch Academy - a home away from home.",
};

export default function CampusLifePage() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main className="animate-fade-in-up">
        <PageHeader
          title="Life at Wintouch"
          subtitle="A home away from home."
          variant="accent"
        />
        <UniqueFeatures />
        <ImageGallery />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
