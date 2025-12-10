"use client";

import Image from "next/image";
import { UNIQUE_FEATURES } from "@/app/data/constants";

export default function UniqueFeatures() {
  return (
    <section className="py-24 bg-[#2D1B2E] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#E8A86C 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More Than Just Academics
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We build strong bodies and strong minds. Our unique campus
            facilities are designed to foster confidence and well-being.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {UNIQUE_FEATURES.map((item, i) => (
            <div
              key={i}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E] via-[#2D1B2E]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
