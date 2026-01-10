"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/app/components/ui";
import { WHATSAPP_LINK } from "@/app/data/constants";

export default function Hero() {
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
              src="https://cdn.wintouchacademy.com/public/site-assets/hero.jpg"
              alt="Wintouch Academy students on the field"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          <div className="absolute z-10 right-0 ml:right-50 bottom-0">
            <img src="/more.svg" alt="" className="object-bottom" />
          </div>

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/30 via-[#2D1B2E]/5 to-transparent" />

          <div className="relative h-full flex items-center justify-center text-center pt-20">
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
                  <Link href="/programs" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#8C4B58] hover:bg-[#7A3F4D] justify-center">
                      Explore Programs <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="secondary"
                      className="bg-[#E8A86C] hover:bg-[#2D1B2E] text-white border border-white/30 w-full sm:w-auto justify-center backdrop-blur-md flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat with Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToContent}
            className="absolute bottom-[0px] right-6 cursor-pointer"
            aria-label="Scroll down"
          >
            <img src="./scrolldown.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}





