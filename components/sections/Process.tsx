import { process, processContent } from "@/data/process";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Process() {
  return (
    <SectionContainer id="process" background="light">
      <SectionHeader
        tagline={processContent.tagline}
        title={processContent.title}
        description={processContent.description}
      />

      <div className="relative">
        {/* Línea de conexión para escritorio (oculta en móvil y tablet vertical, visible en lg) */}
        <div className="hidden lg:block absolute top-14 left-20 right-20 border-t-2 border-dashed border-slate-300 pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {process.map((item) => (
            <Card
              key={item.step}
              borderVariant="default"
              hoverEffect={true}
              className="text-center flex flex-col items-center h-full"
            >
              {/* Círculo indicador del Paso */}
              <div className="w-14 h-14 rounded-full bg-accent text-accent-text flex items-center justify-center text-xl font-extrabold shadow-md mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                {item.step}
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}