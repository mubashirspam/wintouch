"use client";

import { useState, useEffect, useRef } from "react";
import {
  User,
  GraduationCap,
  School,
  Phone,
  MessageCircle,
  MapPin,
  Map,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Award,
  Copy,
  BookOpen,
} from "lucide-react";

// Kerala Districts
const KERALA_DISTRICTS = [
  "Kasaragod",
  "Kannur",
  "Wayanad",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Thrissur",
  "Ernakulam",
  "Idukki",
  "Kottayam",
  "Alappuzha",
  "Pathanamthitta",
  "Kollam",
  "Thiruvananthapuram",
];

const COURSE_OPTIONS = [
  { value: "repeater", label: "Repeaters Course (For Students in Class 12)" },
  {
    value: "integrated",
    label: "Integrated Plus One & Two (For Students in Class 10)",
  },
];

const STREAM_OPTIONS = [
  {
    value: "bio-maths",
    label: "Bio Maths (PCMB - Physics, Chemistry, Biology, Maths)",
  },
  {
    value: "computer-science",
    label: "Computer Science (PCMC - Physics, Chemistry, Maths, Computer)",
  },
  { value: "commerce", label: "Commerce" },
  { value: "humanities", label: "Humanities" },
];

interface FormData {
  studentName: string;
  courseType: string;
  stream?: string;
  currentSchool: string;
  contactNumber: string;
  whatsappNumber: string;
  place: string;
  district: string;
}

interface FormErrors {
  studentName?: string;
  courseType?: string;
  stream?: string;
  currentSchool?: string;
  contactNumber?: string;
  whatsappNumber?: string;
  place?: string;
  district?: string;
}

interface ScholarshipFormProps {
  onSuccess?: () => void;
  variant?: "embedded" | "modal";
}

