import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import Badge from "@/components/ui/Badge";
import DynamicIcon from "@/components/ui/DynamicIcon";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  emergency?: boolean;
};

export default function ServiceCard({
  title,
  description,
  icon,
  emergency,
}: ServiceCardProps) {
  return (
    <Card
      borderVariant={emergency ? "highlight" : "default"}
      hoverEffect={true}
      className="flex flex-col h-full justify-between"
    >
      <div>
        {/* Top Header Row of the Card */}
        <div className="flex justify-between items-start mb-6">
          <IconBox variant="accent" size="md">
            <DynamicIcon name={icon} />
          </IconBox>

          {emergency && (
            <Badge variant="warning">
              24/7
            </Badge>
          )}
        </div>

        {/* Card Title & Description */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Card Footer Link */}
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-800 dark:text-slate-300 group-hover:text-accent transition-colors duration-300 flex items-center gap-1">
        <span>Más información</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Card>
  );
}