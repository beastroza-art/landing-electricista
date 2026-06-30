import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "info" | "dark" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "info",
  className = "",
}: BadgeProps) {
  const styles = {
    success: "bg-green-500/10 text-green-500 border border-green-500/20",
    warning: "bg-yellow-400/10 text-yellow-500 border border-yellow-400/20",
    info: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    dark: "bg-slate-900 text-yellow-400 border border-slate-800",
    outline: "bg-transparent text-slate-600 border border-slate-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        px-3
        py-1.5
        rounded-full
        text-xs
        font-semibold
        uppercase
        tracking-wider
        border
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
