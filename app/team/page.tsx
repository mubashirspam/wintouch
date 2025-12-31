import { Navbar, Footer, RegistrationBanner } from "@/app/components/layout";
import { TeamPage } from "@/app/components/sections";

export const metadata = {
  title: "Our Team - Wintouch Academy",
  description:
    "Meet the dedicated team of educators and staff at Wintouch Academy.",
};

export default function TeamPageRoute() {
  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner />
      <Navbar />

      <main className="animate-fade-in-up">
        <TeamPage />
      </main>

      <Footer />
    </div>
  );
}
