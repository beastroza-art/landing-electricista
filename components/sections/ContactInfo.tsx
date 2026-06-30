import { company } from "@/data/company";
import IconBox from "@/components/ui/IconBox";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-extrabold text-white">
        Información de Contacto
      </h3>

      <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
        Estamos disponibles para atender requerimientos programados y de urgencia en hogares, oficinas, comunidades y empresas.
      </p>

      <div className="space-y-4">
        
        {/* Teléfono */}
        <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
          <IconBox variant="accent" size="md">
            <DynamicIcon name="phone" size={18} />
          </IconBox>
          <div>
            <p className="font-bold text-white text-sm sm:text-base">
              Teléfono Directo
            </p>
            <a
              href={`tel:${company.phone}`}
              className="text-slate-450 hover:text-accent transition-colors text-sm sm:text-base outline-none focus:text-accent"
            >
              {company.phone}
            </a>
          </div>
        </div>

        {/* Correo electrónico */}
        <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
          <IconBox variant="accent" size="md">
            <DynamicIcon name="envelope" size={18} />
          </IconBox>
          <div>
            <p className="font-bold text-white text-sm sm:text-base">
              Correo Electrónico
            </p>
            <a
              href={`mailto:${company.email}`}
              className="text-slate-450 hover:text-accent transition-colors text-sm sm:text-base outline-none focus:text-accent"
            >
              {company.email}
            </a>
          </div>
        </div>

        {/* Emergencias */}
        <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
          <IconBox variant="accent" size="md">
            <DynamicIcon name="bolt" size={18} />
          </IconBox>
          <div>
            <p className="font-bold text-white text-sm sm:text-base">
              Emergencias 24/7
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Atención rápida ante cortes y fallas
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
