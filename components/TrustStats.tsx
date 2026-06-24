import { stats } from "@/data/stats";
import StatCard from "./StatCard";

export default function TrustStats() {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="text-center mb-14">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
            Nuestro Respaldo
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Números que Hablan por Nosotros
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            La confianza de nuestros clientes se refleja
            en cada proyecto realizado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}