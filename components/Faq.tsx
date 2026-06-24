"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faq } from "@/data/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Preguntas Frecuentes
          </h2>

          <p className="mt-4 text-slate-500">
            Resolvemos las dudas más comunes de nuestros clientes.
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  shadow-sm
                  overflow-hidden
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-6
                    text-left
                  "
                >
                  <h3 className="font-bold text-lg text-slate-900">
                    {item.question}
                  </h3>

                  <div className="text-yellow-500">
                    {isOpen ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}