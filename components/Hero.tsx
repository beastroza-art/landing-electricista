export default function Hero() {
  return (
    <section className="bg-yellow-400 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold">
            Electricista Profesional 24/7
          </h1>

          <p className="mt-6 text-xl">
            Instalaciones eléctricas, mantenciones
            y emergencias para hogares y empresas.
          </p>

          <button className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg">
            Solicitar Presupuesto
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800"
            alt="Electricista trabajando"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}