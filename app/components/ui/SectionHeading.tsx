"use client";

import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={twMerge(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="uppercase tracking-wider text-sm font-bold text-[#8C4B58] mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-[#2D1B2E] leading-tight">
        {title}
      </h2>
      <div
        className={twMerge(
          "h-1.5 w-20 bg-[#E8A86C] rounded-full mt-4",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
