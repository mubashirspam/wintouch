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
  Calendar,
  Mail,
  Briefcase,
  Target,
  Home,
  GraduationCap,
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
    value: "exam_twelfth",
    label: "Repeaters Course (For Students in Class 12)",
  },
  {
    value: "exam_tenth",
    label: "Integrated Plus One & Two (For Students in Class 10)",
  },
];

const BOARD_OPTIONS = [
  { value: "CBSE", label: "CBSE" },
  { value: "STATE", label: "State Board" },
  { value: "ICSE", label: "ICSE" },
  { value: "OTHERS", label: "Others" },
];

const STREAM_OPTIONS = [
  { value: "Science", label: "Science (Biology)" },
  {
    value: "Bio-Maths",
    label: "Bio Maths (PCMB - Physics, Chemistry, Biology, Maths)",
  },
  {
    value: "Computer-Science",
    label: "Computer Science (PCMC - Physics, Chemistry, Maths, Computer)",
  },
  { value: "Commerce", label: "Commerce" },
  { value: "Humanities", label: "Humanities" },
];

const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

interface FormData {
  courseType: string;
  name: string;
  dob: string;
  contactNo: string;
  whatsappNo: string;
  email: string;
  parentName: string;
  parentOccupation: string;
  school: string;
  district: string;
  state: string;
  board: string;
  ambition: string;
  stream?: string;
  interestedInNeetCoaching?: "yes" | "no";
  interestedInStayingHostel?: "yes" | "no";
  attendNeetCoachingBefore?: "yes" | "no";
}

interface FormErrors {
  [key: string]: string | undefined;
}

interface ExamFormProps {
  onSuccess?: () => void;
  variant?: "embedded" | "standalone";
  defaultCourseType?: string;
}

