"use client";

import { company } from "@/data/company";
import { useState } from "react";
import SectionContainer from "./ui/SectionContainer";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import IconBox from "./ui/IconBox";
import DynamicIcon from "./ui/DynamicIcon";
import Card from "./ui/Card";

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
    setSuccess("");

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

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess("¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.");
        event.currentTarget.reset();
      } else {
        setError(result.message || "Hubo un error al enviar el formulario.");
      }
    } catch {
      setError("No se pudo conectar con el servidor. Inténtalo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer id="contact" background="dark">
      <SectionHeader
        title="Solicita tu Presupuesto"
        description="Cuéntanos tu requerimiento o emergencia eléctrica y te responderemos de inmediato."
        dark={true}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Columna de Información (4 de 12 columnas en pantallas lg) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-2xl font-extrabold text-white">
            Información de Contacto
          </h3>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            Estamos disponibles para atender requerimientos programados y de urgencia en hogares, oficinas, comunidades y empresas.
          </p>

          <div className="space-y-4">
            
            {/* Teléfono */}
            <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
              <IconBox variant="yellow" size="md">
                <DynamicIcon name="phone" size={18} />
              </IconBox>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">
                  Teléfono Directo
                </p>
                <a
                  href={`tel:${company.phone}`}
                  className="text-slate-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            {/* Correo electrónico */}
            <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
              <IconBox variant="yellow" size="md">
                <DynamicIcon name="envelope" size={18} />
              </IconBox>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">
                  Correo Electrónico
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-slate-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  {company.email}
                </a>
              </div>
            </div>

            {/* Emergencias */}
            <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-5 rounded-2xl">
              <IconBox variant="yellow" size="md">
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

        {/* Columna del Formulario (7 de 12 columnas en pantallas lg) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre completo"
                className="w-full p-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm sm:text-base bg-slate-50/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm sm:text-base bg-slate-50/50"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Teléfono móvil"
                className="w-full p-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm sm:text-base bg-slate-50/50"
              />
            </div>

            <div>
              <label htmlFor="service" className="sr-only">Servicio solicitado</label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full p-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm sm:text-base bg-slate-50/50 cursor-pointer"
              >
                <option value="" disabled>
                  Seleccione el servicio requerido
                </option>
                {company.services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe brevemente tu requerimiento o urgencia..."
                rows={4}
                className="w-full p-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm sm:text-base bg-slate-50/50"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 font-semibold text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 font-semibold text-sm">
                {success}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-full py-4 text-slate-900"
            >
              {loading ? "Enviando solicitud..." : "Enviar Solicitud"}
            </Button>
          </form>
        </div>

      </div>
    </SectionContainer>
  );
}