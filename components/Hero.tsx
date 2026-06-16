import { company } from "@/data/company";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-yellow-400 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold">
            {company.slogan}
          </h1>

          <p className="mt-6 text-xl">
            Instalaciones eléctricas, mantenciones
            y emergencias para hogares y empresas.
          </p>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg"
          >
            Solicitar Presupuesto
          </a>
        </div>

        <div>
          <Image
            src="/images/electrician_hero.jpg"
            alt="Electricista profesional"
            width={600}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>



      </div>
    </section>
  );
}