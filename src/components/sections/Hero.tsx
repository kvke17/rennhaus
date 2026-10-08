import React from "react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, CalendarCheck, Wrench } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-5 sm:pb-8 px-4 sm:px-6 overflow-hidden border-b border-[#1F1F27]">
      {/* 
        ========================================================================
        ASSET SLOT: FONDO TÉCNICO ABSTRACTO (INGENIERÍA Y METROLOGÍA)
        Totalmente abstracto: retícula milimétrica, cotas de tolerancia y ejes de coordenadas.
        Sin formas de vehículos ni siluetas de modelos registrados.
        Reemplazar el contenedor con la fotografía real o video loop 4K del taller Rennhaus.
        Ruta recomendada: /public/images/hero-workshop.webp
        ========================================================================
      */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden max-w-full" 
        aria-hidden="true"
      >
        {/* Gradiente radial de atmósfera técnica oscura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(24,24,29,0.9)_0%,#09090B_75%)]" />

        {/* Retícula milimétrica de ingeniería */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#EDEDF2 1px, transparent 1px), linear-gradient(90deg, #EDEDF2 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Diagrama de Metrología y Tolerancias Mecánicas (100% Abstracto) */}
        <svg
          className="absolute right-0 bottom-[10%] md:bottom-[6%] w-[90%] md:w-[55%] max-w-[760px] opacity-[0.14] text-[#EDEDF2]"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ejes principales ortogonales */}
          <line x1="80" y1="200" x2="720" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="400" y1="40" x2="400" y2="360" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />

          {/* Círculos concéntricos de tolerancia geométrica */}
          <circle cx="400" cy="200" r="160" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="400" cy="200" r="110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="400" cy="200" r="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="400" cy="200" r="4" fill="#C5222A" />

          {/* Escalas vernier / marcas angulares */}
          <line x1="240" y1="192" x2="240" y2="208" stroke="currentColor" strokeWidth="1.2" />
          <line x1="320" y1="195" x2="320" y2="205" stroke="currentColor" strokeWidth="0.8" />
          <line x1="480" y1="195" x2="480" y2="205" stroke="currentColor" strokeWidth="0.8" />
          <line x1="560" y1="192" x2="560" y2="208" stroke="currentColor" strokeWidth="1.2" />

          {/* Puntos de medición técnica con acento carmín */}
          <circle cx="240" cy="200" r="3" fill="#C5222A" />
          <circle cx="560" cy="200" r="3" fill="#C5222A" />

          {/* Metadatos técnicos puramente abstractos (decorativos, sin tolerancias prometidas) */}
          <text x="415" y="195" fill="#8A8A95" fontSize="10" fontFamily="monospace" aria-hidden="true">
            SYS.REF // 00-GRID
          </text>
          <text x="245" y="222" fill="#8A8A95" fontSize="9" fontFamily="monospace" aria-hidden="true">
            REF // AXIS-L
          </text>
          <text x="565" y="222" fill="#8A8A95" fontSize="9" fontFamily="monospace" aria-hidden="true">
            REF // AXIS-R
          </text>
        </svg>

        {/* Viñeta perimetral para aislar contraste */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#09090B] via-[#09090B]/60 to-transparent" />
      </div>

      {/* Contenido principal del Hero (Garantizado sin scroll en 375x667 y 1440x900) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto flex flex-col justify-center">
        {/* Micro Eyebrow / Indicador de Especialización */}
        <div className="hero-stagger-1 mb-2.5 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181D]/90 border border-[#26262F] text-xs font-mono text-[#EDEDF2] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5222A]" aria-hidden="true" />
            <span className="tracking-wide">ESPECIALISTA PORSCHE</span>
            <span className="text-[#8A8A95]">·</span>
            <span className="text-[#8A8A95]">SANTIAGO</span>
          </div>
        </div>

        {/* Titular Principal (Máximo 2 líneas desktop, conciso y de alto impacto) */}
        <h1 className="hero-stagger-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#EDEDF2] leading-[1.08] max-w-[18ch] mb-2.5 sm:mb-4">
          Mecánica de precisión para su Porsche.
        </h1>

        {/* Subtítulo Técnico (Corto, <20 palabras, tono formal chileno sin exageraciones) */}
        <p className="hero-stagger-3 text-xs sm:text-sm md:text-base text-[#9E9EA8] leading-relaxed max-w-[44ch] mb-5 sm:mb-7">
          Mantención programada, diagnóstico computarizado y reparación especializada según especificaciones del fabricante.
        </p>

        {/* Grupo de Acciones / Conversión Directa a WhatsApp */}
        <div className="hero-stagger-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 max-w-md">
          <Button
            href={siteConfig.whatsapp.link}
            external
            size="lg"
            variant="primary"
            className="w-full sm:w-auto shadow-lg"
          >
            Agendar por WhatsApp
          </Button>

          <Button
            href="#servicios"
            size="lg"
            variant="secondary"
            icon={false}
            className="w-full sm:w-auto text-[#9E9EA8] hover:text-[#EDEDF2]"
          >
            Ver Servicios
          </Button>
        </div>

        {/* Respaldo Técnico y Modalidad */}
        <div className="hero-stagger-5 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2.5 sm:gap-x-6 sm:gap-y-2 lg:gap-x-8 mt-5 md:mt-8 pt-4 sm:pt-5 border-t border-[#1F1F27]/80 text-[10.5px] sm:text-[11px] font-mono text-[#8A8A95]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#EDEDF2] shrink-0" weight="bold" />
            <span>Pautas de servicio según fabricante</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench size={16} className="text-[#EDEDF2] shrink-0" weight="bold" />
            <span>Diagnóstico e intervención especializada</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <CalendarCheck size={16} className="text-[#EDEDF2] shrink-0" weight="bold" />
            <span>Atención presencial previa agenda</span>
          </div>
        </div>
      </div>

      {/* Barra Inferior / Alcance Técnico */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-[10.5px] font-mono text-[#8A8A95] border-t border-[#1F1F27]">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="text-[#EDEDF2] font-semibold">MODELOS:</span>
          <span>ESPECIALIZACIÓN EN GAMA DEPORTIVA Y SUV DE LA MARCA</span>
        </div>
        <div className="hidden sm:block shrink-0">
          <span>SANTIAGO DE CHILE</span>
        </div>
      </div>
    </section>
  );
}
