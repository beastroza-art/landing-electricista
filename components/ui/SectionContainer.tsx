import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  background?: "white" | "light" | "dark" | "transparent";
  children: ReactNode;
}

export default function SectionContainer({
  id,
  className = "",
  background = "white",
  children,
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white text-slate-900",
    light: "bg-slate-50 text-slate-900",
    dark: "bg-slate-900 text-white",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={`
        py-16
        md:py-24
        px-4
        sm:px-6
        lg:px-8
        transition-colors
        duration-300
        ${bgClasses[background]}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
