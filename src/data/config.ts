/**
 * CONFIGURACIÓN CENTRAL DE MARCA Y CONTACTO - RENNHAUS
 *
 * NOTA: Los datos pendientes de confirmación directa por parte del taller
 * llevan el marcador correspondiente. No se han inventado datos ni certificaciones.
 */

export const siteConfig = {
  name: "Rennhaus",
  legalNotice: "Taller independiente especializado. No afiliado a Porsche AG ni a su red oficial de concesionarios.",
  tagline: "Taller especialista en Porsche",
  description:
    "Mantención programada, diagnóstico computarizado y mecánica de precisión para Porsche en Santiago de Chile. Trabajo riguroso según especificaciones del fabricante.",
  instagram: {
    handle: "@rennhaus.cl",
    url: "https://instagram.com/rennhaus.cl",
  },
  whatsapp: {
    // Ingrese el número telefónico internacional (ej: 56912345678)
    number: "[NÚMERO]",
    prefilledMessage: "Hola Rennhaus, me gustaría agendar una hora para la mantención de mi Porsche.",
    
    // Verifica si el número ha sido configurado con un valor real
    isConfigured(): boolean {
      const clean = this.number.replace(/\D/g, "");
      return clean.length >= 8 && clean !== "NUMERO";
    },

    // Generador de enlace seguro: si no está configurado, evita generar un enlace roto a wa.me
    getLink(customMessage?: string): string {
      const msg = customMessage || this.prefilledMessage;
      const encodedMsg = encodeURIComponent(msg);
      const cleanNumber = this.number.replace(/\D/g, "");
      
      if (this.isConfigured()) {
        return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
      }
      
      // Fallback seguro cuando aún no se configura el número real
      return "#whatsapp-no-configurado";
    },

    get link(): string {
      return this.getLink();
    },
  },
  location: {
    address: "[DIRECCIÓN, SANTIAGO, CHILE: CONFIRMAR]",
    schedule: "Lunes a Viernes: 08:30 a 18:30 hrs [CONFIRMAR]",
    region: "Santiago, Chile",
    city: "Santiago",
  },
} as const;
