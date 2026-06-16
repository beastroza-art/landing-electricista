import { faq } from "@/data/faq";

export default function Faq() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-6">
          {faq.map((item) => (
            <div
              key={item.question}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-bold text-lg">
                {item.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}