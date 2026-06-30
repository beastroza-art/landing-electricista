import { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  variant?: "yellow" | "dark" | "white" | "light" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function IconBox({
  children,
  variant = "accent",
  size = "md",
  className = "",
}: IconBoxProps) {
  const variants = {
    accent: "bg-accent-light text-accent-light-text border border-accent-light-border",
    yellow: "bg-accent-light text-accent-light-text border border-accent-light-border", // backward compatibility alias
    dark: "bg-slate-950 text-accent border border-slate-800",
    white: "bg-white text-slate-900 shadow-md border border-slate-100 dark:bg-slate-900 dark:text-white dark:border-slate-800",
    light: "bg-slate-100 text-slate-600 border border-slate-200/50 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700/50",
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
