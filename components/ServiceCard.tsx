type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}