import { company } from "@/data/company";

export default function Contact() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Solicita tu Presupuesto
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Información */}
          <div>
            <h3 className="text-2xl font-bold">
              Información de Contacto
            </h3>

            <div className="mt-6 space-y-4">
              <p>📞 {company.phone}</p>
              <p>✉️ {company.email}</p>
              <p>⚡ Atención 24/7</p>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded-lg text-black"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-lg text-black"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full p-3 rounded-lg text-black"
            />

            <select
              className="w-full p-3 rounded-lg text-black"
            >
              <option>Seleccione un servicio</option>
              <option>Instalaciones</option>
              <option>Mantenciones</option>
              <option>Emergencias</option>
              <option>Certificaciones SEC</option>
            </select>

            <textarea
              placeholder="Describe tu necesidad"
              rows={5}
              className="w-full p-3 rounded-lg text-black"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Enviar Solicitud
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}