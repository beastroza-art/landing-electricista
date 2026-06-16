import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6">

        <h3 className="text-xl font-bold">
          {company.name}
        </h3>

        <p className="mt-2">
          {company.slogan}
        </p>

        <div className="mt-4 space-y-2">
          <p>📞 {company.phone}</p>
          <p>✉️ {company.email}</p>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-sm text-gray-400">
          © 2026 {company.name}. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}