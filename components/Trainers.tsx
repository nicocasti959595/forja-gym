import { trainers } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Trainers() {
  return (
    <section id="profes" className="relative border-y border-line bg-surface/30 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="El equipo"
          title="Profes que te"
          highlight="bancan"
          subtitle="Certificados, apasionados y siempre cerca. No sos un número: te arman el plan y te siguen clase a clase."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <div className="card group h-full overflow-hidden p-6 text-center transition-colors hover:border-accent/50">
                <div
                  className={`mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${t.accent} text-2xl font-bold text-[#08080a] transition-transform duration-300 group-hover:scale-105`}
                >
                  {t.initials}
                </div>
                <h3 className="display mt-5 text-xl text-white">{t.name}</h3>
                <p className="mt-1 text-sm text-accent">{t.role}</p>
                <div className="mt-4 flex justify-center gap-2 text-muted">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:text-white">
                    <Icon name="instagram" className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
