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
    default: "border border-slate-200 dark:border-slate-800",
    highlight: "border border-yellow-400",
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
        ${borderVariant === "dark" ? "" : "bg-white"}
        ${hoverEffect ? "hover:-translate-y-2 hover:shadow-xl" : ""}
        ${borderStyles[borderVariant]}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
