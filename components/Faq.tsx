"use client";

import { useState } from "react";
import { faq, faqContent } from "@/data/faq";
import SectionContainer from "./ui/SectionContainer";
import SectionHeader from "./ui/SectionHeader";
import DynamicIcon from "./ui/DynamicIcon";
import Card from "./ui/Card";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer id="faq" background="light">
      <SectionHeader
        title={faqContent.title}
        description={faqContent.description}
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Card
              key={item.question}
              borderVariant={isOpen ? "highlight" : "default"}
              hoverEffect={false}
              className="p-0 sm:p-0 overflow-hidden" // Resets inner card padding for custom accordion spacing
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer outline-none focus:bg-slate-50 transition-colors select-none"
                aria-expanded={isOpen}
              >
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 pr-4">
                  {item.question}
                </h3>

                <div className="text-yellow-500 shrink-0">
                  <DynamicIcon name={isOpen ? "minus" : "plus"} size={14} />
                </div>
              </button>

              {/* Accordion Content with transition spacing */}
              <div
                className={`
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${isOpen ? "max-h-60 border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
                `}
              >
                <div className="p-6 bg-slate-50/50">
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}