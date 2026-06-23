import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Nuestros Servicios
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Soluciones eléctricas profesionales para
            hogares y empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              emergency={service.emergency}
            />
          ))}
        </div>

      </div>
    </section>
  );
}