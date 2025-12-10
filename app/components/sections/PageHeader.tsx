"use client";

import { twMerge } from "tailwind-merge";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  variant?: "dark" | "primary" | "accent";
}

export default function PageHeader({
  title,
  subtitle,
  variant = "dark",
}: PageHeaderProps) {
  const variants = {
    dark: "bg-[#2D1B2E] text-white",
    primary: "bg-[#8C4B58] text-white",
    accent: "bg-[#E8A86C] text-[#2D1B2E]",
  };

  const subtitleVariants = {
    dark: "text-white/70",
    primary: "text-white/80",
    accent: "text-[#2D1B2E]/80",
  };

  return (
    <div className={twMerge("py-24 text-center", variants[variant])}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className={twMerge("max-w-xl mx-auto", subtitleVariants[variant])}>
        {subtitle}
      </p>
    </div>
  );
}
