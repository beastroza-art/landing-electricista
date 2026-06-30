"use client";

import { useState } from "react";
import { company } from "@/data/company";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const newErrors: Record<string, string> = {};

    // Strict Field Validations
    if (!name) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!phone) {
      newErrors.phone = "El teléfono de contacto es obligatorio.";
    }

    if (!service) {
      newErrors.service = "Selecciona un servicio técnico.";
    }

    if (!message) {
      newErrors.message = "Escribe un breve mensaje describiendo tu necesidad.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear previous states
    setErrors({});
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess("¡Tu solicitud ha sido enviada con éxito! Te contactaremos a la brevedad.");
        event.currentTarget.reset();
      } else {
        setErrors({ general: result.message || "Hubo un error al enviar el formulario." });
      }
    } catch {
      setErrors({ general: "No se pudo conectar con el servidor. Inténtalo de nuevo más tarde." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl shadow-xl space-y-5 border border-slate-100 dark:border-slate-800"
      noValidate
    >
      <Input
        label="Nombre"
        name="name"
        type="text"
        placeholder="Nombre completo"
        srOnly={true}
        error={errors.name}
      />

      <Input
        label="Correo electrónico"
        name="email"
        type="email"
        placeholder="Correo electrónico"
        srOnly={true}
        error={errors.email}
      />

      <Input
        label="Teléfono"
        name="phone"
        type="tel"
        placeholder="Teléfono móvil"
        srOnly={true}
        error={errors.phone}
      />

      <Select
        label="Servicio"
        name="service"
        defaultValue=""
        srOnly={true}
        error={errors.service}
      >
        <option value="" disabled>
          Seleccione el servicio requerido
        </option>
        {company.services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>

      <Textarea
        label="Mensaje"
        name="message"
        placeholder="Describe brevemente tu requerimiento o urgencia..."
        srOnly={true}
        error={errors.message}
        rows={4}
      />

      {errors.general && (
        <div className="p-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl text-red-650 dark:text-red-400 font-semibold text-sm">
          {errors.general}
        </div>
      )}

      {success && (
        <div className="p-3.5 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-xl text-green-650 dark:text-green-400 font-semibold text-sm">
          {success}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={loading}
        className="w-full py-4"
      >
        {loading ? "Enviando solicitud..." : "Enviar Solicitud"}
      </Button>
    </form>
  );
}
