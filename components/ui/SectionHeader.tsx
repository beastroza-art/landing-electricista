interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  tagline,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`
        mb-12
        md:mb-16
        ${isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"}
      `}
    >
      {tagline && (
        <span
          className={`
            text-sm
            font-bold
            uppercase
            tracking-widest
            block
            mb-3
            ${dark ? "text-accent" : "text-accent-hover"}
          `}
        >
          {tagline}
        </span>
      )}
      <h2
        className={`
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          tracking-tight
          ${dark ? "text-white" : "text-slate-900"}
        `}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`
            mt-4
            text-base
            md:text-lg
            leading-relaxed
            ${dark ? "text-slate-400" : "text-slate-500"}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}
