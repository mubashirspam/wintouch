"use client";

import React, { useState, useEffect, useCallback } from "react";
import { questions } from "./examData";

export default function ExamPortal() {
  // --- STATE MANAGEMENT ---
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes (in seconds)
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const currentQuestion = questions[currentQIndex];

  // --- TIMER LOGIC ---
  const handleSubmit = useCallback(() => {
    setIsFinished(true);
  }, []);

  useEffect(() => {
    if (!isStarted || isFinished) return;

    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, isFinished, isStarted, handleSubmit]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Get timer styles based on time remaining
  const getTimerStyles = () => {
    if (timeLeft <= 60)
      return {
        bg: "bg-red-100 border-red-300",
        text: "text-red-600",
        animate: "animate-pulse",
      };
    if (timeLeft <= 180)
      return {
        bg: "bg-amber-100 border-amber-300",
        text: "text-amber-600",
        animate: "",
      };
    return {
      bg: "bg-[#FFFBF0] border-[#E8A86C]/30",
      text: "text-[#8C4B58]",
      animate: "",
    };
  };

  const timerStyles = getTimerStyles();

  // --- ANSWER HANDLING ---
  const handleOptionSelect = (optionId: string) => {
    const isMultiple = currentQuestion.type === "multiple";
    const currentAnswers = answers[currentQuestion.id] || [];
    let newAnswers;

    if (isMultiple) {
      if (currentAnswers.includes(optionId)) {
        newAnswers = currentAnswers.filter((id) => id !== optionId);
      } else {
        newAnswers = [...currentAnswers, optionId];
      }
    } else {
      newAnswers = [optionId];
    }

    setAnswers({ ...answers, [currentQuestion.id]: newAnswers });
  };

  // --- NAVIGATION ---
  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  const handleQuestionSelect = (index: number) => {
    setCurrentQIndex(index);
  };

  // Check if question is answered
  const isQuestionAnswered = (qIndex: number) => {
    const question = questions[qIndex];
    return answers[question.id] && answers[question.id].length > 0;
  };

  // Count answered questions
  const answeredCount = questions.filter((_, i) =>
    isQuestionAnswered(i)
  ).length;

  // --- START SCREEN ---
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFFBF0] via-white to-[#F5E6D3] flex items-center justify-center p-4">
        {/* Background Decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8A86C]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8A86C]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-[#E8A86C]/20 animate-scale-up">
            {/* Logo/Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#E8A86C]/30 animate-float">
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

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-4">
              WinTouch Scholarship Exam
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Test your knowledge and win exciting scholarships!
            </p>

            {/* Exam Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#FFFBF0] rounded-xl p-4 border-2 border-[#E8A86C]/30">
                <div className="flex items-center justify-center gap-2 text-[#8C4B58] mb-1">
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-bold text-xl">{questions.length}</span>
                </div>
                <p className="text-gray-500 text-sm">Questions</p>
              </div>
              <div className="bg-[#FFFBF0] rounded-xl p-4 border-2 border-[#E8A86C]/30">
                <div className="flex items-center justify-center gap-2 text-[#8C4B58] mb-1">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-bold text-xl">10</span>
                </div>
                <p className="text-gray-500 text-sm">Minutes</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-[#FFFBF0] rounded-xl p-5 mb-8 text-left border-2 border-[#E8A86C]/20">
              <h3 className="text-[#8C4B58] font-semibold mb-3 flex items-center gap-2">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Instructions
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#E8A86C]">•</span>
                  Answer all questions within the time limit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E8A86C]">•</span>
                  You can navigate between questions freely
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E8A86C]">•</span>
                  Some questions may have multiple correct answers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E8A86C]">•</span>
                  Click &quot;Finish Exam&quot; when done
                </li>
              </ul>
            </div>

            <button
              onClick={() => setIsStarted(true)}
              className="w-full py-4 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#E8A86C]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULT SCREEN ---
  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFFBF0] via-white to-[#F5E6D3] flex items-center justify-center p-4">
        {/* Background Decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8A86C]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-[#E8A86C]/20 animate-scale-up">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-200 animate-bounce-slow">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-4">
              Exam Completed!
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for participating. Your responses have been recorded
              successfully.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {answeredCount}
                </div>
                <p className="text-green-700 text-sm">Answered</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                <div className="text-2xl font-bold text-gray-500 mb-1">
                  {questions.length - answeredCount}
                </div>
                <p className="text-gray-500 text-sm">Skipped</p>
              </div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#E8A86C]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Start New Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN EXAM UI ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF0] via-white to-[#F5E6D3] flex flex-col items-center pt-4 sm:pt-8 px-4 pb-4">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8A86C]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C4B58]/10 rounded-full blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl relative z-10">
        {/* Header Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 mb-4 flex justify-between items-center shadow-lg border border-[#E8A86C]/20 animate-slide-in-up">
          {/* Question Progress */}
          <div className="flex items-center gap-4">
            <div className="bg-[#FFFBF0] rounded-xl p-3 border-2 border-[#E8A86C]/30">
              <span className="text-xs text-[#8C4B58] font-bold uppercase tracking-wider block">
                Question
              </span>
              <span className="text-2xl font-bold text-[#2D1B2E]">
                {currentQIndex + 1}
                <span className="text-gray-400 text-lg">
                  /{questions.length}
                </span>
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs text-gray-500 block">Answered</span>
              <span className="text-lg font-semibold text-[#8C4B58]">
                {answeredCount} of {questions.length}
              </span>
            </div>
          </div>

          {/* Timer */}
          <div
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 ${timerStyles.bg} ${timerStyles.animate}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${timerStyles.text}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span
              className={`font-mono text-2xl font-bold tracking-widest ${timerStyles.text}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E8A86C]/20 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="h-2 rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-[#E8A86C] to-[#8C4B58]"
            style={{
              width: `${((currentQIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question Navigator */}
        <div
          className="bg-white rounded-2xl p-4 mb-4 shadow-lg border border-[#E8A86C]/20 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuestionSelect(index)}
                className={`
                  w-10 h-10 rounded-lg font-semibold text-sm transition-all duration-200 border-2
                  ${
                    currentQIndex === index
                      ? "bg-gradient-to-br from-[#E8A86C] to-[#8C4B58] text-white border-transparent shadow-lg shadow-[#E8A86C]/30 scale-110"
                      : isQuestionAnswered(index)
                      ? "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                      : "bg-[#FFFBF0] text-gray-500 border-[#E8A86C]/30 hover:border-[#E8A86C] hover:text-[#8C4B58]"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main Question Card */}
        <div
          className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-xl border border-[#E8A86C]/20 animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Question Content */}
          <div className="flex-1 p-5 sm:p-8">
            {/* Question Text */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D1B2E] leading-snug">
                {currentQuestion.text}
              </h2>
              {currentQuestion.type === "multiple" && (
                <span className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 bg-[#8C4B58]/10 text-[#8C4B58] text-xs font-bold rounded-full uppercase tracking-wide border border-[#8C4B58]/20">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  Select Multiple
                </span>
              )}
            </div>

            {/* Question Image (Optional) */}
            {currentQuestion.image && (
              <div className="mb-8 rounded-xl overflow-hidden border-2 border-[#E8A86C]/20 shadow-lg">
                <img
                  src={currentQuestion.image}
                  alt="Question"
                  className="w-full h-auto object-cover max-h-64 sm:max-h-80"
                />
              </div>
            )}

            {/* Options Grid */}
            <div
              className={`grid gap-4 ${
                currentQuestion.options.some((o) => o.image)
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {currentQuestion.options.map((option, optIndex) => {
                const isSelected = (answers[currentQuestion.id] || []).includes(
                  option.id
                );

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`
                      group relative flex items-center p-4 rounded-xl border-2 transition-all duration-300 text-left
                      animate-fade-in-up
                      ${
                        isSelected
                          ? "border-[#8C4B58] bg-[#8C4B58]/5 shadow-lg shadow-[#8C4B58]/10"
                          : "border-[#E8A86C]/30 hover:border-[#E8A86C] hover:bg-[#FFFBF0]"
                      }
                      ${option.image ? "flex-col text-center" : "flex-row"}
                    `}
                    style={{ animationDelay: `${0.1 * optIndex}s` }}
                  >
                    {/* Option Letter Badge */}
                    <div
                      className={`
                      flex-shrink-0 w-8 h-8 rounded-lg mr-4 flex items-center justify-center transition-all duration-300 font-bold text-sm
                      ${option.image ? "absolute top-4 left-4 mr-0" : ""}
                      ${
                        isSelected
                          ? "bg-[#8C4B58] text-white"
                          : "bg-[#FFFBF0] text-[#8C4B58] border-2 border-[#E8A86C]/30 group-hover:border-[#E8A86C]"
                      }
                    `}
                    >
                      {String.fromCharCode(65 + optIndex)}
                    </div>

                    {/* Option Content */}
                    <div className="flex-1 w-full">
                      {option.image && (
                        <div className="mb-3 rounded-lg overflow-hidden h-32 w-full bg-[#FFFBF0]">
                          <img
                            src={option.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <span
                        className={`font-medium ${
                          isSelected
                            ? "text-[#2D1B2E] font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {option.text}
                      </span>
                    </div>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-[#8C4B58] rounded-full flex items-center justify-center">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="p-4 sm:p-6 bg-[#FFFBF0] border-t-2 border-[#E8A86C]/20 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentQIndex === 0}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${
                  currentQIndex === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-[#8C4B58] hover:bg-white hover:shadow-md"
                }
              `}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#E8A86C] to-[#8C4B58] text-white rounded-xl font-bold shadow-lg shadow-[#E8A86C]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              {currentQIndex === questions.length - 1 ? "Finish Exam" : "Next"}
              {currentQIndex < questions.length - 1 && (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
