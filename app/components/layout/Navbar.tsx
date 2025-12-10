"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui";
import { NAV_LINKS } from "@/app/data/constants";

interface NavbarProps {
  activePage: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFBF0] backdrop-blur-xl shadow-lg py-3"
          : "bg-[#FFFBF0] border-b border-[#E8A86C] py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNav("home")}
          aria-label="Wintouch Academy home"
        >
          <Image
            src="/logo.svg"
            alt="Wintouch Academy logo"
            width={200}
            height={50}
            priority
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-sm font-semibold transition-colors hover:text-[#8C4B58] ${
                activePage === link.id ? "text-[#8C4B58]" : "text-[#2D1B2E]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="primary"
            className="py-2 px-6 text-sm"
            onClick={() => handleNav("admissions")}
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2D1B2E]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-xl shadow-xl shadow-[#2D1B2E]/10 border-t border-white/50 p-6 flex flex-col gap-4 animate-fade-in-up">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-left text-lg font-medium py-2 border-b border-gray-50 ${
                activePage === link.id ? "text-[#8C4B58]" : "text-[#2D1B2E]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            className="w-full mt-2"
            onClick={() => handleNav("admissions")}
          >
            Apply Now
          </Button>
        </div>
      )}
    </nav>
  );
}
