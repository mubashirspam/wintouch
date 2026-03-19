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
  MapPin,
  Briefcase,
  School,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const COURSE_OPTIONS = [
  { value: "repeaters", label: "Repeaters Course" },
  { value: "integrated_plus_one_plus_two", label: "Integrated Plus One & Two" },
  { value: "plustwo_lateral", label: "Plus Two Lateral" },
  { value: "regular_science", label: "Regular Science" },
];

const YES_NO_OPTIONS = [
  { value: "", label: "Select" },
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

interface FormData {
  type: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  dob: string;
  parentName: string;
  parentOccupation: string;
  school: string;
  district: string;
  state: string;
  board: string;
  place: string;
  ambition: string;
  studyingClass: string;
  stream: string;
  attendNeetCoachingBefore: string;
  interestedInNeetCoaching: string;
  interestedInStayingHostel: string;
}

interface FormErrors {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
}

const initialFormData: FormData = {
  type: "",
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  dob: "",
  parentName: "",
  parentOccupation: "",
  school: "",
  district: "",
  state: "",
  board: "",
  place: "",
  ambition: "",
  studyingClass: "",
  stream: "",
  attendNeetCoachingBefore: "",
  interestedInNeetCoaching: "",
  interestedInStayingHostel: "",
};

export default function InstantLeadPage() {
  const [formData, setFormData] = useState<FormData>({ ...initialFormData });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [validationMessage, setValidationMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const isValidPhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, [name]: numericValue }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.type) newErrors.type = "Please select a course";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const messages = Object.values(newErrors).filter(Boolean);
      setValidationMessage(messages.join(" | "));
      return false;
    }

    setValidationMessage("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload: Record<string, string> = {
        type: formData.type,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      const optionalFields: (keyof FormData)[] = [
        "whatsapp", "dob",
        "parentName", "parentOccupation", "school", "district",
        "state", "board", "place", "ambition", "studyingClass",
        "stream", "attendNeetCoachingBefore", "interestedInNeetCoaching",
        "interestedInStayingHostel",
      ];

      for (const field of optionalFields) {
        if (formData[field]) {
          payload[field] = formData[field];
        }
      }

      const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT || "";
      const response = await fetch(`${baseUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmittedData({ ...formData });
        setSubmitStatus("success");
        setFormData({ ...initialFormData });
      } else {
        let message = "Something went wrong. Please try again.";
        try {
          const data = await response.json();
          if (data.message) message = data.message;
        } catch {
          // response wasn't JSON
        }
        setSubmitStatus("error");
        setErrorMessage(message);
      }
    } catch (err) {
      console.error("Lead form submission error:", err);
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
      COURSE_OPTIONS.find((c) => c.value === submittedData.type)?.label ||
      submittedData.type;
    const message = [
      `*New Registration*`,
      ``,
      `*Name:* ${submittedData.name}`,
      `*Email:* ${submittedData.email}`,
      `*Phone:* ${submittedData.phone}`,
      `*Course:* ${courseLabel}`,
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

  const inputBase =
    "w-full pl-9 pr-3 py-2 bg-white border-2 rounded-lg text-[#2D1B2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8A86C] focus:border-transparent transition-all text-sm";
  const inputPlain =
    "w-full px-3 py-2 bg-white border-2 rounded-lg text-[#2D1B2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8A86C] focus:border-transparent transition-all text-sm";
  const errCls = "border-red-400 bg-red-50/50";
  const normCls = "border-[#E8A86C]/30 hover:border-[#E8A86C]/60";

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
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Connect on WhatsApp
              </button>
              <button
                onClick={handleOkay}
                className="w-full px-6 py-3 border-2 border-[#8C4B58]/30 text-[#8C4B58] font-bold rounded-xl hover:bg-[#8C4B58]/5 transition-colors"
              >
                Okay
              </button>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Need help?{" "}
            <a href="tel:+919330500400" className="text-[#8C4B58] font-semibold hover:underline">
              +91 9330 500 400
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-[#2D1B2E] mb-1">
            Quick Registration
          </h1>
          <p className="text-gray-500 text-sm">Fill in your details to get started</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-[#E8A86C]/20 p-5 md:p-7">
          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <p className="text-red-600 text-xs">{errorMessage}</p>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            {/* Course Type */}
            <div>
              <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                Choose Course *
              </label>
              <div className="relative">
                <BookOpen className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none cursor-pointer ${errors.type ? errCls : normCls}`}
                >
                  <option value="">Select your course</option>
                  {COURSE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-[#8C4B58]" />
                </div>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={`${inputBase} ${errors.name ? errCls : normCls}`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={`${inputBase} ${errors.email ? errCls : normCls}`}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleNumericInput}
                  placeholder="10-digit phone number"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className={`${inputBase} ${errors.phone ? errCls : normCls}`}
                />
              </div>
            </div>

            {/* WhatsApp & DOB */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  WhatsApp
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleNumericInput}
                    placeholder="WhatsApp number"
                    inputMode="numeric"
                    maxLength={10}
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
            </div>

            {/* Parent info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Parent Name
                </label>
                <div className="relative">
                  <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Parent's name"
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Parent Occupation
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="parentOccupation"
                    value={formData.parentOccupation}
                    onChange={handleChange}
                    placeholder="Occupation"
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
            </div>

            {/* School & Board */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  School
                </label>
                <div className="relative">
                  <School className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="School name"
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Board
                </label>
                <input
                  type="text"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  placeholder="e.g. CBSE, State"
                  className={`${inputPlain} ${normCls}`}
                />
              </div>
            </div>

            {/* Studying Class & Stream */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Studying Class
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="studyingClass"
                    value={formData.studyingClass}
                    onChange={handleChange}
                    placeholder="e.g. Class 10"
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Stream
                </label>
                <input
                  type="text"
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  placeholder="e.g. Science"
                  className={`${inputPlain} ${normCls}`}
                />
              </div>
            </div>

            {/* Place, District, State */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Place
                </label>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder="Place"
                    className={`${inputBase} ${normCls}`}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="District"
                  className={`${inputPlain} ${normCls}`}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className={`${inputPlain} ${normCls}`}
                />
              </div>
            </div>

            {/* Ambition */}
            <div>
              <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                Ambition
              </label>
              <input
                type="text"
                name="ambition"
                value={formData.ambition}
                onChange={handleChange}
                placeholder="e.g. Doctor, Engineer"
                className={`${inputPlain} ${normCls}`}
              />
            </div>

            {/* Yes/No questions */}
            <div className={`grid grid-cols-1 gap-3 ${formData.type === "repeaters" ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              {formData.type === "repeaters" && (
                <div>
                  <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                    Attended NEET Coaching?
                  </label>
                  <div className="relative">
                    <select
                      name="attendNeetCoachingBefore"
                      value={formData.attendNeetCoachingBefore}
                      onChange={handleChange}
                      className={`${inputPlain} appearance-none cursor-pointer ${normCls}`}
                    >
                      {YES_NO_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-[#8C4B58]" />
                    </div>
                  </div>
                </div>
              )}
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Interested in NEET?
                </label>
                <div className="relative">
                  <select
                    name="interestedInNeetCoaching"
                    value={formData.interestedInNeetCoaching}
                    onChange={handleChange}
                    className={`${inputPlain} appearance-none cursor-pointer ${normCls}`}
                  >
                    {YES_NO_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-[#8C4B58]" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2D1B2E] mb-1 block">
                  Interested in Hostel?
                </label>
                <div className="relative">
                  <select
                    name="interestedInStayingHostel"
                    value={formData.interestedInStayingHostel}
                    onChange={handleChange}
                    className={`${inputPlain} appearance-none cursor-pointer ${normCls}`}
                  >
                    {YES_NO_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-[#8C4B58]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8C4B58] to-[#E8A86C] text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2"
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

            {/* Validation errors below button */}
            {validationMessage && (
              <p className="text-red-500 text-xs flex items-center gap-1 justify-center mt-2">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {validationMessage}
              </p>
            )}
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Need help?{" "}
          <a href="tel:+919330500400" className="text-[#8C4B58] font-semibold hover:underline">
            +91 9330 500 400
          </a>
        </p>
      </div>
    </div>
  );
}
