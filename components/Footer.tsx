import { company } from "@/data/company";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Zap className="text-slate-900" />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  ElectricPro
                </h3>

                <p className="text-slate-400 text-sm">
                  Instalaciones 24/7
                </p>
              </div>

            </div>

            <p className="mt-4 text-slate-400 max-w-md">
              Instalaciones eléctricas, mantenciones,
              certificaciones SEC y atención de emergencias.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contacto
            </h4>

            <p>{company.phone}</p>
            <p>{company.email}</p>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          © 2026 ElectricPro. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}