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
  FaHeart,
  FaStethoscope,
  FaBalanceScale,
  FaWrench,
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Zap, Phone, Menu, X, ArrowRight } from "lucide-react";

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
    case "whatsapp":
      return <FaWhatsapp className={className} size={size} />;
    // Core Utilities
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
    case "arrow-right":
      return <ArrowRight className={className} size={size} />;

    // Rebranding Utilities (Medical, Legal, Professional)
    case "heart":
      return <FaHeart className={className} size={size} />;
    case "stethoscope":
      return <FaStethoscope className={className} size={size} />;
    case "scale":
      return <FaBalanceScale className={className} size={size} />;
    case "wrench":
      return <FaWrench className={className} size={size} />;
    case "calendar":
      return <FaCalendarAlt className={className} size={size} />;
    case "user":
      return <FaUser className={className} size={size} />;
    case "map-marker":
      return <FaMapMarkerAlt className={className} size={size} />;

    default:
      return <FaBolt className={className} size={size} />;
  }
}
