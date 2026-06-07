import { plans, site, waLink } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Plans() {
  return (
    <section id="planes" className="relative py-24 md:py-32">
      <div
        className="glow-accent left-1/2 top-20 h-72 w-72 -translate-x-1/2"
        style={{ background: "var(--color-accent)", opacity: 0.18 }}
      />
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Planes"
          title="Elegí cómo querés"
          highlight="entrenar"
          subtitle="Sin permanencia, sin contratos, sin letra chica. Cambiá o pausá tu plan cuando quieras."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  plan.featured
                    ? "border-2 border-accent bg-surface-2 shadow-glow"
                    : "card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#08080a]">
                    Más elegido
                  </span>
                )}
                <h3 className="display text-2xl text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.blurb}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-lg text-muted">$</span>
                  <span className="display text-5xl text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-muted">{plan.period}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          plan.featured
                            ? "bg-accent text-[#08080a]"
                            : "bg-accent/15 text-accent"
                        }`}
                      >
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-white/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hola ${site.name}! Me interesa el plan ${plan.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className={`btn mt-8 w-full ${
                    plan.featured ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          ¿Empresa o grupo? Tenemos{" "}
          <a
            href={waLink(`Hola ${site.name}! Quiero info de planes corporativos.`)}
            target="_blank"
            rel="noopener"
            className="font-medium text-accent underline underline-offset-4"
          >
            planes corporativos
          </a>{" "}
          y pases de pareja.
        </p>
      </div>
    </section>
  );
}
