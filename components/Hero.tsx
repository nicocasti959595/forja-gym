import Image from "next/image";
import { Icon, Stars } from "./Icons";
import { site, waLink, disciplines } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="Sala de entrenamiento de FORJA Training Club"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/85 to-base" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/40 to-transparent" />
      </div>
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <div
        className="glow-accent -left-20 top-10 h-72 w-72"
        style={{ background: "var(--color-accent)" }}
      />
      <div
        className="glow-accent right-0 bottom-0 h-80 w-80"
        style={{ background: "var(--color-accent-2)", opacity: 0.35 }}
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Gimnasio premium · {site.city}
          </span>

          <h1 className="display mt-6 text-[clamp(3rem,9vw,7rem)] text-white">
            Forjá tu
            <br />
            <span className="text-gradient">mejor versión</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            +45 clases por semana, equipamiento de primer nivel y profesores que
            te conocen por tu nombre. Entrená sin permanencia y a tu ritmo, en el
            corazón de {site.city}.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(`Hola ${site.name}! Quiero probar una clase gratis.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-primary text-base"
            >
              Probá una clase gratis
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a href="#planes" className="btn btn-ghost text-base">
              Ver planes y precios
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-sm text-muted">
                <strong className="text-white">4,9</strong> · +600 reseñas
              </span>
            </div>
            <div className="h-8 w-px bg-line" />
            <p className="text-sm text-muted">
              <strong className="text-white">+1.800</strong> socios entrenando
              cada semana
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-line bg-base/60 py-4 backdrop-blur-sm">
        <div className="marquee">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span
              key={i}
              className="display flex items-center gap-3 text-xl text-white/30"
            >
              {d.name}
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
