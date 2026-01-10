"use client";

import { useEffect, useRef } from "react";
import { X, Award } from "lucide-react";
import ExamForm from "@/app/components/sections/ExamForm";

interface ScholarshipFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScholarshipFormModal({
  isOpen,
  onClose,
}: ScholarshipFormModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#2D1B2E]/80 backdrop-blur-sm" />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFBF0] rounded-3xl shadow-2xl animate-slide-in-up"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] p-6 rounded-t-3xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  Scholarship Registration
                </h2>
                <p className="text-white/80 text-sm">
                  NEET Scholarship Exam 2025-26
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <ExamForm variant="standalone" onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
