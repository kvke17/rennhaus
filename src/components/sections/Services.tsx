import React from "react";
import { siteConfig } from "@/data/config";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import {
  Wrench,
  Cpu,
  Disc,
  Engine,
  Compass,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "mantencion-programada": <Wrench size={22} weight="bold" className="text-[#EDEDF2]" />,
  "diagnostico-electronico": <Cpu size={22} weight="bold" className="text-[#EDEDF2]" />,
  "frenos-suspension": <Disc size={22} weight="bold" className="text-[#EDEDF2]" />,
  "motor-transmision": <Engine size={22} weight="bold" className="text-[#EDEDF2]" />,
  "tren-delantero-geometria": <Compass size={22} weight="bold" className="text-[#EDEDF2]" />,
};

export function Services() {
  const featuredService = servicesData.find((s) => s.featured) || servicesData[0];
  const regularServices = servicesData.filter((s) => !s.featured);

  return (
    <section
      id="servicios"
      className="relative w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#09090B] border-b border-[#1F1F27]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Cabecera de Sección (Verticalmente apilada, concisa) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181D] border border-[#26262F] text-[11px] font-mono text-[#8A8A95] uppercase tracking-wider mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5222A]" aria-hidden="true" />
            <span>SERVICIOS ESPECIALIZADOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#EDEDF2] leading-[1.1] mb-4">
            Ingeniería aplicada a cada sistema de su Porsche.
          </h2>

          <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed max-w-[55ch]">
            Procedimientos metódicos ejecutados con instrumental especializado y repuestos según especificaciones del fabricante.
          </p>
        </div>

        {/* Layout Asimétrico: Servicio Destacado (Double-Bezel Hero Card) */}
        <div className="mb-6 sm:mb-8">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner p-6 sm:p-8 md:p-10 relative overflow-hidden">
              {/* Marca de agua técnica abstracta */}
              <div
                className="absolute right-6 top-6 text-[10px] font-mono text-[#8A8A95] opacity-40 select-none hidden sm:block"
                aria-hidden="true"
              >
                SYS.REF // {featuredService.code}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Columna Izquierda: Información Principal */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-[#22222A] border border-[#26262F] flex items-center justify-center">
                        {SERVICE_ICONS[featuredService.id]}
                      </div>
                      <span className="text-xs font-mono text-[#8A8A95] uppercase tracking-wider">
                        {featuredService.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#EDEDF2] mb-3">
                      {featuredService.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed mb-6">
                      {featuredService.description}
                    </p>
                  </div>

                  <div>
                    <Button
                      href={siteConfig.whatsapp.getLink(featuredService.whatsappMessage)}
                      external
                      size="md"
                      variant="primary"
                    >
                      Consultar pauta de mantención
                    </Button>
                  </div>
                </div>

                {/* Columna Derecha: Puntos de Control Técnico */}
                <div className="lg:col-span-6 rounded-2xl bg-[#121216] border border-[#26262F] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1F1F27]">
                    <span className="text-xs font-mono text-[#EDEDF2] font-medium uppercase tracking-wider">
                      Puntos Clave de Control
                    </span>
                    <span className="text-[10px] font-mono text-[#8A8A95]">
                      CHECKPOINT
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {featuredService.technicalPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          weight="bold"
                          className="text-[#EDEDF2] shrink-0 mt-0.5"
                        />
                        <span className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 border-t border-[#1F1F27] flex items-center justify-between text-[11px] font-mono text-[#8A8A95]">
                    <span>Registro de servicio</span>
                    <span className="text-[#EDEDF2]">VERIFICADO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grilla 2x2 Equilibrada para los 4 servicios complementarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularServices.map((service) => (
            <div
              key={service.id}
              className="group double-bezel-outer transition-colors duration-200"
            >
              <div className="double-bezel-inner p-6 sm:p-8 h-full flex flex-col justify-between transition-colors duration-200 group-hover:bg-[#1A1A20]">
                <div>
                  {/* Header de Tarjeta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#22222A] border border-[#26262F] flex items-center justify-center">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <span className="text-[10px] font-mono text-[#8A8A95]">
                      {service.code}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-[11px] font-mono text-[#8A8A95] uppercase tracking-wider block mb-1">
                      {service.category}
                    </span>
                    <h4 className="text-xl font-bold font-display tracking-tight text-[#EDEDF2] group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-sm text-[#9E9EA8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Especificaciones Técnicas */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-[#1F1F27]">
                    {service.technicalPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#9E9EA8]">
                        <span className="w-1 h-1 rounded-full bg-[#C5222A] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enlace a WhatsApp con feedback táctil active:scale-[0.97] */}
                <div className="pt-4 border-t border-[#1F1F27]/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8A8A95]">
                    Atención previa reserva
                  </span>

                  <a
                    href={siteConfig.whatsapp.getLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#EDEDF2] hover:text-white transition-all duration-120 active:scale-[0.97] group/link select-none outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded py-1 px-2.5 -mr-2 bg-[#22222A]/50 hover:bg-[#22222A] border border-[#26262F]"
                  >
                    <span>Consultar</span>
                    <ArrowRight
                      size={12}
                      weight="bold"
                      className="transition-transform duration-180 ease-out group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
