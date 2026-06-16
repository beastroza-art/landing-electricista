import { process } from "@/data/process";

export default function Process() {
    return (
        <section className="py-20 bg-slate-100">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Cómo Trabajamos
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    {process.map((item) => (
                        <div
                            key={item.step}
                            className="bg-white p-6 rounded-xl shadow text-center"
                        >
                            <div className="text-3xl font-bold text-yellow-500">
                                {item.step}
                            </div>

                            <h3 className="text-xl font-bold mt-4">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}