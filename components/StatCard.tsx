type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-2xl
        p-8
        text-center
        backdrop-blur
        transition
        duration-300
        hover:-translate-y-2
        hover:bg-white/10
      "
    >
      <h3
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-yellow-400
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-3
          text-slate-300
          uppercase
          tracking-wider
          text-sm
          font-semibold
        "
      >
        {label}
      </p>
    </div>
  );
}