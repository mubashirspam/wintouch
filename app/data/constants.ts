import { ReactNode } from "react";
import { BookOpen, Users, Trophy, ShieldCheck, Heart } from "lucide-react";
import React from "react";

// Types
export interface Program {
  title: string;
  description: string;
  features: string[];
  duration: string;
  icon: ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface UniqueFeature {
  title: string;
  desc: string;
  img: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
  colSpan?: number;
  rowSpan?: number;
}

// Navigation
export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "life", label: "Campus Life" },
  { id: "admissions", label: "Admissions" },
];

// Programs Data
export const PROGRAMS: Program[] = [
  {
    title: "NEET Coaching",
    description:
      "Intensive preparation for medical aspirants with a focus on conceptual clarity and rigorous practice.",
    features: [
      "Daily Mock Tests",
      "AI-Driven Performance Analysis",
      "Expert Faculty from Kota/Kerala",
      "Doubt Clearing Sessions",
    ],
    duration: "1-2 Years",
    icon: React.createElement(Heart, { className: "w-6 h-6 text-white" }),
  },
  {
    title: "Integrated +1 / +2",
    description:
      "A seamless blend of Higher Secondary curriculum and competitive exam preparation under one roof.",
    features: [
      "Science Stream (Bio-Math/Bio-Psych)",
      "Board Exam Focus",
      "Integrated Entrance Coaching",
      "Holistic Development",
    ],
    duration: "2 Years",
    icon: React.createElement(BookOpen, { className: "w-6 h-6 text-white" }),
  },
];

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fathima R.",
    role: "MBBS Student, GMC Kozhikode",
    quote:
      "The environment at Wintouch is unmatched. The blend of spiritual values and academic rigor helped me stay focused and calm during my NEET preparation. I scored 650+ in NEET!",
    image: "/0728.JPG",
  },
  {
    name: "Ayesha K.",
    role: "Parent of 2024 Batch Student",
    quote:
      "Safety was our number one concern. Seeing the secure, girl-only campus with dedicated female wardens gave us total peace of mind. My daughter thrived here.",
    image: "/0716.JPG",
  },
  {
    name: "Mariam S.",
    role: "NEET 2024 Qualifier",
    quote:
      "The integrated program allowed me to balance my board exams and NEET prep perfectly. The teachers here genuinely care about each student's success.",
    image: "/0367.JPG",
  },
  {
    name: "Zainab H.",
    role: "Current Plus Two Student",
    quote:
      "Living on campus feels like being part of a big family. The Islamic environment helps me stay grounded while pursuing my medical dreams.",
    image: "/0294.JPG",
  },
];

// Stats Data
export const STATS: Stat[] = [
  { label: "Practice Qs", value: "10k+", icon: BookOpen },
  { label: "Teacher Ratio", value: "1:15", icon: Users },
  { label: "Success Rate", value: "98%", icon: Trophy },
  { label: "Security", value: "24/7", icon: ShieldCheck },
];

// Unique Features Data
export const UNIQUE_FEATURES: UniqueFeature[] = [
  {
    title: "Horse Training",
    desc: "Expert-led equestrian training to build core strength, balance, and confidence.",
    img: "/01196.JPG",
    icon: "🐎",
  },
  {
    title: "Safe Playground",
    desc: "Expansive, private sports grounds for badminton, basketball, and athletics.",
    img: "/01133.JPG",
    icon: "🏀",
  },
  {
    title: "Islamic Life",
    desc: "Daily prayers, Quran study circles, and a supportive moral environment.",
    img: "/0406.JPG",
    icon: "☪️",
  },
];

// Gallery Images
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/01133.JPG",
    alt: "Campus Life",
    label: "Campus Life",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "/0294.JPG",
    alt: "Student Activities",
    label: "Student Activities",
  },
  {
    src: "/0367.JPG",
    alt: "Learning Environment",
    label: "Learning Environment",
  },
  {
    src: "/0406.JPG",
    alt: "Campus Grounds",
    label: "Beautiful Campus",
    colSpan: 2,
  },
  {
    src: "/0716.JPG",
    alt: "Academy Life",
    label: "Academy Life",
  },
  {
    src: "/0728.JPG",
    alt: "Student Community",
    label: "Student Community",
  },
  {
    src: "/01196.JPG",
    alt: "Campus Events",
    label: "Campus Events",
    colSpan: 2,
  },
];

// FAQ Data
export const FAQ_QUESTIONS = [
  {
    question: "What is the fee structure for NEET repeaters?",
    answer:
      "Our NEET repeater program is competitively priced with flexible payment options. Contact our admissions team for detailed fee breakdown.",
  },
  {
    question: "Are parents allowed to visit on weekends?",
    answer:
      "Yes, parents can visit on designated weekends. We also have a parent portal for regular updates on student progress.",
  },
  {
    question: "Is the food menu customizable for specific diets?",
    answer:
      "Absolutely! Our halal-certified kitchen offers customizable meal plans to accommodate dietary preferences and restrictions.",
  },
  {
    question: "What safety measures are in place at night?",
    answer:
      "24/7 female security staff, CCTV surveillance, biometric access, and dedicated wardens ensure complete safety around the clock.",
  },
];

// Contact Information
export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "info@wintouch.edu",
  admissionEmail: "admissions@wintouch.edu",
  address: "123 Education City, Kerala, India 673004",
  campus: "Wintouch Campus, Kerala",
};

// Footer Links
export const FOOTER_PROGRAMS = [
  "NEET Repeater Batch",
  "Integrated Plus One",
  "Integrated Plus Two",
  "Foundation Course",
];

export const FOOTER_CAMPUS_LIFE = [
  "Hostel Facilities",
  "Equestrian Club",
  "Halal Dining",
  "Safety & Security",
];
