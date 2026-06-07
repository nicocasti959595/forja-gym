import Image from "next/image";
import { features, site, waLink } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1100&q=80"
              alt="Socios entrenando en FORJA"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
          </div>
          <div className="glass absolute -bottom-6 -right-4 w-52 rounded-2xl p-5 shadow-glow sm:-right-6">
            <div className="display text-4xl text-accent">600m²</div>
            <p className="mt-1 text-sm text-muted">
              de sala, clases y espacios de recuperación
            </p>
          </div>
          <div
            className="glow-accent -left-10 top-1/3 h-48 w-48"
            style={{ background: "var(--color-accent-2)", opacity: 0.25 }}
          />
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Por qué FORJA
          </span>
          <h2 className="display mt-4 text-4xl text-white md:text-5xl">
            No es un gimnasio.
            <br />
            Es tu <span className="text-gradient">segunda casa.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Desde 2013 acompañamos a más de 1.800 personas a sentirse mejor.
            Equipamiento de primer nivel, un equipo que te conoce y un ambiente
            donde todos —de principiantes a competidores— tienen su lugar.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm text-white/85">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink(`Hola ${site.name}! Quiero conocer las instalaciones.`)}
            target="_blank"
            rel="noopener"
            className="btn btn-primary mt-9"
          >
            Agendá tu visita
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
