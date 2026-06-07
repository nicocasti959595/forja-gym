"use client";

import { useState } from "react";
import { schedule, scheduleDays, site, waLink } from "@/lib/site";
import { Icon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Schedule() {
  const [day, setDay] = useState<string>(scheduleDays[0]);
  const classes = schedule[day] ?? [];

  return (
    <section id="horarios" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Horarios"
          title="La grilla de la"
          highlight="semana"
          subtitle="Más de 45 clases por semana. Elegí el día y sumate: con tu plan reservás desde la app en un toque."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {scheduleDays.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                day === d
                  ? "bg-accent text-[#08080a]"
                  : "border border-line text-muted hover:border-accent/50 hover:text-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {classes.map((c, i) => (
            <div
              key={`${day}-${i}`}
              className="card flex items-center gap-5 p-5 transition-colors hover:border-accent/50"
            >
              <div className="display flex w-16 shrink-0 flex-col items-center rounded-xl border border-line bg-surface-2 py-3 text-accent">
                <span className="text-lg leading-none">{c.time}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="display text-lg text-white">{c.name}</h3>
                <p className="text-sm text-muted">con {c.coach}</p>
              </div>
              <Icon name="arrow" className="h-5 w-5 text-muted" />
            </div>
          ))}
          {classes.length === 0 && (
            <p className="text-muted">No hay clases programadas para este día.</p>
          )}
        </div>

        <p className="mt-8 text-sm text-muted">
          ¿Querés la grilla completa con todos los turnos?{" "}
          <a
            href={waLink(`Hola ${site.name}! ¿Me pasan la grilla completa de clases?`)}
            target="_blank"
            rel="noopener"
            className="font-medium text-accent underline underline-offset-4"
          >
            Te la enviamos por WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
