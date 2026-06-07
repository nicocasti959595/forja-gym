import { site, waLink } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-12">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface-2 px-6 py-16 text-center md:px-16">
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div
            className="glow-accent left-1/4 top-0 h-60 w-60"
            style={{ background: "var(--color-accent)", opacity: 0.25 }}
          />
          <div
            className="glow-accent bottom-0 right-1/4 h-60 w-60"
            style={{ background: "var(--color-accent-2)", opacity: 0.2 }}
          />
          <div className="relative">
            <h2 className="display mx-auto max-w-3xl text-4xl text-white md:text-6xl">
              Tu primera clase es{" "}
              <span className="text-gradient">gratis</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Sin compromiso. Vení, conocé el lugar y entrená con nosotros. El
              primer paso es el más importante.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink(`Hola ${site.name}! Quiero reservar mi clase gratis.`)}
                target="_blank"
                rel="noopener"
                className="btn btn-primary text-base"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Reservar por WhatsApp
              </a>
              <a href="#planes" className="btn btn-ghost text-base">
                Ver planes
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
