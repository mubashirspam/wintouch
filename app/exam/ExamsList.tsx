"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Exam, mockTests, upcomingExams, pastExams } from "./examsListData";

// Icons
const ClockIcon = () => (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const QuestionIcon = () => (
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
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CalendarIcon = () => (
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
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const UsersIcon = () => (
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
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const TrophyIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const ArrowRightIcon = () => (
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
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// Format date helper
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Get relative time
const getRelativeTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 7) return `In ${diffDays} days`;
  if (diffDays < 30) return `In ${Math.ceil(diffDays / 7)} weeks`;
  return `In ${Math.ceil(diffDays / 30)} months`;
};

// Difficulty badge component
const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colors = {
    easy: "bg-green-100 text-green-700 border-green-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    hard: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
        colors[difficulty as keyof typeof colors] || colors.medium
      }`}
    >
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
};

// Exam Card Component
const ExamCard = ({
  exam,
  variant = "default",
}: {
  exam: Exam;
  variant?: "default" | "featured" | "past";
}) => {
  const isFeatured = variant === "featured" || exam.isFeatured;
  const isPast = variant === "past";

  return (
    <div
      className={`
        group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 border-2
        ${
          isFeatured
            ? "border-[#E8A86C] shadow-xl shadow-[#E8A86C]/20 hover:shadow-2xl hover:shadow-[#E8A86C]/30"
            : isPast
            ? "border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg opacity-90"
            : "border-[#E8A86C]/30 hover:border-[#E8A86C] shadow-lg hover:shadow-xl"
        }
        transform hover:-translate-y-1
      `}
    >
      {/* Featured Badge */}
      {isFeatured && !isPast && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10">
          ✨ Featured
        </div>
      )}

      {/* Card Header */}
      <div
        className={`p-5 ${
          isFeatured
            ? "bg-gradient-to-r from-[#FFFBF0] to-[#FFF5E6]"
            : "bg-[#FFFBF0]"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className={`
                text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide
                ${
                  exam.type === "scholarship"
                    ? "bg-[#8C4B58]/10 text-[#8C4B58]"
                    : exam.type === "mock"
                    ? "bg-[#E8A86C]/20 text-[#8C4B58]"
                    : "bg-blue-100 text-blue-700"
                }
              `}
              >
                {exam.type === "scholarship"
                  ? "🏆 Scholarship"
                  : exam.type === "mock"
                  ? "📝 Mock Test"
                  : "📊 Assessment"}
              </span>
              <DifficultyBadge difficulty={exam.difficulty} />
            </div>
            <h3 className="text-lg font-bold text-[#2D1B2E] group-hover:text-[#8C4B58] transition-colors line-clamp-2">
              {exam.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {exam.description}
        </p>
      </div>

      {/* Card Body */}
      <div className="px-5 py-4">
        {/* Subjects */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exam.subjects.slice(0, 3).map((subject, idx) => (
            <span
              key={idx}
              className="text-xs bg-[#FFFBF0] text-[#8C4B58] px-2 py-1 rounded-md border border-[#E8A86C]/30"
            >
              {subject}
            </span>
          ))}
          {exam.subjects.length > 3 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{exam.subjects.length - 3} more
            </span>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <ClockIcon />
            <span>{exam.duration} mins</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <QuestionIcon />
            <span>{exam.totalQuestions} questions</span>
          </div>
          {exam.scheduledDate && (
            <div className="flex items-center gap-2 text-gray-600 col-span-2">
              <CalendarIcon />
              <span>{formatDate(exam.scheduledDate)}</span>
            </div>
          )}
          {exam.endDate && isPast && (
            <div className="flex items-center gap-2 text-gray-500 col-span-2">
              <CalendarIcon />
              <span>Ended: {formatDate(exam.endDate)}</span>
            </div>
          )}
          {exam.participants && (
            <div className="flex items-center gap-2 text-gray-600 col-span-2">
              <UsersIcon />
              <span>{exam.participants.toLocaleString()} participants</span>
            </div>
          )}
        </div>

        {/* Prize Banner */}
        {exam.prize && !isPast && (
          <div className="mt-4 p-3 bg-gradient-to-r from-[#E8A86C]/10 to-[#8C4B58]/10 rounded-xl border border-[#E8A86C]/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] rounded-lg flex items-center justify-center">
                <TrophyIcon />
              </div>
              <div>
                <p className="text-xs text-gray-500">Win up to</p>
                <p className="font-bold text-[#8C4B58]">{exam.prize}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-5">
        {isPast ? (
          <button className="w-full py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            <ChartIcon />
            View Results
          </button>
        ) : exam.status === "upcoming" ? (
          <div className="flex gap-3">
            <div className="flex-1 py-3 bg-[#FFFBF0] border-2 border-[#E8A86C]/30 rounded-xl text-center">
              <p className="text-xs text-gray-500">Starts</p>
              <p className="font-bold text-[#8C4B58]">
                {getRelativeTime(exam.scheduledDate!)}
              </p>
            </div>
            <Link
              href={`/exam/register?id=${exam.id}`}
              className="flex-1 py-3 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#E8A86C]/30 transition-all transform hover:scale-[1.02]"
            >
              Register
              <ArrowRightIcon />
            </Link>
          </div>
        ) : (
          <Link
            href="/exam/start"
            className="w-full py-3 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#E8A86C]/30 transition-all transform hover:scale-[1.02]"
          >
            <PlayIcon />
            Start Now
          </Link>
        )}
      </div>
    </div>
  );
};

// Tab Button Component
const TabButton = ({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count: number;
}) => (
  <button
    onClick={onClick}
    className={`
      relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2
      ${
        active
          ? "bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white shadow-lg shadow-[#E8A86C]/30"
          : "bg-white text-gray-600 hover:bg-[#FFFBF0] hover:text-[#8C4B58] border-2 border-[#E8A86C]/30"
      }
    `}
  >
    {children}
    <span
      className={`
      px-2 py-0.5 rounded-full text-xs font-bold
      ${active ? "bg-white/20 text-white" : "bg-[#E8A86C]/20 text-[#8C4B58]"}
    `}
    >
      {count}
    </span>
  </button>
);

// Main Component
export default function ExamsList() {
  const [activeTab, setActiveTab] = useState<"mock" | "upcoming" | "past">(
    "mock"
  );

  const getCurrentExams = () => {
    switch (activeTab) {
      case "mock":
        return mockTests;
      case "upcoming":
        return upcomingExams;
      case "past":
        return pastExams;
      default:
        return mockTests;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF0] via-white to-[#F5E6D3]">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8A86C]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8A86C]/5 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <header className="relative z-10 pt-8 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#8C4B58] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#8C4B58] font-medium">Exams</span>
          </div>

          {/* Hero Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#E8A86C]/20 animate-scale-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] rounded-2xl flex items-center justify-center shadow-lg shadow-[#E8A86C]/30 animate-float flex-shrink-0">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B2E] mb-4">
                  WinTouch <span className="text-[#E8A86C]">Exam Portal</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Practice with mock tests, participate in scholarship exams,
                  and track your progress. Excel in your NEET preparation
                  journey!
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 flex-shrink-0">
                <div className="bg-[#FFFBF0] rounded-xl p-4 text-center border-2 border-[#E8A86C]/30">
                  <p className="text-2xl font-bold text-[#8C4B58]">
                    {mockTests.length}
                  </p>
                  <p className="text-xs text-gray-500">Mock Tests</p>
                </div>
                <div className="bg-[#FFFBF0] rounded-xl p-4 text-center border-2 border-[#E8A86C]/30">
                  <p className="text-2xl font-bold text-[#8C4B58]">
                    {upcomingExams.length}
                  </p>
                  <p className="text-xs text-gray-500">Upcoming</p>
                </div>
                <div className="bg-[#FFFBF0] rounded-xl p-4 text-center border-2 border-[#E8A86C]/30">
                  <p className="text-2xl font-bold text-[#8C4B58]">
                    {pastExams.length}
                  </p>
                  <p className="text-xs text-gray-500">Past Exams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            <TabButton
              active={activeTab === "mock"}
              onClick={() => setActiveTab("mock")}
              count={mockTests.length}
            >
              📝 Mock Tests
            </TabButton>
            <TabButton
              active={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
              count={upcomingExams.length}
            >
              🗓️ Upcoming
            </TabButton>
            <TabButton
              active={activeTab === "past"}
              onClick={() => setActiveTab("past")}
              count={pastExams.length}
            >
              📊 Past Exams
            </TabButton>
          </div>

          {/* Active Tab Description */}
          <div className="mb-8">
            {activeTab === "mock" && (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8A86C]/20 animate-fade-in">
                <p className="text-gray-600">
                  <span className="font-semibold text-[#8C4B58]">
                    Mock Tests
                  </span>{" "}
                  are available 24/7. Practice anytime to improve your speed and
                  accuracy for the NEET exam.
                </p>
              </div>
            )}
            {activeTab === "upcoming" && (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8A86C]/20 animate-fade-in">
                <p className="text-gray-600">
                  <span className="font-semibold text-[#8C4B58]">
                    Upcoming Exams
                  </span>{" "}
                  include scholarship tests and assessments. Register now to
                  secure your spot!
                </p>
              </div>
            )}
            {activeTab === "past" && (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8A86C]/20 animate-fade-in">
                <p className="text-gray-600">
                  <span className="font-semibold text-[#8C4B58]">
                    Past Exams
                  </span>{" "}
                  include completed tests. View your results and performance
                  analysis.
                </p>
              </div>
            )}
          </div>

          {/* Exam Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentExams().map((exam, index) => (
              <div
                key={exam.id}
                className="animate-slide-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ExamCard
                  exam={exam}
                  variant={
                    activeTab === "past"
                      ? "past"
                      : exam.isFeatured
                      ? "featured"
                      : "default"
                  }
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {getCurrentExams().length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#FFFBF0] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#E8A86C]/30">
                <QuestionIcon />
              </div>
              <h3 className="text-xl font-bold text-[#2D1B2E] mb-2">
                No Exams Found
              </h3>
              <p className="text-gray-500">Check back later for new exams!</p>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-16 bg-gradient-to-r from-[#2D1B2E] to-[#452c46] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A86C]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8C4B58]/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Need Help Getting Started?
                </h2>
                <p className="text-white/80 max-w-lg">
                  Our team is here to guide you through the exam process.
                  Contact us for any questions about registration, syllabus, or
                  exam patterns.
                </p>
              </div>
              <Link
                href="/exam/register"
                className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-[#E8A86C] to-[#E8A86C]/80 text-[#2D1B2E] rounded-xl font-bold hover:shadow-lg hover:shadow-[#E8A86C]/30 transition-all transform hover:scale-[1.02] flex items-center gap-2"
              >
                Register for Scholarship Exam
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
