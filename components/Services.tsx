import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <ServiceCard
            title="Instalaciones"
            description="Instalación de enchufes, tableros y luminarias."
          />

          <ServiceCard
            title="Mantenciones"
            description="Revisión preventiva de sistemas eléctricos."
          />

          <ServiceCard
            title="Emergencias"
            description="Atención rápida para fallas eléctricas."
          />

          <ServiceCard
            title="Servicios"
            description="ejemplo."
          />
        </div>
      </div>
    </section>
  );
}