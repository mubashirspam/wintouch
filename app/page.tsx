"use client";

import { useState, useEffect, FormEvent, ReactNode } from "react";
import {
  BookOpen,
  Users,
  Trophy,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Star,
  Heart,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

// --- DATA ---
const PROGRAMS = [
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
    icon: <Heart className="w-6 h-6 text-white" />,
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
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
];

const TESTIMONIALS = [
  {
    name: "Fathima R.",
    role: "MBBS Student",
    quote:
      "The environment at Wintouch is unmatched. The blend of spiritual values and academic rigor helped me stay focused and calm during my NEET preparation.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Fathima&gender=female",
  },
  {
    name: "Ayesha K.",
    role: "Parent",
    quote:
      "Safety was our number one concern. Seeing the secure, girl-only campus with dedicated female wardens gave us total peace of mind.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha&gender=female",
  },
];

const STATS = [
  { label: "Practice Qs", value: "10k+", icon: BookOpen },
  { label: "Teacher Ratio", value: "1:15", icon: Users },
  { label: "Success Rate", value: "98%", icon: Trophy },
  { label: "Security", value: "24/7", icon: ShieldCheck },
];

// --- UI COMPONENTS ---
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 shadow-sm disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary:
      "bg-[#8C4B58] text-white hover:bg-[#703842] shadow-lg hover:shadow-xl",
    secondary:
      "bg-white border-2 border-[#2D1B2E] text-[#2D1B2E] hover:bg-gray-50",
    accent: "bg-[#E8A86C] text-[#2D1B2E] hover:brightness-110",
    ghost: "text-[#8C4B58] hover:bg-[#8C4B58]/10 px-4",
    outline:
      "border-2 border-[#2D1B2E] text-[#2D1B2E] hover:bg-[#2D1B2E] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "center" | "left";
}

const SectionHeading = ({
  subtitle,
  title,
  align = "center",
}: SectionHeadingProps) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className="uppercase tracking-wider text-sm font-bold text-[#8C4B58] mb-2 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-[#2D1B2E] leading-tight">
      {title}
    </h2>
    <div
      className={`h-1.5 w-20 bg-[#E8A86C] rounded-full mt-4 ${
        align === "center" ? "mx-auto" : ""
      }`}
    />
  </div>
);

