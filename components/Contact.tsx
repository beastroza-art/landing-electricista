"use client";

import { company } from "@/data/company";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaBolt,
} from "react-icons/fa";

export default function Contact() {
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    setError("");

    if (!data.name) {
      setError("Debes ingresar tu nombre");
      return;
    }

    if (!data.email) {
      setError("Debes ingresar un correo electrónico");
      return;
    }

    if (!data.service) {
      setError("Debes seleccionar un servicio");
      return;
    }

    if (!data.message) {
      setError("Debes escribir un mensaje");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Solicita tu Presupuesto
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Cuéntanos tu problema eléctrico y te
            responderemos lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Información */}
          <div className="space-y-6">

            <h3 className="text-2xl font-bold">
              Información de Contacto
            </h3>

            <p className="text-slate-400">
              Atención profesional para hogares,
              oficinas y empresas.
            </p>

            <div className="space-y-4">

              <div className="flex gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 text-slate-900 flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>
                  <p className="font-bold">
                    Teléfono
                  </p>

                  <p className="text-slate-400">
                    {company.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 text-slate-900 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-bold">
                    Correo
                  </p>

                  <p className="text-slate-400">
                    {company.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-yellow-400 text-slate-900 flex items-center justify-center">
                  <FaBolt />
                </div>

                <div>
                  <p className="font-bold">
                    Emergencias
                  </p>

                  <p className="text-slate-400">
                    Atención 24/7
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Formulario */}
          <form
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-2xl
              space-y-4
            "
            onSubmit={handleSubmit}
          >

            <input
              name="name"
              type="text"
              placeholder="Nombre"
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-200
                text-slate-900
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-200
                text-slate-900
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <input
              name="phone"
              type="tel"
              placeholder="Teléfono"
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-200
                text-slate-900
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <select
              name="service"
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-200
                text-slate-900
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            >
              <option value="">
                Seleccione un servicio
              </option>

              {company.services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Describe tu necesidad"
              rows={5}
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-200
                text-slate-900
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            {error && (
              <p className="text-red-500 font-semibold text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="
                w-full
                bg-yellow-400
                hover:bg-yellow-500
                text-slate-900
                font-bold
                py-4
                rounded-xl
                transition
                hover:-translate-y-1
              "
            >
              Enviar Solicitud
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}