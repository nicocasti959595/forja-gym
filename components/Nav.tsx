"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { nav, site, waLink } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-line py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label={site.fullName}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-base font-black text-[#08080a]">
            F
          </span>
          <span className="display text-2xl tracking-tight text-white">
            {site.name}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={waLink(`Hola ${site.name}! Quiero probar una clase gratis.`)}
            target="_blank"
            rel="noopener"
            className="btn btn-primary !px-5 !py-2.5 text-sm"
          >
            Probá gratis
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="glass mt-3 border-t border-line md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={waLink(`Hola ${site.name}! Quiero probar una clase gratis.`)}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Probá gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
