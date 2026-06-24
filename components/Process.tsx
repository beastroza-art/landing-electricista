import { process } from "@/data/process";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold uppercase text-sm tracking-widest">
            Nuestro Proceso
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Cómo Trabajamos
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Un proceso claro, rápido y transparente
            desde el primer contacto hasta la entrega.
          </p>
        </div>

        <div className="relative">

          {/* Línea horizontal */}
          <div className="
            hidden
            md:block
            absolute
            top-7
            left-20
            right-20
            border-t-2
            border-dashed
            border-slate-300
          "></div>

          <div className="grid md:grid-cols-4 gap-8">

            {process.map((item) => (
              <div
                key={item.step}
                className="
                  relative
                  bg-white
                  p-8
                  rounded-2xl
                  border
                  border-slate-200
                  shadow-sm
                  text-center
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition
                  duration-300
                  z-10
                "
              >
                <div className="
                  w-14
                  h-14
                  mx-auto
                  rounded-full
                  bg-yellow-400
                  text-slate-900
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  shadow-lg
                  mb-6
                ">
                  {item.step}
                </div>

                <h3 className="
                  text-xl
                  font-bold
                  text-slate-900
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-4
                  text-slate-500
                  leading-relaxed
                ">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}