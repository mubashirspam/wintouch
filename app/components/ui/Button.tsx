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
      "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 shadow-sm";

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
