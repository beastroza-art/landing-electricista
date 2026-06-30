import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "info" | "dark" | "outline" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "info",
  className = "",
}: BadgeProps) {
  const styles = {
    success: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
    warning: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
    info: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
    dark: "bg-slate-950 text-accent border-slate-800",
    outline: "bg-transparent text-slate-600 border-slate-200 dark:text-slate-400 dark:border-slate-800",
    accent: "bg-accent-light text-accent-light-text border-accent-light-border",
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
