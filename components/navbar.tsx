"use client";

import { useState } from "react";
import { company } from "@/data/company";
import Button from "./ui/Button";
import DynamicIcon from "./ui/DynamicIcon";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#process", label: "Proceso" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <DynamicIcon
                name={company.logo.icon}
                className="text-yellow-400"
                size={22}
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">
                {company.logo.primary}
                <span className="text-yellow-500">
                  {company.logo.highlight}
                </span>
              </h2>

              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                {company.logo.tagline}
              </p>
            </div>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-slate-700 hover:text-yellow-500 transition-colors focus:text-yellow-500 outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden md:flex">
            <Button
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Botón Menú Móvil (Burger) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
            aria-label="Toggle menu"
          >
            <DynamicIcon name={isMenuOpen ? "x" : "menu"} size={24} />
          </button>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md absolute top-20 left-0 w-full shadow-lg transition-all duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-bold text-lg text-slate-800 hover:text-yellow-500 py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
                onClick={closeMenu}
              >
                Solicitar Presupuesto
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}