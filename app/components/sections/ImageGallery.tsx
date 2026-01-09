"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/app/data/constants";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % GALLERY_IMAGES.length
        : (selectedImage - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImage(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-[#FFFBF0] relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#E8A86C]/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8C4B58]/5 rounded-full blur-[150px] translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C4B58]/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#E8A86C] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#8C4B58] uppercase tracking-widest">
              A Glimpse Inside
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D1B2E] mb-4">
            Life at <span className="text-[#8C4B58]">Wintouch</span>
          </h2>
          <p className="text-[#2D1B2E]/60 max-w-2xl mx-auto text-lg">
            Experience our vibrant campus where learning meets living
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#E8A86C] rounded-full" />
            <div className="w-3 h-3 border-2 border-[#8C4B58] rounded-full" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#E8A86C] rounded-full" />
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                img.colSpan === 2 ? "md:col-span-2" : ""
              } ${img.rowSpan === 2 ? "md:row-span-2" : ""} ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/80 via-[#2D1B2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              {img.label && (
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm md:text-base">
                    {img.label}
                  </p>
                </div>
              )}

              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/50 transition-colors duration-300 rounded-tr-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#2D1B2E]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[selectedImage].src}
              alt={GALLERY_IMAGES[selectedImage].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Caption & Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-semibold text-lg mb-1">
              {GALLERY_IMAGES[selectedImage].label ||
                GALLERY_IMAGES[selectedImage].alt}
            </p>
            <div className="flex items-center justify-center gap-2">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === selectedImage
                      ? "bg-[#E8A86C] w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(i);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
