"use client";

import Image from "next/image";
import { Flower } from "lucide-react";
import { SectionHeading } from "@/app/components/ui";
import { STATS } from "@/app/data/constants";

export default function About() {
  return (
    <section className="py-24 bg-[#FFFBF0] relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#E8A86C]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8C4B58]/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#E8A86C]/5 to-[#8C4B58]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Top Icon */}
          <div className="mb-8 animate-fade-in-up">
            <Flower className="w-12 h-12 text-[#2D1B2E] stroke-[1.5]" />
          </div>

          {/* Heading & Text */}
          <SectionHeading
            subtitle="Our Philosophy"
            title="Rooted in Faith, Ready for the Future"
            align="center"
            className="mb-8"
          />

          <div className="space-y-6 text-lg text-[#2D1B2E]/80 max-w-3xl mx-auto mb-20 leading-relaxed animate-fade-in-up delay-100">
            <p>
              At Wintouch Academy, we recognize that true education transcends
              textbooks. Designed exclusively for girls, our campus is a
              sanctuary where academic excellence meets spiritual serenity. Our
              integrated +1/+2 and NEET programs are rigorous, yet our approach
              is nurturing. We weave Islamic cultural values into daily
              life—from halal dining to prayer facilities—ensuring students
              never have to compromise on their identity while chasing their
              ambitions.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#E4A068]/10 backdrop-blur-sm p-8 rounded-[1rem] hover:bg-white/60 transition-all duration-300 group flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 bg-[#FFFBF0] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#2D1B2E] stroke-[1.5]" />
                </div>
                <h4 className="text-3xl font-bold text-[#2D1B2E] font-display">
                  {stat.value}
                </h4>
                <p className="text-sm font-medium text-[#8C4B58] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
