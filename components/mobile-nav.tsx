"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="mobile-nav-panel" role="dialog" aria-modal="true">
          <nav aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/sobre-nos" onClick={() => setOpen(false)}>Sobre Nós</Link>
            <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
          </nav>
          <Link className="button primary mobile-nav-cta" href="/planos" onClick={() => setOpen(false)}>
            Ver planos <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
