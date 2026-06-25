import { company } from "@/data/company";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3"
          >
            <div className="
              w-12
              h-12
              rounded-xl
              bg-slate-900
              flex
              items-center
              justify-center
              shadow-md
            ">
              <Zap
                size={22}
                className="text-yellow-400"
              />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Electric
                <span className="text-yellow-500">
                  Pro
                </span>
              </h2>

              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                Instalaciones 24/7
              </p>
            </div>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#hero"
              className="font-semibold text-slate-700 hover:text-yellow-500 transition"
            >
              Inicio
            </a>

            <a
              href="#services"
              className="font-semibold text-slate-700 hover:text-yellow-500 transition"
            >
              Servicios
            </a>

            <a
              href="#process"
              className="font-semibold text-slate-700 hover:text-yellow-500 transition"
            >
              Proceso
            </a>

            <a
              href="#testimonials"
              className="font-semibold text-slate-700 hover:text-yellow-500 transition"
            >
              Testimonios
            </a>

            <a
              href="#contact"
              className="font-semibold text-slate-700 hover:text-yellow-500 transition"
            >
              Contacto
            </a>

          </nav>

          {/* Botón CTA */}
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:inline-flex
              items-center
              bg-yellow-400
              hover:bg-yellow-500
              text-slate-900
              font-bold
              px-6
              py-3
              rounded-xl
              shadow-md
              hover:shadow-lg
              hover:-translate-y-0.5
              transition-all
            "
          >
            Solicitar Presupuesto
          </a>

        </div>

      </div>
    </header>
  );
}