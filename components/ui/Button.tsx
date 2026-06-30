import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "dark";
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  target,
  rel,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-center select-none";

  const variants = {
    primary:
      "bg-yellow-400 hover:bg-yellow-500 text-slate-900 border border-transparent focus:ring-2 focus:ring-yellow-400/50 outline-none",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white border border-transparent focus:ring-2 focus:ring-slate-900/50 outline-none",
    outline:
      "bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 focus:ring-2 focus:ring-slate-300/50 outline-none",
    dark:
      "bg-white/10 hover:bg-white/20 text-white border border-white/10 focus:ring-2 focus:ring-white/20 outline-none",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          className={buttonClass}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
