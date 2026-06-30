import { testimonials, testimonialsContent } from "@/data/testimonials";
import Card from "./ui/Card";
import DynamicIcon from "./ui/DynamicIcon";
import SectionContainer from "./ui/SectionContainer";
import SectionHeader from "./ui/SectionHeader";

export default function Testimonials() {
  return (
    <SectionContainer id="testimonials" background="white">
      <SectionHeader
        tagline={testimonialsContent.tagline}
        title={testimonialsContent.title}
        description={testimonialsContent.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            borderVariant="default"
            hoverEffect={true}
            className="flex flex-col justify-between h-full"
          >
            {/* Stars & Text */}
            <div>
              <div className="flex gap-1 text-yellow-500 mb-5">
                {[...Array(5)].map((_, i) => (
                  <DynamicIcon key={i} name="star" size={16} />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
            </div>

            {/* Author details */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-yellow-400 flex items-center justify-center font-extrabold shadow-sm shrink-0">
                {testimonial.initials}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 leading-tight">
                  {testimonial.name}
                </h4>

                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <DynamicIcon name="check" className="text-green-600" size={10} />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}