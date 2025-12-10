"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import {
  CONTACT_INFO,
  FOOTER_PROGRAMS,
  FOOTER_CAMPUS_LIFE,
} from "@/app/data/constants";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2D1B2E] text-white">
      {/* Contact & Map Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-white/60 mb-8">
                We&apos;d love to hear from you. Reach out anytime.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#8C4B58] transition-colors">
                    <Phone className="w-5 h-5 text-[#E8A86C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      Call Us
                    </p>
                    <p className="font-semibold group-hover:text-[#E8A86C] transition-colors">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#8C4B58] transition-colors">
                    <Mail className="w-5 h-5 text-[#E8A86C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      Email Us
                    </p>
                    <p className="font-semibold group-hover:text-[#E8A86C] transition-colors">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-[#E8A86C]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      Visit Us
                    </p>
                    <p className="font-semibold text-sm">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Clock className="w-5 h-5 text-[#E8A86C]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      Office Hours
                    </p>
                    <p className="font-semibold">Mon - Sat: 9AM - 5PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone
                    .replace(/\s+/g, "")
                    .replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  WhatsApp
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 bg-[#8C4B58] hover:bg-[#703842] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative h-[350px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.123456789012!2d75.7873!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE1JzMxLjciTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wintouch Academy Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Map Overlay */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  CONTACT_INFO.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 bg-[#2D1B2E]/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 hover:bg-[#2D1B2E] transition-colors group"
              >
                <div className="p-2 bg-[#8C4B58] rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white">Wintouch Academy</p>
                  <p className="text-sm text-white/60">{CONTACT_INFO.campus}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#E8A86C] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <button
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => onNavigate("home")}
              aria-label="Go to home"
            >
              <Image
                src="/logo_ic.svg"
                alt="Wintouch"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
              <span className="text-2xl font-bold tracking-tight">
                Wintouch
              </span>
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering young women through excellence in education, character
              building, and holistic development.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {FOOTER_PROGRAMS.map((program, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#E8A86C] cursor-pointer transition-colors"
                >
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Life */}
          <div>
            <h4 className="font-bold text-lg mb-6">Campus Life</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {FOOTER_CAMPUS_LIFE.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#E8A86C] cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#E8A86C] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-[#E8A86C] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("programs")}
                  className="hover:text-[#E8A86C] transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("admissions")}
                  className="hover:text-[#E8A86C] transition-colors"
                >
                  Admissions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Wintouch Academy. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
