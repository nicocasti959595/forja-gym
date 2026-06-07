import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    alt: "Sala de musculación de FORJA",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=700&q=80",
    alt: "Entrenamiento con kettlebells",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
    alt: "Clase grupal de funcional",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=700&q=80",
    alt: "Entrenamiento con mancuernas",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=700&q=80",
    alt: "Cardio y resistencia",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
    alt: "Zona de peso libre",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Las instalaciones"
          title="Mirá dónde vas a"
          highlight="entrenar"
          subtitle="Espacios amplios, luz natural y todo cuidado al detalle. Un lugar al que vas a tener ganas de volver."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] lg:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={(i % 4) * 70}
              className={`group relative overflow-hidden rounded-xl border border-line bg-surface-2 ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
