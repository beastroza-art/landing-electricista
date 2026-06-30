import {
  FaBolt,
  FaTools,
  FaShieldAlt,
  FaHome,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaCheck,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { Zap, Phone, Menu, X } from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({
  name,
  className = "",
  size,
}: DynamicIconProps) {
  switch (name.toLowerCase()) {
    case "bolt":
      return <FaBolt className={className} size={size} />;
    case "tools":
      return <FaTools className={className} size={size} />;
    case "shield":
      return <FaShieldAlt className={className} size={size} />;
    case "home":
      return <FaHome className={className} size={size} />;
    case "clock":
      return <FaClock className={className} size={size} />;
    case "phone":
      return <FaPhone className={className} size={size} />;
    case "envelope":
      return <FaEnvelope className={className} size={size} />;
    case "star":
      return <FaStar className={className} size={size} />;
    case "check":
      return <FaCheck className={className} size={size} />;
    case "plus":
      return <FaPlus className={className} size={size} />;
    case "minus":
      return <FaMinus className={className} size={size} />;
    case "zap":
      return <Zap className={className} size={size} />;
    case "phone-lucide":
      return <Phone className={className} size={size} />;
    case "menu":
      return <Menu className={className} size={size} />;
    case "x":
      return <X className={className} size={size} />;
    default:
      return <FaBolt className={className} size={size} />;
  }
}
export type IconName =
  | "bolt"
  | "tools"
  | "shield"
  | "home"
  | "clock"
  | "phone"
  | "envelope"
  | "star"
  | "check"
  | "plus"
  | "minus"
  | "zap"
  | "phone-lucide"
  | "menu"
  | "x";
