import { disciplines } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Disciplines() {
  return (
    <section id="disciplinas" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Disciplinas"
          title="Encontrá tu"
          highlight="entrenamiento"
          subtitle="Ocho formas de moverte bajo un mismo techo. Combiná las que quieras: tu plan no tiene límites de disciplina."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 80}>
              <div className="card group relative h-full overflow-hidden p-6 transition-colors duration-300 hover:border-accent/60">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-colors group-hover:border-accent/50">
                  <Icon name={d.icon} />
                </div>
                <h3 className="display mt-5 text-xl text-white">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {d.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
