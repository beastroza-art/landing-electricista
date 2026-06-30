import { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  variant?: "yellow" | "dark" | "white" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function IconBox({
  children,
  variant = "yellow",
  size = "md",
  className = "",
}: IconBoxProps) {
  const variants = {
    yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-400/10 dark:text-yellow-400 border border-yellow-200/20",
    dark: "bg-slate-900 text-yellow-400 border border-slate-800",
    white: "bg-white text-slate-900 shadow-md border border-slate-100",
    light: "bg-slate-100 text-slate-600 border border-slate-200/50",
  };

  const sizes = {
    sm: "w-10 h-10 rounded-lg text-lg",
    md: "w-12 h-12 rounded-xl text-xl",
    lg: "w-14 h-14 rounded-2xl text-2xl",
  };

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        shrink-0
        transition-transform
        duration-300
        group-hover:scale-110
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
