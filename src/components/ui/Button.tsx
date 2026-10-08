"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  icon = true,
  className = "",
  external = false,
  type = "button",
}: ButtonProps) {
  const isUnconfiguredWhatsApp = href === "#whatsapp-no-configurado";

  const handleClick = (e: React.MouseEvent) => {
    if (isUnconfiguredWhatsApp) {
      e.preventDefault();
      alert(
        "Aviso: El número de WhatsApp está pendiente de configurar en src/data/config.ts. Ingrese el número real para habilitar el enlace directo a wa.me."
      );
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  const baseStyles =
    "group inline-flex items-center justify-center font-medium rounded-full select-none outline-none transition-[transform,background-color,border-color] duration-180 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]";

  const sizeStyles = {
    sm: "text-xs py-2 px-4 gap-2 min-h-[36px]",
    md: "text-sm py-2.5 px-5 gap-2.5 min-h-[44px]",
    lg: "text-sm md:text-base py-3 px-6 gap-3 min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-[#EDEDF2] text-[#09090B] hover:bg-white border border-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]",
    secondary:
      "bg-[#18181D] text-[#EDEDF2] hover:bg-[#22222A] border border-[#26262F] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
    ghost:
      "bg-transparent text-[#EDEDF2] hover:bg-[#18181D] border border-transparent",
  };

  const iconCircleStyles = {
    primary:
      "w-5 h-5 rounded-full bg-[#09090B]/10 flex items-center justify-center text-[#09090B] transition-transform duration-180 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    secondary:
      "w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#EDEDF2] transition-transform duration-180 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    ghost:
      "w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[#EDEDF2] transition-transform duration-180 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  };

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {icon && (
        <span className={iconCircleStyles[variant]}>
          <ArrowUpRight size={12} weight="bold" />
        </span>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external && !isUnconfiguredWhatsApp) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={handleClick} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={combinedClasses}>
      {content}
    </button>
  );
}
