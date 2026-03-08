"use client";

import { useState, useRef } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Send,
  AlertCircle,
  Loader2,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const COURSE_OPTIONS = [
  {
    value: "admission_repeaters_course",
    label: "Repeaters Course (For Students in Class 12)",
  },
  {
    value: "admission_integrated_plus_one_plus_two",
    label: "Integrated Plus One & Two (For Students in Class 10)",
  },
];

interface FormData {
  courseType: string;
  name: string;
  email: string;
  whatsappNo: string;
  dob: string;
}

interface FormErrors {
  courseType?: string;
  name?: string;
  email?: string;
  whatsappNo?: string;
  dob?: string;
}

export default function InstantLeadPage() {
  const [formData, setFormData] = useState<FormData>({
    courseType: "",
    name: "",
    email: "",
    whatsappNo: "",
    dob: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.courseType) {
      newErrors.courseType = "Please select a course";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.whatsappNo) {
      newErrors.whatsappNo = "WhatsApp number is required";
    } else if (!isValidPhone(formData.whatsappNo)) {
      newErrors.whatsappNo = "Please enter a valid 10-digit phone number";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload = {
        type: formData.courseType,
        name: formData.name,
        email: formData.email,
        school: '',
        contactNo: '',
        whatsappNo: formData.whatsappNo,
        place: '',
        district: '',
        ambition: '',
        stream: '',
        // dob: formData.dob,
      };

       const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT || "";
      const response = await fetch(`${baseUrl}/leads/admissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });


      const data = await response.json();

      if (response.ok) {
        setSubmittedData({ ...formData });
        setSubmitStatus("success");
        setFormData({
          courseType: "",
          name: "",
          email: "",
          whatsappNo: "",
          dob: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleWhatsAppConnect = () => {
    if (!submittedData) return;
    const courseLabel =
      COURSE_OPTIONS.find((c) => c.value === submittedData.courseType)?.label ||
      submittedData.courseType;
    const message = [
      `📋 *New Lead Registration*`,
      ``,
      `👤 *Name:* ${submittedData.name}`,
      `📧 *Email:* ${submittedData.email}`,
      `💬 *WhatsApp:* ${submittedData.whatsappNo}`,
      `📅 *DOB:* ${submittedData.dob}`,
      `🎓 *Course:* ${courseLabel}`,
    ].join("\n");
    window.open(
      `https://wa.me/919330500400?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleOkay = () => {
    setSubmitStatus("idle");
    setSubmittedData(null);
  };

  const inputBaseClass =
    "w-full px-4 py-3 pl-11 bg-white border-2 rounded-xl text-[#2D1B2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8A86C] focus:border-transparent transition-all duration-300 text-sm";
  const errorInputClass = "border-red-400 bg-red-50/50";
  const normalInputClass = "border-[#E8A86C]/30 hover:border-[#E8A86C]/60";

  if (submitStatus === "success" && submittedData) {
    return (
      <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-3xl shadow-xl border border-[#E8A86C]/30 p-8 text-center">
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-[#2D1B2E] mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              Hi <span className="font-semibold text-[#8C4B58]">{submittedData.name}</span>,
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Your details have been received. We&apos;ll get in touch with you soon.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConnect}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl transition-colors duration-200 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Connect on WhatsApp
              </button>
              <button
                onClick={handleOkay}
                className="w-full px-6 py-3.5 border-2 border-[#8C4B58]/30 text-[#8C4B58] font-bold rounded-xl hover:bg-[#8C4B58]/5 transition-colors duration-200"
              >
                Okay
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Need help?{" "}
            <a
              href="tel:+919330500400"
              className="text-[#8C4B58] font-semibold hover:underline"
            >
              +91 9330 500 400
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#2D1B2E] mb-2">
            Quick Registration
          </h1>
          <p className="text-gray-500 text-sm">Fill in your details to get started</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-[#E8A86C]/20 p-6 md:p-8">
          {submitStatus === "error" && (
            <div className="mb-5 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-full shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-red-800 text-sm">Registration Failed</h3>
                  <p className="text-red-600 text-xs">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Course */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <BookOpen className="w-4 h-4 text-[#8C4B58]" />
                Choose Course *
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
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

            {/* Name */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <User className="w-4 h-4 text-[#8C4B58]" />
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={`${inputBaseClass} ${
                    errors.name ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <Mail className="w-4 h-4 text-[#8C4B58]" />
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={`${inputBaseClass} ${
                    errors.email ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <Phone className="w-4 h-4 text-[#8C4B58]" />
                WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="tel"
                  name="whatsappNo"
                  value={formData.whatsappNo}
                  onChange={handleChange}
                  placeholder="10-digit WhatsApp number"
                  autoComplete="tel"
                  maxLength={10}
                  className={`${inputBaseClass} ${
                    errors.whatsappNo ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.whatsappNo && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.whatsappNo}
                </p>
              )}
            </div>

            {/* DOB */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <Calendar className="w-4 h-4 text-[#8C4B58]" />
                Date of Birth *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`${inputBaseClass} ${
                    errors.dob ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.dob && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.dob}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] text-white font-bold rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Need help?{" "}
          <a
            href="tel:+919330500400"
            className="text-[#8C4B58] font-semibold hover:underline"
          >
            +91 9330 500 400
          </a>
        </p>
      </div>
    </div>
  );
}
