"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";
import { Icon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Honeypot: si el campo oculto viene completo, es un bot.
    if (data.get("company")) return;
    setSent(true);
  }

  const info = [
    { icon: "pin", label: site.address, href: `https://www.google.com/maps?q=${site.mapsQuery}` },
    { icon: "phone", label: site.phoneDisplay, href: `tel:+${site.whatsapp}` },
    { icon: "mail", label: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contacto"
          title="Vení a"
          highlight="entrenar"
          subtitle="Dejanos tus datos o escribinos por WhatsApp. Coordinamos tu clase de prueba gratis cuando te quede cómodo."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Info + map */}
          <div className="flex flex-col gap-6">
            <ul className="grid gap-3">
              {info.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener"
                    className="card flex items-center gap-4 p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                      <Icon name={it.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-white/90">{it.label}</span>
                  </a>
                </li>
              ))}
              <li className="card flex items-start gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  {site.hours.map((h) => (
                    <div key={h.d} className="flex justify-between gap-6 py-0.5">
                      <span className="text-muted">{h.d}</span>
                      <span className="text-white/90">{h.h}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Ubicación de FORJA Training Club"
                src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.3] contrast-[1.1]"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card p-7 sm:p-9">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="display mt-5 text-2xl text-white">
                  ¡Gracias, {form.name || "crack"}!
                </h3>
                <p className="mt-2 max-w-sm text-muted">
                  Recibimos tu mensaje. Te contactamos a la brevedad para
                  coordinar tu clase de prueba.
                </p>
                <a
                  href={waLink(
                    `Hola ${site.name}! Soy ${form.name || ""}. Quiero coordinar mi clase de prueba${
                      form.goal ? ` (objetivo: ${form.goal})` : ""
                    }.`
                  )}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary mt-7"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Seguir por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-muted">
                    Nombre y apellido
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-white outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-muted">
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="11 1234 5678"
                    className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-white outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="goal" className="mb-2 block text-sm text-muted">
                    ¿Cuál es tu objetivo?
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-white outline-none transition-colors focus:border-accent"
                  >
                    <option value="">Elegí una opción</option>
                    <option>Bajar de peso</option>
                    <option>Ganar masa muscular</option>
                    <option>Mejorar mi estado físico</option>
                    <option>Entrenar para una competencia</option>
                    <option>Solo probar</option>
                  </select>
                </div>

                {/* Honeypot anti-spam (oculto) */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                <button type="submit" className="btn btn-primary mt-1 w-full text-base">
                  Quiero mi clase de prueba
                  <Icon name="arrow" className="h-5 w-5" />
                </button>
                <p className="text-center text-xs text-muted">
                  Al enviar aceptás ser contactado por FORJA. Tus datos no se
                  comparten con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
