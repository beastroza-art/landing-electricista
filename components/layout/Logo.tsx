import { company } from "@/data/company";
import DynamicIcon from "@/components/ui/DynamicIcon";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  iconClassName = "",
  onClick,
  showTagline = true,
}: LogoProps) {
  const { logo, name } = company;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 select-none ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {/* Icon block */}
      <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-md transition-transform duration-350 hover:scale-105 border border-slate-800 shrink-0">
        <DynamicIcon
          name={logo.icon}
          className={`text-accent ${iconClassName}`}
          size={22}
        />
      </div>

      {/* Brand Text block */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none">
          {logo.primary}
          <span className="text-accent">
            {logo.highlight}
          </span>
        </h2>
        
        {showTagline && (
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
            {logo.tagline}
          </p>
        )}
      </div>
    </div>
  );
}
