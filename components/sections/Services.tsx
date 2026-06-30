import { services, servicesContent } from "@/data/services";
import ServiceCard from "./ServiceCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  return (
    <SectionContainer id="services" background="light">
      <SectionHeader
        title={servicesContent.title}
        description={servicesContent.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            emergency={service.emergency}
          />
        ))}
      </div>
    </SectionContainer>
  );
}