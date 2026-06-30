"use client";

import { useState } from "react";
import { faq, faqContent } from "@/data/faq";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import DynamicIcon from "@/components/ui/DynamicIcon";
import Card from "@/components/ui/Card";

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
          const buttonId = `faq-btn-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <Card
              key={item.question}
              borderVariant={isOpen ? "highlight" : "default"}
              hoverEffect={false}
              className="p-0 sm:p-0 overflow-hidden"
            >
              <button
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer outline-none focus:bg-slate-50 dark:focus:bg-slate-800/50 transition-colors select-none"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white pr-4">
                  {item.question}
                </h3>

                <div className="text-accent shrink-0">
                  <DynamicIcon name={isOpen ? "minus" : "plus"} size={14} />
                </div>
              </button>

              {/* Accordion Content with transition spacing and ARIA accessibility properties */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${isOpen ? "max-h-60 border-t border-slate-100 dark:border-slate-800/80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
                `}
              >
                <div className="p-6 bg-slate-50/50 dark:bg-slate-950/20">
                  <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
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