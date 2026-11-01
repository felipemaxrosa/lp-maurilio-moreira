"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
};

/** Modal simples para exibir um documento/imagem em destaque. */
export function Lightbox({ open, onClose, src, alt }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-petroleo-900/85 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>
      <div onClick={(e) => e.stopPropagation()} className="relative max-h-[88vh] overflow-auto rounded-lg bg-white shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1600}
          className="h-auto max-h-[88vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}