export default function ScholarshipForm({
  onSuccess,
  variant = "embedded",
}: ScholarshipFormProps) {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    courseType: "",
    stream: "",
    currentSchool: "",
    contactNumber: "",
    whatsappNumber: "",
    place: "",
    district: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copyWhatsapp, setCopyWhatsapp] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Auto-fill WhatsApp from Contact Number
  const handleCopyWhatsapp = () => {
    if (formData.contactNumber) {
      setFormData((prev) => ({
        ...prev,
        whatsappNumber: prev.contactNumber,
      }));
      setCopyWhatsapp(true);
      setTimeout(() => setCopyWhatsapp(false), 2000);
    }
  };

  // Validate phone number
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    }

    if (!formData.courseType) {
      newErrors.courseType = "Please select your course";
    }

    if (formData.courseType === "repeater" && !formData.stream) {
      newErrors.stream = "Please select your stream";
    }

    if (!formData.currentSchool.trim()) {
      newErrors.currentSchool = "School name is required";
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!isValidPhone(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.whatsappNumber) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!isValidPhone(formData.whatsappNumber)) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.place.trim()) {
      newErrors.place = "Place is required";
    }

    if (!formData.district) {
      newErrors.district = "Please select your district";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/scholarship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.studentName,
          course: formData.courseType,
          stream: formData.stream,
          school: formData.currentSchool,
          phone: formData.contactNumber,
          whatsapp: formData.whatsappNumber,
          place: formData.place,
          district: formData.district,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          studentName: "",
          courseType: "",
          stream: "",
          currentSchool: "",
          contactNumber: "",
          whatsappNumber: "",
          place: "",
          district: "",
        });
        onSuccess?.();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset stream if course type changes
      ...(name === "courseType" && value !== "repeater" ? { stream: "" } : {}),
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Reset form after success message
  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const inputBaseClass =
    "w-full px-4 py-2.5 pl-11 bg-white/80 backdrop-blur-sm border-2 rounded-xl text-[#2D1B2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8A86C] focus:border-transparent transition-all duration-300 text-sm";
  const errorInputClass = "border-red-400 bg-red-50/50";
  const normalInputClass = "border-[#E8A86C]/30 hover:border-[#E8A86C]/50";

  const isEmbedded = variant === "embedded";

  return (
    <section
      className={`relative overflow-hidden ${
        isEmbedded
          ? "py-16 bg-gradient-to-br from-[#2D1B2E] via-[#452c46] to-[#8C4B58]"
          : ""
      }`}
    >
      {/* Background decorations for embedded version */}
      {isEmbedded && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8A86C]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8C4B58]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </>
      )}

      <div
        className={`relative z-10 ${
          isEmbedded ? "container mx-auto px-4" : ""
        }`}
      >
        {/* Header for embedded version */}
        {isEmbedded && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#E8A86C] text-[#2D1B2E] rounded-full text-sm font-bold mb-4">
              <Award className="w-4 h-4" />
              NEET Scholarship Exam 2025-26
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Register for Scholarship Exam
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              Win up to ₹50 Lakhs in scholarships!
            </p>
          </div>
        )}

        {/* Form Card */}
        <div
          className={`max-w-2xl mx-auto ${
            isEmbedded
              ? "bg-[#FFFBF0] rounded-2xl p-6 md:p-8 shadow-2xl"
              : "p-2"
          }`}
        >
          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800">
                    Registration Successful! 🎉
                  </h3>
                  <p className="text-green-600 text-sm">
                    We&apos;ll contact you soon with exam details.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-full">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-red-800">
                    Registration Failed
                  </h3>
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Student Name */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <User className="w-4 h-4 text-[#8C4B58]" />
                Student Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student's full name"
                  autoComplete="name"
                  className={`${inputBaseClass} ${
                    errors.studentName ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.studentName && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.studentName}
                </p>
              )}
            </div>

            {/* Course Type */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <GraduationCap className="w-4 h-4 text-[#8C4B58]" />
                Choose Course *
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleChange}
                  className={`${inputBaseClass} appearance-none cursor-pointer ${
                    errors.courseType ? errorInputClass : normalInputClass
                  }`}
                >
                  <option value="">Select your course</option>
                  {COURSE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[#8C4B58]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.courseType && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.courseType}
                </p>
              )}
            </div>

            {/* Stream (only for Repeater) */}
            {formData.courseType === "repeater" && (
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <BookOpen className="w-4 h-4 text-[#8C4B58]" />
                  Select Stream *
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className={`${inputBaseClass} appearance-none cursor-pointer ${
                      errors.stream ? errorInputClass : normalInputClass
                    }`}
                  >
                    <option value="">Select your stream</option>
                    {STREAM_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#8C4B58]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.stream && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.stream}
                  </p>
                )}
              </div>
            )}

            {/* Current School */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <School className="w-4 h-4 text-[#8C4B58]" />
                Current School *
              </label>
              <div className="relative">
                <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="text"
                  name="currentSchool"
                  value={formData.currentSchool}
                  onChange={handleChange}
                  placeholder="Enter your school name"
                  autoComplete="organization"
                  className={`${inputBaseClass} ${
                    errors.currentSchool ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.currentSchool && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.currentSchool}
                </p>
              )}
            </div>

            {/* Contact & WhatsApp - Side by Side */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Contact Number */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <Phone className="w-4 h-4 text-[#8C4B58]" />
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="10-digit phone"
                    autoComplete="tel"
                    maxLength={10}
                    className={`${inputBaseClass} ${
                      errors.contactNumber ? errorInputClass : normalInputClass
                    }`}
                  />
                </div>
                {errors.contactNumber && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.contactNumber}
                  </p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-1.5">
                <label className="flex items-center justify-between text-sm font-semibold text-[#2D1B2E]">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#8C4B58]" />
                    WhatsApp *
                  </span>
                  {formData.contactNumber && (
                    <button
                      type="button"
                      onClick={handleCopyWhatsapp}
                      className="flex items-center gap-1 text-xs text-[#8C4B58] hover:text-[#E8A86C] transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                      {copyWhatsapp ? "Copied!" : "Same as contact"}
                    </button>
                  )}
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="WhatsApp number"
                    autoComplete="tel"
                    maxLength={10}
                    className={`${inputBaseClass} ${
                      errors.whatsappNumber ? errorInputClass : normalInputClass
                    }`}
                  />
                </div>
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.whatsappNumber}
                  </p>
                )}
              </div>
            </div>

            {/* Place & District - Side by Side */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Place */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <MapPin className="w-4 h-4 text-[#8C4B58]" />
                  Place *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder="Enter your place"
                    autoComplete="address-level2"
                    className={`${inputBaseClass} ${
                      errors.place ? errorInputClass : normalInputClass
                    }`}
                  />
                </div>
                {errors.place && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.place}
                  </p>
                )}
              </div>

              {/* District */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <Map className="w-4 h-4 text-[#8C4B58]" />
                  District *
                </label>
                <div className="relative">
                  <Map className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={`${inputBaseClass} appearance-none cursor-pointer ${
                      errors.district ? errorInputClass : normalInputClass
                    }`}
                  >
                    <option value="">Select district</option>
                    {KERALA_DISTRICTS.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#8C4B58]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.district && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.district}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-5 py-3.5 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Register for Scholarship Exam
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-center text-xs text-gray-500 mt-3">
              Your information is secure and will only be used for scholarship
              exam registration.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
