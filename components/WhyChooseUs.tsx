import {
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaTools,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaBolt,
    title: "Respuesta Rápida",
    description: "Atención rápida para emergencias eléctricas.",
  },
  {
    icon: FaShieldAlt,
    title: "Trabajo Garantizado",
    description: "Todos nuestros trabajos cuentan con garantía.",
  },
  {
    icon: FaClock,
    title: "Disponibilidad 24/7",
    description: "Atendemos cuando más lo necesitas.",
  },
  {
    icon: FaTools,
    title: "Experiencia Profesional",
    description: "Años de experiencia en instalaciones eléctricas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          ¿Por Qué Elegirnos?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-xl shadow"
              >
                <Icon className="text-4xl mb-4" />

                <h3 className="text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}