type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-yellow-400">
        {value}
      </h3>

      <p className="mt-2 text-white">
        {label}
      </p>
    </div>
  );
}