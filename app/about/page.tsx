import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import {
  About,
  VisionMission,
  PageHeader,
  Team,
  UniqueFeatures,
} from "@/app/components/sections";

export const metadata = {
  title: "About Us - Wintouch Academy",
  description:
    "Learn about Wintouch Academy's legacy of nurturing the next generation of women leaders since 2010.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main className="animate-fade-in-up">
        <PageHeader
          title="Our Legacy"
          subtitle="Nurturing the next generation of women leaders since 2010."
          variant="dark"
        />
        <About />
        <VisionMission />
        <Team />
        <UniqueFeatures />
      </main>

      <Footer />
    </div>
  );
}
