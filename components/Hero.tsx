import { company } from "@/data/company";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Disponible 24/7 para emergencias
          </div>

          {/* Título */}
          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Electricistas Profesionales
            <br />
            24/7 para
            <span className="text-yellow-500">
              {" "}Hogares y Empresas
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Instalaciones eléctricas, mantenciones,
            certificaciones y atención de emergencias
            para hogares, oficinas y empresas.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-xl transition"
            >
              Solicitar Presupuesto
            </a>

            <a
              href={`tel:${company.phone}`}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition flex items-center gap-2"
            >
              <Phone size={18} />
              Llamar Ahora
            </a>

          </div>

          {/* Estadísticas estilo Stitch */}
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-100">

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  500+
                </p>
                <p className="text-xs text-slate-500 uppercase">
                  Proyectos
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  24/7
                </p>
                <p className="text-xs text-slate-500 uppercase">
                  Emergencias
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  15+
                </p>
                <p className="text-xs text-slate-500 uppercase">
                  Años
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  SEC
                </p>
                <p className="text-xs text-slate-500 uppercase">
                  Certificados
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Columna derecha */}
        <div>
          <Image
            src="/images/electrician_hero.jpg"
            alt="Electricista profesional"
            width={600}
            height={500}
            className="rounded-[32px] shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}