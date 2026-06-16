const testimonials = [
  {
    name: "Juan Pérez",
    text: "Excelente servicio, llegaron rápido y solucionaron el problema el mismo día.",
  },
  {
    name: "María González",
    text: "Muy profesionales y transparentes con el presupuesto.",
  },
  {
    name: "Carlos Rojas",
    text: "Instalaron toda la iluminación de mi casa de forma impecable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Lo Que Dicen Nuestros Clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="mt-4 text-gray-600">
                "{testimonial.text}"
              </p>

              <h3 className="mt-4 font-bold">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}