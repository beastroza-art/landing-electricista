import Card from "./ui/Card";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <Card
      borderVariant="dark"
      hoverEffect={true}
      className="text-center backdrop-blur-sm"
    >
      <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-tight">
        {value}
      </h3>

      <p className="mt-3 text-slate-300 uppercase tracking-wider text-xs sm:text-sm font-semibold leading-relaxed">
        {label}
      </p>
    </Card>
  );
}