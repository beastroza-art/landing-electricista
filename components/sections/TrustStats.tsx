import { stats, statsContent } from "@/data/stats";
import StatCard from "./StatCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TrustStats() {
  return (
    <SectionContainer
      id="stats"
      background="dark"
      className="relative overflow-hidden"
    >
      {/* Fondo decorativo con rejilla */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeader
          tagline={statsContent.tagline}
          title={statsContent.title}
          description={statsContent.description}
          dark={true}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}