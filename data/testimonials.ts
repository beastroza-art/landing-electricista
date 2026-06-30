import { TestimonialItem } from "@/types";

export const testimonialsContent = {
  tagline: "Testimonios",
  title: "Lo Que Dicen Nuestros Clientes",
  description: "La satisfacción y seguridad de quienes confían en nosotros es nuestro mayor respaldo técnico.",
};

export const testimonials: TestimonialItem[] = [
  {
    name: "Juan Pérez",
    text: "Excelente servicio. Llegaron súper rápido ante un cortocircuito en casa y lo solucionaron todo en un par de horas de forma muy profesional.",
    initials: "JP",
    role: "Cliente Residencial",
  },
  {
    name: "María González",
    text: "Muy profesionales y transparentes con el presupuesto. Hicieron la regularización SEC de nuestro local comercial sin inconvenientes.",
    initials: "MG",
    role: "Local Comercial",
  },
  {
    name: "Carlos Rojas",
    text: "Instalaron toda la iluminación LED y tableros de mi casa nueva. Impecable el trabajo, limpio y ordenado. Totalmente recomendados.",
    initials: "CR",
    role: "Instalación Nueva",
  },
];