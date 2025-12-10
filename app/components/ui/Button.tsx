"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 backdrop-blur-md border border-white/20 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
      primary:
        "bg-[#8C4B58]/80 text-white hover:bg-[#8C4B58]/90 shadow-lg shadow-[#8C4B58]/25 hover:shadow-xl hover:shadow-[#8C4B58]/30",
      secondary:
        "bg-white/20 backdrop-blur-xl border border-white/30 text-[#2D1B2E] hover:bg-white/40",
      accent:
        "bg-[#E8A86C]/80 text-[#2D1B2E] hover:bg-[#E8A86C]/90 shadow-lg shadow-[#E8A86C]/25",
      ghost:
        "text-[#8C4B58] hover:bg-white/20 backdrop-blur-sm px-4 border-transparent",
      outline:
        "bg-white/10 backdrop-blur-xl border border-[#2D1B2E]/30 text-[#2D1B2E] hover:bg-[#2D1B2E]/10",
    };

    return (
      <button
        ref={ref}
        className={twMerge(baseStyle, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
