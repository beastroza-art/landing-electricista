import {
  FaBolt,
  FaTools,
  FaShieldAlt,
  FaHome,
  FaClock,
} from "react-icons/fa";

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

  const getIcon = () => {
    switch (icon) {
      case "bolt":
        return <FaBolt />;

      case "tools":
        return <FaTools />;

      case "shield":
        return <FaShieldAlt />;

      case "home":
        return <FaHome />;

      case "clock":
        return <FaClock />;

      default:
        return <FaBolt />;
    }
  };

  return (
    <div
      className={`
        group
        bg-white
        p-6
        rounded-2xl
        border
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-slate-900
        ${emergency
          ? "border-yellow-400"
          : "border-slate-200"
        }
      `}
    >
      <div className="flex justify-between mb-5">

        <div className="
          w-12
          h-12
          rounded-xl
          bg-yellow-100
          text-yellow-600
          flex
          items-center
          justify-center
          text-xl
          group-hover:scale-110
          transition
        ">
          {getIcon()}
        </div>

        {emergency && (
          <span className="
            bg-yellow-400
            text-slate-900
            text-xs
            font-bold
            px-2
            py-1
            rounded-full
          ">
            24/7
          </span>
        )}
      </div>

      <h3 className="
        text-xl
        font-bold
        text-slate-900
        group-hover:text-yellow-500
        transition
      ">
        {title}
      </h3>

      <p className="
        mt-3
        text-slate-500
        leading-relaxed
      ">
        {description}
      </p>

      <div
        className="
    mt-6
    pt-4
    border-t
    border-slate-100
    text-sm
    font-bold
    text-slate-800
    group-hover:text-yellow-500
    transition
  "
      >
        Más información →
      </div>
    </div>
  );
}