export default function ExamForm({
  onSuccess,
  variant = "embedded",
  defaultCourseType = "",
}: ExamFormProps) {
  const [formData, setFormData] = useState<FormData>({
    courseType: defaultCourseType,
    name: "",
    dob: "",
    contactNo: "",
    whatsappNo: "",
    email: "",
    parentName: "",
    parentOccupation: "",
    school: "",
    district: "",
    state: "",
    board: "",
    ambition: "",
    stream: "",
    interestedInNeetCoaching: "no",
    interestedInStayingHostel: "no",
    attendNeetCoachingBefore: "no",
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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.courseType) {
      newErrors.courseType = "Please select your course";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Student name is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
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

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent name is required";
    }

    if (!formData.parentOccupation.trim()) {
      newErrors.parentOccupation = "Parent occupation is required";
    }

    if (!formData.school.trim()) {
      newErrors.school = "School name is required";
    }

    if (!formData.district) {
      newErrors.district = "Please select your district";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state";
    }

    if (!formData.board) {
      newErrors.board = "Please select your board";
    }

    if (!formData.ambition?.trim()) {
      newErrors.ambition = "Ambition is required";
    }

    if (formData.courseType === "exam_twelfth" && !formData.stream) {
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
        dob: formData.dob,
        contactNo: formData.contactNo,
        whatsappNo: formData.whatsappNo,
        email: formData.email,
        parentName: formData.parentName,
        parentOccupation: formData.parentOccupation,
        school: formData.school,
        district: formData.district,
        state: formData.state,
        board: formData.board,
        ambition: formData.ambition || "",
        interestedInNeetCoaching: formData.interestedInNeetCoaching || "no",
        interestedInStayingHostel: formData.interestedInStayingHostel || "no",
      };

      // Add stream and attendNeetCoachingBefore for exam_twelfth
      if (formData.courseType === "exam_twelfth") {
        payload.stream = formData.stream || "";
        payload.attendNeetCoachingBefore =
          formData.attendNeetCoachingBefore || "no";
      }

      const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT || "";
      const response = await fetch(`${baseUrl}/leads/exams`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");

        // Build WhatsApp message summary
        const courseLabel =
          COURSE_OPTIONS.find((c) => c.value === formData.courseType)?.label ||
          formData.courseType;
        const whatsappMessage = [
          `📋 *New Exam Registration*`,
          ``,
          `👤 *Student:* ${formData.name}`,
          `📅 *DOB:* ${formData.dob}`,
          `📞 *Contact:* ${formData.contactNo}`,
          `💬 *WhatsApp:* ${formData.whatsappNo}`,
          `📧 *Email:* ${formData.email}`,
          ``,
          `👨‍👩‍👧 *Parent:* ${formData.parentName} (${formData.parentOccupation})`,
          `🏫 *School:* ${formData.school}`,
          `📍 *Location:* ${formData.district}, ${formData.state}`,
          `📖 *Board:* ${formData.board}`,
          `🎓 *Course:* ${courseLabel}`,
          ...(formData.stream ? [`🔬 *Stream:* ${formData.stream}`] : []),
          `🎯 *Ambition:* ${formData.ambition}`,
          ``,
          `✅ NEET Coaching Interest: ${formData.interestedInNeetCoaching === "yes" ? "Yes" : "No"}`,
          `🏠 Hostel Interest: ${formData.interestedInStayingHostel === "yes" ? "Yes" : "No"}`,
          ...(formData.courseType === "exam_twelfth"
            ? [
                `📝 Attended NEET Before: ${formData.attendNeetCoachingBefore === "yes" ? "Yes" : "No"}`,
              ]
            : []),
        ].join("\n");

        const whatsappUrl = `https://wa.me/919330500400?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");

        setFormData({
          courseType: "",
          name: "",
          dob: "",
          contactNo: "",
          whatsappNo: "",
          email: "",
          parentName: "",
          parentOccupation: "",
          school: "",
          district: "",
          state: "",
          board: "",
          ambition: "",
          stream: "",
          interestedInNeetCoaching: "no",
          interestedInStayingHostel: "no",
          attendNeetCoachingBefore: "no",
        });
        onSuccess?.();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "courseType" && value !== "exam_twelfth"
        ? { stream: "", attendNeetCoachingBefore: undefined }
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
    <>
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
                NEET Scholarship Exam Registration
              </h2>
              <p className="text-white/70 text-base max-w-2xl mx-auto">
                Register for the NEET scholarship exam and win up to ₹50 Lakhs!
              </p>
            </div>
          )}

          <div
            className={`max-w-3xl mx-auto ${
              isEmbedded
                ? "bg-[#FFFBF0] rounded-2xl p-6 md:p-8 shadow-2xl"
                : "p-2"
            }`}
          >
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

              <div className="grid md:grid-cols-2 gap-4">
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
                    placeholder="Enter email address"
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

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <User className="w-4 h-4 text-[#8C4B58]" />
                    Parent Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent's name"
                      className={`${inputBaseClass} ${
                        errors.parentName ? errorInputClass : normalInputClass
                      }`}
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.parentName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <Briefcase className="w-4 h-4 text-[#8C4B58]" />
                    Parent Occupation *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                    <input
                      type="text"
                      name="parentOccupation"
                      value={formData.parentOccupation}
                      onChange={handleChange}
                      placeholder="Enter parent's occupation"
                      className={`${inputBaseClass} ${
                        errors.parentOccupation
                          ? errorInputClass
                          : normalInputClass
                      }`}
                    />
                  </div>
                  {errors.parentOccupation && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.parentOccupation}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                  <School className="w-4 h-4 text-[#8C4B58]" />
                  School Name *
                </label>
                <div className="relative">
                  <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Enter school name"
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

              <div className="grid md:grid-cols-3 gap-4">
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

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <BookOpen className="w-4 h-4 text-[#8C4B58]" />
                    Board *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                    <select
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      className={`${inputBaseClass} appearance-none cursor-pointer ${
                        errors.board ? errorInputClass : normalInputClass
                      }`}
                    >
                      <option value="">Select board</option>
                      {BOARD_OPTIONS.map((board) => (
                        <option key={board.value} value={board.value}>
                          {board.label}
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
                  {errors.board && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.board}
                    </p>
                  )}
                </div>
              </div>

              {formData.courseType === "exam_twelfth" && (
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <BookOpen className="w-4 h-4 text-[#8C4B58]" />
                    Stream *
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
                      <option value="">Select stream</option>
                      {STREAM_OPTIONS.map((stream) => (
                        <option key={stream.value} value={stream.value}>
                          {stream.label}
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
                  <Target className="w-4 h-4 text-[#8C4B58]" />
                  Ambition *
                </label>
                <div className="relative">
                  <Target className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                  <input
                    type="text"
                    name="ambition"
                    value={formData.ambition}
                    onChange={handleChange}
                    placeholder="What do you want to become?"
                    className={`${inputBaseClass} ${normalInputClass}`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <BookOpen className="w-4 h-4 text-[#8C4B58]" />
                    Interested in NEET Coaching? (Optional)
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                    <select
                      name="interestedInNeetCoaching"
                      value={formData.interestedInNeetCoaching || ""}
                      onChange={handleChange}
                      className={`${inputBaseClass} appearance-none cursor-pointer ${normalInputClass}`}
                    >
                      <option value="">Select option</option>
                      {YES_NO_OPTIONS.map((option) => (
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
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <Home className="w-4 h-4 text-[#8C4B58]" />
                    Interested in Staying Hostel? (Optional)
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                    <select
                      name="interestedInStayingHostel"
                      value={formData.interestedInStayingHostel || ""}
                      onChange={handleChange}
                      className={`${inputBaseClass} appearance-none cursor-pointer ${normalInputClass}`}
                    >
                      <option value="">Select option</option>
                      {YES_NO_OPTIONS.map((option) => (
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
                </div>
              </div>

              {formData.courseType === "exam_twelfth" && (
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#2D1B2E]">
                    <BookOpen className="w-4 h-4 text-[#8C4B58]" />
                    Attended NEET Coaching Before? (Optional)
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C4B58]" />
                    <select
                      name="attendNeetCoachingBefore"
                      value={formData.attendNeetCoachingBefore || ""}
                      onChange={handleChange}
                      className={`${inputBaseClass} appearance-none cursor-pointer ${normalInputClass}`}
                    >
                      <option value="">Select option</option>
                      {YES_NO_OPTIONS.map((option) => (
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
                </div>
              )}

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
                    Register for Exam
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-3">
                Your information is secure and will only be used for exam
                registration.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Toast Popup - outside section to avoid overflow-hidden clipping */}
      {submitStatus === "success" && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in-up">
          <div className="bg-white border border-green-200 rounded-xl shadow-2xl p-4 flex items-center gap-3 min-w-[280px]">
            <div className="p-1.5 bg-green-100 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-green-800 text-sm">
                Registration Successful!
              </p>
              <p className="text-green-600 text-xs">
                We&apos;ll contact you soon.
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
