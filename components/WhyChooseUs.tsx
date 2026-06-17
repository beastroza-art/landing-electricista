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
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Por Qué Elegirnos?
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Brindamos soluciones eléctricas seguras,
            rápidas y garantizadas para hogares y empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:bg-white/10
                  transition
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-yellow-400/20
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                >
                  <Icon className="text-yellow-400 text-xl" />
                </div>

                <h3 className="text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-relaxed">
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