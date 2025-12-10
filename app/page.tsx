"use client";

import { useState } from "react";
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
  PageHeader,
} from "@/app/components/sections";

export default function WintouchApp() {
  const [activePage, setActivePage] = useState("home");

  const handleNav = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      <RegistrationBanner onNavigate={handleNav} />
      <Navbar activePage={activePage} onNavigate={handleNav} />

      <main>
        {/* Home Page */}
        {activePage === "home" && (
          <>
            <Hero onNavigate={handleNav} />
            <About />
            <VisionMission />
            <Programs />
            <UniqueFeatures />
            <Testimonials />
            <ImageGallery />
            <Admissions />
            <FAQ />
          </>
        )}

        {/* About Page */}
        {activePage === "about" && (
          <div className="animate-fade-in-up">
            <PageHeader
              title="Our Legacy"
              subtitle="Nurturing the next generation of women leaders since 2010."
              variant="dark"
            />
            <About />
            <VisionMission />
            <UniqueFeatures />
          </div>
        )}

        {/* Programs Page */}
        {activePage === "programs" && (
          <div className="animate-fade-in-up">
            <PageHeader
              title="Academic Programs"
              subtitle="Structured for success. Designed for focus."
              variant="primary"
            />
            <Programs />
            <Testimonials />
          </div>
        )}

        {/* Campus Life Page */}
        {activePage === "life" && (
          <div className="animate-fade-in-up">
            <PageHeader
              title="Life at Wintouch"
              subtitle="A home away from home."
              variant="accent"
            />
            <UniqueFeatures />
            <ImageGallery />
            <Testimonials />
          </div>
        )}

        {/* Admissions Page */}
        {activePage === "admissions" && (
          <div className="animate-fade-in-up">
            <div className="bg-[#FFFBF0] pt-12">
              <Admissions />
            </div>
            <FAQ />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNav} />
    </div>
  );
}
