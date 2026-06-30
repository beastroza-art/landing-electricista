"use client";

import { company } from "@/data/company";
import DynamicIcon from "./DynamicIcon";

export default function WhatsappBubble() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-40
        w-14
        h-14
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        flex
        items-center
        justify-center
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
        cursor-pointer
        group
      "
    >
      {/* Outer pulsing ring for UX guidance */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping group-hover:animate-none pointer-events-none"></span>
      
      <DynamicIcon
        name="whatsapp"
        size={28}
        className="transition-transform duration-300"
      />
    </a>
  );
}
