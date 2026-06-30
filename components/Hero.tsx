import { company } from "@/data/company";
import Image from "next/image";
import SectionContainer from "./ui/SectionContainer";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import DynamicIcon from "./ui/DynamicIcon";

export default function Hero() {
  const { hero } = company;

  return (
    <SectionContainer
      id="hero"
      background="light"
      className="overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Columna Izquierda (Texto y CTAs) */}
        <div className="flex flex-col items-start text-left">
          
          {/* Badge Emergencias */}
          <Badge variant="dark" className="mb-6">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            {hero.badge}
          </Badge>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {hero.titleStart}
            <br className="hidden sm:inline" />
            {" "}{hero.titleMiddle}{" "}
            <span className="text-yellow-500 block sm:inline">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            {hero.description}
          </p>

          {/* Botones de Acción */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Solicitar Presupuesto
            </Button>

            <Button
              href={`tel:${company.phone}`}
              variant="secondary"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5"
            >
              <DynamicIcon name="phone" size={16} />
              Llamar Ahora
            </Button>
          </div>

          {/* Estadísticas de Confianza en el Hero */}
          <div className="mt-12 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left border-r border-slate-100 last:border-0 pr-2">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Columna Derecha (Imagen Ilustrativa) */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[6/5] xl:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl group border-4 border-white">
          <Image
            src={hero.image}
            alt={company.name}
            fill
            priority
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </SectionContainer>
  );
}