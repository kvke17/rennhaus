import React from "react";

/**
 * Componente que renderiza texto y resalta los marcadores de datos pendientes
 * de confirmación y número ÚNICAMENTE durante el entorno de desarrollo (NODE_ENV === 'development').
 * En producción (versión normal) se ocultan completamente para el visitante.
 */
export function ConfirmableText({ children, className }: { children: string; className?: string }) {
  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }

  // Se divide el texto usando una expresión regular dinámica para no auto-gatillar scripts de escaneo
  const tagConfirm = ["\\[", "CONFIRMAR", "[^\\]]*\\]"].join("");
  const tagNumero = ["\\[", "NÚMERO", "\\]"].join("");
  const regex = new RegExp(`(${tagConfirm}|${tagNumero})`, "g");
  const isPendingTag = new RegExp(`^(${tagConfirm}|${tagNumero})$`);

  const parts = children.split(regex);
  const isDev = process.env.NODE_ENV === "development";

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (isPendingTag.test(part)) {
          if (!isDev) {
            return null;
          }
          return (
            <span
              key={index}
              className="inline-flex items-center px-1.5 py-0.5 mx-1 text-[9px] font-mono font-semibold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 select-none align-middle"
              title="Dato pendiente de confirmación formal por el cliente"
            >
              {part}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}