const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white rounded-2xl p-6 shadow-xl shadow-[#2D1B2E]/5 border border-[#2D1B2E]/5 hover:border-[#8C4B58]/30 transition-all duration-300 hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

// --- SECTIONS ---
const Hero = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FDFBF8]">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#E8A86C]/10 rounded-l-[200px] -z-10 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#8C4B58]/5 rounded-tr-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D1B2E]/5 rounded-full text-[#2D1B2E] font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-[#8C4B58] animate-pulse" />
            Admissions Open for 2025-26
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#2D1B2E]">
            Excellence in <br />
            <span className="text-[#8C4B58]">Education</span> & <br />
            <span className="text-[#E8A86C]">Values.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#2D1B2E]/70 max-w-lg leading-relaxed">
            A premier girls-only residential academy combining top-tier NEET
            coaching with Islamic values, horse training, and holistic wellness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => onNavigate("admissions")}>
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => onNavigate("programs")}>
              Explore Programs
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm font-semibold text-[#2D1B2E]/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" /> Safe Campus
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" /> Halal
              Certified
            </div>
          </div>
        </div>

        <div className="relative h-[600px] hidden lg:block">
          <div className="absolute inset-0 bg-[#2D1B2E] rounded-3xl rotate-3 opacity-10"></div>
          <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
                  <p className="font-bold text-lg">
                    &quot;Wintouch gave me the confidence to dream big.&quot;
                  </p>
                  <p className="text-sm opacity-80 mt-1">
                    - Outstanding Alumni
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-[#E8A86C] rounded-full flex items-center justify-center text-2xl">
              🐎
            </div>
            <div>
              <p className="font-bold text-[#2D1B2E]">Equestrian Club</p>
              <p className="text-xs text-gray-500">Unique Training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                alt="Classroom"
              />
            </div>
            <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555817129-2fa6b8190e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                alt="Horse Riding"
              />
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FDFBF8] rounded-full border border-[#E8A86C]/30" />
        </div>

        <div>
          <SectionHeading
            subtitle="Our Philosophy"
            title="Rooted in Faith, Ready for the Future"
            align="left"
          />
          <div className="space-y-6 text-lg text-[#2D1B2E]/80">
            <p>
              At Wintouch Academy, we recognize that true education transcends
              textbooks. Designed exclusively for girls, our campus is a
              sanctuary where academic excellence meets spiritual serenity.
            </p>
            <p>
              Our integrated +1/+2 and NEET programs are rigorous, yet our
              approach is nurturing. We weave Islamic cultural values into daily
              life—from halal dining to prayer facilities—ensuring students
              never have to compromise on their identity while chasing their
              ambitions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="border-l-4 border-[#8C4B58] pl-4">
                <h4 className="text-3xl font-bold text-[#2D1B2E]">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Programs = () => (
  <section className="py-24 bg-[#FDFBF8]">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Academic Excellence" title="Our Programs" />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {PROGRAMS.map((program, idx) => (
          <Card key={idx} className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity bg-[#2D1B2E] rounded-bl-3xl">
              {program.icon}
            </div>

            <div className="mb-6 inline-flex p-3 rounded-xl bg-[#2D1B2E] shadow-lg">
              {program.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
            <p className="text-gray-600 mb-6">{program.description}</p>

            <div className="space-y-3 mb-8">
              {program.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8A86C]" />
                  {feat}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
              <span className="text-sm font-bold text-[#8C4B58]">
                {program.duration}
              </span>
              <button className="text-sm font-bold underline decoration-[#E8A86C] underline-offset-4 hover:text-[#8C4B58]">
                View Syllabus
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const UniqueFeatures = () => (
  <section className="py-24 bg-[#2D1B2E] text-white relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: "radial-gradient(#E8A86C 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    ></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          More Than Just Academics
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          We build strong bodies and strong minds. Our unique campus facilities
          are designed to foster confidence and well-being.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Horse Training",
            desc: "Expert-led equestrian training to build core strength, balance, and confidence.",
            img: "https://images.unsplash.com/photo-1534008139366-9694a97475d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            icon: "🐎",
          },
          {
            title: "Safe Playground",
            desc: "Expansive, private sports grounds for badminton, basketball, and athletics.",
            img: "https://images.unsplash.com/photo-1563412739345-98319ba1906e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            icon: "🏀",
          },
          {
            title: "Islamic Life",
            desc: "Daily prayers, Quran study circles, and a supportive moral environment.",
            img: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            icon: "☪️",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E] via-[#2D1B2E]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Admissions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#FDFBF8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-[#2D1B2E] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8C4B58] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />

            <div>
              <h3 className="text-3xl font-bold mb-6">Admissions Open</h3>
              <p className="text-white/80 mb-8">
                Join the batch of 2025. Limited seats available for the
                residential program.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8A86C]" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E8A86C]" />
                  <span>admissions@wintouch.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#E8A86C]" />
                  <span>Wintouch Campus, Kerala</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">
                  Deadline
                </p>
                <p className="text-xl font-bold">August 30, 2025</p>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-10">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-[#2D1B2E]">
                  Application Received!
                </h4>
                <p className="text-gray-600">
                  Our admissions team will contact you shortly to schedule an
                  interview.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-2xl font-bold text-[#2D1B2E] mb-2">
                  Apply Now
                </h4>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Student Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-gray-50"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Parent Phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-gray-50"
                      placeholder="+91"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Course
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-gray-50">
                      <option>NEET Coaching</option>
                      <option>Integrated +1</option>
                      <option>Integrated +2</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8C4B58] focus:ring-1 focus:ring-[#8C4B58] outline-none transition-all bg-gray-50"
                    placeholder="student@email.com"
                  />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-500">
                    I consent to the processing of my personal data for
                    admission purposes and agree to the academy&apos;s privacy
                    policy.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (id: string) => void }) => (
  <footer className="bg-[#2D1B2E] text-white pt-20 pb-10 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div
            className="flex items-center gap-2 mb-6 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 bg-[#8C4B58] rounded-lg flex items-center justify-center transform rotate-3">
              <span className="font-bold text-xl">W</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Wintouch</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Empowering young women through excellence in education, character
            building, and holistic development.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Programs</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="hover:text-[#E8A86C] cursor-pointer">
              NEET Repeater Batch
            </li>
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Integrated Plus One
            </li>
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Integrated Plus Two
            </li>
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Foundation Course
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Campus Life</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Hostel Facilities
            </li>
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Equestrian Club
            </li>
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Halal Dining
            </li>
            <li className="hover:text-[#E8A86C] cursor-pointer">
              Safety & Security
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E8A86C] shrink-0" />
              123 Education City, Kerala, India 673004
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#E8A86C] shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#E8A86C] shrink-0" />
              info@wintouch.edu
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>&copy; 2025 Wintouch Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
export default function WintouchApp() {
  const [activePage, setActivePage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "life", label: "Campus Life" },
    { id: "admissions", label: "Admissions" },
  ];

  const handleNav = (id: string) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans text-[#2D1B2E]">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNav("home")}
          >
            <div className="w-10 h-10 bg-[#2D1B2E] rounded-lg relative overflow-hidden flex items-center justify-center shadow-lg">
              <div className="absolute w-full h-full bg-[#8C4B58] rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
              <div className="absolute w-2/3 h-full bg-[#E8A86C] rounded-r-lg left-0 top-0 opacity-90" />
              <span className="relative z-10 font-bold text-white text-xl">
                W
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#2D1B2E]">
              Wintouch{" "}
              <span className="font-normal text-sm uppercase tracking-widest block -mt-1 opacity-70">
                Academy
              </span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-semibold transition-colors hover:text-[#8C4B58] ${
                  activePage === link.id ? "text-[#8C4B58]" : "text-[#2D1B2E]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="primary"
              className="py-2 px-6 text-sm"
              onClick={() => handleNav("admissions")}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2D1B2E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-lg font-medium py-2 border-b border-gray-50 ${
                  activePage === link.id ? "text-[#8C4B58]" : "text-[#2D1B2E]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              className="w-full mt-2"
              onClick={() => handleNav("admissions")}
            >
              Apply Now
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {activePage === "home" && (
          <>
            <Hero onNavigate={handleNav} />
            <About />
            <UniqueFeatures />
            <Programs />
            <div className="bg-[#FDFBF8] py-24">
              <div className="container mx-auto px-6 text-center">
                <SectionHeading
                  subtitle="Success Stories"
                  title="What They Say"
                />
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {TESTIMONIALS.map((t, i) => (
                    <Card key={i} className="text-left">
                      <div className="flex gap-4 mb-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full bg-gray-100"
                        />
                        <div>
                          <h5 className="font-bold text-[#2D1B2E]">{t.name}</h5>
                          <span className="text-xs uppercase tracking-wide text-gray-500">
                            {t.role}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        &quot;{t.quote}&quot;
                      </p>
                      <div className="flex text-[#E8A86C] mt-4">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <Admissions />
          </>
        )}

        {activePage === "about" && (
          <div className="animate-fade-in-up">
            <div className="bg-[#2D1B2E] text-white py-24 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Our Legacy
              </h1>
              <p className="max-w-xl mx-auto text-white/70">
                Nurturing the next generation of women leaders since 2010.
              </p>
            </div>
            <About />
            <UniqueFeatures />
          </div>
        )}

        {activePage === "programs" && (
          <div className="animate-fade-in-up">
            <div className="bg-[#8C4B58] text-white py-24 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Academic Programs
              </h1>
              <p className="max-w-xl mx-auto text-white/80">
                Structured for success. Designed for focus.
              </p>
            </div>
            <Programs />
          </div>
        )}

        {activePage === "life" && (
          <div className="animate-fade-in-up">
            <div className="bg-[#E8A86C] text-[#2D1B2E] py-24 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Life at Wintouch
              </h1>
              <p className="max-w-xl mx-auto text-[#2D1B2E]/80">
                A home away from home.
              </p>
            </div>
            <UniqueFeatures />
            <div className="container mx-auto px-6 py-24">
              <SectionHeading
                title="Campus Gallery"
                subtitle="A Glimpse Inside"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg relative group">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Library"
                  />
                  <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                    <p className="text-white font-bold">
                      State-of-the-art Library
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                  <img
                    src="https://images.unsplash.com/photo-1555817129-2fa6b8190e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Horse"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                  <img
                    src="https://images.unsplash.com/photo-1598133893798-10d024c24944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Lab"
                  />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg relative group">
                  <img
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Campus"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "admissions" && (
          <div className="animate-fade-in-up">
            <div className="bg-[#FDFBF8] pt-12">
              <Admissions />
            </div>
            <div className="container mx-auto px-6 py-12 mb-12">
              <SectionHeading
                subtitle="Need Help?"
                title="Frequently Asked Questions"
              />
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  "What is the fee structure for NEET repeaters?",
                  "Are parents allowed to visit on weekends?",
                  "Is the food menu customizable for specific diets?",
                  "What safety measures are in place at night?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm flex justify-between items-center cursor-pointer hover:border-[#8C4B58]"
                  >
                    <span className="font-semibold text-[#2D1B2E]">{q}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer onNavigate={handleNav} />
    </div>
  );
}
