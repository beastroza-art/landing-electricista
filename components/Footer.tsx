import { company } from "@/data/company";
import DynamicIcon from "./ui/DynamicIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Logo y descripción */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md">
                <DynamicIcon name={company.logo.icon} className="text-slate-900" size={18} />
              </div>

              <div>
                <h3 className="font-extrabold text-xl leading-none text-white">
                  {company.name}
                </h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  {company.logo.tagline}
                </p>
              </div>
            </div>

            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              Servicios eléctricos residenciales y comerciales de alta calidad. Mantenciones, instalaciones y atención de emergencias con técnicos autorizados SEC.
            </p>
          </div>

          {/* Menú de Enlaces Rápidos */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 w-full md:w-auto">
            <div>
              <h4 className="font-extrabold text-white mb-4 tracking-wider text-sm uppercase">
                Secciones
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#hero" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                    Proceso
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>

            {/* Información de Contacto */}
            <div>
              <h4 className="font-extrabold text-white mb-4 tracking-wider text-sm uppercase">
                Contacto
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-400">
                <li className="flex items-center gap-2">
                  <DynamicIcon name="phone" className="text-yellow-400 shrink-0" size={14} />
                  <a href={`tel:${company.phone}`} className="hover:text-yellow-400 transition-colors">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="envelope" className="text-yellow-400 shrink-0" size={14} />
                  <a href={`mailto:${company.email}`} className="hover:text-yellow-400 transition-colors">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                  <span>Disponible 24/7</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Derechos Reservados */}
        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-slate-500 text-xs sm:text-sm">
          © {currentYear} {company.name}. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}