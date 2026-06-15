import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Instalaciones",
    description: "Instalación de enchufes y luminarias.",
  },
  {
    title: "Mantenciones",
    description: "Revisión preventiva de sistemas eléctricos.",
  },
  {
    title: "Emergencias",
    description: "Atención rápida para fallas eléctricas.",
  },
  {
    title: "Certificaciones SEC",
    description: "Regularización y certificación de instalaciones.",
  },
  {
  title: "Domótica",
  description: "Automatización inteligente del hogar."
},
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}