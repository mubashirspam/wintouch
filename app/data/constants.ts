import { ReactNode } from "react";
import {
  BookOpen,
  Users,
  Trophy,
  ShieldCheck,
  Heart,
  // Unique Features Icons
  Flame,
  ShieldHalf,
  Moon,
} from "lucide-react";
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
  icon: ReactNode;
  gradient: string;
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

// WhatsApp Link
export const WHATSAPP_LINK =
  "https://wa.me/919330500400?text=Hi%2C%20I%20am%20interested%20in%20Wintouch%20Academy";

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
    duration: "1 Year",
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
    icon: React.createElement(Flame, { className: "w-10 h-10" }),
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Safe Playground",
    desc: "Expansive, private sports grounds for badminton, basketball, and athletics.",
    icon: React.createElement(ShieldHalf, { className: "w-10 h-10" }),
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Islamic Life",
    desc: "Daily prayers, Quran study circles, and a supportive moral environment.",
    icon: React.createElement(Moon, { className: "w-10 h-10" }),
    gradient: "from-violet-500 to-purple-600",
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
    question: "ആർക്കൊക്കെ അപേക്ഷിക്കാം?",
    answer:
      "പത്താം ക്ലാസ്സിൽ പഠിക്കുന്ന പെൺകുട്ടികൾക്ക് Plus One Integrated Batch-ലും, Plus Two Science പഠിക്കുന്ന വിദ്യാർഥിനികൾക്ക് Repeaters Batch-ലും അപേക്ഷിക്കാം.",
  },
  {
    question: "WET (Wintouch Excellency Test) എന്താണ്?",
    answer:
      "പഠനത്തിൽ മികവ് പുലർത്തുന്ന വിദ്യാർഥിനികളെ കണ്ടെത്താൻ വിൻടച്ച് അക്കാദമി ഏർപ്പെടുത്തിയ ഓൺലൈൻ പരീക്ഷയാണ് WET. വീട്ടിലിരുന്നും എഴുതാവുന്നതാണ്.",
  },
  {
    question: "സ്കോളർഷിപ് എങ്ങനെ ലഭിക്കും?",
    answer:
      "WET-ൽ 80%+ നേടുന്ന 5 വിദ്യാർഥിനികൾക്ക് പഠനവും താമസവും സൗജന്യം. 70%+ നേടുന്ന 10 വിദ്യാർഥിനികൾക്ക് പഠനം സൗജന്യം.",
  },
  {
    question: "ക്യാമ്പസിന്റെ പ്രത്യേകതകൾ എന്തൊക്കെ?",
    answer:
      "AC ക്ലാസ്സ്‌റൂം & ഹോസ്റ്റൽ, 10 വർഷത്തെ പരിചയമുള്ള അദ്ധ്യാപകർ, ഗുണമേന്മയുള്ള ഭക്ഷണം, 24/7 സെക്യൂരിറ്റി, ഇസ്ലാമിക മൂല്യങ്ങളിൽ പരിശീലനം.",
  },
  {
    question: "Parents-ന് visit ചെയ്യാൻ കഴിയുമോ?",
    answer:
      "അതെ, നിശ്ചിത ദിവസങ്ങളിൽ parents-ന് visit ചെയ്യാം. Student progress-ന്റെ regular updates-ും parent portal വഴി ലഭിക്കും.",
  },
  {
    question: "രാത്രിയിലെ safety arrangements എന്തൊക്കെ?",
    answer:
      "24/7 female security staff, CCTV surveillance, biometric access, dedicated wardens എന്നിവ വഴി പൂർണ്ണ സുരക്ഷ ഉറപ്പാക്കുന്നു.",
  },
];

// Contact Information
export const CONTACT_INFO = {
  phone: "9330 500 400",
  phoneAlt: "7306 342 571",
  email: "wintouchacademy@gmail.com",
  admissionEmail: "wintouchacademy@gmail.com",
  address: "Wintouch Palm Meadows, Manya, Kasaragod, Kerala - 671321",
  campus: "Wintouch Palm Meadows, Manya, Kasaragod",
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

// Team Members Interface
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  isFeatured?: boolean;
}

// Team Members Data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Abdul Latheef Uppala",
    role: "Chairman",
    department: "Leadership",
    image: "/team/member-1.jpg",
    bio: "Visionary leader guiding Wintouch Academy's mission to provide world-class education rooted in Islamic values.",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Usthad Khaleel Hudawi",
    role: "Executive Director",
    department: "Leadership",
    image: "/team/member-2.jpg",
    bio: "Strategic leader overseeing the academy's operations and ensuring excellence in all aspects of student development.",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Dr Basim Gazali",
    role: "Academic Director",
    department: "Academics",
    image: "/team/member-3.jpg",
    bio: "Expert in NEET preparation and academic excellence, leading the curriculum design and teaching methodology.",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Mohamed Rashid",
    role: "CEO",
    department: "Leadership",
    image: "/team/member-4.jpg",
    bio: "Driving operational excellence and ensuring the highest standards of education and student care.",
    isFeatured: true,
  },
];
