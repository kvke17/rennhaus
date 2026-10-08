/**
 * RENNHAUS DESIGN SYSTEM TOKENS
 * Especialista Porsche · Santiago, Chile
 *
 * Directrices:
 * - Modo: Persuade / High-End German Precision Engineering
 * - Verificación de contraste WCAG AA (>4.5:1) en todos los pares de texto/superficie.
 * - Arquitectura Double-Bezel: radios concéntricos matemáticos para componentes de precisión.
 * - Criterio Emil Kowalski: movimiento con propósito, sub-300ms, transform/opacity only.
 * - Cero glows, cero degradados de fantasía, cero fuentes genéricas.
 */

export const tokens = {
  colors: {
    // Canvas & Superficies (Grafito & Carbón)
    canvas: {
      base: "#09090B",         // Fondo principal OLED profundo
      surface1: "#121216",     // Outer bezel / contenedores estructurales
      surface2: "#18181D",     // Inner core / tarjetas de servicio e interacción
      surfaceHover: "#22222A",   // Superficie activa en interacción
      elevated: "#2A2A33",     // Menús flotantes, tooltips, modales
    },

    // Bordes, biseles y tolerancias mecánicas
    borders: {
      subtle: "#1F1F27",       // Separadores estructurales de baja intensidad
      structural: "#26262F",   // Bordes de tarjeta y cotas técnicas
      active: "#383844",       // Borde en estado de foco o hover
      highlight: "rgba(255, 255, 255, 0.07)", // Reflejo especular superior (aluminio maquinado)
      highlightActive: "rgba(255, 255, 255, 0.14)",
    },

    // Escala tipográfica con ratio WCAG AA verificado
    text: {
      primary: "#EDEDF2",      // Titulares y datos clave (12.18:1 a 17.05:1 vs todos los fondos)
      secondary: "#9E9EA8",    // Explicaciones técnicas y subtítulos (5.35:1 a 7.49:1 vs todos los fondos)
      tertiary: "#8A8A95",     // Metadatos sobre canvas base, surface1, surface2 (4.62:1 a 5.83:1, pasa AA).
                               // REGLA: PROHIBIDO usar #8A8A95 sobre canvas.elevated (#2A2A33) porque da 4.16:1.
      tertiaryElevated: "#9898A2", // Metadatos exclusivo sobre canvas.elevated (4.97:1, pasa AA).
      inverse: "#09090B",      // Texto sobre botones sólidos de alto contraste
    },

    // Acento de ingeniería automotriz
    accent: {
      // Uso estrictamente decorativo (agujas, micropuntos, biseles gráficos, pinzas de freno)
      // NUNCA utilizar en texto o elementos que requieran lectura.
      carmineDecorative: "#C5222A",

      // Variante funcional para texto, badges de alerta o estados que deben leerse
      // (Ratio verificado: 4.74:1 en #22222A, 5.31:1 en #18181D, 5.98:1 en #09090B -> Cumple AA)
      carmineFunctional: "#F85158",

      // Tinte translúcido para fondos de badges o contenedores (sin glow)
      carmineSubtle: "rgba(197, 34, 42, 0.12)",
    },

    // Acentos neutros de precisión
    precision: {
      silver: "#E2E2E8",       // Metal pulido para botones primarios y marcadores
      lead: "#52525E",         // Gris plomo para cotas auxiliares
    },
  },

  // Escala tipográfica y pesos
  typography: {
    fonts: {
      display: "var(--font-space-grotesk), sans-serif",
      body: "var(--font-geist-sans), sans-serif",
      mono: "var(--font-geist-mono), monospace",
    },
    sizes: {
      xs: { size: "0.75rem", lineHeight: "1rem", tracking: "0.02em" },         // 12px
      sm: { size: "0.875rem", lineHeight: "1.25rem", tracking: "0.01em" },      // 14px
      base: { size: "1rem", lineHeight: "1.6rem", tracking: "0" },              // 16px
      lg: { size: "1.125rem", lineHeight: "1.75rem", tracking: "-0.01em" },     // 18px
      xl: { size: "1.25rem", lineHeight: "1.75rem", tracking: "-0.02em" },     // 20px
      "2xl": { size: "1.5rem", lineHeight: "2rem", tracking: "-0.025em" },     // 24px
      "3xl": { size: "1.875rem", lineHeight: "2.25rem", tracking: "-0.03em" },  // 30px
      "4xl": { size: "2.25rem", lineHeight: "2.5rem", tracking: "-0.035em" },   // 36px
      "5xl": { size: "3rem", lineHeight: "1.1", tracking: "-0.04em" },          // 48px
      "6xl": { size: "3.75rem", lineHeight: "1.05", tracking: "-0.045em" },     // 60px
      "7xl": { size: "4.5rem", lineHeight: "1.02", tracking: "-0.05em" },       // 72px
    },
  },

  // Geometría y arquitectura concéntrica (Double-Bezel)
  geometry: {
    radii: {
      none: "0px",
      sm: "6px",
      md: "10px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      pill: "9999px",
      // Arquitectura Double-Bezel matemática:
      bezelOuter: "32px",
      bezelInner: "24px",
      bezelPadding: "8px",
    },
  },

  // Espaciado macro y micro
  spacing: {
    sectionMobile: "4rem",     // py-16 para garantizar visualización sin scroll en 667px
    sectionTablet: "6rem",     // py-24
    sectionDesktop: "8rem",    // py-32
    sectionMacro: "10rem",     // py-40
    containerMax: "1360px",
  },

  // Sistema de movimiento (Criterio Emil Kowalski)
  motion: {
    durations: {
      instant: "0ms",
      tactile: "120ms",        // Feedback de pulsación (:active)
      fast: "180ms",           // Hovers de micro-interacción y selects
      standard: "240ms",       // Transiciones de tabs y expansión
      deliberate: "300ms",     // Modales y menús móviles
      ambient: "700ms",        // Scroll reveal de entrada
    },
    easings: {
      easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",        // Instantáneo y responsivo para entradas
      easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)",    // Desplazamiento orgánico
      spring: "cubic-bezier(0.32, 0.72, 0, 1)",        // Sensación física de mecanismo de precisión
      press: "cubic-bezier(0.4, 0, 0.2, 1)",           // Compresión física de botón
    },
    transforms: {
      activeScale: "scale(0.97)",    // Compresión táctil física al hacer click/tap
      enteringScale: "scale(0.96)",   // Entrada natural (nunca scale(0))
    },
  },
} as const;

export type DesignTokens = typeof tokens;
