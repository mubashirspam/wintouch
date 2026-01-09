"use client";

import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/app/data/constants";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

export default function Team() {
  // Show only featured members (first 4) on homepage
  const featuredMembers = TEAM_MEMBERS.filter((m) => m.isFeatured).slice(0, 4);

  return (
    <section className="py-24 bg-[#FFFBF0] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#E8A86C]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D1B2E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#2D1B2E]/10 backdrop-blur-sm rounded-full text-[#2D1B2E] text-sm font-semibold tracking-wider uppercase mb-6">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2D1B2E]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-[#2D1B2E]/60 max-w-2xl mx-auto leading-relaxed">
            Dedicated educators and administrators committed to nurturing the
            next generation of achievers and visionaries.
          </p>
        </div>

        {/* Team Grid - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {featuredMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#2D1B2E]/5 hover:shadow-2xl hover:shadow-[#8C4B58]/20 transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E] via-transparent to-transparent opacity-60" />

                  {/* Role Badge */}
                  {/* <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#E8A86C]/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      {member.department}
                    </span>
                  </div> */}

                  {/* Social Links - Appear on Hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D1B2E] mb-1 group-hover:text-[#8C4B58] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#E8A86C] font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  {/* <p className="text-[#2D1B2E]/60 text-sm leading-relaxed line-clamp-2">
                    {member.bio}
                  </p> */}
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8C4B58] via-[#E8A86C] to-[#8C4B58] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/team"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#2D1B2E] text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#2D1B2E]/30"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative z-10">Meet All Team Members</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
