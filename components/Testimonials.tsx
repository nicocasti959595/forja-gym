import { testimonials } from "@/lib/site";
import { Stars } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Testimonios"
          title="Lo que dicen"
          highlight="nuestros socios"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card flex h-full flex-col p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-surface-2 text-sm font-bold text-accent">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
