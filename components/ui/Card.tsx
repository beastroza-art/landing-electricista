import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderVariant?: "default" | "highlight" | "none" | "dark";
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  borderVariant = "default",
  onClick,
}: CardProps) {
  const borderStyles = {
    default: "border border-slate-200 dark:border-slate-800/80",
    highlight: "border-2 border-accent shadow-[0_4px_25px_rgba(250,204,21,0.12)] bg-accent-light/5 dark:bg-accent-light/10 animate-glow-pulse",
    none: "border-0",
    dark: "border border-white/10 bg-white/5 hover:bg-white/10 text-white",
  };

  return (
    <div
      onClick={onClick}
      className={`
        group
        p-6
        sm:p-8
        rounded-2xl
        shadow-sm
        transition-all
        duration-300
        ${borderVariant === "dark" ? "" : "bg-white dark:bg-slate-900/40"}
        ${hoverEffect ? "hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700" : ""}
        ${borderStyles[borderVariant]}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
