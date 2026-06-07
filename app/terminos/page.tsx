import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio y los servicios de FORJA Training Club.",
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <LegalShell title="Términos y Condiciones" updated="7 de junio de 2026">
      <p>
        Estos términos regulan el uso del sitio web de {site.fullName} y la
        contratación de nuestros servicios. Al navegar el sitio o asociarte,
        aceptás estas condiciones.
      </p>

      <h2>1. Servicios</h2>
      <p>
        {site.fullName} ofrece acceso a instalaciones de gimnasio, clases
        grupales y asesoramiento físico según el plan contratado. Las imágenes y
        descripciones del sitio son de carácter ilustrativo.
      </p>

      <h2>2. Planes y pagos</h2>
      <ul>
        <li>Los planes se abonan por mes adelantado y no tienen permanencia.</li>
        <li>Los precios pueden actualizarse; se informará con antelación.</li>
        <li>
          La baja puede solicitarse en cualquier momento antes del próximo
          período de facturación.
        </li>
      </ul>

      <h2>3. Uso de las instalaciones</h2>
      <p>
        El socio se compromete a utilizar el equipamiento de forma responsable y
        a respetar las normas de convivencia y seguridad del establecimiento. Se
        recomienda contar con apto médico vigente.
      </p>

      <h2>4. Clase de prueba gratuita</h2>
      <p>
        La clase de prueba gratuita está sujeta a coordinación previa y
        disponibilidad. Es válida para nuevos visitantes y no acumulable con
        otras promociones.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        {site.fullName} no se responsabiliza por lesiones derivadas del uso
        inadecuado de las instalaciones o del incumplimiento de las indicaciones
        de nuestros profesores.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Por consultas sobre estos términos, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
