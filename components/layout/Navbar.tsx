"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import DynamicIcon from "@/components/ui/DynamicIcon";
import Logo from "@/components/layout/Logo";

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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="focus:outline-none"
          >
            <Logo />
          </a>

          {/* Menú Desktop (Solo visible en LG y superiores para evitar clipping en Tablets) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-slate-700 hover:text-accent focus:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden lg:flex">
            <Button
              href="#contact"
              variant="primary"
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Botón Menú Móvil (Burger - visible en móviles y tablets en vertical) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            <DynamicIcon name={isMenuOpen ? "x" : "menu"} size={24} />
          </button>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md absolute top-20 left-0 w-full shadow-lg transition-all duration-300 z-50">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-bold text-lg text-slate-800 hover:text-accent py-2 border-b border-slate-100 dark:text-slate-200 dark:border-slate-800 dark:hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                href="#contact"
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