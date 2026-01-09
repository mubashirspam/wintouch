"use client";

import { useState, useEffect, useRef } from "react";
import {
  User,
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
  BookOpen,
} from "lucide-react";

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

const KARNATAKA_DISTRICTS = ["Bangalore", "Mysore", "Hubballi", "Mangalore"];

const INDIAN_STATES = ["Kerala", "Karnataka"];

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
  courseType: string;
  name: string;
  school: string;
  contactNo: string;
  whatsappNo: string;
  place: string;
  state: string;
  district: string;
  stream?: string;
}

interface FormErrors {
  courseType?: string;
  name?: string;
  school?: string;
  contactNo?: string;
  whatsappNo?: string;
  place?: string;
  state?: string;
  district?: string;
  stream?: string;
}

interface AdmissionFormProps {
  onSuccess?: () => void;
  variant?: "embedded" | "standalone";
}

export default function AdmissionForm({
  onSuccess,
  variant = "embedded",
}: AdmissionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    courseType: "",
    name: "",
    school: "",
    contactNo: "",
    whatsappNo: "",
    place: "",
    state: "",
    district: "",
    stream: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Student name is required";
    }

    if (!formData.school.trim()) {
      newErrors.school = "School name is required";
    }

    if (!formData.contactNo) {
      newErrors.contactNo = "Contact number is required";
    } else if (!isValidPhone(formData.contactNo)) {
      newErrors.contactNo = "Please enter a valid 10-digit phone number";
    }

    if (!formData.whatsappNo) {
      newErrors.whatsappNo = "WhatsApp number is required";
    } else if (!isValidPhone(formData.whatsappNo)) {
      newErrors.whatsappNo = "Please enter a valid 10-digit phone number";
    }

    if (!formData.place.trim()) {
      newErrors.place = "Place is required";
    }

    if (!formData.courseType) {
      newErrors.courseType = "Please select a course";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state";
    }

    if (!formData.district) {
      newErrors.district = "Please select your district";
    }

    if (
      formData.courseType === "admission_repeaters_course" &&
      !formData.stream
    ) {
      newErrors.stream = "Please select your stream";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload: Record<string, string> = {
        type: formData.courseType,
        name: formData.name,
        school: formData.school,
        contactNo: formData.contactNo,
        whatsappNo: formData.whatsappNo,
        place: formData.place,
        district: formData.district,
      };

      if (
        formData.courseType === "admission_repeaters_course" &&
        formData.stream
      ) {
        payload.stream = formData.stream;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/leads/admissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          courseType: "",
          name: "",
          school: "",
          contactNo: "",
          whatsappNo: "",
          place: "",
          state: "",
          district: "",
          stream: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "courseType" && value !== "admission_repeaters_course"
        ? { stream: "" }
        : {}),
      ...(name === "state" ? { district: "" } : {}),
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyWhatsapp = () => {
    if (formData.contactNo) {
      setFormData((prev) => ({
        ...prev,
        whatsappNo: prev.contactNo,
      }));
    }
  };

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
        {isEmbedded && (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Admission Registration
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              Choose your course and complete the admission process
            </p>
          </div>
        )}

        <div
          className={`max-w-2xl mx-auto ${
            isEmbedded
              ? "bg-[#FFFBF0] rounded-2xl p-6 md:p-8 shadow-2xl"
              : "p-2"
          }`}
        >
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
                    We&apos;ll contact you soon with admission details.
                  </p>
                </div>
              </div>
            </div>
          )}

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
            {/* Course Type */}
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

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <User className="w-4 h-4 text-[#8C4B58]" />
                Student Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter student's full name"
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

            {formData.courseType === "admission_repeaters_course" && (
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

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                <School className="w-4 h-4 text-[#8C4B58]" />
                Current School *
              </label>
              <div className="relative">
                <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="Enter your school name"
                  autoComplete="organization"
                  className={`${inputBaseClass} ${
                    errors.school ? errorInputClass : normalInputClass
                  }`}
                />
              </div>
              {errors.school && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.school}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <Phone className="w-4 h-4 text-[#8C4B58]" />
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="10-digit phone"
                    autoComplete="tel"
                    maxLength={10}
                    className={`${inputBaseClass} ${
                      errors.contactNo ? errorInputClass : normalInputClass
                    }`}
                  />
                </div>
                {errors.contactNo && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.contactNo}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center justify-between text-sm font-semibold text-[#2D1B2E]">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#8C4B58]" />
                    WhatsApp *
                  </span>
                  {formData.contactNo && (
                    <button
                      type="button"
                      onClick={handleCopyWhatsapp}
                      className="text-xs text-[#8C4B58] hover:text-[#E8A86C] transition-colors"
                    >
                      Same as contact
                    </button>
                  )}
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="tel"
                    name="whatsappNo"
                    value={formData.whatsappNo}
                    onChange={handleChange}
                    placeholder="WhatsApp number"
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
            </div>

            <div className="grid md:grid-cols-3 gap-4">
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

              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <MapPin className="w-4 h-4 text-[#8C4B58]" />
                  State *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`${inputBaseClass} appearance-none cursor-pointer ${
                      errors.state ? errorInputClass : normalInputClass
                    }`}
                  >
                    <option value="">Select state</option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
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
                {errors.state && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.state}
                  </p>
                )}
              </div>

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
                    {(formData.state === "Karnataka"
                      ? KARNATAKA_DISTRICTS
                      : KERALA_DISTRICTS
                    ).map((district) => (
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
                  Register for Admission
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-500 mt-3">
              Your information is secure and will only be used for admission
              registration.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
