"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#FFFBF0]">
      <div className="relative w-full py-5 px-3 md:px-6 pb-6">
        <div className="relative w-full h-[700px] md:h-[600px] lg:h-[600px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero.jpg"
              alt="Wintouch Academy students on the field"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/30 via-[#2D1B2E]/5 to-transparent" />

          <div className="relative h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-6 md:px-10">
              <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm">
                  Excellence in <br />
                  <span className="text-[#E8A86C]">Education</span> &{" "}
                  <span className="text-white">Values.</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-medium">
                  A premier girls-only residential academy combining top-tier
                  NEET coaching with Islamic values and holistic wellness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                  <Button
                    onClick={() => onNavigate("admissions")}
                    className="w-full sm:w-auto bg-[#9A4B5A] justify-center"
                  >
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-[#E4A068] text-white border-white/30 hover:bg-white/30 w-full sm:w-auto justify-center backdrop-blur-md"
                    onClick={() => onNavigate("programs")}
                  >
                    Explore Programs
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToContent}
            className="absolute bottom-[0px] right-6  cursor-pointer"
            aria-label="Scroll down"
          >
            <img src="./scrolldown.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
