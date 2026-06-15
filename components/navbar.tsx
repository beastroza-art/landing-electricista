export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          ElectricPro
        </h2>

        <ul className="flex gap-6">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}