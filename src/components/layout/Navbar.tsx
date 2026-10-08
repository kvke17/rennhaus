"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/Button";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidad", href: "#especialidad" },
  { label: "Proceso", href: "#proceso" },
  { label: "Modelos", href: "#modelos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto w-full pointer-events-auto">
        {/* Floating Glass Pill */}
        <nav
          aria-label="Navegación principal"
          className="w-full flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-full bg-[#121216]/85 backdrop-blur-xl border border-[#26262F] shadow-[0_8px_30px_rgb(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        >
          {/* Logo & Status Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="flex items-baseline gap-1.5 text-sm sm:text-base md:text-lg font-bold font-display tracking-tight text-[#EDEDF2] hover:text-white transition-colors duration-180"
            >
              <span>RENNHAUS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5222A]" aria-hidden="true" />
            </Link>

            <span className="hidden sm:inline-block w-px h-3.5 bg-[#26262F]" aria-hidden="true" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8A8A95] uppercase tracking-wider">
              <span>SCL</span>
              <span>·</span>
              <span>Especialista Porsche</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-[#9E9EA8] hover:text-[#EDEDF2] transition-colors duration-180 select-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action / WhatsApp Button */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button
                href={siteConfig.whatsapp.link}
                external
                size="sm"
                variant="primary"
                className="text-xs py-2 px-4"
              >
                Agendar
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#EDEDF2] hover:bg-[#18181D] active:scale-[0.97] transition-transform duration-120 border border-transparent focus:border-[#26262F]"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer (Accessible, interruptible CSS transition) */}
      <div
        className={`lg:hidden fixed inset-x-4 top-20 rounded-3xl bg-[#121216]/95 backdrop-blur-2xl border border-[#26262F] p-6 shadow-2xl transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1F1F27]">
            <span className="text-[11px] font-mono text-[#8A8A95] uppercase tracking-wider">
              Navegación
            </span>
            <span className="text-[11px] font-mono text-[#8A8A95]">
              Taller Independiente
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-display font-medium text-[#EDEDF2] hover:text-white py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1F1F27] flex flex-col gap-2">
            <Button
              href={siteConfig.whatsapp.link}
              external
              size="md"
              variant="primary"
              className="w-full justify-center"
            >
              Agendar por WhatsApp
            </Button>
            <p className="text-center text-[11px] text-[#8A8A95] font-mono mt-1">
              Atención presencial en Santiago previa cita
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
