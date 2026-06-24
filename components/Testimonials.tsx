import { testimonials } from "@/data/testimonials";
import { FaStar, FaCheck } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
            Testimonios
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es
            nuestro mayor respaldo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                bg-slate-50
                border
                border-slate-200
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition
                duration-300
                flex
                flex-col
                justify-between
              "
            >
              <div>

                <div className="flex gap-1 text-yellow-500 mb-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="
                  text-slate-600
                  italic
                  leading-relaxed
                ">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="
                mt-8
                pt-5
                border-t
                border-slate-200
                flex
                items-center
                gap-3
              ">
                <div className="
                  w-11
                  h-11
                  rounded-full
                  bg-slate-900
                  text-yellow-400
                  flex
                  items-center
                  justify-center
                  font-bold
                ">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <FaCheck className="text-green-500 text-xs" />

                    <span className="
                      text-xs
                      text-slate-500
                      uppercase
                      font-semibold
                    ">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}