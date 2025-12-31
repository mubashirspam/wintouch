"use client";

import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/app/data/constants";
import { Linkedin, Mail, ArrowLeft, Quote } from "lucide-react";

export default function TeamPage() {
  // CEO/Founder - Featured prominently
  const ceo = TEAM_MEMBERS.find((m) => m.role.includes("CEO"));
  const otherMembers = TEAM_MEMBERS.filter((m) => !m.role.includes("CEO"));

  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#2D1B2E] via-[#452c46] to-[#8C4B58] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#E8A86C]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#E8A86C] text-sm font-semibold tracking-wider uppercase mb-6">
              Our Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Passionate Team Behind{" "}
              <span className="text-[#E8A86C]">Wintouch</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated educators, administrators, and mentors who work
              tirelessly to create an exceptional learning environment for our
              students.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Featured Section */}
      {ceo && (
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#8C4B58]/20 to-[#E8A86C]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#2D1B2E]/20">
                    <Image
                      src={ceo.image}
                      alt={ceo.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/80 via-transparent to-transparent" />

                    {/* Name Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                        <p className="text-[#E8A86C] font-semibold text-sm mb-1">
                          {ceo.department}
                        </p>
                        <h3 className="text-2xl font-bold text-white">
                          {ceo.name}
                        </h3>
                        <p className="text-white/80">{ceo.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#E8A86C]/30 rounded-3xl -z-10" />
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-4 py-2 bg-[#E8A86C]/10 rounded-full text-[#E8A86C] text-sm font-semibold tracking-wider uppercase mb-4">
                      Founder & Visionary
                    </span>
                    <h2 className="text-4xl font-bold text-[#2D1B2E] mb-4">
                      A Message from Our{" "}
                      <span className="text-[#8C4B58]">Founder</span>
                    </h2>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#E8A86C]/20" />
                    <blockquote className="text-lg text-[#2D1B2E]/70 leading-relaxed pl-8 border-l-4 border-[#E8A86C]">
                      &quot;Every girl deserves an education that honors both
                      her dreams and her values. At Wintouch Academy, we
                      don&apos;t just prepare students for exams—we prepare them
                      for life. Our mission is to nurture confident, capable,
                      and compassionate women who will become the healthcare
                      leaders of tomorrow.&quot;
                    </blockquote>
                  </div>

                  <p className="text-[#2D1B2E]/60 leading-relaxed">{ceo.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-[#2D1B2E] rounded-full flex items-center justify-center hover:bg-[#8C4B58] transition-colors group">
                      <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="w-12 h-12 bg-[#2D1B2E] rounded-full flex items-center justify-center hover:bg-[#8C4B58] transition-colors group">
                      <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Team Members Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#f8f4eb]">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D1B2E] mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-[#2D1B2E]/60 max-w-2xl mx-auto">
              Each member brings unique expertise and unwavering dedication to
              our students&apos; success.
            </p>
          </div>

          {/* Team Grid - All 9 other members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherMembers.map((member, index) => (
              <div
                key={member.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#2D1B2E]/5 hover:shadow-2xl hover:shadow-[#8C4B58]/15 transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E] via-transparent to-transparent opacity-70" />

                    {/* Department Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#E8A86C]/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                        {member.department}
                      </span>
                    </div>

                    {/* Hover Social */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                        <Mail className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#2D1B2E] mb-1 group-hover:text-[#8C4B58] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#E8A86C] font-semibold text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-[#2D1B2E]/60 text-sm leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8C4B58] via-[#E8A86C] to-[#8C4B58] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-[#2D1B2E] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8C4B58]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8A86C]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for passionate educators who share our
            vision of empowering girls through quality education.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E8A86C] text-[#2D1B2E] rounded-full font-semibold hover:bg-white transition-colors duration-300">
            <span>View Career Opportunities</span>
            <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
