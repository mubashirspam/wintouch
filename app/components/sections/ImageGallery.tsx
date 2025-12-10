"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/app/components/ui";
import { GALLERY_IMAGES } from "@/app/data/constants";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF0] via-[#f5ebe0] to-[#FFFBF0]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#E8A86C]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading subtitle="A Glimpse Inside" title="Campus Gallery" />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${
                img.colSpan === 2 ? "md:col-span-2" : ""
              } ${img.rowSpan === 2 ? "md:row-span-2" : ""}`}
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>

              {/* Label */}
              {img.label && (
                <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-lg">{img.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <span className="text-white text-2xl">‹</span>
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <span className="text-white text-2xl">›</span>
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

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-bold text-lg">
              {GALLERY_IMAGES[selectedImage].label ||
                GALLERY_IMAGES[selectedImage].alt}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {selectedImage + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
