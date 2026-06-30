import { benefits, benefitsContent } from "@/data/benefits";
import Card from "./ui/Card";
import IconBox from "./ui/IconBox";
import DynamicIcon from "./ui/DynamicIcon";
import SectionContainer from "./ui/SectionContainer";
import SectionHeader from "./ui/SectionHeader";

export default function WhyChooseUs() {
  return (
    <SectionContainer id="why-choose-us" background="dark">
      <SectionHeader
        title={benefitsContent.title}
        description={benefitsContent.description}
        dark={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            borderVariant="dark"
            hoverEffect={true}
            className="flex flex-col h-full"
          >
            <IconBox variant="dark" size="md" className="mb-6">
              <DynamicIcon name={benefit.icon} size={20} />
            </IconBox>

            <h3 className="text-xl font-extrabold text-white">
              {benefit.title}
            </h3>

            <p className="mt-3 text-slate-400 leading-relaxed text-sm sm:text-base">
              {benefit.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}