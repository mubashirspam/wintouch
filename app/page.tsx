import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import {
  Hero,
  About,
  VisionMission,
  Programs,
  UniqueFeatures,
  Testimonials,
  Admissions,
  FAQ,
  ImageGallery,
  Team,
} from "@/app/components/sections";

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
        <VisionMission />
        <Programs />
        <UniqueFeatures />
        <Team />
        <Testimonials />
        <ImageGallery />
        <Admissions />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
