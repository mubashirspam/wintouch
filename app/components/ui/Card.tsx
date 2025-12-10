"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={twMerge(
        "bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-[#2D1B2E]/10 border border-white/50 transition-all duration-300",
        hover &&
          "hover:border-[#8C4B58]/40 hover:bg-white/80 hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
